import{o as K,c as N,a as G,A as k,D as Ke,y as Ne,n as E,F as ge,f as Le,q as Q,K as $e,g as Ll,t as ce,E as Z,L as ke,j as z,G as h,I as x,M as Ce,k as _e}from"../js/app2.js";function ae(e){return[null,void 0].indexOf(e)!==-1}function kl(e,o,a){const{object:i,valueProp:n,mode:m}=Z(e),t=ke().proxy,v=a.iv,q=(y,I=!0)=>{v.value=c(y);const S=g(y);o.emit("change",S,t),I&&(o.emit("input",S),o.emit("update:modelValue",S))},g=y=>i.value||ae(y)?y:Array.isArray(y)?y.map(I=>I[n.value]):y[n.value],c=y=>ae(y)?m.value==="single"?{}:[]:y;return{update:q}}function wl(e,o){const{value:a,modelValue:i,mode:n,valueProp:m}=Z(e),t=z(n.value!=="single"?[]:{}),v=i&&i.value!==void 0?i:a,q=h(()=>n.value==="single"?t.value[m.value]:t.value.map(c=>c[m.value])),g=h(()=>n.value!=="single"?t.value.map(c=>c[m.value]).join(","):t.value[m.value]);return{iv:t,internalValue:t,ev:v,externalValue:v,textValue:g,plainValue:q}}function Pl(e,o,a){const{regex:i}=Z(e),n=ke().proxy,m=a.isOpen,t=a.open,v=z(null),q=z(null),g=()=>{v.value=""},c=S=>{v.value=S.target.value},y=S=>{if(i&&i.value){let w=i.value;typeof w=="string"&&(w=new RegExp(w)),S.key.match(w)||S.preventDefault()}},I=S=>{if(i&&i.value){let A=(S.clipboardData||window.clipboardData).getData("Text"),D=i.value;typeof D=="string"&&(D=new RegExp(D)),A.split("").every(b=>!!b.match(D))||S.preventDefault()}o.emit("paste",S,n)};return x(v,S=>{!m.value&&S&&t(),o.emit("search-change",S,n)}),{search:v,input:q,clearSearch:g,handleSearchInput:c,handleKeypress:y,handlePaste:I}}function Tl(e,o,a){const{groupSelect:i,mode:n,groups:m,disabledProp:t}=Z(e),v=z(null),q=c=>{c===void 0||c!==null&&c[t.value]||m.value&&c&&c.group&&(n.value==="single"||!i.value)||(v.value=c)};return{pointer:v,setPointer:q,clearPointer:()=>{q(null)}}}function Fe(e,o=!0){return o?String(e).toLowerCase().trim():String(e).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g),"ae").replace(new RegExp(/œ/g),"oe").replace(new RegExp(/ø/g),"o").replace(/\p{Diacritic}/gu,"")}function ql(e){return Object.prototype.toString.call(e)==="[object Object]"}function El(e,o){const a=o.slice().sort();return e.length===o.length&&e.slice().sort().every(function(i,n){return i===a[n]})}function Cl(e,o,a){const{options:i,mode:n,trackBy:m,limit:t,hideSelected:v,createTag:q,createOption:g,label:c,appendNewTag:y,appendNewOption:I,multipleLabel:S,object:w,loading:A,delay:D,resolveOnLoad:b,minChars:r,filterResults:C,clearOnSearch:M,clearOnSelect:H,valueProp:p,allowAbsent:F,groupLabel:W,canDeselect:j,max:X,strict:$,closeOnSelect:d,closeOnDeselect:L,groups:_,reverse:te,infinite:be,groupOptions:U,groupHideEmpty:we,groupSelect:P,onCreate:B,disabledProp:R,searchStart:re,searchFilter:me}=Z(e),J=ke().proxy,T=a.iv,u=a.ev,f=a.search,Y=a.clearSearch,ne=a.update,el=a.pointer,de=a.clearPointer,ll=a.focus,al=a.deactivate,ve=a.close,tl=a.localize,ye=z([]),ie=z([]),ee=z(!1),Ie=z(null),De=z(be.value&&t.value===-1?10:t.value),ze=h(()=>q.value||g.value||!1),nl=h(()=>y.value!==void 0?y.value:I.value!==void 0?I.value:!0),oe=h(()=>{if(_.value){let l=Pe.value||[],s=[];return l.forEach(O=>{Ge(O[U.value]).forEach(V=>{s.push(Object.assign({},V,O[R.value]?{[R.value]:!0}:{}))})}),s}else{let l=Ge(ie.value||[]);return ye.value.length&&(l=l.concat(ye.value)),l}}),He=h(()=>{let l=oe.value;return te.value&&(l=l.reverse()),fe.value.length&&(l=fe.value.concat(l)),Me(l)}),Oe=h(()=>{let l=He.value;return De.value>0&&(l=l.slice(0,De.value)),l}),Pe=h(()=>{if(!_.value)return[];let l=[],s=ie.value||[];return ye.value.length&&l.push({[W.value]:" ",[U.value]:[...ye.value],__CREATE__:!0}),l.concat(s)}),ul=h(()=>{let l=[...Pe.value].map(s=>({...s}));return fe.value.length&&(l[0]&&l[0].__CREATE__?l[0][U.value]=[...fe.value,...l[0][U.value]]:l=[{[W.value]:" ",[U.value]:[...fe.value],__CREATE__:!0}].concat(l)),l}),We=h(()=>{if(!_.value)return[];let l=ul.value;return Ol((l||[]).map((s,O)=>{const V=Ge(s[U.value]);return{...s,index:O,group:!0,[U.value]:Me(V,!1).map(Se=>Object.assign({},Se,s[R.value]?{[R.value]:!0}:{})),__VISIBLE__:Me(V).map(Se=>Object.assign({},Se,s[R.value]?{[R.value]:!0}:{}))}}))}),Be=h(()=>{switch(n.value){case"single":return!ae(T.value[p.value]);case"multiple":case"tags":return!ae(T.value)&&T.value.length>0}}),sl=h(()=>S!==void 0&&S.value!==void 0?S.value(T.value,J):T.value&&T.value.length>1?`${T.value.length} options selected`:"1 option selected"),rl=h(()=>!oe.value.length&&!ee.value&&!fe.value.length),il=h(()=>oe.value.length>0&&Oe.value.length==0&&(f.value&&_.value||!_.value)),fe=h(()=>ze.value===!1||!f.value?[]:bl(f.value)!==-1?[]:[{[p.value]:f.value,[le.value]:f.value,[c.value]:f.value,__CREATE__:!0}]),le=h(()=>m.value||c.value),ol=h(()=>{switch(n.value){case"single":return null;case"multiple":case"tags":return[]}}),cl=h(()=>A.value||ee.value),pe=l=>{switch(typeof l!="object"&&(l=se(l)),n.value){case"single":ne(l);break;case"multiple":case"tags":ne(T.value.concat(l));break}o.emit("select",Ue(l),l,J)},he=l=>{switch(typeof l!="object"&&(l=se(l)),n.value){case"single":Qe();break;case"tags":case"multiple":ne(Array.isArray(l)?T.value.filter(s=>l.map(O=>O[p.value]).indexOf(s[p.value])===-1):T.value.filter(s=>s[p.value]!=l[p.value]));break}o.emit("deselect",Ue(l),l,J)},Ue=l=>w.value?l:l[p.value],Je=l=>{he(l)},dl=(l,s)=>{if(s.button!==0){s.preventDefault();return}Je(l)},Qe=()=>{o.emit("clear",J),ne(ol.value)},ue=l=>{if(l.group!==void 0)return n.value==="single"?!1:gl(l[U.value])&&l[U.value].length;switch(n.value){case"single":return!ae(T.value)&&T.value[p.value]==l[p.value];case"tags":case"multiple":return!ae(T.value)&&T.value.map(s=>s[p.value]).indexOf(l[p.value])!==-1}},Ae=l=>l[R.value]===!0,Re=()=>X===void 0||X.value===-1||!Be.value&&X.value>0?!1:T.value.length>=X.value,vl=l=>{if(!Ae(l)){if(B&&B.value&&!ue(l)&&l.__CREATE__&&(l={...l},delete l.__CREATE__,l=B.value(l,J),l instanceof Promise)){ee.value=!0,l.then(s=>{ee.value=!1,Xe(s)});return}Xe(l)}},Xe=l=>{switch(l.__CREATE__&&(l={...l},delete l.__CREATE__),n.value){case"single":if(l&&ue(l)){j.value&&he(l),L.value&&(de(),ve());return}l&&je(l),H.value&&Y(),d.value&&(de(),ve()),l&&pe(l);break;case"multiple":if(l&&ue(l)){he(l),L.value&&(de(),ve());return}if(Re()){o.emit("max",J);return}l&&(je(l),pe(l)),H.value&&Y(),v.value&&de(),d.value&&ve();break;case"tags":if(l&&ue(l)){he(l),L.value&&(de(),ve());return}if(Re()){o.emit("max",J);return}l&&je(l),H.value&&Y(),l&&pe(l),v.value&&de(),d.value&&ve();break}d.value||ll()},fl=l=>{if(!(Ae(l)||n.value==="single"||!P.value)){switch(n.value){case"multiple":case"tags":hl(l[U.value])?he(l[U.value]):pe(l[U.value].filter(s=>T.value.map(O=>O[p.value]).indexOf(s[p.value])===-1).filter(s=>!s[R.value]).filter((s,O)=>T.value.length+1+O<=X.value||X.value===-1));break}d.value&&al()}},je=l=>{se(l[p.value])===void 0&&ze.value&&(o.emit("tag",l[p.value],J),o.emit("option",l[p.value],J),o.emit("create",l[p.value],J),nl.value&&yl(l),Y())},pl=()=>{n.value!=="single"&&pe(Oe.value.filter(l=>!l.disabled&&!ue(l)))},hl=l=>l.find(s=>!ue(s)&&!s[R.value])===void 0,gl=l=>l.find(s=>!ue(s))===void 0,se=l=>oe.value[oe.value.map(s=>String(s[p.value])).indexOf(String(l))],bl=(l,s=!0)=>oe.value.map(O=>parseInt(O[le.value])==O[le.value]?parseInt(O[le.value]):O[le.value]).indexOf(parseInt(l)==l?parseInt(l):l),ml=l=>["tags","multiple"].indexOf(n.value)!==-1&&v.value&&ue(l),yl=l=>{ye.value.push(l)},Ol=l=>we.value?l.filter(s=>f.value?s.__VISIBLE__.length:s[U.value].length):l.filter(s=>f.value?s.__VISIBLE__.length:!0),Me=(l,s=!0)=>{let O=l;if(f.value&&C.value){let V=me.value;V||(V=(Se,sa)=>{let Ze=Fe(tl(Se[le.value]),$.value);return re.value?Ze.startsWith(Fe(f.value,$.value)):Ze.indexOf(Fe(f.value,$.value))!==-1}),O=O.filter(V)}return v.value&&s&&(O=O.filter(V=>!ml(V))),O},Ge=l=>{let s=l;return ql(s)&&(s=Object.keys(s).map(O=>{let V=s[O];return{[p.value]:O,[le.value]:V,[c.value]:V}})),s=s.map(O=>typeof O=="object"?O:{[p.value]:O,[le.value]:O,[c.value]:O}),s},Te=()=>{ae(u.value)||(T.value=Ee(u.value))},qe=l=>(ee.value=!0,new Promise((s,O)=>{i.value(f.value,J).then(V=>{ie.value=V||[],typeof l=="function"&&l(V),ee.value=!1}).catch(V=>{console.error(V),ie.value=[],ee.value=!1}).finally(()=>{s()})})),Ve=()=>{if(Be.value)if(n.value==="single"){let l=se(T.value[p.value]);if(l!==void 0){let s=l[c.value];T.value[c.value]=s,w.value&&(u.value[c.value]=s)}}else T.value.forEach((l,s)=>{let O=se(T.value[s][p.value]);if(O!==void 0){let V=O[c.value];T.value[s][c.value]=V,w.value&&(u.value[s][c.value]=V)}})},Sl=l=>{qe(l)},Ee=l=>ae(l)?n.value==="single"?{}:[]:w.value?l:n.value==="single"?se(l)||(F.value?{[c.value]:l,[p.value]:l,[le.value]:l}:{}):l.filter(s=>!!se(s)||F.value).map(s=>se(s)||{[c.value]:s,[p.value]:s,[le.value]:s}),Ye=()=>{Ie.value=x(f,l=>{l.length<r.value||!l&&r.value!==0||(ee.value=!0,M.value&&(ie.value=[]),setTimeout(()=>{l==f.value&&i.value(f.value,J).then(s=>{(l==f.value||!f.value)&&(ie.value=s,el.value=Oe.value.filter(O=>O[R.value]!==!0)[0]||null,ee.value=!1)}).catch(s=>{console.error(s)})},D.value))},{flush:"sync"})};if(n.value!=="single"&&!ae(u.value)&&!Array.isArray(u.value))throw new Error(`v-model must be an array when using "${n.value}" mode`);return i&&typeof i.value=="function"?b.value?qe(Te):w.value==!0&&Te():(ie.value=i.value,Te()),D.value>-1&&Ye(),x(D,(l,s)=>{Ie.value&&Ie.value(),l>=0&&Ye()}),x(u,l=>{if(ae(l)){ne(Ee(l),!1);return}switch(n.value){case"single":(w.value?l[p.value]!=T.value[p.value]:l!=T.value[p.value])&&ne(Ee(l),!1);break;case"multiple":case"tags":El(w.value?l.map(s=>s[p.value]):l,T.value.map(s=>s[p.value]))||ne(Ee(l),!1);break}},{deep:!0}),x(i,(l,s)=>{typeof e.options=="function"?b.value&&(!s||l&&l.toString()!==s.toString())&&qe():(ie.value=e.options,Object.keys(T.value).length||Te(),Ve())}),x(c,Ve),{pfo:He,fo:Oe,filteredOptions:Oe,hasSelected:Be,multipleLabelText:sl,eo:oe,extendedOptions:oe,eg:Pe,extendedGroups:Pe,fg:We,filteredGroups:We,noOptions:rl,noResults:il,resolving:ee,busy:cl,offset:De,select:pe,deselect:he,remove:Je,selectAll:pl,clear:Qe,isSelected:ue,isDisabled:Ae,isMax:Re,getOption:se,handleOptionClick:vl,handleGroupClick:fl,handleTagRemove:dl,refreshOptions:Sl,resolveOptions:qe,refreshLabels:Ve}}function Il(e,o,a){const{valueProp:i,showOptions:n,searchable:m,groupLabel:t,groups:v,mode:q,groupSelect:g,disabledProp:c,groupOptions:y}=Z(e),I=a.fo,S=a.fg,w=a.handleOptionClick,A=a.handleGroupClick,D=a.search,b=a.pointer,r=a.setPointer,C=a.clearPointer,M=a.multiselect,H=a.isOpen,p=h(()=>I.value.filter(u=>!u[c.value])),F=h(()=>S.value.filter(u=>!u[c.value])),W=h(()=>q.value!=="single"&&g.value),j=h(()=>b.value&&b.value.group),X=h(()=>J(b.value)),$=h(()=>{const u=j.value?b.value:J(b.value),f=F.value.map(ne=>ne[t.value]).indexOf(u[t.value]);let Y=F.value[f-1];return Y===void 0&&(Y=L.value),Y}),d=h(()=>{let u=F.value.map(f=>f.label).indexOf(j.value?b.value[t.value]:J(b.value)[t.value])+1;return F.value.length<=u&&(u=0),F.value[u]}),L=h(()=>[...F.value].slice(-1)[0]),_=h(()=>b.value.__VISIBLE__.filter(u=>!u[c.value])[0]),te=h(()=>{const u=X.value.__VISIBLE__.filter(f=>!f[c.value]);return u[u.map(f=>f[i.value]).indexOf(b.value[i.value])-1]}),be=h(()=>{const u=J(b.value).__VISIBLE__.filter(f=>!f[c.value]);return u[u.map(f=>f[i.value]).indexOf(b.value[i.value])+1]}),U=h(()=>[...$.value.__VISIBLE__.filter(u=>!u[c.value])].slice(-1)[0]),we=h(()=>[...L.value.__VISIBLE__.filter(u=>!u[c.value])].slice(-1)[0]),P=u=>b.value&&(!u.group&&b.value[i.value]===u[i.value]||u.group!==void 0&&b.value[t.value]===u[t.value])?!0:void 0,B=()=>{r(p.value[0]||null)},R=()=>{!b.value||b.value[c.value]===!0||(j.value?A(b.value):w(b.value))},re=()=>{if(b.value===null)r((v.value&&W.value?F.value[0].__CREATE__?p.value[0]:F.value[0]:p.value[0])||null);else if(v.value&&W.value){let u=j.value?_.value:be.value;u===void 0&&(u=d.value,u.__CREATE__&&(u=u[y.value][0])),r(u||null)}else{let u=p.value.map(f=>f[i.value]).indexOf(b.value[i.value])+1;p.value.length<=u&&(u=0),r(p.value[u]||null)}Ce(()=>{T()})},me=()=>{if(b.value===null){let u=p.value[p.value.length-1];v.value&&W.value&&(u=we.value,u===void 0&&(u=L.value)),r(u||null)}else if(v.value&&W.value){let u=j.value?U.value:te.value;u===void 0&&(u=j.value?$.value:X.value,u.__CREATE__&&(u=U.value,u===void 0&&(u=$.value))),r(u||null)}else{let u=p.value.map(f=>f[i.value]).indexOf(b.value[i.value])-1;u<0&&(u=p.value.length-1),r(p.value[u]||null)}Ce(()=>{T()})},J=u=>F.value.find(f=>f.__VISIBLE__.map(Y=>Y[i.value]).indexOf(u[i.value])!==-1),T=()=>{let u=M.value.querySelector("[data-pointed]");if(!u)return;let f=u.parentElement.parentElement;v.value&&(f=j.value?u.parentElement.parentElement.parentElement:u.parentElement.parentElement.parentElement.parentElement),u.offsetTop+u.offsetHeight>f.clientHeight+f.scrollTop&&(f.scrollTop=u.offsetTop+u.offsetHeight-f.clientHeight),u.offsetTop<f.scrollTop&&(f.scrollTop=u.offsetTop)};return x(D,u=>{m.value&&(u.length&&n.value?B():C())}),x(H,u=>{if(u){let f=M.value.querySelectorAll("[data-selected]")[0];if(!f)return;let Y=f.parentElement.parentElement;Ce(()=>{Y.scrollTop>0||(Y.scrollTop=f.offsetTop)})}}),{pointer:b,canPointGroups:W,isPointed:P,setPointerFirst:B,selectPointer:R,forwardPointer:re,backwardPointer:me}}function Dl(e,o,a){const{disabled:i}=Z(e),n=ke().proxy,m=z(!1);return{isOpen:m,open:()=>{m.value||i.value||(m.value=!0,o.emit("open",n))},close:()=>{m.value&&(m.value=!1,o.emit("close",n))}}}function Bl(e,o,a){const{searchable:i,disabled:n,clearOnBlur:m}=Z(e),t=a.input,v=a.open,q=a.close,g=a.clearSearch,c=a.isOpen,y=z(null),I=z(null),S=z(null),w=z(!1),A=z(!1),D=h(()=>i.value||n.value?-1:0),b=()=>{i.value&&t.value.blur(),I.value.blur()},r=()=>{i.value&&!n.value&&t.value.focus()},C=(j=!0)=>{n.value||(w.value=!0,j&&v())},M=()=>{w.value=!1,setTimeout(()=>{w.value||(q(),m.value&&g())},1)};return{multiselect:y,wrapper:I,tags:S,tabindex:D,isActive:w,mouseClicked:A,blur:b,focus:r,activate:C,deactivate:M,handleFocusIn:j=>{j.target.closest("[data-tags]")&&j.target.nodeName!=="INPUT"||j.target.closest("[data-clear]")||C(A.value)},handleFocusOut:()=>{M()},handleCaretClick:()=>{M(),b()},handleMousedown:j=>{A.value=!0,c.value&&(j.target.isEqualNode(I.value)||j.target.isEqualNode(S.value))?setTimeout(()=>{M()},0):document.activeElement.isEqualNode(I.value)&&!c.value&&C(),setTimeout(()=>{A.value=!1},0)}}}function Al(e,o,a){const{mode:i,addTagOn:n,openDirection:m,searchable:t,showOptions:v,valueProp:q,groups:g,addOptionOn:c,createTag:y,createOption:I,reverse:S}=Z(e),w=ke().proxy,A=a.iv,D=a.update,b=a.search,r=a.setPointer,C=a.selectPointer,M=a.backwardPointer,H=a.forwardPointer,p=a.multiselect,F=a.wrapper,W=a.tags,j=a.isOpen,X=a.open,$=a.blur,d=a.fo,L=h(()=>y.value||I.value||!1),_=h(()=>n.value!==void 0?n.value:c.value!==void 0?c.value:["enter"]),te=()=>{i.value==="tags"&&!v.value&&L.value&&t.value&&!g.value&&r(d.value[d.value.map(P=>P[q.value]).indexOf(b.value)])},be=P=>{let B=P.length-1;for(;B>=0&&(P[B].remove===!1||P[B].disabled);)B--;return B<0||P.splice(B,1),P};return{handleKeydown:P=>{o.emit("keydown",P,w);let B,R;switch(["ArrowLeft","ArrowRight","Enter"].indexOf(P.key)!==-1&&i.value==="tags"&&(B=[...p.value.querySelectorAll("[data-tags] > *")].filter(re=>re!==W.value),R=B.findIndex(re=>re===document.activeElement)),P.key){case"Backspace":if(i.value==="single"||t.value&&[null,""].indexOf(b.value)===-1||A.value.length===0)return;D(be([...A.value]));break;case"Enter":if(P.preventDefault(),P.keyCode===229)return;if(R!==-1&&R!==void 0){D([...A.value].filter((re,me)=>me!==R)),R===B.length-1&&(B.length-1?B[B.length-2].focus():t.value?W.value.querySelector("input").focus():F.value.focus());return}if(_.value.indexOf("enter")===-1&&L.value)return;te(),C();break;case" ":if(!L.value&&!t.value){P.preventDefault(),te(),C();return}if(!L.value)return!1;if(_.value.indexOf("space")===-1&&L.value)return;P.preventDefault(),te(),C();break;case"Tab":case";":case",":if(_.value.indexOf(P.key.toLowerCase())===-1||!L.value)return;te(),C(),P.preventDefault();break;case"Escape":$();break;case"ArrowUp":if(P.preventDefault(),!v.value)return;j.value||X(),M();break;case"ArrowDown":if(P.preventDefault(),!v.value)return;j.value||X(),H();break;case"ArrowLeft":if(t.value&&W.value&&W.value.querySelector("input").selectionStart||P.shiftKey||i.value!=="tags"||!A.value||!A.value.length)return;P.preventDefault(),R===-1?B[B.length-1].focus():R>0&&B[R-1].focus();break;case"ArrowRight":if(R===-1||P.shiftKey||i.value!=="tags"||!A.value||!A.value.length)return;P.preventDefault(),B.length>R+1?B[R+1].focus():t.value?W.value.querySelector("input").focus():t.value||F.value.focus();break}},handleKeyup:P=>{o.emit("keyup",P,w)},preparePointer:te}}function Rl(e,o,a){const{classes:i,disabled:n,openDirection:m,showOptions:t}=Z(e),v=a.isOpen,q=a.isPointed,g=a.isSelected,c=a.isDisabled,y=a.isActive,I=a.canPointGroups,S=a.resolving,w=a.fo,A=h(()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...i.value})),D=h(()=>!!(v.value&&t.value&&(!S.value||S.value&&w.value.length)));return{classList:h(()=>{const r=A.value;return{container:[r.container].concat(n.value?r.containerDisabled:[]).concat(D.value&&m.value==="top"?r.containerOpenTop:[]).concat(D.value&&m.value!=="top"?r.containerOpen:[]).concat(y.value?r.containerActive:[]),wrapper:r.wrapper,spacer:r.spacer,singleLabel:r.singleLabel,singleLabelText:r.singleLabelText,multipleLabel:r.multipleLabel,search:r.search,tags:r.tags,tag:[r.tag].concat(n.value?r.tagDisabled:[]),tagDisabled:r.tagDisabled,tagRemove:r.tagRemove,tagRemoveIcon:r.tagRemoveIcon,tagsSearchWrapper:r.tagsSearchWrapper,tagsSearch:r.tagsSearch,tagsSearchCopy:r.tagsSearchCopy,placeholder:r.placeholder,caret:[r.caret].concat(v.value?r.caretOpen:[]),clear:r.clear,clearIcon:r.clearIcon,spinner:r.spinner,inifinite:r.inifinite,inifiniteSpinner:r.inifiniteSpinner,dropdown:[r.dropdown].concat(m.value==="top"?r.dropdownTop:[]).concat(!v.value||!t.value||!D.value?r.dropdownHidden:[]),options:[r.options].concat(m.value==="top"?r.optionsTop:[]),group:r.group,groupLabel:C=>{let M=[r.groupLabel];return q(C)?M.push(g(C)?r.groupLabelSelectedPointed:r.groupLabelPointed):g(C)&&I.value?M.push(c(C)?r.groupLabelSelectedDisabled:r.groupLabelSelected):c(C)&&M.push(r.groupLabelDisabled),I.value&&M.push(r.groupLabelPointable),M},groupOptions:r.groupOptions,option:(C,M)=>{let H=[r.option];return q(C)?H.push(g(C)?r.optionSelectedPointed:r.optionPointed):g(C)?H.push(c(C)?r.optionSelectedDisabled:r.optionSelected):(c(C)||M&&c(M))&&H.push(r.optionDisabled),H},noOptions:r.noOptions,noResults:r.noResults,assist:r.assist,fakeInput:r.fakeInput}}),showDropdown:D}}function jl(e,o,a){const{limit:i,infinite:n}=Z(e),m=a.isOpen,t=a.offset,v=a.search,q=a.pfo,g=a.eo,c=z(null),y=z(null),I=h(()=>t.value<q.value.length),S=A=>{const{isIntersecting:D,target:b}=A[0];if(D){const r=b.offsetParent,C=r.scrollTop;t.value+=i.value==-1?10:i.value,Ce(()=>{r.scrollTop=C})}},w=()=>{m.value&&t.value<q.value.length?c.value.observe(y.value):!m.value&&c.value&&c.value.disconnect()};return x(m,()=>{n.value&&w()}),x(v,()=>{n.value&&(t.value=i.value,w())},{flush:"post"}),x(g,()=>{n.value&&w()},{immediate:!1,flush:"post"}),_e(()=>{window&&window.IntersectionObserver&&(c.value=new IntersectionObserver(S))}),{hasMore:I,infiniteLoader:y}}function Ml(e,o,a){const{placeholder:i,id:n,valueProp:m,label:t,mode:v,groupLabel:q,aria:g,searchable:c}=Z(e),y=a.pointer,I=a.iv,S=a.hasSelected,w=a.multipleLabelText,A=z(null),D=h(()=>{let d=[];return n&&n.value&&d.push(n.value),d.push("assist"),d.join("-")}),b=h(()=>{let d=[];return n&&n.value&&d.push(n.value),d.push("multiselect-options"),d.join("-")}),r=h(()=>{let d=[];if(n&&n.value&&d.push(n.value),y.value)return d.push(y.value.group?"multiselect-group":"multiselect-option"),d.push(y.value.group?y.value.index:y.value[m.value]),d.join("-")}),C=h(()=>i.value),M=h(()=>v.value!=="single"),H=h(()=>{let d="";return v.value==="single"&&S.value&&(d+=I.value[t.value]),v.value==="multiple"&&S.value&&(d+=w.value),v.value==="tags"&&S.value&&(d+=I.value.map(L=>L[t.value]).join(", ")),d}),p=h(()=>{let d={...g.value};return c.value&&(d["aria-labelledby"]=d["aria-labelledby"]?`${D.value} ${d["aria-labelledby"]}`:D.value,H.value&&d["aria-label"]&&(d["aria-label"]=`${H.value}, ${d["aria-label"]}`)),d}),F=d=>{let L=[];return n&&n.value&&L.push(n.value),L.push("multiselect-option"),L.push(d[m.value]),L.join("-")},W=d=>{let L=[];return n&&n.value&&L.push(n.value),L.push("multiselect-group"),L.push(d.index),L.join("-")},j=d=>{let L=[];return L.push(d),L.join(" ")},X=d=>{let L=[];return L.push(d),L.join(" ")},$=d=>`${d} ❎`;return _e(()=>{if(n&&n.value&&document&&document.querySelector){let d=document.querySelector(`[for="${n.value}"]`);A.value=d?d.innerText:null}}),{arias:p,ariaLabel:H,ariaAssist:D,ariaControls:b,ariaPlaceholder:C,ariaMultiselectable:M,ariaActiveDescendant:r,ariaOptionId:F,ariaOptionLabel:j,ariaGroupId:W,ariaGroupLabel:X,ariaTagLabel:$}}function Gl(e,o,a){const{locale:i,fallbackLocale:n}=Z(e);return{localize:t=>!t||typeof t!="object"?t:t&&t[i.value]?t[i.value]:t&&i.value&&t[i.value.toUpperCase()]?t[i.value.toUpperCase()]:t&&t[n.value]?t[n.value]:t&&n.value&&t[n.value.toUpperCase()]?t[n.value.toUpperCase()]:t&&Object.keys(t)[0]?t[Object.keys(t)[0]]:""}}function Vl(e,o,a,i={}){return a.forEach(n=>{n&&(i={...i,...n(e,o,i)})}),i}var xe={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max","create"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:[String,Object],required:!1,default:"The list is empty"},noResultsText:{type:[String,Object],required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},closeOnDeselect:{type:Boolean,required:!1,default:!1},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0},locale:{required:!1,type:String,default:null},fallbackLocale:{required:!1,type:String,default:"en"},searchFilter:{required:!1,type:Function,default:null},allowAbsent:{required:!1,type:Boolean,default:!1}},setup(e,o){return Vl(e,o,[Gl,wl,Tl,Dl,Pl,kl,Bl,Cl,jl,Il,Al,Rl,Ml])}};const Kl=["id","dir"],Nl=["tabindex","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],Fl=["type","modelValue","value","autocomplete","id","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],zl=["onKeyup","aria-label"],Hl=["onClick"],Wl=["type","modelValue","value","id","autocomplete","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],Ul=["innerHTML"],Jl=["id"],Ql=["id","aria-label","aria-selected"],Xl=["data-pointed","onMouseenter","onClick"],Yl=["innerHTML"],Zl=["aria-label"],$l=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],_l=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],xl=["innerHTML"],ea=["innerHTML"],la=["value"],aa=["name","value"],ta=["name","value"],na=["id"];function ua(e,o,a,i,n,m){return K(),N("div",{ref:"multiselect",class:E(e.classList.container),id:a.searchable?void 0:a.id,dir:a.rtl?"rtl":void 0,onFocusin:o[10]||(o[10]=(...t)=>e.handleFocusIn&&e.handleFocusIn(...t)),onFocusout:o[11]||(o[11]=(...t)=>e.handleFocusOut&&e.handleFocusOut(...t)),onKeyup:o[12]||(o[12]=(...t)=>e.handleKeyup&&e.handleKeyup(...t)),onKeydown:o[13]||(o[13]=(...t)=>e.handleKeydown&&e.handleKeydown(...t))},[G("div",Ke({class:e.classList.wrapper,onMousedown:o[9]||(o[9]=(...t)=>e.handleMousedown&&e.handleMousedown(...t)),ref:"wrapper",tabindex:e.tabindex,"aria-controls":a.searchable?void 0:e.ariaControls,"aria-placeholder":a.searchable?void 0:e.ariaPlaceholder,"aria-expanded":a.searchable?void 0:e.isOpen,"aria-activedescendant":a.searchable?void 0:e.ariaActiveDescendant,"aria-multiselectable":a.searchable?void 0:e.ariaMultiselectable,role:a.searchable?void 0:"combobox"},a.searchable?{}:e.arias),[k(" Search "),a.mode!=="tags"&&a.searchable&&!a.disabled?(K(),N("input",Ke({key:0,type:a.inputType,modelValue:e.search,value:e.search,class:e.classList.search,autocomplete:a.autocomplete,id:a.searchable?a.id:void 0,onInput:o[0]||(o[0]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onKeypress:o[1]||(o[1]=(...t)=>e.handleKeypress&&e.handleKeypress(...t)),onPaste:o[2]||(o[2]=Ne((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...a.attrs,...e.arias}),null,16,Fl)):k("v-if",!0),k(" Tags (with search) "),a.mode=="tags"?(K(),N("div",{key:1,class:E(e.classList.tags),"data-tags":""},[(K(!0),N(ge,null,Le(e.iv,(t,v,q)=>Q(e.$slots,"tag",{option:t,handleTagRemove:e.handleTagRemove,disabled:a.disabled},()=>[(K(),N("span",{class:E([e.classList.tag,t.disabled?e.classList.tagDisabled:null]),tabindex:"-1",onKeyup:$e(g=>e.handleTagRemove(t,g),["enter"]),key:q,"aria-label":e.ariaTagLabel(e.localize(t[a.label]))},[Ll(ce(e.localize(t[a.label]))+" ",1),!a.disabled&&!t.disabled?(K(),N("span",{key:0,class:E(e.classList.tagRemove),onClick:Ne(g=>e.handleTagRemove(t,g),["stop"])},[G("span",{class:E(e.classList.tagRemoveIcon)},null,2)],10,Hl)):k("v-if",!0)],42,zl))])),256)),G("div",{class:E(e.classList.tagsSearchWrapper),ref:"tags"},[k(" Used for measuring search width "),G("span",{class:E(e.classList.tagsSearchCopy)},ce(e.search),3),k(" Actual search input "),a.searchable&&!a.disabled?(K(),N("input",Ke({key:0,type:a.inputType,modelValue:e.search,value:e.search,class:e.classList.tagsSearch,id:a.searchable?a.id:void 0,autocomplete:a.autocomplete,onInput:o[3]||(o[3]=(...t)=>e.handleSearchInput&&e.handleSearchInput(...t)),onKeypress:o[4]||(o[4]=(...t)=>e.handleKeypress&&e.handleKeypress(...t)),onPaste:o[5]||(o[5]=Ne((...t)=>e.handlePaste&&e.handlePaste(...t),["stop"])),ref:"input","aria-controls":e.ariaControls,"aria-placeholder":e.ariaPlaceholder,"aria-expanded":e.isOpen,"aria-activedescendant":e.ariaActiveDescendant,"aria-multiselectable":e.ariaMultiselectable,role:"combobox"},{...a.attrs,...e.arias}),null,16,Wl)):k("v-if",!0)],2)],2)):k("v-if",!0),k(" Single label "),a.mode=="single"&&e.hasSelected&&!e.search&&e.iv?Q(e.$slots,"singlelabel",{key:2,value:e.iv},()=>[G("div",{class:E(e.classList.singleLabel)},[G("span",{class:E(e.classList.singleLabelText)},ce(e.localize(e.iv[a.label])),3)],2)]):k("v-if",!0),k(" Multiple label "),a.mode=="multiple"&&e.hasSelected&&!e.search?Q(e.$slots,"multiplelabel",{key:3,values:e.iv},()=>[G("div",{class:E(e.classList.multipleLabel),innerHTML:e.multipleLabelText},null,10,Ul)]):k("v-if",!0),k(" Placeholder "),a.placeholder&&!e.hasSelected&&!e.search?Q(e.$slots,"placeholder",{key:4},()=>[G("div",{class:E(e.classList.placeholder),"aria-hidden":"true"},ce(a.placeholder),3)]):k("v-if",!0),k(" Spinner "),a.loading||e.resolving?Q(e.$slots,"spinner",{key:5},()=>[G("span",{class:E(e.classList.spinner),"aria-hidden":"true"},null,2)]):k("v-if",!0),k(" Clear "),e.hasSelected&&!a.disabled&&a.canClear&&!e.busy?Q(e.$slots,"clear",{key:6,clear:e.clear},()=>[G("span",{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎",class:E(e.classList.clear),onClick:o[6]||(o[6]=(...t)=>e.clear&&e.clear(...t)),onKeyup:o[7]||(o[7]=$e((...t)=>e.clear&&e.clear(...t),["enter"]))},[G("span",{class:E(e.classList.clearIcon)},null,2)],34)]):k("v-if",!0),k(" Caret "),a.caret&&a.showOptions?Q(e.$slots,"caret",{key:7},()=>[G("span",{class:E(e.classList.caret),onClick:o[8]||(o[8]=(...t)=>e.handleCaretClick&&e.handleCaretClick(...t)),"aria-hidden":"true"},null,2)]):k("v-if",!0)],16,Nl),k(" Options "),G("div",{class:E(e.classList.dropdown),tabindex:"-1"},[Q(e.$slots,"beforelist",{options:e.fo}),G("ul",{class:E(e.classList.options),id:e.ariaControls,role:"listbox"},[a.groups?(K(!0),N(ge,{key:0},Le(e.fg,(t,v,q)=>(K(),N("li",{class:E(e.classList.group),key:q,id:e.ariaGroupId(t),"aria-label":e.ariaGroupLabel(e.localize(t[a.groupLabel])),"aria-selected":e.isSelected(t),role:"option"},[t.__CREATE__?k("v-if",!0):(K(),N("div",{key:0,class:E(e.classList.groupLabel(t)),"data-pointed":e.isPointed(t),onMouseenter:g=>e.setPointer(t,v),onClick:g=>e.handleGroupClick(t)},[Q(e.$slots,"grouplabel",{group:t,isSelected:e.isSelected,isPointed:e.isPointed},()=>[G("span",{innerHTML:e.localize(t[a.groupLabel])},null,8,Yl)])],42,Xl)),G("ul",{class:E(e.classList.groupOptions),"aria-label":e.ariaGroupLabel(e.localize(t[a.groupLabel])),role:"group"},[(K(!0),N(ge,null,Le(t.__VISIBLE__,(g,c,y)=>(K(),N("li",{class:E(e.classList.option(g,t)),"data-pointed":e.isPointed(g),"data-selected":e.isSelected(g)||void 0,key:y,onMouseenter:I=>e.setPointer(g),onClick:I=>e.handleOptionClick(g),id:e.ariaOptionId(g),"aria-selected":e.isSelected(g),"aria-label":e.ariaOptionLabel(e.localize(g[a.label])),role:"option"},[Q(e.$slots,"option",{option:g,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},()=>[G("span",null,ce(e.localize(g[a.label])),1)])],42,$l))),128))],10,Zl)],10,Ql))),128)):(K(!0),N(ge,{key:1},Le(e.fo,(t,v,q)=>(K(),N("li",{class:E(e.classList.option(t)),"data-pointed":e.isPointed(t),"data-selected":e.isSelected(t)||void 0,key:q,onMouseenter:g=>e.setPointer(t),onClick:g=>e.handleOptionClick(t),id:e.ariaOptionId(t),"aria-selected":e.isSelected(t),"aria-label":e.ariaOptionLabel(e.localize(t[a.label])),role:"option"},[Q(e.$slots,"option",{option:t,isSelected:e.isSelected,isPointed:e.isPointed,search:e.search},()=>[G("span",null,ce(e.localize(t[a.label])),1)])],42,_l))),128))],10,Jl),e.noOptions?Q(e.$slots,"nooptions",{key:0},()=>[G("div",{class:E(e.classList.noOptions),innerHTML:e.localize(a.noOptionsText)},null,10,xl)]):k("v-if",!0),e.noResults?Q(e.$slots,"noresults",{key:1},()=>[G("div",{class:E(e.classList.noResults),innerHTML:e.localize(a.noResultsText)},null,10,ea)]):k("v-if",!0),a.infinite&&e.hasMore?(K(),N("div",{key:2,class:E(e.classList.inifinite),ref:"infiniteLoader"},[Q(e.$slots,"infinite",{},()=>[G("span",{class:E(e.classList.inifiniteSpinner)},null,2)])],2)):k("v-if",!0),Q(e.$slots,"afterlist",{options:e.fo})],2),k(" Hacky input element to show HTML5 required warning "),a.required?(K(),N("input",{key:0,class:E(e.classList.fakeInput),tabindex:"-1",value:e.textValue,required:""},null,10,la)):k("v-if",!0),k(" Native input support "),a.nativeSupport?(K(),N(ge,{key:1},[a.mode=="single"?(K(),N("input",{key:0,type:"hidden",name:a.name,value:e.plainValue!==void 0?e.plainValue:""},null,8,aa)):(K(!0),N(ge,{key:1},Le(e.plainValue,(t,v)=>(K(),N("input",{type:"hidden",name:`${a.name}[]`,value:t,key:v},null,8,ta))),128))],64)):k("v-if",!0),k(" Screen reader assistive text "),a.searchable&&e.hasSelected?(K(),N("div",{key:2,class:E(e.classList.assist),id:e.ariaAssist,"aria-hidden":"true"},ce(e.ariaLabel),11,na)):k("v-if",!0),k(" Create height for empty input "),G("div",{class:E(e.classList.spacer)},null,2)],42,Kl)}xe.render=ua;xe.__file="src/Multiselect.vue";export{xe as s};
