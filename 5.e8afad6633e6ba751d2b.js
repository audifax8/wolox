(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{x5bZ:function(t,e,r){"use strict";r.r(e),r.d(e,"RegisterModule",function(){return O});var o=r("ofXK"),s=r("tyNb"),n=r("fXoL"),a=r("3Pt+"),i=r("Edqf");class m{constructor(t,e,r){this.formGroupIntance=t,this.controlName=e,this.inputState=r}execute(){const t=this.formGroupIntance.get(this.controlName);t&&(this.inputState===i.e.Enabled?t.enable():t.disable())}}class c{constructor(t,e,r){this.formGroupIntance=t,this.controlName=e,this.validationRules=r}execute(){const t=this.formGroupIntance.get(this.controlName);t&&(this.validationRules?t.setValidators(this.validationRules):t.clearValidators())}}class d{constructor(t,e,r){this.formGroupIntance=t,this.controlName=e,this.inputValue=r}execute(){const t=this.formGroupIntance.get(this.controlName);t&&t.setValue(this.inputValue)}}let l=(()=>{class t{constructor(){this.commandList=[]}addCommand(t){this.commandList=this.commandList.concat(t)}executeCommands(){this.commandList.forEach(t=>{t.execute()}),this.commandList=[]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=r("xDUJ"),p=r("2Vo4"),b=r("tk/3");let h=(()=>{class t{constructor(t){this.http=t,this.httpStatus=new p.a(null),this.httpStatus$=this.httpStatus.asObservable()}post(t){this.httpStatus.next(i.d.Processing),this.http.post("http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup",t,{}).subscribe(t=>{this.httpStatus.next(i.d.Success),console.log(t)},t=>{this.httpStatus.next(i.d.Error),console.log(t)})}setStatusForm(t){this.httpStatus.next(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Sb(b.a))},t.\u0275prov=n.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=r("kgZg"),g=r("sYmb");function F(t,e){1&t&&(n.Ob(0,"div",13),n.Ob(1,"span"),n.lc(2),n.Yb(3,"translate"),n.Nb(),n.Nb()),2&t&&(n.zb(2),n.mc(n.Zb(3,1,"formErrors.passwordsNotMatch")))}function S(t,e){if(1&t){const t=n.Pb();n.Ob(0,"button",14),n.Vb("click",function(){return n.gc(t),n.Xb().loadDummyData()}),n.lc(1,"loadDummydata"),n.Nb()}}function v(t,e){if(1&t&&(n.Ob(0,"pre"),n.lc(1),n.Yb(2,"json"),n.Yb(3,"json"),n.Yb(4,"async"),n.Nb()),2&t){const t=n.Xb();n.zb(1),n.oc(" ",n.Zb(2,2,t.registerForm.value)," ",n.Zb(3,4,n.Zb(4,6,t.httpStatus$)),"")}}let C=(()=>{class t{constructor(t,e,r){this.commandS=t,this.formS=e,this.registerS=r,this.isDevMode=Object(n.U)(),this.FormInputsNames=i.b,this.InputType=i.f,this.countries=[{name:"Colombia",provinces:[{name:"Medell\xedn"},{name:"Bogot\xe1"},{name:"Cali"},{name:"Cartagena"},{name:"Barranquilla"}]},{name:"Argentina",provinces:[{name:"Buenos Aires"},{name:"Mendoza"},{name:"Belgrano"},{name:"C\xf3rdoba"},{name:"Col\xf3n"}]}]}ngOnInit(){this.initForm(),this.loadFormByState(i.c.Default),this.registerForm.valueChanges.subscribe(()=>this.registerS.setStatusForm(i.d.Pending)),this.subscription=this.formS.getOnChangeObserver(i.b.country,this.registerForm).subscribe(t=>{t&&(this.commandS.addCommand(new d(this.registerForm,i.b.province,null)),this.commandS.addCommand(new m(this.registerForm,i.b.province,i.e.Enabled)),this.commandS.executeCommands())}),this.httpStatus$=this.registerS.httpStatus$}ngOnDestroy(){this.subscription.unsubscribe()}initForm(){this.registerForm=new a.e({});const t=new a.c,e=new a.c,r=new a.c,o=new a.c,s=new a.c,n=new a.c,m=new a.c,c=new a.c;this.registerForm.addControl(i.b.firstName,t),this.registerForm.addControl(i.b.lastName,e),this.registerForm.addControl(i.b.phone,r),this.registerForm.addControl(i.b.country,o),this.registerForm.addControl(i.b.province,s),this.registerForm.addControl(i.b.email,n),this.registerForm.addControl(i.b.password,m),this.registerForm.addControl(i.b.passwordConfirm,c)}isInvalid(t){return this.formS.isTouchedOrDirtyAndInvalid(this.registerForm,t)}loadFormByState(t){this.loadValidationRulesFromState(t),this.loadInputStateFromState(t),this.registerS.setStatusForm(i.d.Clean),this.formS.updateValueAndValidity(this.registerForm),this.commandS.executeCommands()}loadValidationRulesFromState(t){t===i.c.Default&&(this.commandS.addCommand(new c(this.registerForm,i.b.firstName,[a.l.required,a.l.maxLength(30)])),this.commandS.addCommand(new c(this.registerForm,i.b.lastName,[a.l.required,a.l.maxLength(30)])),this.commandS.addCommand(new c(this.registerForm,i.b.phone,[a.l.required,a.l.maxLength(10)])),this.commandS.addCommand(new c(this.registerForm,i.b.country,[a.l.required])),this.commandS.addCommand(new c(this.registerForm,i.b.province,[a.l.required])),this.commandS.addCommand(new c(this.registerForm,i.b.email,[a.l.required,a.l.email])),this.commandS.addCommand(new c(this.registerForm,i.b.password,[a.l.required,a.l.pattern(w),a.l.minLength(6)])),this.commandS.addCommand(new c(this.registerForm,i.b.passwordConfirm,[a.l.required,a.l.pattern(w),a.l.minLength(6)])),this.registerForm.setValidators(class{static validate(t,e){return r=>r.get(t).value!==r.get(e).value?{noEqual:!0}:null}}.validate(i.b.password,i.b.passwordConfirm)))}getFormControl(t){return this.formS.getFormControl(t,this.registerForm)}loadInputStateFromState(t){t===i.c.Default&&this.commandS.addCommand(new m(this.registerForm,i.b.province,i.e.Disabled))}getProvincesByCountry(t){return t?this.countries.find(e=>e.name===t).provinces:[]}hasNoEqualPasswordsError(){const t=this.registerForm.errors;return!!t&&t.noEqual}onSubmit(){this.registerForm.invalid?this.formS.markAsTouchedAndMarkAsDirty(this.registerForm):this.registerS.post(this.registerForm.value)}onReset(){this.formS.reset(this.registerForm),this.loadFormByState(i.c.Default),this.registerS.setStatusForm(i.d.Clean)}loadDummyData(){this.isDevMode&&(this.commandS.addCommand(new m(this.registerForm,i.b.province,i.e.Enabled)),this.commandS.addCommand(new d(this.registerForm,i.b.firstName,"Joe")),this.commandS.addCommand(new d(this.registerForm,i.b.lastName,"Doe")),this.commandS.addCommand(new d(this.registerForm,i.b.phone,47468900)),this.commandS.addCommand(new d(this.registerForm,i.b.email,"joe.doe@gmail.com")),this.commandS.addCommand(new d(this.registerForm,i.b.password,"Grymow8@")),this.commandS.addCommand(new d(this.registerForm,i.b.passwordConfirm,"Grymow8@")),this.formS.updateValueAndValidity(this.registerForm),this.commandS.executeCommands(),this.registerS.setStatusForm(i.d.Pending))}}return t.\u0275fac=function(e){return new(e||t)(n.Jb(l),n.Jb(u.a),n.Jb(h))},t.\u0275cmp=n.Db({type:t,selectors:[["app-container"]],decls:32,vars:63,consts:[[1,"container"],[1,"form",3,"ngClass"],[3,"formGroup"],[3,"inputType","formGroup","formName","label"],[3,"inputType","formGroup","formName","label","selectOptions"],["class","form-feedback form-group-invalid",4,"ngIf"],[1,"buttons-section"],[1,"button-submit"],["type","submit",1,"button",3,"click"],[1,"button-reset"],[1,"button",3,"click"],[3,"click",4,"ngIf"],[4,"ngIf"],[1,"form-feedback","form-group-invalid"],[3,"click"]],template:function(t,e){1&t&&(n.Ob(0,"div",0),n.Ob(1,"div",1),n.Yb(2,"async"),n.Ob(3,"form",2),n.Kb(4,"app-form-input",3),n.Yb(5,"translate"),n.Kb(6,"app-form-input",3),n.Yb(7,"translate"),n.Kb(8,"app-form-input",3),n.Yb(9,"translate"),n.Kb(10,"app-form-input",3),n.Yb(11,"translate"),n.Kb(12,"app-form-input",4),n.Yb(13,"translate"),n.Kb(14,"app-form-input",4),n.Yb(15,"translate"),n.Kb(16,"app-form-input",3),n.Yb(17,"translate"),n.Kb(18,"app-form-input",3),n.Yb(19,"translate"),n.jc(20,F,4,3,"div",5),n.Ob(21,"div",6),n.Ob(22,"div",7),n.Ob(23,"button",8),n.Vb("click",function(){return e.onSubmit()}),n.lc(24),n.Yb(25,"translate"),n.Nb(),n.Nb(),n.Ob(26,"div",9),n.Ob(27,"button",10),n.Vb("click",function(){return e.onReset()}),n.lc(28),n.Yb(29,"translate"),n.Nb(),n.Nb(),n.jc(30,S,2,0,"button",11),n.Nb(),n.Nb(),n.Nb(),n.Nb(),n.jc(31,v,5,8,"pre",12)),2&t&&(n.zb(1),n.ac("ngClass",n.Zb(2,41,e.httpStatus$)),n.zb(2),n.ac("formGroup",e.registerForm),n.zb(1),n.ac("inputType",e.InputType.Text)("formGroup",e.registerForm)("formName",e.FormInputsNames.firstName)("label",n.Zb(5,43,"form.firstName")),n.zb(2),n.ac("inputType",e.InputType.Text)("formGroup",e.registerForm)("formName",e.FormInputsNames.lastName)("label",n.Zb(7,45,"form.lastName")),n.zb(2),n.ac("inputType",e.InputType.Email)("formGroup",e.registerForm)("formName",e.FormInputsNames.email)("label",n.Zb(9,47,"form.email")),n.zb(2),n.ac("inputType",e.InputType.Number)("formGroup",e.registerForm)("formName",e.FormInputsNames.phone)("label",n.Zb(11,49,"form.phone")),n.zb(2),n.ac("inputType",e.InputType.Select)("formGroup",e.registerForm)("formName",e.FormInputsNames.country)("label",n.Zb(13,51,"form.country"))("selectOptions",e.countries),n.zb(2),n.ac("inputType",e.InputType.Select)("formGroup",e.registerForm)("formName",e.FormInputsNames.province)("label",n.Zb(15,53,"form.province"))("selectOptions",e.getProvincesByCountry(e.registerForm.value.country)),n.zb(2),n.ac("inputType",e.InputType.Password)("formGroup",e.registerForm)("formName",e.FormInputsNames.password)("label",n.Zb(17,55,"form.password")),n.zb(2),n.ac("inputType",e.InputType.Password)("formGroup",e.registerForm)("formName",e.FormInputsNames.passwordConfirm)("label",n.Zb(19,57,"form.passwordConfirm")),n.zb(2),n.ac("ngIf",e.hasNoEqualPasswordsError()),n.zb(4),n.mc(n.Zb(25,59,"buttons.save")),n.zb(4),n.mc(n.Zb(29,61,"buttons.clear")),n.zb(2),n.ac("ngIf",e.isDevMode),n.zb(1),n.ac("ngIf",e.isDevMode))},directives:[o.j,a.n,a.h,a.f,f.a,o.l],pipes:[o.b,g.c,o.f],styles:[".http-form-clean[_ngcontent-%COMP%]{border:3px solid var(--clean-color)}.http-form-error[_ngcontent-%COMP%]{border:3px solid var(--error-color)}.http-form-success[_ngcontent-%COMP%]{border:3px solid var(--success-color)}.http-form-processing[_ngcontent-%COMP%]{border:3px solid var(--processing-color)}.http-form-pending[_ngcontent-%COMP%]{border:3px solid var(--pending-color)}form[_ngcontent-%COMP%]{padding:50px}"]}),t})();const w=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;var y=r("PCNd");const N=[o.c,a.j,b.b,s.b.forChild([{path:"",component:C}]),g.b.forChild(),y.a],I=[];let O=(()=>{class t{}return t.\u0275mod=n.Hb({type:t}),t.\u0275inj=n.Gb({factory:function(e){return new(e||t)},providers:[...I],imports:[[...N]]}),t})()}}]);