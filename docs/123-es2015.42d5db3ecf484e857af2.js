(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{Lqyo:function(e,t,n){"use strict";n.r(t),n.d(t,"FormFieldModule",(function(){return w}));var a=n("ofXK"),l=n("3Pt+"),m=n("bSwM"),r=n("bTqV"),o=n("qFsG"),i=n("kmnG"),d=n("QibW"),p=n("d3UM"),c=n("5RNC"),u=n("1jcm"),s=n("Wp6s"),f=n("xHqg"),S=n("jaxi"),E=n("A5z7"),h=n("NFeN"),v=n("Pc/E"),x=n("tyNb"),g=n("fXoL"),b=n("NVKa"),y=n("FKr1");function M(e,t){if(1&e&&(g["\u0275\u0275elementStart"](0,"mat-error"),g["\u0275\u0275text"](1),g["\u0275\u0275elementEnd"]()),2&e){const e=g["\u0275\u0275nextContext"]();g["\u0275\u0275advance"](1),g["\u0275\u0275textInterpolate"](e.getErrorMessage())}}const C=[{path:"",component:(()=>{class e{constructor(e){this.heading="Form Fields",this.subheading="This component is used to wrap several Angular Material components and apply common form fields styles.",this.icon="pe-7s-diamond icon-gradient bg-warm-flame",this.email=new l.FormControl("",[l.Validators.required,l.Validators.email]),this.options=e.group({hideRequired:!1,floatLabel:"auto"})}getErrorMessage(){return this.email.hasError("required")?"You must enter a value":this.email.hasError("email")?"Not a valid email":""}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(g["\u0275\u0275directiveInject"](l.FormBuilder))},e.\u0275cmp=g["\u0275\u0275defineComponent"]({type:e,selectors:[["app-form-field"]],decls:118,vars:12,consts:[[3,"heading","subheading","icon"],[1,"row"],[1,"col-md-6"],[1,"card","main-card","mb-3"],[1,"card-header"],[1,"card-body"],[1,"example-container"],["matInput","","placeholder","Input"],["matInput","","placeholder","Textarea"],["placeholder","Select"],["value","option"],[1,"example-container",3,"formGroup"],["formControlName","hideRequired"],["formControlName","floatLabel"],["value","auto"],["value","always"],["value","never"],[3,"hideRequiredMarker","floatLabel"],["matInput","","placeholder","Simple placeholder","required",""],[3,"floatLabel"],["matInput","","placeholder","Simple placeholder"],["required",""],["hintLabel","Max 10 characters"],["matInput","","maxlength","10","placeholder","Enter some input"],["input",""],["align","end"],["placeholder","Select me"],["matInput","","placeholder","Enter your email","required","",3,"formControl"],[4,"ngIf"],["appearance","legacy"],["matInput","","placeholder","Placeholder"],["matSuffix",""],["appearance","standard"],["appearance","fill"],["appearance","outline"]],template:function(e,t){if(1&e&&(g["\u0275\u0275element"](0,"app-page-title",0),g["\u0275\u0275elementStart"](1,"div",1),g["\u0275\u0275elementStart"](2,"div",2),g["\u0275\u0275elementStart"](3,"div",3),g["\u0275\u0275elementStart"](4,"div",4),g["\u0275\u0275text"](5," Basic "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](6,"div",5),g["\u0275\u0275elementStart"](7,"div",6),g["\u0275\u0275elementStart"](8,"mat-form-field"),g["\u0275\u0275element"](9,"input",7),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](10,"mat-form-field"),g["\u0275\u0275element"](11,"textarea",8),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](12,"mat-form-field"),g["\u0275\u0275elementStart"](13,"mat-select",9),g["\u0275\u0275elementStart"](14,"mat-option",10),g["\u0275\u0275text"](15,"Option"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](16,"div",3),g["\u0275\u0275elementStart"](17,"div",4),g["\u0275\u0275text"](18," Form field with label "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](19,"div",5),g["\u0275\u0275elementStart"](20,"div",6),g["\u0275\u0275elementStart"](21,"form",11),g["\u0275\u0275elementStart"](22,"mat-checkbox",12),g["\u0275\u0275text"](23,"Hide required marker"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](24,"div"),g["\u0275\u0275elementStart"](25,"label"),g["\u0275\u0275text"](26,"Float label: "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](27,"mat-radio-group",13),g["\u0275\u0275elementStart"](28,"mat-radio-button",14),g["\u0275\u0275text"](29,"Auto"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](30,"mat-radio-button",15),g["\u0275\u0275text"](31,"Always"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](32,"mat-radio-button",16),g["\u0275\u0275text"](33,"Never"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](34,"mat-form-field",17),g["\u0275\u0275element"](35,"input",18),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](36,"mat-form-field",19),g["\u0275\u0275elementStart"](37,"mat-label"),g["\u0275\u0275text"](38,"Both a label and a placeholder"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](39,"input",20),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](40,"mat-form-field",17),g["\u0275\u0275elementStart"](41,"mat-select",21),g["\u0275\u0275elementStart"](42,"mat-option"),g["\u0275\u0275text"](43,"-- None --"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](44,"mat-option",10),g["\u0275\u0275text"](45,"Option"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](46,"mat-placeholder"),g["\u0275\u0275elementStart"](47,"mat-icon"),g["\u0275\u0275text"](48,"favorite"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](49,"b"),g["\u0275\u0275text"](50," Fancy"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](51,"i"),g["\u0275\u0275text"](52," placeholder"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](53,"div",3),g["\u0275\u0275elementStart"](54,"div",4),g["\u0275\u0275text"](55," Form field with hints "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](56,"div",5),g["\u0275\u0275elementStart"](57,"div",6),g["\u0275\u0275elementStart"](58,"mat-form-field",22),g["\u0275\u0275element"](59,"input",23,24),g["\u0275\u0275elementStart"](61,"mat-hint",25),g["\u0275\u0275text"](62),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](63,"mat-form-field"),g["\u0275\u0275elementStart"](64,"mat-select",26),g["\u0275\u0275elementStart"](65,"mat-option",10),g["\u0275\u0275text"](66,"Option"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](67,"mat-hint",25),g["\u0275\u0275text"](68,"Here's the dropdown arrow ^"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](69,"div",2),g["\u0275\u0275elementStart"](70,"div",3),g["\u0275\u0275elementStart"](71,"div",4),g["\u0275\u0275text"](72," Form field with error messages "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](73,"div",5),g["\u0275\u0275elementStart"](74,"div",6),g["\u0275\u0275elementStart"](75,"mat-form-field"),g["\u0275\u0275element"](76,"input",27),g["\u0275\u0275template"](77,M,2,1,"mat-error",28),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](78,"div",3),g["\u0275\u0275elementStart"](79,"div",4),g["\u0275\u0275text"](80," Form field appearance variants "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](81,"div",5),g["\u0275\u0275elementStart"](82,"p"),g["\u0275\u0275elementStart"](83,"mat-form-field",29),g["\u0275\u0275elementStart"](84,"mat-label"),g["\u0275\u0275text"](85,"Legacy form field"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](86,"input",30),g["\u0275\u0275elementStart"](87,"mat-icon",31),g["\u0275\u0275text"](88,"sentiment_very_satisfied"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](89,"mat-hint"),g["\u0275\u0275text"](90,"Hint"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](91,"p"),g["\u0275\u0275elementStart"](92,"mat-form-field",32),g["\u0275\u0275elementStart"](93,"mat-label"),g["\u0275\u0275text"](94,"Standard form field"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](95,"input",30),g["\u0275\u0275elementStart"](96,"mat-icon",31),g["\u0275\u0275text"](97,"sentiment_very_satisfied"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](98,"mat-hint"),g["\u0275\u0275text"](99,"Hint"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](100,"p"),g["\u0275\u0275elementStart"](101,"mat-form-field",33),g["\u0275\u0275elementStart"](102,"mat-label"),g["\u0275\u0275text"](103,"Fill form field"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](104,"input",30),g["\u0275\u0275elementStart"](105,"mat-icon",31),g["\u0275\u0275text"](106,"sentiment_very_satisfied"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](107,"mat-hint"),g["\u0275\u0275text"](108,"Hint"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](109,"p"),g["\u0275\u0275elementStart"](110,"mat-form-field",34),g["\u0275\u0275elementStart"](111,"mat-label"),g["\u0275\u0275text"](112,"Outline form field"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](113,"input",30),g["\u0275\u0275elementStart"](114,"mat-icon",31),g["\u0275\u0275text"](115,"sentiment_very_satisfied"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](116,"mat-hint"),g["\u0275\u0275text"](117,"Hint"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e){const e=g["\u0275\u0275reference"](60);g["\u0275\u0275property"]("heading",t.heading)("subheading",t.subheading)("icon",t.icon),g["\u0275\u0275advance"](21),g["\u0275\u0275property"]("formGroup",t.options),g["\u0275\u0275advance"](13),g["\u0275\u0275property"]("hideRequiredMarker",t.options.value.hideRequired)("floatLabel",t.options.value.floatLabel),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("floatLabel",t.options.value.floatLabel),g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("hideRequiredMarker",t.options.value.hideRequired)("floatLabel",t.options.value.floatLabel),g["\u0275\u0275advance"](22),g["\u0275\u0275textInterpolate1"]("",(null==e.value?null:e.value.length)||0,"/10"),g["\u0275\u0275advance"](14),g["\u0275\u0275property"]("formControl",t.email),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngIf",t.email.invalid)}},directives:[b.a,i.c,o.b,p.a,y.o,l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,m.a,l.NgControlStatus,l.FormControlName,d.b,d.a,i.g,i.h,h.a,i.f,l.DefaultValueAccessor,l.RequiredValidator,l.FormControlDirective,a.NgIf,i.j,i.b],styles:[".example-container[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n    }\n\n    .example-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n      margin: 5px 0;\n    }\n\n    .example-container[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] {\n      margin: 0 5px;\n    }"]}),e})(),data:{title:"FormField"}}];let F=(()=>{class e{}return e.\u0275mod=g["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[x.i.forChild(C)],x.i]}),e})(),w=(()=>{class e{}return e.\u0275mod=g["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.CommonModule,F,l.FormsModule,l.ReactiveFormsModule,m.b,m.b,r.c,o.c,i.e,d.c,p.b,c.b,u.b,s.g,f.d,S.c,E.e,h.b,v.a]]}),e})()}}]);