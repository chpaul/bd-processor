(self.webpackChunkbdp_client=self.webpackChunkbdp_client||[]).push([[84],{23759:function(e,t,n){"use strict";n.d(t,{HI:function(){return v},Xx:function(){return C},_0:function(){return y},nZ:function(){return I},Hs:function(){return N},rO:function(){return b},cu:function(){return m},XJ:function(){return w},Ud:function(){return O},C2:function(){return f},VY:function(){return g}});var s=n(58378),i=n(4710),r=n(55959),d=n(78512),o=n(40878),a=n(90611),c=n(43835),l=n(25416),u=n(35366),h=n(19861),_=n(94720);class p{constructor(){this.expansionModel=new s.Ov(!0)}toggle(e){this.expansionModel.toggle(this._trackByValue(e))}expand(e){this.expansionModel.select(this._trackByValue(e))}collapse(e){this.expansionModel.deselect(this._trackByValue(e))}isExpanded(e){return this.expansionModel.isSelected(this._trackByValue(e))}toggleDescendants(e){this.expansionModel.isSelected(this._trackByValue(e))?this.collapseDescendants(e):this.expandDescendants(e)}collapseAll(){this.expansionModel.clear()}expandDescendants(e){let t=[e];t.push(...this.getDescendants(e)),this.expansionModel.select(...t.map(e=>this._trackByValue(e)))}collapseDescendants(e){let t=[e];t.push(...this.getDescendants(e)),this.expansionModel.deselect(...t.map(e=>this._trackByValue(e)))}_trackByValue(e){return this.trackBy?this.trackBy(e):e}}class f extends p{constructor(e,t,n){super(),this.getLevel=e,this.isExpandable=t,this.options=n,this.options&&(this.trackBy=this.options.trackBy)}getDescendants(e){const t=[];for(let n=this.dataNodes.indexOf(e)+1;n<this.dataNodes.length&&this.getLevel(e)<this.getLevel(this.dataNodes[n]);n++)t.push(this.dataNodes[n]);return t}expandAll(){this.expansionModel.select(...this.dataNodes.map(e=>this._trackByValue(e)))}}class g extends p{constructor(e,t){super(),this.getChildren=e,this.options=t,this.options&&(this.trackBy=this.options.trackBy)}expandAll(){this.expansionModel.clear();const e=this.dataNodes.reduce((e,t)=>[...e,...this.getDescendants(t),t],[]);this.expansionModel.select(...e.map(e=>this._trackByValue(e)))}getDescendants(e){const t=[];return this._getDescendants(t,e),t.splice(1)}_getDescendants(e,t){e.push(t);const n=this.getChildren(t);Array.isArray(n)?n.forEach(t=>this._getDescendants(e,t)):(0,i.b)(n)&&n.pipe((0,a.q)(1),(0,c.h)(Boolean)).subscribe(t=>{for(const n of t)this._getDescendants(e,n)})}}const v=new u.OlP("CDK_TREE_NODE_OUTLET_NODE");let m=(()=>{class e{constructor(e,t){this.viewContainer=e,this._node=t}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.s_b),u.Y36(v,8))},e.\u0275dir=u.lG2({type:e,selectors:[["","cdkTreeNodeOutlet",""]]}),e})();class x{constructor(e){this.$implicit=e}}let b=(()=>{class e{constructor(e){this.template=e}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.Rgc))},e.\u0275dir=u.lG2({type:e,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),e})(),y=(()=>{class e{constructor(e,t){this._differs=e,this._changeDetectorRef=t,this._onDestroy=new r.xQ,this._levels=new Map,this.viewChange=new d.X({start:0,end:Number.MAX_VALUE})}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}ngOnInit(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}ngAfterContentChecked(){const e=this._nodeDefs.filter(e=>!e.when);this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}_switchDataSource(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}_observeRenderChanges(){let e;(0,s.Z9)(this._dataSource)?e=this._dataSource.connect(this):(0,i.b)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,o.of)(this._dataSource)),e&&(this._dataSubscription=e.pipe((0,l.R)(this._onDestroy)).subscribe(e=>this.renderNodeChanges(e)))}renderNodeChanges(e,t=this._dataDiffer,n=this._nodeOutlet.viewContainer,s){const i=t.diff(e);i&&(i.forEachOperation((t,i,r)=>{if(null==t.previousIndex)this.insertNode(e[r],r,n,s);else if(null==r)n.remove(i),this._levels.delete(t.item);else{const e=n.get(i);n.move(e,r)}}),this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(n=>n.when&&n.when(t,e))||this._defaultNodeDef}insertNode(e,t,n,s){const i=this._getNodeDef(e,t),r=new x(e);r.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==s&&this._levels.has(s)?this._levels.get(s)+1:0,this._levels.set(e,r.level),(n||this._nodeOutlet.viewContainer).createEmbeddedView(i.template,r,t),N.mostRecentTreeNode&&(N.mostRecentTreeNode.data=e)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.ZZ4),u.Y36(u.sBO))},e.\u0275cmp=u.Xpm({type:e,selectors:[["cdk-tree"]],contentQueries:function(e,t,n){if(1&e&&u.Suo(n,b,5),2&e){let e;u.iGM(e=u.CRH())&&(t._nodeDefs=e)}},viewQuery:function(e,t){if(1&e&&u.Gf(m,7),2&e){let e;u.iGM(e=u.CRH())&&(t._nodeOutlet=e.first)}},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(e,t){1&e&&u.GkF(0,0)},directives:[m],encapsulation:2}),e})(),N=(()=>{class e{constructor(t,n){this._elementRef=t,this._tree=n,this._destroyed=new r.xQ,this._dataChanges=new r.xQ,e.mostRecentTreeNode=this,this._elementRef.nativeElement.classList.add("cdk-tree-node"),this.role="treeitem"}get role(){return"treeitem"}set role(e){this._elementRef.nativeElement.setAttribute("role",e)}get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}get isExpanded(){return this._tree.treeControl.isExpanded(this._data)}_setExpanded(e){this._isAriaExpanded=e,this._elementRef.nativeElement.setAttribute("aria-expanded",`${e}`)}get level(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}ngOnInit(){this._parentNodeAriaLevel=function(e){let t=e.parentElement;for(;t&&!D(t);)t=t.parentElement;return t?t.classList.contains("cdk-nested-tree-node")?(0,h.su)(t.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level",`${this.level+1}`)}ngDoCheck(){this.isExpanded!=this._isAriaExpanded&&this._setExpanded(this.isExpanded)}ngOnDestroy(){e.mostRecentTreeNode===this&&(e.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}_setRoleFromData(){this.role="treeitem"}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.SBq),u.Y36(y))},e.\u0275dir=u.lG2({type:e,selectors:[["cdk-tree-node"]],inputs:{role:"role"},exportAs:["cdkTreeNode"]}),e.mostRecentTreeNode=null,e})();function D(e){const t=e.classList;return!(!(null==t?void 0:t.contains("cdk-nested-tree-node"))&&!(null==t?void 0:t.contains("cdk-tree")))}let C=(()=>{class e extends N{constructor(e,t,n){super(e,t),this._elementRef=e,this._tree=t,this._differs=n,this._elementRef.nativeElement.classList.add("cdk-nested-tree-node")}ngAfterContentInit(){this._dataDiffer=this._differs.find([]).create(this._tree.trackBy);const e=this._tree.treeControl.getChildren(this.data);Array.isArray(e)?this.updateChildrenNodes(e):(0,i.b)(e)&&e.pipe((0,l.R)(this._destroyed)).subscribe(e=>this.updateChildrenNodes(e)),this.nodeOutlet.changes.pipe((0,l.R)(this._destroyed)).subscribe(()=>this.updateChildrenNodes())}ngOnInit(){super.ngOnInit()}ngDoCheck(){super.ngDoCheck()}ngOnDestroy(){this._clear(),super.ngOnDestroy()}updateChildrenNodes(e){const t=this._getNodeOutlet();e&&(this._children=e),t&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,t.viewContainer,this._data):this._dataDiffer.diff([])}_clear(){const e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}_getNodeOutlet(){const e=this.nodeOutlet;return e&&e.find(e=>!e._node||e._node===this)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(u.SBq),u.Y36(y),u.Y36(u.ZZ4))},e.\u0275dir=u.lG2({type:e,selectors:[["cdk-nested-tree-node"]],contentQueries:function(e,t,n){if(1&e&&u.Suo(n,m,5),2&e){let e;u.iGM(e=u.CRH())&&(t.nodeOutlet=e)}},inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["cdkNestedTreeNode"],features:[u._Bn([{provide:N,useExisting:e},{provide:v,useExisting:e}]),u.qOj]}),e})();const k=/([A-Za-z%]+)$/;let w=(()=>{class e{constructor(e,t,n,s){this._treeNode=e,this._tree=t,this._element=n,this._dir=s,this._destroyed=new r.xQ,this.indentUnits="px",this._indent=40,this._setPadding(),s&&s.change.pipe((0,l.R)(this._destroyed)).subscribe(()=>this._setPadding(!0)),e._dataChanges.subscribe(()=>this._setPadding())}get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){const e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,t=null==this._level?e:this._level;return"number"==typeof t?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){const t=this._paddingIndent();if(t!==this._currentPadding||e){const e=this._element.nativeElement,n=this._dir&&"rtl"===this._dir.value?"paddingRight":"paddingLeft",s="paddingLeft"===n?"paddingRight":"paddingLeft";e.style[n]=t||"",e.style[s]="",this._currentPadding=t}}_setLevelInput(e){this._level=(0,h.su)(e,null),this._setPadding()}_setIndentInput(e){let t=e,n="px";if("string"==typeof e){const s=e.split(k);t=s[0],n=s[1]||n}this.indentUnits=n,this._indent=(0,h.su)(t),this._setPadding()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(N),u.Y36(y),u.Y36(u.SBq),u.Y36(_.Is,8))},e.\u0275dir=u.lG2({type:e,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:["cdkTreeNodePadding","level"],indent:["cdkTreeNodePaddingIndent","indent"]}}),e})(),O=(()=>{class e{constructor(e,t){this._tree=e,this._treeNode=t,this._recursive=!1}get recursive(){return this._recursive}set recursive(e){this._recursive=(0,h.Ig)(e)}_toggle(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(y),u.Y36(N))},e.\u0275dir=u.lG2({type:e,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(e,t){1&e&&u.NdJ("click",function(e){return t._toggle(e)})},inputs:{recursive:["cdkTreeNodeToggleRecursive","recursive"]}}),e})(),I=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({}),e})()},39084:function(e,t,n){"use strict";n.d(t,{GZ:function(){return p},gi:function(){return v},dp:function(){return x},WX:function(){return b},uo:function(){return h},fQ:function(){return _},Ar:function(){return g},ah:function(){return f},eu:function(){return m}});var s=n(23759),i=n(87064),r=n(19861),d=n(58378),o=n(78512),a=n(31906),c=n(79996),l=n(35366);const u=(0,i.sb)((0,i.Id)(s.Hs));let h=(()=>{class e extends u{constructor(e,t,n){super(e,t),this._elementRef=e,this._tree=t,this.tabIndex=Number(n)||0,this._elementRef.nativeElement.classList.add("mat-tree-node")}ngOnInit(){super.ngOnInit()}ngDoCheck(){super.ngDoCheck()}ngOnDestroy(){super.ngOnDestroy()}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(l.SBq),l.Y36(s._0),l.$8M("tabindex"))},e.\u0275dir=l.lG2({type:e,selectors:[["mat-tree-node"]],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["matTreeNode"],features:[l._Bn([{provide:s.Hs,useExisting:e}]),l.qOj]}),e})(),_=(()=>{class e extends s.rO{}return e.\u0275fac=function(){let t;return function(n){return(t||(t=l.n5z(e)))(n||e)}}(),e.\u0275dir=l.lG2({type:e,selectors:[["","matTreeNodeDef",""]],inputs:{when:["matTreeNodeDefWhen","when"],data:["matTreeNode","data"]},features:[l._Bn([{provide:s.rO,useExisting:e}]),l.qOj]}),e})(),p=(()=>{class e extends s.Xx{constructor(e,t,n,s){super(e,t,n),this._elementRef=e,this._tree=t,this._differs=n,this._disabled=!1,this.tabIndex=Number(s)||0,this._elementRef.nativeElement.classList.add("mat-nested-tree-node")}get disabled(){return this._disabled}set disabled(e){this._disabled=(0,r.Ig)(e)}get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(e){this._tabIndex=null!=e?e:0}ngOnInit(){super.ngOnInit()}ngDoCheck(){super.ngDoCheck()}ngAfterContentInit(){super.ngAfterContentInit()}ngOnDestroy(){super.ngOnDestroy()}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(l.SBq),l.Y36(s._0),l.Y36(l.ZZ4),l.$8M("tabindex"))},e.\u0275dir=l.lG2({type:e,selectors:[["mat-nested-tree-node"]],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex",node:["matNestedTreeNode","node"]},exportAs:["matNestedTreeNode"],features:[l._Bn([{provide:s.Xx,useExisting:e},{provide:s.Hs,useExisting:e},{provide:s.HI,useExisting:e}]),l.qOj]}),e})(),f=(()=>{class e extends s.XJ{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}}return e.\u0275fac=function(){let t;return function(n){return(t||(t=l.n5z(e)))(n||e)}}(),e.\u0275dir=l.lG2({type:e,selectors:[["","matTreeNodePadding",""]],inputs:{level:["matTreeNodePadding","level"],indent:["matTreeNodePaddingIndent","indent"]},features:[l._Bn([{provide:s.XJ,useExisting:e}]),l.qOj]}),e})(),g=(()=>{class e{constructor(e,t){this.viewContainer=e,this._node=t}}return e.\u0275fac=function(t){return new(t||e)(l.Y36(l.s_b),l.Y36(s.HI,8))},e.\u0275dir=l.lG2({type:e,selectors:[["","matTreeNodeOutlet",""]],features:[l._Bn([{provide:s.cu,useExisting:e}])]}),e})(),v=(()=>{class e extends s._0{}return e.\u0275fac=function(){let t;return function(n){return(t||(t=l.n5z(e)))(n||e)}}(),e.\u0275cmp=l.Xpm({type:e,selectors:[["mat-tree"]],viewQuery:function(e,t){if(1&e&&l.Gf(g,7),2&e){let e;l.iGM(e=l.CRH())&&(t._nodeOutlet=e.first)}},hostAttrs:["role","tree",1,"mat-tree","cdk-tree"],exportAs:["matTree"],features:[l._Bn([{provide:s._0,useExisting:e}]),l.qOj],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(e,t){1&e&&l.GkF(0,0)},directives:[g],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],encapsulation:2}),e})(),m=(()=>{class e extends s.Ud{get recursive(){return this._recursive}set recursive(e){this._recursive=(0,r.Ig)(e)}}return e.\u0275fac=function(){let t;return function(n){return(t||(t=l.n5z(e)))(n||e)}}(),e.\u0275dir=l.lG2({type:e,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:["matTreeNodeToggleRecursive","recursive"]},features:[l._Bn([{provide:s.Ud,useExisting:e}]),l.qOj]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[s.nZ,i.BQ],i.BQ]}),e})();class b extends d.o2{constructor(){super(...arguments),this._data=new o.X([])}get data(){return this._data.value}set data(e){this._data.next(e)}connect(e){return(0,a.T)(e.viewChange,this._data).pipe((0,c.U)(()=>this.data))}disconnect(){}}}}]);