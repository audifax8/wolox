export enum LangName {
  Spanish = 'es',
  English = 'en'
}

export enum TechnologyType {
  Front = 'Front-End',
  Back = 'Back-End',
  Mobile = 'Mobile'
}

export enum InputStatus {
  Enabled = 1,
  Disabled = 2,
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  Select = 'select'
}

export enum FormInputError {
  Required = 'required',
  MaxLenght = 'maxlength',
  MinLenght = 'minlength'
}

export enum FormInputsNames {
  firstName = 'firstName',
  lastName = 'lastName',
  country = 'country',
  province = 'province',
  email = 'email',
  phone = 'phone',
  password = 'password',
  passwordConfirm = 'passwordConfirm'
}

export enum FormState {
  Default = 'Default'
}

export enum HttpStatus {
  Clean = 'http-form-clean',
  Pending = 'http-form-pending',
  Error = 'http-form-error',
  Success = 'http-form-success',
  Processing = 'http-form-processing'
}