import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FormService } from '../../services/form.service';
import { InputType, FormInputError } from '.././../../enums';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent {

  @Input() label: string;
  @Input() formControl: FormControl;
  @Input() formGroup: FormGroup;
  @Input() formName: string;
  @Input() inputType: InputType;

  @Input() selectOptions: Array<any>

  public InputType = InputType;

  constructor(
    public readonly formS: FormService,
    private readonly translateS: TranslateService
  ) { }

  public getFormControl(): FormControl {
    return this.formS.getFormControl(this.formName, this.formGroup);
  }

  public isInvalid(): boolean {
    return this.formS.isTouchedOrDirtyAndInvalid(this.formGroup, this.formName);
  }

  public getFormError(): Observable<string> {
    let e, errorParams: any = {};
    const formError = this.getFormControl().errors;
    Object.keys(formError).map(error => {
      e = error;
      if (error === FormInputError.MaxLenght) {
        const { actualLength, requiredLength } = formError[error];
        errorParams.maxLength = requiredLength;
        errorParams.currentLength = actualLength;
      } else if (error === FormInputError.MinLenght) {
        const { actualLength, requiredLength } = formError[error];
        errorParams.minLength = requiredLength;
        errorParams.currentLength = actualLength;
      }
    });
    return this.translateS.get(`formErrors.${e}`, errorParams);
  }

  public isDisabled(): boolean {
    return this.formS.isDisabled(this.formGroup, this.formName);
  }

}
