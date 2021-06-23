import { Component, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';
import { CommadService } from '../../shared/services/commad.service';
import { FormInputsNames, FormState, InputType } from '../../enums';
import { CommandValidationRule, CommandInputValue } from '../../models';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public loginForm: FormGroup;

  public FormInputsNames = FormInputsNames;

  public InputType = InputType;

  public isDevMode = isDevMode();

  constructor(
    public readonly formS: FormService,
    private readonly commandS: CommadService,
    public readonly loginS: LoginService,
    private readonly routerS: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadFormByState(FormState.Default);
  }

  private initForm(): void {
    this.loginForm = new FormGroup({});
    const email = new FormControl();
    const password = new FormControl();
    this.loginForm.addControl(FormInputsNames.email, email);
    this.loginForm.addControl(FormInputsNames.password, password);
  }

  public loadFormByState(state: FormState): void {
    this.loadValidationRulesFromState(state);
    this.formS.updateValueAndValidity(this.loginForm);
    this.commandS.executeCommands();
  }

  private loadValidationRulesFromState(state: FormState): void {
    if (state === FormState.Default) {
      this.commandS.addCommand(new CommandValidationRule(
        this.loginForm,
        FormInputsNames.email,
        [Validators.required, Validators.email]
      ));
      this.commandS.addCommand(new CommandValidationRule(
        this.loginForm,
        FormInputsNames.password,
        //[Validators.required, Validators.pattern(REGEX_PASSWORD), Validators.minLength(6)]
        [Validators.required, Validators.minLength(6)]
      ));
    }
  }

  public onSubmit() {
    if(this.loginForm.invalid) {
      this.formS.markAsTouchedAndMarkAsDirty(this.loginForm);
      return;
    }
    const formData = this.loginForm.value;
    this.loginS.post(formData).then(
      (success: any) => {
        this.loginS.saveToken(success.token);
        alert('success');
        this.routerS.navigate(['/technologies']);
      }
    ).catch(
      err => {
        console.log(err);
        alert(err);
      }
    );
  }

  public onReset() {
    this.formS.reset(this.loginForm);
    this.loadFormByState(FormState.Default);
  }

  public loadDummyData() {
    if (this.isDevMode) {
      this.commandS.addCommand(new CommandInputValue(this.loginForm, FormInputsNames.email, 'user@wolox.com.ar'));
      this.commandS.addCommand(new CommandInputValue(this.loginForm, FormInputsNames.password, 12345678));
      this.formS.updateValueAndValidity(this.loginForm);
      this.commandS.executeCommands();
    }
  }

}

const REGEX_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
