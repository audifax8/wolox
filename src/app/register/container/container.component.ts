import { Component, OnDestroy, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputStatus, InputType, FormState, FormInputsNames, HttpStatus } from '../../enums';
import { CommandInputState, CommandValidationRule, CommandInputValue, EqualValidator } from '../../models';
import { CommadService } from '../../shared/services/commad.service';
import { FormService } from '../../shared/services/form.service';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {

  public isDevMode = isDevMode();

  public registerForm: FormGroup;

  public FormInputsNames = FormInputsNames;

  public InputType = InputType;

  private subscription;

  public httpStatus$;

  public countries = [
    {
      name: 'Colombia',
      provinces: [
        { name: 'Medellín' },
        { name: 'Bogotá' },
        { name: 'Cali' },
        { name: 'Cartagena' },
        { name: 'Barranquilla' }
      ]
    },
    {
      name: 'Argentina',
      provinces: [
        { name: 'Buenos Aires' },
        { name: 'Mendoza' },
        { name: 'Belgrano' },
        { name: 'Córdoba' },
        { name: 'Colón' }
      ]
    }
  ];
  constructor(
    private readonly commandS: CommadService,
    public readonly formS: FormService,
    private readonly registerS: RegisterService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadFormByState(FormState.Default);
    this.registerForm.valueChanges.subscribe(() => this.registerS.setStatusForm(HttpStatus.Pending));
    this.subscription = this.formS.getOnChangeObserver(FormInputsNames.country, this.registerForm).subscribe(
      (value) => {
        if(value) {
          this.commandS.addCommand(new CommandInputValue(this.registerForm, FormInputsNames.province, null));
          this.commandS.addCommand(new CommandInputState(this.registerForm, FormInputsNames.province, InputStatus.Enabled));
          this.commandS.executeCommands();
        }
      }
    );
    this.httpStatus$ = this.registerS.httpStatus$;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm(): void {
    this.registerForm = new FormGroup({});
    const firstName = new FormControl();
    const lastName = new FormControl();
    const phone = new FormControl();
    const country = new FormControl();
    const departament = new FormControl();
    const email = new FormControl();
    const password = new FormControl();
    const passwordConfirm = new FormControl();
    this.registerForm.addControl(FormInputsNames.firstName, firstName);
    this.registerForm.addControl(FormInputsNames.lastName, lastName);
    this.registerForm.addControl(FormInputsNames.phone, phone);
    this.registerForm.addControl(FormInputsNames.country, country);
    this.registerForm.addControl(FormInputsNames.province, departament);
    this.registerForm.addControl(FormInputsNames.email, email);
    this.registerForm.addControl(FormInputsNames.password, password);
    this.registerForm.addControl(FormInputsNames.passwordConfirm, passwordConfirm);
  }

  public isInvalid(formControlName: FormInputsNames): boolean {
    return this.formS.isTouchedOrDirtyAndInvalid(this.registerForm, formControlName);
  }

  public loadFormByState(state: FormState): void {
    this.loadValidationRulesFromState(state);
    this.loadInputStateFromState(state);
    this.registerS.setStatusForm(HttpStatus.Clean);
    this.formS.updateValueAndValidity(this.registerForm);
    this.commandS.executeCommands();
  }

  private loadValidationRulesFromState(state: FormState): void {
    if (state === FormState.Default) {
      this.commandS.addCommand(new CommandValidationRule(this.registerForm, FormInputsNames.firstName, [Validators.required, Validators.maxLength(30)]));
      this.commandS.addCommand(new CommandValidationRule(this.registerForm, FormInputsNames.lastName, [Validators.required, Validators.maxLength(30)]));
      this.commandS.addCommand(new CommandValidationRule(this.registerForm, FormInputsNames.phone, [Validators.required,  Validators.maxLength(10)]));
      this.commandS.addCommand(new CommandValidationRule(this.registerForm, FormInputsNames.country, [Validators.required]));
      this.commandS.addCommand(new CommandValidationRule(this.registerForm, FormInputsNames.province, [Validators.required]));
      this.commandS.addCommand(new CommandValidationRule(
        this.registerForm,
        FormInputsNames.email,
        [Validators.required, Validators.email]
      ));
      this.commandS.addCommand(new CommandValidationRule(
        this.registerForm,
        FormInputsNames.password,
        [Validators.required, Validators.pattern(REGEX_PASSWORD), Validators.minLength(6)]
      ));
      this.commandS.addCommand(new CommandValidationRule(
        this.registerForm,
        FormInputsNames.passwordConfirm,
        [Validators.required, Validators.pattern(REGEX_PASSWORD), Validators.minLength(6)]));

      this.registerForm.setValidators(EqualValidator.validate(FormInputsNames.password, FormInputsNames.passwordConfirm));
    }
  }

  public getFormControl(formControlName: FormInputsNames): FormControl {
    const formControl = this.formS.getFormControl(formControlName, this.registerForm);
    return formControl;
  }

  private loadInputStateFromState(state: FormState): void {
    if (state === FormState.Default) {
      this.commandS.addCommand(new CommandInputState(this.registerForm, FormInputsNames.province, InputStatus.Disabled));
    }
  }

  public getProvincesByCountry(countryName): Array<any> {
    return (countryName) ? this.countries.find(country => country.name === countryName).provinces: [];
  }

  public hasNoEqualPasswordsError(): boolean {
    const errors = this.registerForm.errors;
    return (errors) ? errors['noEqual'] : false;
  }

  public onSubmit() {
    if(this.registerForm.invalid) {
      this.formS.markAsTouchedAndMarkAsDirty(this.registerForm);
      return;
    }
    const formData = this.registerForm.value;
    this.registerS.post(formData);
  }

  public onReset() {
    this.formS.reset(this.registerForm);
    this.loadFormByState(FormState.Default);
    this.registerS.setStatusForm(HttpStatus.Clean)
  }

  public loadDummyData() {
    if (this.isDevMode) {
      this.commandS.addCommand(new CommandInputState(this.registerForm, FormInputsNames.province, InputStatus.Enabled));
      this.commandS.addCommand(new CommandInputValue(this.registerForm, FormInputsNames.firstName, 'Joe'));
      this.commandS.addCommand(new CommandInputValue(this.registerForm, FormInputsNames.lastName, 'Doe'));
      this.commandS.addCommand(new CommandInputValue(this.registerForm, FormInputsNames.phone, 47468900));
      this.commandS.addCommand(new CommandInputValue(this.registerForm, FormInputsNames.email, 'joe.doe@gmail.com'));
      this.commandS.addCommand(new CommandInputValue(this.registerForm, FormInputsNames.password, 'Grymow8@'));
      this.commandS.addCommand(new CommandInputValue(this.registerForm, FormInputsNames.passwordConfirm, 'Grymow8@'));
      this.formS.updateValueAndValidity(this.registerForm);
      this.commandS.executeCommands();
      this.registerS.setStatusForm(HttpStatus.Pending);
    }
  }

}

const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
