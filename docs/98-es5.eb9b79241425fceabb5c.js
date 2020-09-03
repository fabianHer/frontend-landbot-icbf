function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,r=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw r}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{XPWL:function(t,e,n){"use strict";n.r(e),n.d(e,"RipplesModule",(function(){return k}));var o,a,r,i=n("ofXK"),s=n("3Pt+"),u=n("bSwM"),c=n("FKr1"),l=n("bTqV"),d=n("qFsG"),m=n("kmnG"),b=n("NFeN"),p=n("Pc/E"),f=n("tyNb"),h=n("fXoL"),g=n("NVKa"),y=[{path:"",component:(o=function(){function t(){_classCallCheck(this,t),this.heading="Material Ripples",this.subheading="Connect user input to screen reactions by using ripples to both indicate the point of touch, and to confirm that touch input was received.",this.icon="pe-7s-paint icon-gradient bg-sunny-morning",this.centered=!1,this.disabled=!1,this.unbounded=!1}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=h["\u0275\u0275defineComponent"]({type:o,selectors:[["app-ripples"]],decls:17,vars:13,consts:[[3,"heading","subheading","icon"],[1,"card","main-card","mb-3"],[1,"card-header"],[1,"card-body"],[1,"example-ripple-checkbox",3,"ngModel","ngModelChange"],[1,"example-ripple-form-field"],["matInput","","type","number","placeholder","Radius",3,"ngModel","ngModelChange"],["matInput","","type","text","placeholder","Color",3,"ngModel","ngModelChange"],["matRipple","",1,"example-ripple-container","mat-elevation-z4",3,"matRippleCentered","matRippleDisabled","matRippleUnbounded","matRippleRadius","matRippleColor"]],template:function(t,e){1&t&&(h["\u0275\u0275element"](0,"app-page-title",0),h["\u0275\u0275elementStart"](1,"div",1),h["\u0275\u0275elementStart"](2,"div",2),h["\u0275\u0275text"](3," Ripples Examples "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](4,"div",3),h["\u0275\u0275elementStart"](5,"mat-checkbox",4),h["\u0275\u0275listener"]("ngModelChange",(function(t){return e.centered=t})),h["\u0275\u0275text"](6,"Centered"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](7,"mat-checkbox",4),h["\u0275\u0275listener"]("ngModelChange",(function(t){return e.disabled=t})),h["\u0275\u0275text"](8,"Disabled"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](9,"mat-checkbox",4),h["\u0275\u0275listener"]("ngModelChange",(function(t){return e.unbounded=t})),h["\u0275\u0275text"](10,"Unbounded"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](11,"mat-form-field",5),h["\u0275\u0275elementStart"](12,"input",6),h["\u0275\u0275listener"]("ngModelChange",(function(t){return e.radius=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](13,"mat-form-field",5),h["\u0275\u0275elementStart"](14,"input",7),h["\u0275\u0275listener"]("ngModelChange",(function(t){return e.color=t})),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](15,"div",8),h["\u0275\u0275text"](16," Click me "),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&t&&(h["\u0275\u0275property"]("heading",e.heading)("subheading",e.subheading)("icon",e.icon),h["\u0275\u0275advance"](5),h["\u0275\u0275property"]("ngModel",e.centered),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("ngModel",e.disabled),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("ngModel",e.unbounded),h["\u0275\u0275advance"](3),h["\u0275\u0275property"]("ngModel",e.radius),h["\u0275\u0275advance"](2),h["\u0275\u0275property"]("ngModel",e.color),h["\u0275\u0275advance"](1),h["\u0275\u0275property"]("matRippleCentered",e.centered)("matRippleDisabled",e.disabled)("matRippleUnbounded",e.unbounded)("matRippleRadius",e.radius)("matRippleColor",e.color))},directives:[g.a,u.a,s.NgControlStatus,s.NgModel,m.c,d.b,s.NumberValueAccessor,s.DefaultValueAccessor,c.t],styles:[".example-ripple-container[_ngcontent-%COMP%] {\n      cursor: pointer;\n      text-align: center;\n\n      width: 300px;\n      height: 300px;\n      line-height: 300px;\n\n      user-select: none;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n\n      -webkit-user-drag: none;\n      -webkit-tap-highlight-color: transparent;\n    }\n\n    \n    .example-ripple-checkbox[_ngcontent-%COMP%] {\n      margin: 6px 12px 6px 0;\n    }\n\n    .example-ripple-form-field[_ngcontent-%COMP%] {\n      margin: 0 12px 0 0;\n    }"]}),o),data:{title:"Ripples"}}],v=((r=function t(){_classCallCheck(this,t)}).\u0275mod=h["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||r)},imports:[[f.i.forChild(y)],f.i]}),r),k=((a=function t(){_classCallCheck(this,t)}).\u0275mod=h["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=h["\u0275\u0275defineInjector"]({factory:function(t){return new(t||a)},imports:[[i.CommonModule,v,s.FormsModule,s.ReactiveFormsModule,u.b,u.b,l.c,d.c,m.e,b.b,c.u,p.a]]}),a)},bTqV:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return b}));var o=n("FKr1"),a=n("R1ws"),r=n("fXoL"),i=n("u47x"),s=["mat-button",""],u=["*"],c=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],l=Object(o.y)(Object(o.A)(Object(o.z)((function t(e){_classCallCheck(this,t),this._elementRef=e})))),d=function(){var t=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,a){var r;_classCallCheck(this,n),(r=e.call(this,t))._focusMonitor=o,r._animationMode=a,r.isRoundButton=r._hasHostAttributes("mat-fab","mat-mini-fab"),r.isIconButton=r._hasHostAttributes("mat-icon-button");var i,s=_createForOfIteratorHelper(c);try{for(s.s();!(i=s.n()).done;){var u=i.value;r._hasHostAttributes(u)&&r._getHostElement().classList.add(u)}}catch(l){s.e(l)}finally{s.f()}return t.nativeElement.classList.add("mat-button-base"),r._focusMonitor.monitor(r._elementRef,!0),r.isRoundButton&&(r.color="accent"),r}return _createClass(n,[{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"focus",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program",e=arguments.length>1?arguments[1]:void 0;this._focusMonitor.focusVia(this._getHostElement(),t,e)}},{key:"_getHostElement",value:function(){return this._elementRef.nativeElement}},{key:"_isRippleDisabled",value:function(){return this.disableRipple||this.disabled}},{key:"_hasHostAttributes",value:function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return n.some((function(e){return t._getHostElement().hasAttribute(e)}))}}]),n}(l);return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](i.h),r["\u0275\u0275directiveInject"](a.a,8))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,e){var n;1&t&&r["\u0275\u0275viewQuery"](o.t,!0),2&t&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(e.ripple=n.first)},hostAttrs:[1,"mat-focus-indicator"],hostVars:3,hostBindings:function(t,e){2&t&&(r["\u0275\u0275attribute"]("disabled",e.disabled||null),r["\u0275\u0275classProp"]("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[r["\u0275\u0275InheritDefinitionFeature"]],attrs:s,ngContentSelectors:u,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275elementStart"](0,"span",0),r["\u0275\u0275projection"](1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](2,"div",1),r["\u0275\u0275element"](3,"div",2)),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275classProp"]("mat-button-ripple-round",e.isRoundButton||e.isIconButton),r["\u0275\u0275property"]("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[o.t],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t}(),m=function(){var t=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,a){return _classCallCheck(this,n),e.call(this,o,t,a)}return _createClass(n,[{key:"_haltDisabledEvents",value:function(t){this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}}]),n}(d);return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](i.h),r["\u0275\u0275directiveInject"](r.ElementRef),r["\u0275\u0275directiveInject"](a.a,8))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["a","mat-button",""],["a","mat-raised-button",""],["a","mat-icon-button",""],["a","mat-fab",""],["a","mat-mini-fab",""],["a","mat-stroked-button",""],["a","mat-flat-button",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,e){1&t&&r["\u0275\u0275listener"]("click",(function(t){return e._haltDisabledEvents(t)})),2&t&&(r["\u0275\u0275attribute"]("tabindex",e.disabled?-1:e.tabIndex||0)("disabled",e.disabled||null)("aria-disabled",e.disabled.toString()),r["\u0275\u0275classProp"]("_mat-animation-noopable","NoopAnimations"===e._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matButton","matAnchor"],features:[r["\u0275\u0275InheritDefinitionFeature"]],attrs:s,ngContentSelectors:u,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,e){1&t&&(r["\u0275\u0275projectionDef"](),r["\u0275\u0275elementStart"](0,"span",0),r["\u0275\u0275projection"](1),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](2,"div",1),r["\u0275\u0275element"](3,"div",2)),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275classProp"]("mat-button-ripple-round",e.isRoundButton||e.isIconButton),r["\u0275\u0275property"]("matRippleDisabled",e._isRippleDisabled())("matRippleCentered",e.isIconButton)("matRippleTrigger",e._getHostElement()))},directives:[o.t],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled],.mat-flat-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.cdk-high-contrast-active .mat-button-focus-overlay{background-color:#fff}.cdk-high-contrast-black-on-white .mat-button-focus-overlay{background-color:#000}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}\n"],encapsulation:2,changeDetection:0}),t}(),b=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[o.u,o.j],o.j]}),t}()}}]);