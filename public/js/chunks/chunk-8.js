(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"96hK":function(t,e,n){"use strict";var i=n("ThoS");n.n(i).a},CtO9:function(t,e,n){"use strict";e.a={methods:{can:function(){if(this.environment.user.hasOwnProperty("permissions"))for(var t=0;t<arguments.length;t++){if(JSON.parse(this.environment.user.permissions).hasOwnProperty(arguments[t]))return!0}return!1},cannot:function(t){return!this.can(t)}}}},ThoS:function(t,e,n){var i=n("teT6");"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(t.exports=i.locals)},dPci:function(t,e,n){"use strict";n.r(e);var i=n("jx1L"),r=n("mR/U"),s=n("CtO9"),a={name:"contactTypes",uri:"contact-types"},o={mixins:[i.a,r.a,s.a],data:function(){return{service:a}}},c=(n("96hK"),n("KHd+")),u=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-4"},[n("app-table-panel",{attrs:{title:"Tipos de Contato ("+t.pagination.total+")","add-button":{uri:"/contact-types/create",disabled:t.cannot("create")},"per-page":t.perPage,"filter-text":t.filterText},on:{"input-filter-text":function(e){t.filterText=e.target.value},"set-per-page":function(e){t.perPage=e}}},[n("app-table",{attrs:{pagination:t.pagination,columns:["#","Nome","Código",""]},on:{"goto-page":function(e){t.gotoPage(e)}}},t._l(t.contactTypes.data.rows,function(e){return n("tr",{class:{"cursor-pointer":!0,"bg-primary-lighter text-white":t.isCurrent(e,t.selected)},on:{click:function(n){t.select(e)}}},[n("td",{staticClass:"align-middle"},[t._v(t._s(e.id))]),t._v(" "),n("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"align-middle"},[t._v(t._s(e.code))]),t._v(" "),n("td",{staticClass:"align-middle text-right"},[n("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/contact-types/"+e.id+"/update",tag:"button",disabled:t.cannot("create"),title:"Editar Tipo de Contato"}},[n("i",{staticClass:"fa fa-edit"})])],1)])}),0)],1)],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-2 text-center"},[e("h2",[this._v("Categorias")])])}],!1,null,null,null);u.options.__file="ContactTypes.vue";e.default=u.exports},jx1L:function(t,e,n){"use strict";e.a={data:function(){return{loading:{environment:!1,table:!1}}},computed:{filterText:{get:function(){return this.$store.state[this.service.name].data.filter.text},set:function(t){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",t)}},emptyForm:function(){return this.$store.state[this.service.name].emptyForm},form:function(){return this.$store.state[this.service.name].form},selected:function(){return this.$store.state[this.service.name].selected},environment:function(){return this.$store.state.environment},pagination:function(){return this.$store.state[this.service.name].data.links?this.$store.state[this.service.name].data.links.pagination:{}},perPage:{get:function(){return this.pagination.per_page},set:function(t){this.$store.dispatch(this.service.name+"/setPerPage",t)}}},methods:{load:function(){return this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page),this.$store.dispatch(this.service.name+"/load")},select:function(t){return this.$store.dispatch(this.service.name+"/select",t)},save:function(t){return this.$store.dispatch(this.service.name+"/save",t)},mutateSetErrors:function(t){this.$store.commit(this.service.name+"/mutateSetErrors",t)},mutateFormData:function(t){this.$store.commit(this.service.name+"/mutateFormData",t)},mutateSetFormField:function(t){this.$store.commit(this.service.name+"/mutateSetFormField",t)},mutateSetService:function(t){this.$store.commit(this.service.name+"/mutateSetService",t)},isLoading:function(){return this.loading.environment||this.loading.table},boot:function(){var t=this;this.mutateSetService(this.service),!this.service.hasOwnProperty("performLoad")||this.service.performLoad?this.load().then(function(){t.fillFormWhenEditing()}):this.fillFormWhenEditing(),this.$store.dispatch(this.service.name+"/subscribeToTableEvents")},fillFormWhenEditing:function(){var t=this,e="update"===this.mode?_.find(this.rows,function(e){return e.id===t.$route.params.id}):this.form?clone(this.emptyForm):{};this.mutateFormData(e),this.mutateSetErrors({}),this.fillAdditionalFormFields()},fillAdditionalFormFields:function(){},back:function(){this.$router.back()},saveModel:function(){var t=this;this.save(this.mode).then(function(){t.back(),t.clearForm()})},gotoPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(n=n||this.pagination).current_page!==t&&(t<1||t>n.last_page||this.$store.dispatch((e||this.service.name)+"/setCurrentPage",t))},isCurrent:function(t,e){return t.id===e.id},setPerPage:function(){this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page)},getDataUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getUpdateStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)}},mounted:function(){this.boot()}}},"mR/U":function(t,e,n){"use strict";var i=n("L2JU");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={methods:r({},Object(i.mapActions)("contactTypes",["clearForm"])),computed:r({},Object(i.mapState)({contactTypes:function(t){return t.contactTypes}}))}},teT6:function(t,e,n){(t.exports=n("I1BE")(!1)).push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}}]);