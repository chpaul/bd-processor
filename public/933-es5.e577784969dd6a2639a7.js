!function(){function e(t,n,i){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}(e,t);if(i){var r=Object.getOwnPropertyDescriptor(i,t);return r.get?r.get.call(n):r.value}})(t,n,i||t)}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,i=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(i,arguments,s)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function l(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}(self.webpackChunkbdp_client=self.webpackChunkbdp_client||[]).push([[933],{52796:function(n,r,u){"use strict";u.d(r,{HI:function(){return O},Xx:function(){return A},_0:function(){return S},nZ:function(){return L},Hs:function(){return E},rO:function(){return I},cu:function(){return D},XJ:function(){return R},Ud:function(){return B},C2:function(){return N},VY:function(){return w}});var d=u(38345),f=u(95639),h=u(79765),p=u(26215),v=u(25917),_=u(15257),y=u(45435),g=u(46782),k=u(37716),b=u(39490),m=u(70946),x=function(){function e(){c(this,e),this.expansionModel=new d.Ov(!0)}return l(e,[{key:"toggle",value:function(e){this.expansionModel.toggle(this._trackByValue(e))}},{key:"expand",value:function(e){this.expansionModel.select(this._trackByValue(e))}},{key:"collapse",value:function(e){this.expansionModel.deselect(this._trackByValue(e))}},{key:"isExpanded",value:function(e){return this.expansionModel.isSelected(this._trackByValue(e))}},{key:"toggleDescendants",value:function(e){this.expansionModel.isSelected(this._trackByValue(e))?this.collapseDescendants(e):this.expandDescendants(e)}},{key:"collapseAll",value:function(){this.expansionModel.clear()}},{key:"expandDescendants",value:function(e){var t,n=this,i=[e];i.push.apply(i,s(this.getDescendants(e))),(t=this.expansionModel).select.apply(t,s(i.map(function(e){return n._trackByValue(e)})))}},{key:"collapseDescendants",value:function(e){var t,n=this,i=[e];i.push.apply(i,s(this.getDescendants(e))),(t=this.expansionModel).deselect.apply(t,s(i.map(function(e){return n._trackByValue(e)})))}},{key:"_trackByValue",value:function(e){return this.trackBy?this.trackBy(e):e}}]),e}(),N=function(e){t(r,e);var n=i(r);function r(e,t,i){var o;return c(this,r),(o=n.call(this)).getLevel=e,o.isExpandable=t,o.options=i,o.options&&(o.trackBy=o.options.trackBy),o}return l(r,[{key:"getDescendants",value:function(e){for(var t=[],n=this.dataNodes.indexOf(e)+1;n<this.dataNodes.length&&this.getLevel(e)<this.getLevel(this.dataNodes[n]);n++)t.push(this.dataNodes[n]);return t}},{key:"expandAll",value:function(){var e,t=this;(e=this.expansionModel).select.apply(e,s(this.dataNodes.map(function(e){return t._trackByValue(e)})))}}]),r}(x),w=function(e){t(r,e);var n=i(r);function r(e,t){var i;return c(this,r),(i=n.call(this)).getChildren=e,i.options=t,i.options&&(i.trackBy=i.options.trackBy),i}return l(r,[{key:"expandAll",value:function(){var e,t=this;this.expansionModel.clear();var n=this.dataNodes.reduce(function(e,n){return[].concat(s(e),s(t.getDescendants(n)),[n])},[]);(e=this.expansionModel).select.apply(e,s(n.map(function(e){return t._trackByValue(e)})))}},{key:"getDescendants",value:function(e){var t=[];return this._getDescendants(t,e),t.splice(1)}},{key:"_getDescendants",value:function(e,t){var n=this;e.push(t);var i=this.getChildren(t);Array.isArray(i)?i.forEach(function(t){return n._getDescendants(e,t)}):(0,f.b)(i)&&i.pipe((0,_.q)(1),(0,y.h)(Boolean)).subscribe(function(t){var i,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){u=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}(t);try{for(r.s();!(i=r.n()).done;){var o=i.value;n._getDescendants(e,o)}}catch(s){r.e(s)}finally{r.f()}})}}]),r}(x),O=new k.OlP("CDK_TREE_NODE_OUTLET_NODE"),D=function(){var e=function e(t,n){c(this,e),this.viewContainer=t,this._node=n};return e.\u0275fac=function(t){return new(t||e)(k.Y36(k.s_b),k.Y36(O,8))},e.\u0275dir=k.lG2({type:e,selectors:[["","cdkTreeNodeOutlet",""]]}),e}(),C=function e(t){c(this,e),this.$implicit=t},I=function(){var e=function e(t){c(this,e),this.template=t};return e.\u0275fac=function(t){return new(t||e)(k.Y36(k.Rgc))},e.\u0275dir=k.lG2({type:e,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),e}(),S=function(){var e=function(){function e(t,n){c(this,e),this._differs=t,this._changeDetectorRef=n,this._onDestroy=new h.xQ,this._levels=new Map,this.viewChange=new p.X({start:0,end:Number.MAX_VALUE})}return l(e,[{key:"dataSource",get:function(){return this._dataSource},set:function(e){this._dataSource!==e&&this._switchDataSource(e)}},{key:"ngOnInit",value:function(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}},{key:"ngOnDestroy",value:function(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}},{key:"ngAfterContentChecked",value:function(){var e=this._nodeDefs.filter(function(e){return!e.when});this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}},{key:"_switchDataSource",value:function(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}},{key:"_observeRenderChanges",value:function(){var e,t=this;(0,d.Z9)(this._dataSource)?e=this._dataSource.connect(this):(0,f.b)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,v.of)(this._dataSource)),e&&(this._dataSubscription=e.pipe((0,g.R)(this._onDestroy)).subscribe(function(e){return t.renderNodeChanges(e)}))}},{key:"renderNodeChanges",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._dataDiffer,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._nodeOutlet.viewContainer,r=arguments.length>3?arguments[3]:void 0,o=n.diff(e);o&&(o.forEachOperation(function(n,o,s){if(null==n.previousIndex)t.insertNode(e[s],s,i,r);else if(null==s)i.remove(o),t._levels.delete(n.item);else{var a=i.get(o);i.move(a,s)}}),this._changeDetectorRef.detectChanges())}},{key:"_getNodeDef",value:function(e,t){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(function(n){return n.when&&n.when(t,e)})||this._defaultNodeDef}},{key:"insertNode",value:function(e,t,n,i){var r=this._getNodeDef(e,t),o=new C(e);o.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==i&&this._levels.has(i)?this._levels.get(i)+1:0,this._levels.set(e,o.level),(n||this._nodeOutlet.viewContainer).createEmbeddedView(r.template,o,t),E.mostRecentTreeNode&&(E.mostRecentTreeNode.data=e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(k.Y36(k.ZZ4),k.Y36(k.sBO))},e.\u0275cmp=k.Xpm({type:e,selectors:[["cdk-tree"]],contentQueries:function(e,t,n){var i;(1&e&&k.Suo(n,I,5),2&e)&&(k.iGM(i=k.CRH())&&(t._nodeDefs=i))},viewQuery:function(e,t){var n;(1&e&&k.Gf(D,7),2&e)&&(k.iGM(n=k.CRH())&&(t._nodeOutlet=n.first))},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(e,t){1&e&&k.GkF(0,0)},directives:[D],encapsulation:2}),e}(),E=function(){var e=function(){function e(t,n){c(this,e),this._elementRef=t,this._tree=n,this._destroyed=new h.xQ,this._dataChanges=new h.xQ,e.mostRecentTreeNode=this,this._elementRef.nativeElement.classList.add("cdk-tree-node"),this.role="treeitem"}return l(e,[{key:"role",get:function(){return"treeitem"},set:function(e){this._elementRef.nativeElement.setAttribute("role",e)}},{key:"data",get:function(){return this._data},set:function(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}},{key:"isExpanded",get:function(){return this._tree.treeControl.isExpanded(this._data)}},{key:"_setExpanded",value:function(e){this._isAriaExpanded=e,this._elementRef.nativeElement.setAttribute("aria-expanded","".concat(e))}},{key:"level",get:function(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}},{key:"ngOnInit",value:function(){this._parentNodeAriaLevel=function(e){for(var t,n=e.parentElement;n&&(t=void 0,!(null==(t=n.classList)?void 0:t.contains("cdk-nested-tree-node"))&&!(null==t?void 0:t.contains("cdk-tree")));)n=n.parentElement;return n?n.classList.contains("cdk-nested-tree-node")?(0,b.su)(n.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level","".concat(this.level+1))}},{key:"ngDoCheck",value:function(){this.isExpanded!=this._isAriaExpanded&&this._setExpanded(this.isExpanded)}},{key:"ngOnDestroy",value:function(){e.mostRecentTreeNode===this&&(e.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"focus",value:function(){this._elementRef.nativeElement.focus()}},{key:"_setRoleFromData",value:function(){this.role="treeitem"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(k.Y36(k.SBq),k.Y36(S))},e.\u0275dir=k.lG2({type:e,selectors:[["cdk-tree-node"]],inputs:{role:"role"},exportAs:["cdkTreeNode"]}),e.mostRecentTreeNode=null,e}();var A=function(){var n=function(n){t(s,n);var r=i(s);function s(e,t,n){var i;return c(this,s),(i=r.call(this,e,t))._differs=n,e.nativeElement.classList.add("cdk-nested-tree-node"),i}return l(s,[{key:"ngAfterContentInit",value:function(){var e=this;this._dataDiffer=this._differs.find([]).create(this._tree.trackBy);var t=this._tree.treeControl.getChildren(this.data);Array.isArray(t)?this.updateChildrenNodes(t):(0,f.b)(t)&&t.pipe((0,g.R)(this._destroyed)).subscribe(function(t){return e.updateChildrenNodes(t)}),this.nodeOutlet.changes.pipe((0,g.R)(this._destroyed)).subscribe(function(){return e.updateChildrenNodes()})}},{key:"ngOnInit",value:function(){e(o(s.prototype),"ngOnInit",this).call(this)}},{key:"ngDoCheck",value:function(){e(o(s.prototype),"ngDoCheck",this).call(this)}},{key:"ngOnDestroy",value:function(){this._clear(),e(o(s.prototype),"ngOnDestroy",this).call(this)}},{key:"updateChildrenNodes",value:function(e){var t=this._getNodeOutlet();e&&(this._children=e),t&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,t.viewContainer,this._data):this._dataDiffer.diff([])}},{key:"_clear",value:function(){var e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}},{key:"_getNodeOutlet",value:function(){var e=this,t=this.nodeOutlet;return t&&t.find(function(t){return!t._node||t._node===e})}}]),s}(E);return n.\u0275fac=function(e){return new(e||n)(k.Y36(k.SBq),k.Y36(S),k.Y36(k.ZZ4))},n.\u0275dir=k.lG2({type:n,selectors:[["cdk-nested-tree-node"]],contentQueries:function(e,t,n){var i;(1&e&&k.Suo(n,D,5),2&e)&&(k.iGM(i=k.CRH())&&(t.nodeOutlet=i))},inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["cdkNestedTreeNode"],features:[k._Bn([{provide:E,useExisting:n},{provide:O,useExisting:n}]),k.qOj]}),n}(),T=/([A-Za-z%]+)$/,R=function(){var e=function(){function e(t,n,i,r){var o=this;c(this,e),this._treeNode=t,this._tree=n,this._element=i,this._dir=r,this._destroyed=new h.xQ,this.indentUnits="px",this._indent=40,this._setPadding(),r&&r.change.pipe((0,g.R)(this._destroyed)).subscribe(function(){return o._setPadding(!0)}),t._dataChanges.subscribe(function(){return o._setPadding()})}return l(e,[{key:"level",get:function(){return this._level},set:function(e){this._setLevelInput(e)}},{key:"indent",get:function(){return this._indent},set:function(e){this._setIndentInput(e)}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"_paddingIndent",value:function(){var e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,t=null==this._level?e:this._level;return"number"==typeof t?"".concat(t*this._indent).concat(this.indentUnits):null}},{key:"_setPadding",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this._paddingIndent();if(t!==this._currentPadding||e){var n=this._element.nativeElement,i=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",r="paddingLeft"===i?"paddingRight":"paddingLeft";n.style[i]=t||"",n.style[r]="",this._currentPadding=t}}},{key:"_setLevelInput",value:function(e){this._level=(0,b.su)(e,null),this._setPadding()}},{key:"_setIndentInput",value:function(e){var t=e,n="px";if("string"==typeof e){var i=e.split(T);t=i[0],n=i[1]||n}this.indentUnits=n,this._indent=(0,b.su)(t),this._setPadding()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(k.Y36(E),k.Y36(S),k.Y36(k.SBq),k.Y36(m.Is,8))},e.\u0275dir=k.lG2({type:e,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:["cdkTreeNodePadding","level"],indent:["cdkTreeNodePaddingIndent","indent"]}}),e}(),B=function(){var e=function(){function e(t,n){c(this,e),this._tree=t,this._treeNode=n,this._recursive=!1}return l(e,[{key:"recursive",get:function(){return this._recursive},set:function(e){this._recursive=(0,b.Ig)(e)}},{key:"_toggle",value:function(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(k.Y36(S),k.Y36(E))},e.\u0275dir=k.lG2({type:e,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(e,t){1&e&&k.NdJ("click",function(e){return t._toggle(e)})},inputs:{recursive:["cdkTreeNodeToggleRecursive","recursive"]}}),e}(),L=function(){var e=function e(){c(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=k.oAB({type:e}),e.\u0275inj=k.cJS({}),e}()},1933:function(n,r,s){"use strict";s.d(r,{GZ:function(){return b},gi:function(){return N},dp:function(){return O},WX:function(){return D},uo:function(){return g},fQ:function(){return k},Ar:function(){return x},ah:function(){return m},eu:function(){return w}});var a=s(52796),u=s(72458),d=s(39490),f=s(38345),h=s(26215),p=s(66682),v=s(88002),_=s(37716),y=(0,u.sb)((0,u.Id)(a.Hs)),g=function(){var n=function(n){t(s,n);var r=i(s);function s(e,t,n){var i;return c(this,s),(i=r.call(this,e,t)).tabIndex=Number(n)||0,e.nativeElement.classList.add("mat-tree-node"),i}return l(s,[{key:"ngOnInit",value:function(){e(o(s.prototype),"ngOnInit",this).call(this)}},{key:"ngDoCheck",value:function(){e(o(s.prototype),"ngDoCheck",this).call(this)}},{key:"ngOnDestroy",value:function(){e(o(s.prototype),"ngOnDestroy",this).call(this)}}]),s}(y);return n.\u0275fac=function(e){return new(e||n)(_.Y36(_.SBq),_.Y36(a._0),_.$8M("tabindex"))},n.\u0275dir=_.lG2({type:n,selectors:[["mat-tree-node"]],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["matTreeNode"],features:[_._Bn([{provide:a.Hs,useExisting:n}]),_.qOj]}),n}(),k=function(){var e,n=function(e){t(r,e);var n=i(r);function r(){return c(this,r),n.apply(this,arguments)}return r}(a.rO);return n.\u0275fac=function(t){return(e||(e=_.n5z(n)))(t||n)},n.\u0275dir=_.lG2({type:n,selectors:[["","matTreeNodeDef",""]],inputs:{when:["matTreeNodeDefWhen","when"],data:["matTreeNode","data"]},features:[_._Bn([{provide:a.rO,useExisting:n}]),_.qOj]}),n}(),b=function(){var n=function(n){t(s,n);var r=i(s);function s(e,t,n,i){var o;return c(this,s),(o=r.call(this,e,t,n))._disabled=!1,o.tabIndex=Number(i)||0,e.nativeElement.classList.add("mat-nested-tree-node"),o}return l(s,[{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=(0,d.Ig)(e)}},{key:"tabIndex",get:function(){return this.disabled?-1:this._tabIndex},set:function(e){this._tabIndex=null!=e?e:0}},{key:"ngOnInit",value:function(){e(o(s.prototype),"ngOnInit",this).call(this)}},{key:"ngDoCheck",value:function(){e(o(s.prototype),"ngDoCheck",this).call(this)}},{key:"ngAfterContentInit",value:function(){e(o(s.prototype),"ngAfterContentInit",this).call(this)}},{key:"ngOnDestroy",value:function(){e(o(s.prototype),"ngOnDestroy",this).call(this)}}]),s}(a.Xx);return n.\u0275fac=function(e){return new(e||n)(_.Y36(_.SBq),_.Y36(a._0),_.Y36(_.ZZ4),_.$8M("tabindex"))},n.\u0275dir=_.lG2({type:n,selectors:[["mat-nested-tree-node"]],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex",node:["matNestedTreeNode","node"]},exportAs:["matNestedTreeNode"],features:[_._Bn([{provide:a.Xx,useExisting:n},{provide:a.Hs,useExisting:n},{provide:a.HI,useExisting:n}]),_.qOj]}),n}(),m=function(){var e,n=function(e){t(r,e);var n=i(r);function r(){return c(this,r),n.apply(this,arguments)}return l(r,[{key:"level",get:function(){return this._level},set:function(e){this._setLevelInput(e)}},{key:"indent",get:function(){return this._indent},set:function(e){this._setIndentInput(e)}}]),r}(a.XJ);return n.\u0275fac=function(t){return(e||(e=_.n5z(n)))(t||n)},n.\u0275dir=_.lG2({type:n,selectors:[["","matTreeNodePadding",""]],inputs:{level:["matTreeNodePadding","level"],indent:["matTreeNodePaddingIndent","indent"]},features:[_._Bn([{provide:a.XJ,useExisting:n}]),_.qOj]}),n}(),x=function(){var e=function e(t,n){c(this,e),this.viewContainer=t,this._node=n};return e.\u0275fac=function(t){return new(t||e)(_.Y36(_.s_b),_.Y36(a.HI,8))},e.\u0275dir=_.lG2({type:e,selectors:[["","matTreeNodeOutlet",""]],features:[_._Bn([{provide:a.cu,useExisting:e}])]}),e}(),N=function(){var e,n=function(e){t(r,e);var n=i(r);function r(){return c(this,r),n.apply(this,arguments)}return r}(a._0);return n.\u0275fac=function(t){return(e||(e=_.n5z(n)))(t||n)},n.\u0275cmp=_.Xpm({type:n,selectors:[["mat-tree"]],viewQuery:function(e,t){var n;(1&e&&_.Gf(x,7),2&e)&&(_.iGM(n=_.CRH())&&(t._nodeOutlet=n.first))},hostAttrs:["role","tree",1,"mat-tree","cdk-tree"],exportAs:["matTree"],features:[_._Bn([{provide:a._0,useExisting:n}]),_.qOj],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(e,t){1&e&&_.GkF(0,0)},directives:[x],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],encapsulation:2}),n}(),w=function(){var e,n=function(e){t(r,e);var n=i(r);function r(){return c(this,r),n.apply(this,arguments)}return l(r,[{key:"recursive",get:function(){return this._recursive},set:function(e){this._recursive=(0,d.Ig)(e)}}]),r}(a.Ud);return n.\u0275fac=function(t){return(e||(e=_.n5z(n)))(t||n)},n.\u0275dir=_.lG2({type:n,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:["matTreeNodeToggleRecursive","recursive"]},features:[_._Bn([{provide:a.Ud,useExisting:n}]),_.qOj]}),n}(),O=function(){var e=function e(){c(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_.oAB({type:e}),e.\u0275inj=_.cJS({imports:[[a.nZ,u.BQ],u.BQ]}),e}(),D=function(e){t(r,e);var n=i(r);function r(){var e;return c(this,r),(e=n.apply(this,arguments))._data=new h.X([]),e}return l(r,[{key:"data",get:function(){return this._data.value},set:function(e){this._data.next(e)}},{key:"connect",value:function(e){var t=this;return(0,p.T)(e.viewChange,this._data).pipe((0,v.U)(function(){return t.data}))}},{key:"disconnect",value:function(){}}]),r}(f.o2)}}])}();