!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}(self.webpackChunkbdp_client=self.webpackChunkbdp_client||[]).push([[157],{88484:function(t,i,r){"use strict";r.d(i,{wT:function(){return m},a:function(){return Z}});var n=r(37716),a=r(38583),o=r(25917),c=r(26215);r(3679);var u=new n.OlP("recaptcha-language"),l=new n.OlP("recaptcha-base-url"),h=new n.OlP("recaptcha-nonce-tag"),g=new n.OlP("recaptcha-settings"),d=new n.OlP("recaptcha-v3-site-key"),p=function(){var t=function(){function t(s,i,r,n,c){e(this,t),this.platformId=s,this.language=i,this.baseUrl=r,this.nonce=n,this.v3SiteKey=c,this.init(),this.ready=(0,a.NF)(this.platformId)?t.ready.asObservable():(0,o.of)()}return s(t,[{key:"init",value:function(){if(!t.ready&&(0,a.NF)(this.platformId)){var e=new c.X(null);t.ready=e,function(t,s,i,r,n){window.ng2recaptchaloaded=function(){!function(t){e.next(t)}(grecaptcha)};var a=document.createElement("script");a.innerHTML="",a.src="".concat(r||"https://www.google.com/recaptcha/api.js","?render=").concat(t,"&onload=ng2recaptchaloaded").concat(i),n&&(a.nonce=n),a.async=!0,a.defer=!0,document.head.appendChild(a)}(this.v3SiteKey||"explicit",0,this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.LFG(n.Lbi),n.LFG(u,8),n.LFG(l,8),n.LFG(h,8),n.LFG(d,8))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t.ready=null,t}(),f=0,m=function(){var t=function(){function t(s,i,r,a){e(this,t),this.elementRef=s,this.loader=i,this.zone=r,this.id="ngrecaptcha-"+f++,this.errorMode="default",this.resolved=new n.vpe,this.error=new n.vpe,a&&(this.siteKey=a.siteKey,this.theme=a.theme,this.type=a.type,this.size=a.size,this.badge=a.badge)}return s(t,[{key:"ngAfterViewInit",value:function(){var e=this;this.subscription=this.loader.ready.subscribe(function(t){null!=t&&t.render instanceof Function&&(e.grecaptcha=t,e.renderRecaptcha())})}},{key:"ngOnDestroy",value:function(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()}},{key:"execute",value:function(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)}},{key:"reset",value:function(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())}},{key:"__unsafe_widgetValue",get:function(){return null!=this.widget?this.grecaptcha.getResponse(this.widget):null}},{key:"expired",value:function(){this.resolved.emit(null)}},{key:"errored",value:function(e){this.error.emit(e)}},{key:"captchaResponseCallback",value:function(e){this.resolved.emit(e)}},{key:"grecaptchaReset",value:function(){var e=this;null!=this.widget&&this.zone.runOutsideAngular(function(){return e.grecaptcha.reset(e.widget)})}},{key:"renderRecaptcha",value:function(){var e=this,t={badge:this.badge,callback:function(t){e.zone.run(function(){return e.captchaResponseCallback(t)})},"expired-callback":function(){e.zone.run(function(){return e.expired()})},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type};"handled"===this.errorMode&&(t["error-callback"]=function(){for(var t=arguments.length,s=new Array(t),i=0;i<t;i++)s[i]=arguments[i];e.zone.run(function(){return e.errored(s)})}),this.widget=this.grecaptcha.render(this.elementRef.nativeElement,t),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())}}]),t}();return t.\u0275fac=function(e){return new(e||t)(n.Y36(n.SBq),n.Y36(p),n.Y36(n.R0b),n.Y36(g,8))},t.\u0275cmp=n.Xpm({type:t,selectors:[["re-captcha"]],hostVars:1,hostBindings:function(e,t){2&e&&n.uIk("id",t.id)},inputs:{id:"id",errorMode:"errorMode",siteKey:"siteKey",theme:"theme",type:"type",size:"size",badge:"badge",tabIndex:"tabIndex"},outputs:{resolved:"resolved",error:"error"},exportAs:["reCaptcha"],decls:0,vars:0,template:function(e,t){},encapsulation:2}),t}(),v=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({}),t}(),Z=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[p],imports:[[v]]}),t}()},82157:function(t,i,r){"use strict";r.r(i),r.d(i,{UserModule:function(){return ye}});var n=r(3679),a=r(38583),o=r(88484),c=r(51095),u=r(76627),l=r(49983),h=r(58846),g=r(37716),d=r(89876),p=r(43037),f=r(15128),m=r(98295);function v(e,t){if(1&e&&(g.TgZ(0,"li",33),g._uU(1),g.qZA()),2&e){var s=t.$implicit;g.xp6(1),g.Oqu(s)}}function Z(e,t){if(1&e&&(g.TgZ(0,"div"),g.YNc(1,v,2,1,"li",32),g.qZA()),2&e){var s=g.oxw(2);g.xp6(1),g.Q6J("ngForOf",s.formValidator.email.errMsgs)}}function w(e,t){if(1&e&&(g.TgZ(0,"li",33),g._uU(1),g.qZA()),2&e){var s=t.$implicit;g.xp6(1),g.Oqu(s)}}function b(e,t){if(1&e&&(g.TgZ(0,"div"),g.YNc(1,w,2,1,"li",32),g.qZA()),2&e){var s=g.oxw(2);g.xp6(1),g.Q6J("ngForOf",s.formValidator.passwd.errMsgs)}}function x(e,t){1&e&&(g.TgZ(0,"span",37),g._uU(1,"Please click the above button."),g.qZA())}function C(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"div",34),g.TgZ(1,"re-captcha",35),g.NdJ("resolved",function(e){return g.CHM(s),g.oxw(2).handleCorrectCaptcha(e)}),g.qZA(),g.YNc(2,x,2,0,"span",36),g.qZA()}if(2&e){var i=g.oxw(2);g.xp6(1),g.Q6J("siteKey",i.reCaptchaSiteKey),g.xp6(1),g.Q6J("ngIf",i.isChecking&&!i._viewControls.isRecaptchaClicked)}}function y(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"form",10,11),g.NdJ("ngSubmit",function(){return g.CHM(s),g.oxw().onSubmit()}),g.TgZ(2,"div",12),g.TgZ(3,"label",13),g._uU(4,"Email"),g.qZA(),g.TgZ(5,"div",14),g.TgZ(6,"mat-form-field",15),g.TgZ(7,"input",16,17),g.NdJ("ngModelChange",function(e){return g.CHM(s),g.oxw().theUser.email=e})("keyup",function(){return g.CHM(s),g.oxw().formValidator.email.presetErrs=[]}),g.qZA(),g.qZA(),g.YNc(9,Z,2,1,"div",9),g.qZA(),g.qZA(),g.TgZ(10,"div",12),g.TgZ(11,"label",18),g._uU(12,"Password"),g.qZA(),g.TgZ(13,"div",14),g.TgZ(14,"mat-form-field",15),g.TgZ(15,"input",19,17),g.NdJ("ngModelChange",function(e){return g.CHM(s),g.oxw().theUser.passwd=e})("keyup",function(){return g.CHM(s),g.oxw().formValidator.passwd.presetErrs=[]}),g.qZA(),g.qZA(),g.YNc(17,b,2,1,"div",9),g.qZA(),g.qZA(),g.YNc(18,C,3,2,"div",20),g.TgZ(19,"div",21),g.TgZ(20,"div",22),g.TgZ(21,"button",23),g._uU(22,"Sign In"),g.qZA(),g.qZA(),g.TgZ(23,"div",22),g.TgZ(24,"button",24),g.NdJ("click",function(){return g.CHM(s),g.oxw().resetForm()}),g._uU(25,"Reset"),g.qZA(),g.qZA(),g.qZA(),g._UZ(26,"div",25),g.TgZ(27,"div",26),g.TgZ(28,"span",27),g._uU(29,"or"),g.qZA(),g.qZA(),g.TgZ(30,"div",28),g.TgZ(31,"button",29),g.NdJ("click",function(e){return g.CHM(s),g.oxw().gotoAuth(e,"Google")}),g._UZ(32,"span",30),g._uU(33," Google "),g.qZA(),g.qZA(),g._UZ(34,"div",31),g.qZA()}if(2&e){var i=g.oxw();g.xp6(2),g.Q6J("ngClass",i.validEmail()),g.xp6(5),g.Q6J("ngModel",i.theUser.email),g.xp6(2),g.Q6J("ngIf",i.isChecking),g.xp6(1),g.Q6J("ngClass",i.validPasswd()),g.xp6(5),g.Q6J("ngModel",i.theUser.passwd),g.xp6(2),g.Q6J("ngIf",i.isChecking&&i.isPasswdChecking),g.xp6(1),g.Q6J("ngIf",i.reCaptchaSiteKey),g.xp6(13),g.Q6J("disabled",!i.googleClientID)}}function k(e,t){1&e&&(g.TgZ(0,"div"),g.TgZ(1,"h3"),g._uU(2,"We are now signing you in..."),g.qZA(),g.qZA())}var A=function(){return["/home"]},T=function(){var t=function(){function t(s,i,r,n){e(this,t),this.userService=s,this.router=i,this.infoService=r,this.systemService=n,this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]}},this.isSubmitted=!1,this.cssError={"has-success":!1,"has-error":!0},this.cssHidden={"has-success":!1,"has-error":!1},this.cssSuccess={"has-success":!0,"has-error":!1},this.theUser={email:"",passwd:""},this.isChecking=!1,this.isPasswdChecking=!1,this._viewControls={isRecaptchaClicked:!1},this._subs=[]}return s(t,[{key:"ngOnInit",value:function(){var e=this;this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.userService.isSignedIn&&this.router.navigate(["/project/list"]),this._subs.push(this.userService.currentUser$.subscribe(function(t){t.isLoggedIn&&e.router.navigate(["/project/list"])})),this._subs.push(this.systemService.sysInfo$.subscribe(function(t){t&&(e.reCaptchaSiteKey=t.reCaptchaSiteKey,e.googleClientID=t.googleClientID)}))}},{key:"validEmail",value:function(){var e=this.formValidator.email,t=new RegExp('^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs);return t.test(this.theUser.email)||e.errMsgs.push("Please check your email format."),this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden}},{key:"validPasswd",value:function(){var e=this.formValidator.passwd,t=this.theUser.passwd&&this.theUser.passwd.length?this.theUser.passwd.length:0;return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),(t<8||t>64)&&e.errMsgs.push("This password must be between 8 and 64 characters"),0===t&&e.errMsgs.push("Cannot be empty"),this.isChecking&&this.isPasswdChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden}},{key:"handleCorrectCaptcha",value:function(e){this.recaptchaResponse=e}},{key:"onSubmit",value:function(){var e=this;this.isChecking=!1,this.isPasswdChecking=!1,(this.validEmail()||this.validPasswd())&&(this.isChecking=!0,this.isPasswdChecking=!0,this._viewControls.isRecaptchaClicked=!!this.recaptchaResponse,0===this.formValidator.email.errMsgs.length&&0===this.formValidator.passwd.errMsgs.length&&(this.reCaptchaSiteKey&&this.recaptchaResponse||!this.reCaptchaSiteKey)?(this._subs.push(this.userService.signIn(this.theUser.email,this.theUser.passwd,this.recaptchaResponse).subscribe(function(t){t.isError?(e.formValidator.email.presetErrs=[],e.formValidator.passwd.presetErrs=[],e.isSubmitted=!1,setTimeout(function(){return e.reCaptchaComponent&&e.reCaptchaComponent.reset()},0),e.isPasswdChecking=!1,e.theUser.passwd=""):(e.infoService.addMessage("11"),e.router.navigate([e.userService.redirectUrl?e.userService.redirectUrl:"/project/list"]))})),this.isSubmitted=!0):this.reCaptchaComponent&&this.reCaptchaComponent.reset&&this.reCaptchaComponent.reset())}},{key:"gotoAuth",value:function(e,t){e.preventDefault(),e.stopImmediatePropagation(),this.userService.oAuthSign(t)}},{key:"resetForm",value:function(){return this.theUser={email:"",passwd:""},this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]}},this.isChecking=!1,this.reCaptchaComponent&&this.reCaptchaComponent.reset()}},{key:"ngOnDestroy",value:function(){this._subs.forEach(function(e){return e.unsubscribe()})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(g.Y36(d.B),g.Y36(h.F0),g.Y36(p.C),g.Y36(f.o))},t.\u0275cmp=g.Xpm({type:t,selectors:[["user-login"]],viewQuery:function(e,t){var s;(1&e&&g.Gf(o.wT,5),2&e)&&(g.iGM(s=g.CRH())&&(t.reCaptchaComponent=s.first))},decls:17,vars:4,consts:[[1,"container-fluid"],["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"bdp-main-container"],[1,"chi-header"],["class","form col-md-12 center-block",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],[1,"form","col-md-12","center-block",3,"ngSubmit"],["userForm","ngForm"],[1,"form-group","row",3,"ngClass"],["for","email",1,"col-sm-2","control-label"],[1,"col-sm-10"],[2,"width","100%"],["matInput","","type","text","name","email","placeholder","What's your email address?",3,"ngModel","ngModelChange","keyup"],["email","ngModel"],["for","passwd",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd","placeholder","Choose a password",3,"ngModel","ngModelChange","keyup"],["class","form-group row","style","padding-left: 10px;",4,"ngIf"],[1,"form-group","row"],[1,"col-sm-2"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","reset",3,"click"],[1,"clearfix"],[1,"my-3",2,"margin","10px","border-top","1px solid #8e95a5","text-align","center","height","0px","margin","10px"],[2,"position","relative","bottom","10px","background","rgba(255, 255, 255, 0.5)","padding","0 12px"],[1,"row",2,"padding","10px"],[1,"btn","btn-danger","col-sm-3","col-xs-6","pull-left","text-center",2,"height","40px",3,"disabled","click"],[1,"fab","fa-google"],[1,"text-center",2,"font-size","12pt"],["class","help-block text-danger",4,"ngFor","ngForOf"],[1,"help-block","text-danger"],[1,"form-group","row",2,"padding-left","10px"],["size","normal",3,"siteKey","resolved"],["class","text-danger",4,"ngIf"],[1,"text-danger"]],template:function(e,t){1&e&&(g.TgZ(0,"div",0),g.TgZ(1,"nav",1),g.TgZ(2,"ol",2),g.TgZ(3,"li",3),g.TgZ(4,"a",4),g._uU(5,"Home"),g.qZA(),g.qZA(),g.TgZ(6,"li",5),g._uU(7,"Sign in"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(8,"div",6),g.TgZ(9,"h3",7),g._uU(10,"Sign In"),g.qZA(),g._UZ(11,"br"),g._UZ(12,"br"),g._UZ(13,"br"),g.YNc(14,y,35,8,"form",8),g.YNc(15,k,3,0,"div",9),g._UZ(16,"hr"),g.qZA(),g.qZA()),2&e&&(g.xp6(4),g.Q6J("routerLink",g.DdM(3,A)),g.xp6(10),g.Q6J("ngIf",!t.isSubmitted),g.xp6(1),g.Q6J("ngIf",t.isSubmitted))},directives:[h.yS,a.O5,n._Y,n.JL,n.F,a.mk,m.KE,l.Nt,n.Fj,n.JJ,n.On,c.lW,a.sg,o.wT],encapsulation:2}),t}();function q(e,t){if(1&e&&(g.TgZ(0,"li",37),g._uU(1),g.qZA()),2&e){var s=t.$implicit;g.xp6(1),g.Oqu(s)}}function U(e,t){if(1&e&&(g.TgZ(0,"div"),g.YNc(1,q,2,1,"li",36),g.qZA()),2&e){var s=g.oxw(2);g.xp6(1),g.Q6J("ngForOf",s.formValidator.email.errMsgs)}}function _(e,t){if(1&e&&(g.TgZ(0,"li",37),g._uU(1),g.qZA()),2&e){var s=t.$implicit;g.xp6(1),g.Oqu(s)}}function S(e,t){if(1&e&&(g.TgZ(0,"div"),g.YNc(1,_,2,1,"li",36),g.qZA()),2&e){var s=g.oxw(2);g.xp6(1),g.Q6J("ngForOf",s.formValidator.passwd.errMsgs)}}function M(e,t){if(1&e&&(g.TgZ(0,"li",37),g._uU(1),g.qZA()),2&e){var s=t.$implicit;g.xp6(1),g.Oqu(s)}}function J(e,t){if(1&e&&(g.TgZ(0,"div"),g.YNc(1,M,2,1,"li",36),g.qZA()),2&e){var s=g.oxw(2);g.xp6(1),g.Q6J("ngForOf",s.formValidator.passwd2.errMsgs)}}function E(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"re-captcha",38),g.NdJ("resolved",function(e){return g.CHM(s),g.oxw(2).handleCorrectCaptcha(e)}),g.qZA()}if(2&e){var i=g.oxw(2);g.Q6J("siteKey",i.reCaptchaSiteKey)}}function I(e,t){1&e&&(g.TgZ(0,"span",37),g._uU(1,"Please click the above button."),g.qZA())}function N(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"form",12,13),g.NdJ("ngSubmit",function(){return g.CHM(s),g.oxw().onSubmit()}),g.TgZ(2,"div",14),g.TgZ(3,"label",15),g._uU(4,"Email"),g.qZA(),g.TgZ(5,"div",16),g.TgZ(6,"mat-form-field",17),g.TgZ(7,"input",18,19),g.NdJ("ngModelChange",function(e){return g.CHM(s),g.oxw().theUser.email=e})("keyup",function(){return g.CHM(s),g.oxw().formValidator.email.presetErrs=[]}),g.qZA(),g.qZA(),g.YNc(9,U,2,1,"div",11),g.qZA(),g.qZA(),g.TgZ(10,"div",14),g.TgZ(11,"label",20),g._uU(12,"Password"),g.qZA(),g.TgZ(13,"div",16),g.TgZ(14,"mat-form-field",17),g.TgZ(15,"input",21,19),g.NdJ("ngModelChange",function(e){return g.CHM(s),g.oxw().theUser.passwd=e})("keyup",function(){return g.CHM(s),g.oxw().formValidator.passwd.presetErrs=[]}),g.qZA(),g.qZA(),g.YNc(17,S,2,1,"div",11),g.qZA(),g.qZA(),g.TgZ(18,"div",14),g.TgZ(19,"label",22),g._uU(20,"Re-type password"),g.qZA(),g.TgZ(21,"div",16),g.TgZ(22,"mat-form-field",17),g.TgZ(23,"input",23),g.NdJ("ngModelChange",function(e){return g.CHM(s),g.oxw().theUser.passwd2=e})("keyup",function(){return g.CHM(s),g.oxw().formValidator.passwd2.presetErrs=[]}),g.qZA(),g.qZA(),g.YNc(24,J,2,1,"div",11),g.qZA(),g.qZA(),g.TgZ(25,"div",24),g.YNc(26,E,1,1,"re-captcha",25),g.YNc(27,I,2,0,"span",10),g.qZA(),g.TgZ(28,"div",24),g.TgZ(29,"div",26),g.TgZ(30,"button",27),g._uU(31,"Register"),g.qZA(),g.qZA(),g.TgZ(32,"div",26),g.TgZ(33,"button",28),g.NdJ("click",function(){return g.CHM(s),g.oxw().resetForm()}),g._uU(34,"Reset"),g.qZA(),g.qZA(),g.qZA(),g._UZ(35,"div",29),g.TgZ(36,"div",30),g.TgZ(37,"span",31),g._uU(38,"or"),g.qZA(),g.qZA(),g.TgZ(39,"div",32),g.TgZ(40,"button",33),g.NdJ("click",function(e){return g.CHM(s),g.oxw().gotoAuth(e,"Google")}),g._UZ(41,"span",34),g._uU(42," Google "),g.qZA(),g.qZA(),g._UZ(43,"div",35),g.qZA()}if(2&e){var i=g.oxw();g.xp6(2),g.Q6J("ngClass",i.validEmail()),g.xp6(5),g.Q6J("ngModel",i.theUser.email),g.xp6(2),g.Q6J("ngIf",i.isChecking),g.xp6(1),g.Q6J("ngClass",i.validPasswd()),g.xp6(5),g.Q6J("ngModel",i.theUser.passwd),g.xp6(2),g.Q6J("ngIf",i.isChecking),g.xp6(1),g.Q6J("ngClass",i.validPasswd2()),g.xp6(5),g.Q6J("ngModel",i.theUser.passwd2),g.xp6(1),g.Q6J("ngIf",i.isChecking),g.xp6(2),g.Q6J("ngIf",i.reCaptchaSiteKey),g.xp6(1),g.Q6J("ngIf",i.isChecking&&!i._viewControls.isRecaptchaClicked&&i.reCaptchaSiteKey),g.xp6(13),g.Q6J("disabled",!i.googleClientID)}}function Q(e,t){if(1&e&&(g.TgZ(0,"h3"),g._UZ(1,"i",39),g._uU(2,"Sending registration information"),g.qZA()),2&e){var s=g.oxw();g.ekj("text-danger",s.hasErrors.length>0),g.xp6(1),g.Q6J("ngClass",s.sendInfoCss())}}function Y(e,t){1&e&&(g.TgZ(0,"h3",37),g._UZ(1,"i",40),g._uU(2,"Some errors have occurred."),g.qZA())}function R(e,t){if(1&e&&(g.TgZ(0,"li",37),g._UZ(1,"i",42),g._uU(2),g.qZA()),2&e){var s=t.$implicit;g.xp6(2),g.Oqu(s)}}function V(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"h4"),g._uU(1," Please check the followings and "),g.TgZ(2,"a",41),g.NdJ("click",function(){g.CHM(s);var e=g.oxw();return e.isSubmitted=!e.isSubmitted}),g._uU(3,"click here"),g.qZA(),g._uU(4," to try again. "),g._UZ(5,"br"),g.TgZ(6,"ul"),g.YNc(7,R,3,1,"li",36),g.qZA(),g.qZA()}if(2&e){var i=g.oxw();g.xp6(7),g.Q6J("ngForOf",i.hasErrors)}}function F(e,t){1&e&&(g.TgZ(0,"div"),g.TgZ(1,"h3",43),g._UZ(2,"i",44),g._uU(3," You have succssfully signed up! "),g._UZ(4,"br"),g._uU(5," An email with an activation code was sent to your email address. If the email does not appear in your inbox in 5-10 minutes, please check your spam folder. "),g.qZA(),g._UZ(6,"hr"),g.TgZ(7,"h3"),g._uU(8,"You may now proceed to the followings. "),g.qZA(),g.TgZ(9,"h4"),g.TgZ(10,"ul"),g.TgZ(11,"li"),g._uU(12," Haven't recieved the email? "),g.TgZ(13,"button"),g._uU(14,"Click here"),g.qZA(),g._uU(15," to resend the verification email. "),g.qZA(),g.TgZ(16,"li"),g._uU(17," Update your information. "),g.qZA(),g.TgZ(18,"li"),g._uU(19," Create a new project and upload your files. "),g.qZA(),g.qZA(),g.qZA(),g.qZA())}var O=function(){return["/home"]};function H(e,t){if(1&e&&(g.TgZ(0,"h3",3),g._UZ(1,"i",4),g._uU(2),g.qZA()),2&e){var s=g.oxw();g.Q6J("ngClass",s.headerCss()),g.xp6(1),g.Q6J("ngClass",s.setCssClass()),g.xp6(1),g.hij(" ",s.heading,"")}}var P=function(){return["/account/signIn"]};function K(e,t){1&e&&(g.TgZ(0,"li"),g.TgZ(1,"a",5),g._uU(2,"Sign in to resend the verification email."),g.qZA(),g.qZA()),2&e&&(g.xp6(1),g.Q6J("routerLink",g.DdM(1,P)))}function L(e,t){1&e&&(g.TgZ(0,"li"),g.TgZ(1,"a",5),g._uU(2,"Sign in"),g.qZA(),g.qZA()),2&e&&(g.xp6(1),g.Q6J("routerLink",g.DdM(1,P)))}function D(e,t){if(1&e&&(g.TgZ(0,"div"),g.YNc(1,K,3,2,"li",2),g.YNc(2,L,3,2,"li",2),g.qZA()),2&e){var s=g.oxw();g.xp6(1),g.Q6J("ngIf",!s.isVerified),g.xp6(1),g.Q6J("ngIf",s.isVerified)}}var z=function(){return["/project/list"]};function j(e,t){1&e&&(g.TgZ(0,"li"),g.TgZ(1,"a",5),g._uU(2,"View my projects"),g.qZA(),g.qZA()),2&e&&(g.xp6(1),g.Q6J("routerLink",g.DdM(1,z)))}var G=function(){return["/account/profile"]};function $(e,t){1&e&&(g.TgZ(0,"li"),g.TgZ(1,"a",5),g._uU(2,"Resend the verification email"),g.qZA(),g.qZA()),2&e&&(g.xp6(1),g.Q6J("routerLink",g.DdM(1,G)))}function B(e,t){if(1&e&&(g.TgZ(0,"div"),g.YNc(1,j,3,2,"li",2),g.YNc(2,$,3,2,"li",2),g.qZA()),2&e){var s=g.oxw();g.xp6(1),g.Q6J("ngIf",s.isVerified),g.xp6(1),g.Q6J("ngIf",!s.isVerified)}}function W(e,t){1&e&&g._UZ(0,"h3")}function X(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"span"),g._uU(1),g.TgZ(2,"button",16),g.TgZ(3,"i",17),g.NdJ("click",function(){return g.CHM(s),g.oxw(2)._viewControls.isEditName=!0}),g.qZA(),g.qZA(),g.qZA()}if(2&e){var i=g.oxw(2);g.xp6(1),g.hij("",i.currentUser.name?i.currentUser.name:"unnamed"," ")}}function ee(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"div"),g.TgZ(1,"mat-form-field"),g.TgZ(2,"input",18),g.NdJ("ngModelChange",function(e){return g.CHM(s),g.oxw(2)._viewControls.newName=e})("keyup.enter",function(){return g.CHM(s),g.oxw(2).rename()}),g.qZA(),g.qZA(),g.TgZ(3,"button",19),g.NdJ("click",function(){return g.CHM(s),g.oxw(2).rename()}),g._UZ(4,"i",20),g.qZA(),g.TgZ(5,"button",21),g.NdJ("click",function(){g.CHM(s);var e=g.oxw(2);return e._viewControls.newName=e.currentUser.name,e._viewControls.isEditName=!1}),g._UZ(6,"i",22),g.qZA(),g.qZA()}if(2&e){var i=g.oxw(2);g.xp6(2),g.Q6J("ngModel",i._viewControls.newName)}}function te(e,t){if(1&e){var s=g.EpF();g.TgZ(0,"a",24),g.NdJ("click",function(){return g.CHM(s),g.oxw(3).reVerify()}),g._uU(1,"Re-send"),g.qZA()}}function se(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Sending ... "),g._UZ(2,"i",25),g.qZA())}function ie(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Verification email sent."),g.qZA())}function re(e,t){if(1&e&&(g.TgZ(0,"span"),g._uU(1," Waiting for email verification "),g._UZ(2,"br"),g._uU(3," (Haven't recieved your verification email? "),g.YNc(4,te,2,0,"a",23),g.YNc(5,se,3,0,"span",13),g.YNc(6,ie,2,0,"span",13),g._uU(7," ) "),g.qZA()),2&e){var s=g.oxw(2);g.xp6(4),g.Q6J("ngIf",s._viewControls.showResendEmail),g.xp6(1),g.Q6J("ngIf",!s._viewControls.mailSent&&!s._viewControls.showResendEmail),g.xp6(1),g.Q6J("ngIf",s._viewControls.mailSent)}}function ne(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Guest user (account inactive)"),g.qZA())}function ae(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Normal user"),g.qZA())}function oe(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Root"),g.qZA())}function ce(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Guest user (account inactive)"),g.qZA())}function ue(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Normal user"),g.qZA())}function le(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Power user"),g.qZA())}function he(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Task builder"),g.qZA())}function ge(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Task manager"),g.qZA())}function de(e,t){1&e&&(g.TgZ(0,"span"),g._uU(1,"Administrator"),g.qZA())}function pe(e,t){if(1&e&&(g.TgZ(0,"div",9),g.TgZ(1,"div",10),g.TgZ(2,"div",11),g.TgZ(3,"strong"),g._uU(4,"Name"),g.qZA(),g.qZA(),g.TgZ(5,"div",12),g.YNc(6,X,4,1,"span",13),g.YNc(7,ee,7,1,"div",13),g.qZA(),g.qZA(),g._UZ(8,"br"),g.TgZ(9,"div",10),g.TgZ(10,"div",11),g.TgZ(11,"strong"),g._uU(12,"E-mail"),g.qZA(),g.qZA(),g.TgZ(13,"div",12),g._uU(14),g.qZA(),g.qZA(),g._UZ(15,"br"),g.TgZ(16,"div",10),g.TgZ(17,"div",11),g.TgZ(18,"strong"),g._uU(19,"System Role"),g.qZA(),g.qZA(),g.TgZ(20,"div",14),g.YNc(21,re,8,3,"span",15),g.YNc(22,ne,2,0,"span",15),g.YNc(23,ae,2,0,"span",15),g.YNc(24,oe,2,0,"span",15),g.qZA(),g.qZA(),g._UZ(25,"br"),g.TgZ(26,"div",10),g.TgZ(27,"div",11),g.TgZ(28,"strong"),g._uU(29,"Platform Role"),g.qZA(),g.qZA(),g.TgZ(30,"div",14),g.YNc(31,ce,2,0,"span",15),g.YNc(32,ue,2,0,"span",15),g.YNc(33,le,2,0,"span",15),g.YNc(34,he,2,0,"span",15),g.YNc(35,ge,2,0,"span",15),g.YNc(36,de,2,0,"span",15),g.qZA(),g.qZA(),g.qZA()),2&e){var s=g.oxw();g.xp6(6),g.Q6J("ngIf",!s._viewControls.isEditName),g.xp6(1),g.Q6J("ngIf",s._viewControls.isEditName),g.xp6(7),g.hij(" ",null==s.currentUser?null:s.currentUser.email," "),g.xp6(6),g.Q6J("ngSwitch",s.currentUser.auths.base),g.xp6(1),g.Q6J("ngSwitchCase",0),g.xp6(1),g.Q6J("ngSwitchCase",1),g.xp6(1),g.Q6J("ngSwitchCase",2),g.xp6(1),g.Q6J("ngSwitchCase",9),g.xp6(6),g.Q6J("ngSwitch",s.currentUser.auths.bdp),g.xp6(1),g.Q6J("ngSwitchCase",1),g.xp6(1),g.Q6J("ngSwitchCase",2),g.xp6(1),g.Q6J("ngSwitchCase",3),g.xp6(1),g.Q6J("ngSwitchCase",7),g.xp6(1),g.Q6J("ngSwitchCase",8),g.xp6(1),g.Q6J("ngSwitchCase",9)}}var fe,me,ve,Ze,we,be=function(){return["/home"]},xe=function(){return["/account","profile"]},Ce=h.Bz.forChild([{path:"",pathMatch:"full",redirectTo:"signIn"},{path:"register",component:(Ze=function(){function t(s,i,r,n){var a=this;e(this,t),this.userService=s,this.infoService=i,this.router=r,this.systemService=n,this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]},passwd2:{errMsgs:[],presetErrs:[]}},this.isChecking=!1,this.cssError={"has-success":!1,"has-error":!0},this.cssHidden={"has-success":!1,"has-error":!1},this.cssSuccess={"has-success":!0,"has-error":!1},this.theUser={email:"",passwd:"",passwd2:""},this.isSubmitted=!1,this.isSuccess=!1,this.hasErrors=[],this._viewControls={isRecaptchaClicked:!1},this._subs=[],this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this._subs.push(this.userService.currentUser$.subscribe(function(e){return e.isLoggedIn?a.router.navigate(["/project/list"]):""}))}return s(t,[{key:"ngOnInit",value:function(){var e=this;this.systemService.sysInfo$.subscribe(function(t){t&&(e.reCaptchaSiteKey=t.reCaptchaSiteKey,e.googleClientID=t.googleClientID)})}},{key:"validEmail",value:function(){var e=this.formValidator.email,t=new RegExp('^(([^<>()[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),t.test(this.theUser.email)||e.errMsgs.push("Please check your email format."),this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden}},{key:"validPasswd",value:function(){var e=this.formValidator.passwd,t=this.theUser.passwd&&this.theUser.passwd.length?this.theUser.passwd.length:0;return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),(t<8||t>64)&&e.errMsgs.push("This password must be between 8 and 64 characters"),this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden}},{key:"validPasswd2",value:function(){var e=this.formValidator.passwd2;return e.errMsgs.length=0,e.presetErrs.length>0&&e.errMsgs.push.apply(e.errMsgs,e.presetErrs),this.theUser.passwd!==this.theUser.passwd2&&e.errMsgs.push("Password does not match."),this.theUser.passwd2&&0!==this.theUser.passwd2.length||e.errMsgs.push("Cannot be empty"),this.isChecking?0===e.errMsgs.length?this.cssSuccess:this.cssError:this.cssHidden}},{key:"handleCorrectCaptcha",value:function(e){this.recaptchaResponse=e}},{key:"onSubmit",value:function(){var e=this;this.isChecking=!1,(this.validEmail()||this.validPasswd()||this.validPasswd2())&&(this.isChecking=!0,this._viewControls.isRecaptchaClicked=!!this.recaptchaResponse,0===this.formValidator.email.errMsgs.length&&0===this.formValidator.passwd.errMsgs.length&&0===this.formValidator.passwd2.errMsgs.length&&(this.reCaptchaSiteKey&&this.recaptchaResponse||!this.reCaptchaSiteKey)?(this._subs.push(this.userService.register(this.theUser.email,this.theUser.passwd,this.recaptchaResponse).subscribe(function(t){if(t.isError){var s=e.formValidator.email;s.presetErrs=[];var i=e.formValidator.passwd;i.presetErrs=[],e.formValidator.passwd2.presetErrs=[],e.isSuccess=!0,e.isSubmitted=!1,setTimeout(function(){e.reCaptchaComponent&&e.reCaptchaComponent.reset()},0);for(var r=0;r<t.errors.length;r++){var n=t.errors[r];"1"===n.code&&s.presetErrs.push(n.name),"3"===n.code&&i.presetErrs.push(n.name),e.hasErrors.push(n.name)}}else e.isSuccess=!0,e.infoService.addMessage("7"),e.router.navigate(["/project/list"])},function(t){e.isSuccess=!1,e.hasErrors.push("Connection error: Please try again latter."),e.hasErrors.push("If this message keeps showing, please contact the web admin."),console.log(t)})),this.isSubmitted=!0,this.formValidator.email.presetErrs=[],this.formValidator.passwd.presetErrs=[],this.formValidator.passwd2.presetErrs=[],this.hasErrors=[]):this.reCaptchaComponent&&this.reCaptchaComponent.reset())}},{key:"resetForm",value:function(){this.theUser={email:"",passwd:"",passwd2:""},this.formValidator={email:{errMsgs:[],presetErrs:[]},passwd:{errMsgs:[],presetErrs:[]},passwd2:{errMsgs:[],presetErrs:[]}},this.isChecking=!1,this.reCaptchaComponent&&this.reCaptchaComponent.reset()}},{key:"gotoAuth",value:function(e,t){e.preventDefault(),e.stopImmediatePropagation(),this.userService.oAuthSign(t)}},{key:"sendInfoCss",value:function(){var e={"fa-circle-o-notch":!0,"fa-spin":!0,"fa-times":!1,"fa-check":!1};return this.isSuccess&&(e={"fa-circle-o-notch":!1,"fa-spin":!1,"fa-times":!1,"fa-check":!0}),this.hasErrors.length>0&&(e={"fa-circle-o-notch":!1,"fa-spin":!1,"fa-times":!0,"fa-check":!1}),e}},{key:"statusCss",value:function(e){var t;switch(e){case 1:t={"text-danger":!1,"text-warning":!0};break;case 2:t={"text-danger":!0,"text-warning":!1};break;default:t={"text-danger":!1,"text-warning":!1}}return t}},{key:"diagnostic",get:function(){return JSON.stringify(this.formValidator)}},{key:"ngOnDestroy",value:function(){this._subs.forEach(function(e){return e.unsubscribe()})}}]),t}(),Ze.\u0275fac=function(e){return new(e||Ze)(g.Y36(d.B),g.Y36(p.C),g.Y36(h.F0),g.Y36(f.o))},Ze.\u0275cmp=g.Xpm({type:Ze,selectors:[["user-register"]],viewQuery:function(e,t){var s;1&e&&g.Gf(o.wT,5),2&e&&g.iGM(s=g.CRH())&&(t.reCaptchaComponent=s.first)},decls:20,vars:8,consts:[["aria-label","breadcrumb","role","navigation"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"bdp-main-container"],[1,"chi-header"],["class","form col-md-12 center-block",3,"ngSubmit",4,"ngIf"],[3,"hidden"],[3,"text-danger",4,"ngIf"],["class","text-danger",4,"ngIf"],[4,"ngIf"],[1,"form","col-md-12","center-block",3,"ngSubmit"],["userForm","ngForm"],[1,"form-group","row",3,"ngClass"],["for","email",1,"col-sm-2","control-label"],[1,"col-sm-10"],[2,"width","100%"],["matInput","","type","text","name","email","placeholder","What's your email address?",3,"ngModel","ngModelChange","keyup"],["email","ngModel"],["for","passwd",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd","placeholder","Choose a password",3,"ngModel","ngModelChange","keyup"],["for","passwd2",1,"col-sm-2","control-label"],["matInput","","type","password","name","passwd2","placeholder","Confirm your passowrd",3,"ngModel","ngModelChange","keyup"],[1,"form-group","row"],[3,"siteKey","resolved",4,"ngIf"],[1,"col-sm-2"],["mat-raised-button","","color","primary","type","submit"],["mat-button","","type","reset",3,"click"],[1,"clearfix"],[1,"my-2",2,"margin","10px","border-top","1px solid #8e95a5","text-align","center","height","0px","margin","10px"],[2,"position","relative","bottom","10px","background","rgba(255, 255, 255, 0.5)","padding","0 12px"],[1,"row"],["type","button",1,"btn","btn-danger","col-sm-3","col-xs-6","pull-left","text-center",2,"height","40px",3,"disabled","click"],[1,"fab","fa-google"],[1,"text-center",2,"font-size","12pt"],["class","text-danger",4,"ngFor","ngForOf"],[1,"text-danger"],[3,"siteKey","resolved"],[1,"fa","fa-fw",3,"ngClass"],["aria-hidden","true",1,"fa","fa-exclamation-triangle"],[1,"link",3,"click"],["aria-hidden","true",1,"fa","fa-times","fa-fw"],[1,"text-success"],["aria-hidden","true",1,"fa","fa-check","fa-fw"]],template:function(e,t){1&e&&(g.TgZ(0,"nav",0),g.TgZ(1,"ol",1),g.TgZ(2,"li",2),g.TgZ(3,"a",3),g._uU(4,"Home"),g.qZA(),g.qZA(),g.TgZ(5,"li",4),g._uU(6,"Registration"),g.qZA(),g.qZA(),g.qZA(),g.TgZ(7,"div",5),g.TgZ(8,"h3",6),g._uU(9,"Registration"),g.qZA(),g._UZ(10,"br"),g._UZ(11,"br"),g._UZ(12,"br"),g.YNc(13,N,44,12,"form",7),g.TgZ(14,"div",8),g.YNc(15,Q,3,3,"h3",9),g.YNc(16,Y,3,0,"h3",10),g.YNc(17,V,8,1,"h4",11),g.YNc(18,F,20,0,"div",11),g._UZ(19,"hr"),g.qZA(),g.qZA()),2&e&&(g.xp6(3),g.Q6J("routerLink",g.DdM(7,O)),g.xp6(10),g.Q6J("ngIf",!t.isSubmitted),g.xp6(1),g.Q6J("hidden",!t.isSubmitted),g.xp6(1),g.Q6J("ngIf",0===t.hasErrors.length&&!t.isSuccess),g.xp6(1),g.Q6J("ngIf",0!==t.hasErrors.length),g.xp6(1),g.Q6J("ngIf",0!==t.hasErrors.length),g.xp6(1),g.Q6J("ngIf",t.isSuccess&&0===t.hasErrors.length))},directives:[h.yS,a.O5,n._Y,n.JL,n.F,a.mk,m.KE,l.Nt,n.Fj,n.JJ,n.On,c.lW,a.sg,o.wT],encapsulation:2}),Ze)},{path:"email-verifying",component:(ve=function(){function t(s,i,r,n,a){e(this,t),this.route=s,this.router=i,this.infoService=r,this.systemService=n,this.userService=a,this.hasCode=!1,this.heading="",this.isVerified=!1}return s(t,[{key:"ngOnInit",value:function(){var e=this;this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this.sub=this.route.queryParamMap.subscribe(function(t){var s;switch(void 0!==t.get("code")?(s=t.get("code"),e.hasCode=!0,s&&(e.status=e.infoService.addMessage(s))):(e.hasCode=!1,e.status=void 0,e.router.navigate(["/home"])),s){case"a004":e.heading="The verification token is invalid.",e.isVerified=!1;break;case"a005":e.heading="This verification token is expired.",e.isVerified=!1;break;case"a006":e.heading="The email is verified.",e.isVerified=!0;break;case"a008":e.heading="This email is already verified.",e.isVerified=!0;break;default:e.heading="Resending your verification email."}})}},{key:"setCssClass",value:function(){var e={"fa-exclamation-triangle":!1,"fa-times":!1,"fa-check":!1,"fa-info-circle":!1};if(void 0!==this.status)switch(this.status.type){case"warning":e["fa-exclamation-triangle"]=!0;break;case"error":e["fa-times"]=!0;break;case"info":e["fa-info-circle"]=!0;break;case"success":e["fa-check"]=!0}return e}},{key:"headerCss",value:function(){var e={"text-warning":!1,"text-danger":!1,"text-success":!1};if(void 0!==this.status)switch(this.status.type){case"warning":e={"text-warning":!0,"text-danger":!1,"text-success":!1};break;case"error":e={"text-warning":!1,"text-danger":!0,"text-success":!1};break;case"success":e={"text-warning":!1,"text-danger":!1,"text-success":!0}}return e}},{key:"reVerify",value:function(){this.userService.emailResend().subscribe(function(e){})}},{key:"ngOnDestroy",value:function(){this.sub&&this.sub.unsubscribe()}}]),t}(),ve.\u0275fac=function(e){return new(e||ve)(g.Y36(h.gz),g.Y36(h.F0),g.Y36(p.C),g.Y36(f.o),g.Y36(d.B))},ve.\u0275cmp=g.Xpm({type:ve,selectors:[["email-verify"]],decls:10,vars:4,consts:[[1,"bdp-main-container"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"],["aria-hidden","true",1,"fas","fa-fw",3,"ngClass"],[3,"routerLink"]],template:function(e,t){1&e&&(g.TgZ(0,"div",0),g.TgZ(1,"h1"),g._uU(2,"Email verification"),g.qZA(),g.YNc(3,H,3,3,"h3",1),g.TgZ(4,"h4"),g._uU(5,"You may proceed the follow actions."),g.qZA(),g.TgZ(6,"ul"),g.YNc(7,D,3,2,"div",2),g.YNc(8,B,3,2,"div",2),g.qZA(),g.YNc(9,W,1,0,"h3",2),g.qZA()),2&e&&(g.xp6(3),g.Q6J("ngIf",t.hasCode),g.xp6(4),g.Q6J("ngIf",!t.userService.isSignedIn),g.xp6(1),g.Q6J("ngIf",t.userService.isSignedIn),g.xp6(1),g.Q6J("ngIf",!t.hasCode))},directives:[a.O5,a.mk,h.yS],encapsulation:2}),ve)},{path:"signIn",component:T},{path:"forgot-password",component:(me=function(){function t(s){e(this,t),this.userService=s}return s(t,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),t}(),me.\u0275fac=function(e){return new(e||me)(g.Y36(d.B))},me.\u0275cmp=g.Xpm({type:me,selectors:[["forgot-passwd"]],decls:3,vars:0,consts:[[1,"container-fluid"]],template:function(e,t){1&e&&(g.TgZ(0,"div",0),g.TgZ(1,"h1"),g._uU(2,"Forgot your passowrd?"),g.qZA(),g.qZA())},encapsulation:2}),me)},{path:"profile",component:(fe=function(){function t(s,i,r){e(this,t),this.userService=s,this.router=i,this.systemService=r,this._viewControls={isEditName:!1,showResendEmail:!0,mailSent:!1,newName:""},this._subs=[]}return s(t,[{key:"ngOnInit",value:function(){var e=this;this.systemService.toggleNavbar(!0),this.systemService.toggleSidebar(!0),this._subs.push(this.userService.currentUser$.subscribe(function(t){e.currentUser=t,e._viewControls.newName=e.currentUser.name,t.isLoggedIn||e.router.navigate(["/account/signIn"])}))}},{key:"reVerify",value:function(){var e=this;this._viewControls.showResendEmail=!1,this._subs.push(this.userService.emailResend().subscribe(function(t){t.isError||t.success&&t.success.resend&&(e._viewControls.mailSent=!0)}))}},{key:"rename",value:function(){var e=this;if(this.currentUser){var t=this._viewControls.newName;this._viewControls.isEditName=!1;var s=this.currentUser.name;this.currentUser.name=t;var i=this.userService.rename(t).subscribe(function(t){i.unsubscribe(),t.isError&&e.currentUser&&(e.currentUser.name=s)})}}},{key:"ngOnDestroy",value:function(){this._subs.forEach(function(e){return e.unsubscribe()})}}]),t}(),fe.\u0275fac=function(e){return new(e||fe)(g.Y36(d.B),g.Y36(h.F0),g.Y36(f.o))},fe.\u0275cmp=g.Xpm({type:fe,selectors:[["user-profile"]],decls:16,vars:7,consts:[[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],["target","_blank",3,"routerLink"],[1,"fas","fa-external-link-alt","ms-3"],[1,"bdp-main-container"],[1,"chi-header"],["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-3"],[1,"col-md-9"],[4,"ngIf"],[1,"col-md-9",3,"ngSwitch"],[4,"ngSwitchCase"],["mat-icon-button",""],[1,"fas","fa-pencil-alt","fa-fw","fa-lg",3,"click"],["matInput","","type","text","maxlength","60","length","60",3,"ngModel","ngModelChange","keyup.enter"],["mat-icon-button","","color","primary",3,"click"],[1,"fas","fa-save","fa-fw","mx-2","fa-lg"],["mat-icon-button","",3,"click"],[1,"fas","fa-times","fa-fw","mx-2","fa-lg"],["class","link","style","text-decoration: underline;",3,"click",4,"ngIf"],[1,"link",2,"text-decoration","underline",3,"click"],[1,"fa","fa-circle-o-notch","fa-spin","fa-fw"]],template:function(e,t){1&e&&(g.TgZ(0,"ol",0),g.TgZ(1,"li",1),g.TgZ(2,"a",2),g._uU(3,"Home"),g.qZA(),g.qZA(),g.TgZ(4,"li",3),g.TgZ(5,"a",2),g._uU(6,"User Profile"),g.qZA(),g.TgZ(7,"a",4),g._UZ(8,"i",5),g.qZA(),g.qZA(),g.qZA(),g.TgZ(9,"div",6),g.TgZ(10,"h3",7),g._uU(11,"User Profile"),g.qZA(),g._UZ(12,"br"),g._UZ(13,"br"),g._UZ(14,"br"),g.YNc(15,pe,37,15,"div",8),g.qZA()),2&e&&(g.xp6(2),g.Q6J("routerLink",g.DdM(4,be)),g.xp6(3),g.Q6J("routerLink",g.DdM(5,xe)),g.xp6(2),g.Q6J("routerLink",g.DdM(6,xe)),g.xp6(8),g.Q6J("ngIf",t.currentUser&&t.currentUser.auths))},directives:[h.yS,a.O5,a.RF,a.n9,c.lW,m.KE,l.Nt,n.Fj,n.nD,n.JJ,n.On],encapsulation:2}),fe)}]),ye=((we=function t(){e(this,t)}).\u0275fac=function(e){return new(e||we)},we.\u0275mod=g.oAB({type:we}),we.\u0275inj=g.cJS({providers:[],imports:[[a.ez,n.u5,o.a,c.ot,l.c,u.Ps,Ce]]}),we)}}])}();