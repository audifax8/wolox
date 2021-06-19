import { IFormCommand } from '../interfaces';
import { FormGroup, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { InputStatus } from '../enums';
export class CommandInputState implements IFormCommand {
  private formGroupIntance: FormGroup;
  private controlName: string;
  private inputState: InputStatus;

  constructor(formGroupIntance: FormGroup, controlName: string, inputState: InputStatus) {
    this.formGroupIntance = formGroupIntance;
    this.controlName = controlName;
    this.inputState = inputState;
  }

  public execute() {
    const formControl = this.formGroupIntance.get(this.controlName) as FormControl;
    if (formControl) {
      if (this.inputState === InputStatus.Enabled) {
          formControl.enable();
      } else {
          formControl.disable();
     }
    }
  }
}

export class CommandValidationRule implements IFormCommand {
  private formGroupIntance: FormGroup;
  private controlName: string;
  private validationRules: ValidatorFn[];

  constructor(formGroupIntance: FormGroup, controlName: string, validationRules: ValidatorFn[]) {
      this.formGroupIntance = formGroupIntance;
      this.controlName = controlName;
      this.validationRules = validationRules;
  }

  public execute() {
      const inputForm = this.formGroupIntance.get(this.controlName) as FormControl;
      if (inputForm) {
          if (this.validationRules) {
              inputForm.setValidators(this.validationRules);
          } else {
              inputForm.clearValidators();
          }
      }
  }
}

export class CommandInputValue implements IFormCommand {
  private formGroupIntance: FormGroup;
  private controlName: string;
  private inputValue: any;

  constructor(formGroupIntance: FormGroup, controlName: string, inputValue: any) {
      this.formGroupIntance = formGroupIntance;
      this.controlName = controlName;
      this.inputValue = inputValue;
  }

  public execute() {
      const inputForm = this.formGroupIntance.get(this.controlName) as FormControl;
      if (inputForm) {
          inputForm.setValue(this.inputValue);
      }
  }
}

export class EqualValidator {
  static validate(controlSourceName: string, controlTargetName: string): ValidatorFn {
    return (formGroup: AbstractControl): { [key: string]: boolean } | null => {
      const controlSourceValue = formGroup.get(controlSourceName).value;
      const controlTargetValue = formGroup.get(controlTargetName).value;
      if (controlSourceValue !== controlTargetValue) {
        return { noEqual: true };
      }
      return null;
    };
  }
}