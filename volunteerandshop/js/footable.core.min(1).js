/*
* FooTable v3 - FooTable is a jQuery plugin that aims to make HTML tables on smaller devices look awesome.
* @version 3.1.5
* @link http://fooplugins.com
* @copyright Steven Usher & Brad Vincent 2015
* @license Released under the GPLv3 license.
*/
!function(a,b){window.console=window.console||{log:function(){},error:function(){}},a.fn.footable=function(a,c){return a=a||{},this.filter("table").each(function(d,e){b.init(e,a,c)})};var c={events:[]};b.__debug__=JSON.parse(localStorage.getItem("footable_debug"))||!1,b.__debug_options__=JSON.parse(localStorage.getItem("footable_debug_options"))||c,b.debug=function(d,e){return b.is["boolean"](d)?(b.__debug__=d,void(b.__debug__?(localStorage.setItem("footable_debug",JSON.stringify(b.__debug__)),b.__debug_options__=a.extend(!0,{},c,e||{}),b.is.hash(e)&&localStorage.setItem("footable_debug_options",JSON.stringify(b.__debug_options__))):(localStorage.removeItem("footable_debug"),localStorage.removeItem("footable_debug_options")))):b.__debug__},b.get=function(b){return a(b).first().data("__FooTable__")},b.init=function(a,c,d){var e=b.get(a);return e instanceof b.Table&&e.destroy(),new b.Table(a,c,d)},b.getRow=function(b){var c=a(b).closest("tr");return c.hasClass("footable-detail-row")&&(c=c.prev()),c.data("__FooTableRow__")}}(jQuery,FooTable=window.FooTable||{}),function(a){var b=function(){return!0};a.arr={},a.arr.each=function(b,c){if(a.is.array(b)&&a.is.fn(c))for(var d=0,e=b.length;e>d&&c(b[d],d)!==!1;d++);},a.arr.get=function(b,c){var d=[];if(!a.is.array(b))return d;if(!a.is.fn(c))return b;for(var e=0,f=b.length;f>e;e++)c(b[e],e)&&d.push(b[e]);return d},a.arr.any=function(c,d){if(!a.is.array(c))return!1;d=a.is.fn(d)?d:b;for(var e=0,f=c.length;f>e;e++)if(d(c[e],e))return!0;return!1},a.arr.contains=function(b,c){if(!a.is.array(b)||a.is.undef(c))return!1;for(var d=0,e=b.length;e>d;d++)if(b[d]==c)return!0;return!1},a.arr.first=function(c,d){if(!a.is.array(c))return null;d=a.is.fn(d)?d:b;for(var e=0,f=c.length;f>e;e++)if(d(c[e],e))return c[e];return null},a.arr.map=function(b,c){var d=[],e=null;if(!a.is.array(b)||!a.is.fn(c))return d;for(var f=0,g=b.length;g>f;f++)null!=(e=c(b[f],f))&&d.push(e);return d},a.arr.remove=function(b,c){var d=[],e=[];if(!a.is.array(b)||!a.is.fn(c))return e;for(var f=0,g=b.length;g>f;f++)c(b[f],f,e)&&(d.push(f),e.push(b[f]));for(d.sort(function(a,b){return b-a}),f=0,g=d.length;g>f;f++){var h=d[f]-f;b.splice(h,1)}return e},a.arr["delete"]=function(b,c){var d=-1,e=null;if(!a.is.array(b)||a.is.undef(c))return e;for(var f=0,g=b.length;g>f;f++)if(b[f]==c){d=f,e=b[f];break}return-1!=d&&b.splice(d,1),e},a.arr.replace=function(a,b,c){var d=a.indexOf(b);-1!==d&&(a[d]=c)}}(FooTable),function(a){a.is={},a.is.type=function(a,b){return typeof a===b},a.is.defined=function(a){return"undefined"!=typeof a},a.is.undef=function(a){return"undefined"==typeof a},a.is.array=function(a){return"[object Array]"===Object.prototype.toString.call(a)},a.is.date=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())},a.is["boolean"]=function(a){return"[object Boolean]"===Object.prototype.toString.call(a)},a.is.string=function(a){return"[object String]"===Object.prototype.toString.call(a)},a.is.number=function(a){return"[object Number]"===Object.prototype.toString.call(a)&&!isNaN(a)},a.is.fn=function(b){return a.is.defined(window)&&b===window.alert||"[object Function]"===Object.prototype.toString.call(b)},a.is.error=function(a){return"[object Error]"===Object.prototype.toString.call(a)},a.is.object=function(a){return"[object Object]"===Object.prototype.toString.call(a)},a.is.hash=function(b){return a.is.object(b)&&b.constructor===Object&&!b.nodeType&&!b.setInterval},a.is.element=function(a){return"object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName},a.is.promise=function(b){return a.is.object(b)&&a.is.fn(b.then)&&a.is.fn(b.promise)},a.is.jq=function(b){return a.is.defined(window.jQuery)&&b instanceof jQuery&&b.length>0},a.is.moment=function(b){return a.is.defined(window.moment)&&a.is.object(b)&&a.is["boolean"](b._isAMomentObject)},a.is.emptyObject=function(b){if(!a.is.hash(b))return!1;for(var c in b)if(b.hasOwnProperty(c))return!1;return!0},a.is.emptyArray=function(b){return a.is.array(b)?0===b.length:!0},a.is.emptyString=function(b){return a.is.string(b)?0===b.length:!0}}(FooTable),function(a){a.str={},a.str.contains=function(b,c,d){return a.is.emptyString(b)||a.is.emptyString(c)?!1:c.length<=b.length&&-1!==(d?b.toUpperCase().indexOf(c.toUpperCase()):b.indexOf(c))},a.str.containsExact=function(b,c,d){return a.is.emptyString(b)||a.is.emptyString(c)||c.length>b.length?!1:new RegExp("\\b"+a.str.escapeRegExp(c)+"\\b",d?"i":"").test(b)},a.str.containsWord=function(b,c,d){if(a.is.emptyString(b)||a.is.emptyString(c)||b.length<c.length)return!1;for(var e=b.split(/\W/),f=0,g=e.length;g>f;f++)if(d?e[f].toUpperCase()==c.toUpperCase():e[f]==c)return!0;return!1},a.str.from=function(b,c){return a.is.emptyString(b)?b:a.str.contains(b,c)?b.substring(b.indexOf(c)+1):b},a.str.startsWith=function(b,c){return a.is.emptyString(b)?b==c:b.slice(0,c.length)==c},a.str.toCamelCase=function(b){return a.is.emptyString(b)?b:b.toUpperCase()===b?b.toLowerCase():b.replace(/^([A-Z])|[-\s_](\w)/g,function(b,c,d){return a.is.string(d)?d.toUpperCase():c.toLowerCase()})},a.str.random=function(b){return b=a.is.emptyString(b)?"":b,b+Math.random().toString(36).substr(2,9)},a.str.escapeRegExp=function(b){return a.is.emptyString(b)?b:b.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}(FooTable),function(a){"use strict";function b(){}Object.create||(Object.create=function(){var b=function(){};return function(c){if(arguments.length>1)throw Error("Second argument not supported");if(!a.is.object(c))throw TypeError("Argument must be an object");b.prototype=c;var d=new b;return b.prototype=null,d}}());var c=/xyz/.test(function(){xyz})?/\b_super\b/:/.*/;b.__extend__=function(b,d,e,f){b[d]=a.is.fn(f)&&c.test(e)?function(a,b){return function(){var a,c;return a=this._super,this._super=f,c=b.apply(this,arguments),this._super=a,c}}(d,e):e},b.extend=function(d,e){function f(b,d,e,f){b[d]=a.is.fn(f)&&c.test(e)?function(a,b,c){return function(){var a,d;return a=this._super,this._super=c,d=b.apply(this,arguments),this._super=a,d}}(d,e,f):e}var g=Array.prototype.slice.call(arguments);if(d=g.shift(),e=g.shift(),a.is.hash(d)){var h=Object.create(this.prototype),i=this.prototype;for(var j in d)"__ctor__"!==j&&f(h,j,d[j],i[j]);var k=a.is.fn(h.__ctor__)?h.__ctor__:function(){if(!a.is.fn(this.construct))throw new SyntaxError('FooTable class objects must be constructed with the "new" keyword.');this.construct.apply(this,arguments)};return h.construct=a.is.fn(h.construct)?h.construct:function(){},k.prototype=h,h.constructor=k,k.extend=b.extend,k}a.is.string(d)&&a.is.fn(e)&&f(this.prototype,d,e,this.prototype[d])},a.Class=b,a.ClassFactory=a.Class.extend({construct:function(){this.registered={}},contains:function(b){return a.is.defined(this.registered[b])},names:function(){var a,b=[];for(a in this.registered)this.registered.hasOwnProperty(a)&&b.push(a);return b},register:function(b,c,d){if(a.is.string(b)&&a.is.fn(c)){var e=this.registered[b];this.registered[b]={name:b,klass:c,priority:a.is.number(d)?d:a.is.defined(e)?e.priority:0}}},load:function(b,c,d){var e,f,g=this,h=Array.prototype.slice.call(arguments),i=[],j=[];b=h.shift()||{};for(e in g.registered)if(g.registered.hasOwnProperty(e)){var k=g.registered[e];b.hasOwnProperty(e)&&(f=b[e],a.is.string(f)&&(f=a.getFnPointer(b[e])),a.is.fn(f)&&(k={name:e,klass:f,priority:g.registered[e].priority})),i.push(k)}for(e in b)b.hasOwnProperty(e)&&!g.registered.hasOwnProperty(e)&&(f=b[e],a.is.string(f)&&(f=a.getFnPointer(b[e])),a.is.fn(f)&&i.push({name:e,klass:f,priority:0}));return i.sort(function(a,b){return b.priority-a.priority}),a.arr.each(i,function(b){a.is.fn(b.klass)&&j.push(g._make(b.klass,h))}),j},make:function(b,c,d){var e,f=this,g=Array.prototype.slice.call(arguments);return b=g.shift(),e=f.registered[b],a.is.fn(e.klass)?f._make(e.klass,g):null},_make:function(a,b){function c(){return a.apply(this,b)}return c.prototype=a.prototype,new c}})}(FooTable),function(a,b){b.css2json=function(c){if(b.is.emptyString(c))return{};for(var d,e,f,g={},h=c.split(";"),i=0,j=h.length;j>i;i++)b.is.emptyString(h[i])||(d=h[i].split(":"),b.is.emptyString(d[0])||b.is.emptyString(d[1])||(e=b.str.toCamelCase(a.trim(d[0])),f=a.trim(d[1]),g[e]=f));return g},b.getFnPointer=function(a){if(b.is.emptyString(a))return null;var c=window,d=a.split(".");return b.arr.each(d,function(a){c[a]&&(c=c[a])}),b.is.fn(c)?c:null},b.checkFnValue=function(a,c,d){function e(a,c,d){return b.is.fn(c)?function(){return c.apply(a,arguments)}:d}return d=b.is.fn(d)?d:null,b.is.fn(c)?e(a,c,d):b.is.type(c,"string")?e(a,b.getFnPointer(c),d):d}}(jQuery,FooTable),function(a,b){b.Cell=b.Class.extend({construct:function(a,b,c,d){this.ft=a,this.row=b,this.column=c,this.created=!1,this.define(d)},define:function(c){this.$el=b.is.element(c)||b.is.jq(c)?a(c):null,this.$detail=null;var d=b.is.hash(c)&&b.is.hash(c.options)&&b.is.defined(c.value);this.value=this.column.parser.call(this.column,b.is.jq(this.$el)?this.$el:d?c.value:c,this.ft.o),this.o=a.extend(!0,{classes:null,style:null},d?c.options:{}),this.classes=b.is.jq(this.$el)&&this.$el.attr("class")?this.$el.attr("class").match(/\S+/g):b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.jq(this.$el)&&this.$el.attr("style")?b.css2json(this.$el.attr("style")):b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{}},$create:function(){this.created||((this.$el=b.is.jq(this.$el)?this.$el:a("<td/>")).data("value",this.value).contents().detach().end().append(this.format(this.value)),this._setClasses(this.$el),this._setStyle(this.$el),this.$detail=a("<tr/>").addClass(this.row.classes.join(" ")).data("__FooTableCell__",this).append(a("<th/>")).append(a("<td/>")),this.created=!0)},collapse:function(){this.created&&(this.$detail.children("th").html(this.column.title),this.$el.clone().attr("id",this.$el.attr("id")?this.$el.attr("id")+"-detail":void 0).css("display","table-cell").html("").append(this.$el.contents().detach()).replaceAll(this.$detail.children("td").first()),b.is.jq(this.$detail.parent())||this.$detail.appendTo(this.row.$details.find(".footable-details > tbody")))},restore:function(){if(this.created){if(b.is.jq(this.$detail.parent())){var a=this.$detail.children("td").first();this.$el.attr("class",a.attr("class")).attr("style",a.attr("style")).css("display",this.column.hidden||!this.column.visible?"none":"table-cell").append(a.contents().detach())}this.$detail.detach()}},parse:function(){return this.column.parser.call(this.column,this.$el,this.ft.o)},format:function(a){return this.column.formatter.call(this.column,a,this.ft.o,this.row.value)},val:function(c,d,e){if(b.is.undef(c))return this.value;var f=this,g=b.is.hash(c)&&b.is.hash(c.options)&&b.is.defined(c.value);if(this.o=a.extend(!0,{classes:f.classes,style:f.style},g?c.options:{}),this.value=g?c.value:c,this.classes=b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},e=b.is["boolean"](e)?e:!0,this.created&&e){this.$el.data("value",this.value).empty();var h=this.$detail.children("td").first().empty(),i=b.is.jq(this.$detail.parent())?h:this.$el;i.append(this.format(this.value)),this._setClasses(i),this._setStyle(i),(b.is["boolean"](d)?d:!0)&&this.row.draw()}},_setClasses:function(a){var c=!b.is.emptyArray(this.column.classes),d=!b.is.emptyArray(this.classes),e=null;a.removeAttr("class"),(c||d)&&(c&&d?e=this.classes.concat(this.column.classes).join(" "):c?e=this.column.classes.join(" "):d&&(e=this.classes.join(" ")),b.is.emptyString(e)||a.addClass(e))},_setStyle:function(c){var d=!b.is.emptyObject(this.column.style),e=!b.is.emptyObject(this.style),f=null;c.removeAttr("style"),(d||e)&&(d&&e?f=a.extend({},this.column.style,this.style):d?f=this.column.style:e&&(f=this.style),b.is.hash(f)&&c.css(f))}})}(jQuery,FooTable),function(a,b){b.Column=b.Class.extend({construct:function(a,c,d){this.ft=a,this.type=b.is.emptyString(d)?"text":d,this.virtual=b.is["boolean"](c.virtual)?c.virtual:!1,this.$el=b.is.jq(c.$el)?c.$el:null,this.index=b.is.number(c.index)?c.index:-1,this.internal=!1,this.define(c),this.$create()},define:function(a){this.hidden=b.is["boolean"](a.hidden)?a.hidden:!1,this.visible=b.is["boolean"](a.visible)?a.visible:!0,this.name=b.is.string(a.name)?a.name:null,null==this.name&&(this.name="col"+(a.index+1)),this.title=b.is.string(a.title)?a.title:null,!this.virtual&&null==this.title&&b.is.jq(this.$el)&&(this.title=this.$el.html()),null==this.title&&(this.title="Column "+(a.index+1)),this.style=b.is.hash(a.style)?a.style:b.is.string(a.style)?b.css2json(a.style):{},this.classes=b.is.array(a.classes)?a.classes:b.is.string(a.classes)?a.classes.match(/\S+/g):[],this.parser=b.checkFnValue(this,a.parser,this.parser),this.formatter=b.checkFnValue(this,a.formatter,this.formatter)},$create:function(){(this.$el=!this.virtual&&b.is.jq(this.$el)?this.$el:a("<th/>")).html(this.title).addClass(this.classes.join(" ")).css(this.style)},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");return b.is.defined(d)?d:a(c).html()}return b.is.defined(c)&&null!=c?c+"":null},formatter:function(a,b,c){return null==a?"":a},createCell:function(a){var c=b.is.jq(a.$el)?a.$el.children("td,th").get(this.index):null,d=b.is.hash(a.value)?a.value[this.name]:null;return new b.Cell(this.ft,a,this,c||d)}}),b.columns=new b.ClassFactory,b.columns.register("text",b.Column)}(jQuery,FooTable),function(a,b){b.Component=b.Class.extend({construct:function(a,c){if(!(a instanceof b.Table))throw new TypeError("The instance parameter must be an instance of FooTable.Table.");this.ft=a,this.enabled=b.is["boolean"](c)?c:!1},preinit:function(a){},init:function(){},destroy:function(){},predraw:function(){},draw:function(){},postdraw:function(){}}),b.components=new b.ClassFactory}(jQuery,FooTable),function(a,b){b.Defaults=function(){this.stopPropagation=!1,this.on=null},b.defaults=new b.Defaults}(jQuery,FooTable),function(a,b){b.Row=b.Class.extend({construct:function(a,b,c){this.ft=a,this.columns=b,this.created=!1,this.define(c)},define:function(c){this.$el=b.is.element(c)||b.is.jq(c)?a(c):null,this.$toggle=a("<span/>",{"class":"footable-toggle fooicon fooicon-plus"});var d=b.is.hash(c),e=d&&b.is.hash(c.options)&&b.is.hash(c.value);this.value=d?e?c.value:c:null,this.o=a.extend(!0,{expanded:!1,classes:null,style:null},e?c.options:{}),this.expanded=b.is.jq(this.$el)?this.$el.data("expanded")||this.o.expanded:this.o.expanded,this.classes=b.is.jq(this.$el)&&this.$el.attr("class")?this.$el.attr("class").match(/\S+/g):b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.jq(this.$el)&&this.$el.attr("style")?b.css2json(this.$el.attr("style")):b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},this.cells=this.createCells();var f=this;f.value={},b.arr.each(f.cells,function(a){f.value[a.column.name]=a.val()})},$create:function(){if(!this.created){(this.$el=b.is.jq(this.$el)?this.$el:a("<tr/>")).data("__FooTableRow__",this),this._setClasses(this.$el),this._setStyle(this.$el),"last"==this.ft.rows.toggleColumn&&this.$toggle.addClass("last-column"),this.$details=a("<tr/>",{"class":"footable-detail-row"}).append(a("<td/>",{colspan:this.ft.columns.visibleColspan}).append(a("<table/>",{"class":"footable-details "+this.ft.classes.join(" ")}).append("<tbody/>")));var c=this;b.arr.each(c.cells,function(a){a.created||a.$create(),c.$el.append(a.$el)}),c.$el.off("click.ft.row").on("click.ft.row",{self:c},c._onToggle),this.created=!0}},createCells:function(){var a=this;return b.arr.map(a.columns,function(b){return b.createCell(a)})},val:function(c,d,e){var f=this;if(!b.is.hash(c))return b.is.hash(this.value)&&!b.is.emptyObject(this.value)||(this.value={},b.arr.each(this.cells,function(a){a.column.internal||(f.value[a.column.name]=a.val())})),this.value;this.collapse(!1);var g=b.is.hash(c),h=g&&b.is.hash(c.options)&&b.is.hash(c.value);if(this.o=a.extend(!0,{expanded:f.expanded,classes:f.classes,style:f.style},h?c.options:{}),this.expanded=this.o.expanded,this.classes=b.is.array(this.o.classes)?this.o.classes:b.is.string(this.o.classes)?this.o.classes.match(/\S+/g):[],this.style=b.is.hash(this.o.style)?this.o.style:b.is.string(this.o.style)?b.css2json(this.o.style):{},g)if(h&&(c=c.value),b.is.hash(this.value))for(var i in c)c.hasOwnProperty(i)&&(this.value[i]=c[i]);else this.value=c;else this.value=null;e=b.is["boolean"](e)?e:!0,b.arr.each(this.cells,function(a){!a.column.internal&&b.is.defined(f.value[a.column.name])&&a.val(f.value[a.column.name],!1,e)}),this.created&&e&&(this._setClasses(this.$el),this._setStyle(this.$el),(b.is["boolean"](d)?d:!0)&&this.draw())},_setClasses:function(a){var c=!b.is.emptyArray(this.classes),d=null;a.removeAttr("class"),c&&(d=this.classes.join(" "),b.is.emptyString(d)||a.addClass(d))},_setStyle:function(a){var c=!b.is.emptyObject(this.style),d=null;a.removeAttr("style"),c&&(d=this.style,b.is.hash(d)&&a.css(d))},expand:function(){if(this.created){var a=this;a.ft.raise("expand.ft.row",[a]).then(function(){a.__hidden__=b.arr.map(a.cells,function(a){return a.column.hidden&&a.column.visible?a:null}),a.__hidden__.length>0&&(a.$details.insertAfter(a.$el).children("td").first().attr("colspan",a.ft.columns.visibleColspan),b.arr.each(a.__hidden__,function(a){a.collapse()})),a.$el.attr("data-expanded",!0),a.$toggle.removeClass("fooicon-plus").addClass("fooicon-minus"),a.expanded=!0,a.ft.raise("expanded.ft.row",[a])})}},collapse:function(a){if(this.created){var c=this;c.ft.raise("collapse.ft.row",[c]).then(function(){b.arr.each(c.__hidden__,function(a){a.restore()}),c.$details.detach(),c.$el.removeAttr("data-expanded"),c.$toggle.removeClass("fooicon-minus").addClass("fooicon-plus"),(b.is["boolean"](a)?a:!0)&&(c.expanded=!1),c.ft.raise("collapsed.ft.row",[c])})}},predraw:function(a){this.created&&(this.expanded&&this.collapse(!1),this.$toggle.detach(),a=b.is["boolean"](a)?a:!0,a&&this.$el.detach())},draw:function(a){this.created||this.$create(),b.is.jq(a)&&a.append(this.$el);var c=this;b.arr.each(c.cells,function(a){a.$el.css("display",a.column.hidden||!a.column.visible?"none":"table-cell"),c.ft.rows.showToggle&&c.ft.columns.hasHidden&&("first"==c.ft.rows.toggleColumn&&a.column.index==c.ft.columns.firstVisibleIndex||"last"==c.ft.rows.toggleColumn&&a.column.index==c.ft.columns.lastVisibleIndex)&&a.$el.prepend(c.$toggle),a.$el.add(a.column.$el).removeClass("footable-first-visible footable-last-visible"),a.column.index==c.ft.columns.firstVisibleIndex&&a.$el.add(a.column.$el).addClass("footable-first-visible"),a.column.index==c.ft.columns.lastVisibleIndex&&a.$el.add(a.column.$el).addClass("footable-last-visible")}),this.expanded&&this.expand()},toggle:function(){this.created&&this.ft.columns.hasHidden&&(this.expanded?this.collapse():this.expand())},_onToggle:function(b){var c=b.data.self;a(b.target).is(c.ft.rows.toggleSelector)&&c.toggle()}})}(jQuery,FooTable),function(a,b){b.instances=[],b.Table=b.Class.extend({construct:function(c,d,e){this._resizeTimeout=null,this.id=b.instances.push(this),this.initialized=!1,this.$el=(b.is.jq(c)?c:a(c)).first(),this.$loader=a("<div/>",{"class":"footable-loader"}).append(a("<span/>",{"class":"fooicon fooicon-loader"})),this.o=a.extend(!0,{},b.defaults,d),this.data=this.$el.data()||{},this.classes=[],this.components=b.components.load(b.is.hash(this.data.components)?this.data.components:this.o.components,this),this.breakpoints=this.use(FooTable.Breakpoints),this.columns=this.use(FooTable.Columns),this.rows=this.use(FooTable.Rows),this._construct(e)},_construct:function(a){var c=this;return this._preinit().then(function(){return c._init().then(function(){return c.raise("ready.ft.table").then(function(){b.is.fn(a)&&a.call(c,c)})})}).always(function(a){c.$el.show(),b.is.error(a)&&console.error("FooTable: unhandled error thrown during initialization.",a)})},_preinit:function(){var a=this;return this.raise("preinit.ft.table",[a.data]).then(function(){var c=(a.$el.attr("class")||"").match(/\S+/g)||[];a.o.ajax=b.checkFnValue(a,a.data.ajax,a.o.ajax),a.o.stopPropagation=b.is["boolean"](a.data.stopPropagation)?a.data.stopPropagation:a.o.stopPropagation;for(var d=0,e=c.length;e>d;d++)b.str.startsWith(c[d],"footable")||a.classes.push(c[d]);return a.$el.hide().after(a.$loader),a.execute(!1,!1,"preinit",a.data)})},_init:function(){var c=this;return c.raise("init.ft.table").then(function(){var d=c.$el.children("thead"),e=c.$el.children("tbody"),f=c.$el.children("tfoot");return c.$el.addClass("footable footable-"+c.id),b.is.hash(c.o.on)&&c.$el.on(c.o.on),0==f.length&&c.$el.append(f=a("<tfoot/>")),0==e.length&&c.$el.append("<tbody/>"),0==d.length&&c.$el.prepend(d=a("<thead/>")),c.execute(!1,!0,"init").then(function(){return c.$el.data("__FooTable__",c),0==f.children("tr").length&&f.remove(),0==d.children("tr").length&&d.remove(),c.raise("postinit.ft.table").then(function(){return c.draw()}).always(function(){a(window).off("resize.ft"+c.id,c._onWindowResize).on("resize.ft"+c.id,{self:c},c._onWindowResize),c.initialized=!0})})})},destroy:function(){var c=this;return c.raise("destroy.ft.table").then(function(){return c.execute(!0,!0,"destroy").then(function(){c.$el.removeData("__FooTable__").removeClass("footable-"+c.id),b.is.hash(c.o.on)&&c.$el.off(c.o.on),a(window).off("resize.ft"+c.id,c._onWindowResize),c.initialized=!1,b.instances[c.id]=null})}).fail(function(a){b.is.error(a)&&console.error("FooTable: unhandled error thrown while destroying the plugin.",a)})},raise:function(c,d){var e=this,f=b.__debug__&&(b.is.emptyArray(b.__debug_options__.events)||b.arr.any(b.__debug_options__.events,function(a){return b.str.contains(c,a)}));return d=d||[],d.unshift(this),a.Deferred(function(b){var g=a.Event(c);1==e.o.stopPropagation&&e.$el.one(c,function(a){a.stopPropagation()}),f&&console.log("FooTable:"+c+": ",d),e.$el.trigger(g,d),g.isDefaultPrevented()?(f&&console.log('FooTable: default prevented for the "'+c+'" event.'),b.reject(g)):b.resolve(g)})},use:function(a){for(var b=0,c=this.components.length;c>b;b++)if(this.components[b]instanceof a)return this.components[b];return null},draw:function(){var a=this,c=a.$el.clone().insertBefore(a.$el);return a.$el.detach(),a.execute(!1,!0,"predraw").then(function(){return a.raise("predraw.ft.table").then(function(){return a.execute(!1,!0,"draw").then(function(){return a.raise("draw.ft.table").then(function(){return a.execute(!1,!0,"postdraw").then(function(){return a.raise("postdraw.ft.table")})})})})}).fail(function(a){b.is.error(a)&&console.error("FooTable: unhandled error thrown during a draw operation.",a)}).always(function(){c.replaceWith(a.$el),a.$loader.remove()})},execute:function(a,c,d,e,f){var g=this,h=Array.prototype.slice.call(arguments);a=h.shift(),c=h.shift();var i=c?b.arr.get(g.components,function(a){return a.enabled}):g.components.slice(0);return h.unshift(a?i.reverse():i),g._execute.apply(g,h)},_execute:function(c,d,e,f){if(!c||!c.length)return a.when();var g,h=this,i=Array.prototype.slice.call(arguments);return c=i.shift(),d=i.shift(),g=c.shift(),b.is.fn(g[d])?a.Deferred(function(a){try{var c=g[d].apply(g,i);if(b.is.promise(c))return c.then(a.resolve,a.reject);a.resolve(c)}catch(e){a.reject(e)}}).then(function(){return h._execute.apply(h,[c,d].concat(i))}):h._execute.apply(h,[c,d].concat(i))},_onWindowResize:function(a){var b=a.data.self;null!=b._resizeTimeout&&clearTimeout(b._resizeTimeout),b._resizeTimeout=setTimeout(function(){b._resizeTimeout=null,b.raise("resize.ft.table").then(function(){b.breakpoints.check()})},300)}})}(jQuery,FooTable),function(a,b){b.ArrayColumn=b.Column.extend({construct:function(a,b){this._super(a,b,"array")},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c),e=d.data("value");if(b.is.array(e))return e;e=d.html();try{e=JSON.parse(e)}catch(f){e=null}return b.is.array(e)?e:null}return b.is.array(c)?c:null},formatter:function(a,c,d){return b.is.array(a)?JSON.stringify(a):""}}),b.columns.register("array",b.ArrayColumn)}(jQuery,FooTable),function(a,b){b.is.undef(window.moment)||(b.DateColumn=b.Column.extend({construct:function(a,c){this._super(a,c,"date"),this.formatString=b.is.string(c.formatString)?c.formatString:"MM-DD-YYYY"},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");c=b.is.defined(d)?d:a(c).text(),b.is.string(c)&&(c=isNaN(c)?c:+c)}if(b.is.date(c))return moment(c);if(b.is.object(c)&&b.is["boolean"](c._isAMomentObject))return c;if(b.is.string(c)){if(isNaN(c))return moment(c,this.formatString);c=+c}return b.is.number(c)?moment(c):null},formatter:function(a,c,d){return b.is.object(a)&&b.is["boolean"](a._isAMomentObject)&&a.isValid()?a.format(this.formatString):""},filterValue:function(c){if((b.is.element(c)||b.is.jq(c))&&(c=a(c).data("filterValue")||a(c).text()),b.is.hash(c)&&b.is.hash(c.options)&&(b.is.string(c.options.filterValue)&&(c=c.options.filterValue),b.is.defined(c.value)&&(c=c.value)),b.is.object(c)&&b.is["boolean"](c._isAMomentObject))return c.format(this.formatString);if(b.is.string(c)){if(isNaN(c))return c;c=+c}return b.is.number(c)||b.is.date(c)?moment(c).format(this.formatString):b.is.defined(c)&&null!=c?c+"":""}}),b.columns.register("date",b.DateColumn))}(jQuery,FooTable),function(a,b){b.HTMLColumn=b.Column.extend({construct:function(a,b){this._super(a,b,"html")},parser:function(c){if(b.is.string(c)&&(c=a(a.trim(c))),b.is.element(c)&&(c=a(c)),b.is.jq(c)){var d=c.prop("tagName").toLowerCase();if("td"==d||"th"==d){var e=c.data("value");return b.is.defined(e)?e:c.contents()}return c}return null}}),b.columns.register("html",b.HTMLColumn)}(jQuery,FooTable),function(a,b){b.NumberColumn=b.Column.extend({construct:function(a,c){this._super(a,c,"number"),this.decimalSeparator=b.is.string(c.decimalSeparator)?c.decimalSeparator:".",this.thousandSeparator=b.is.string(c.thousandSeparator)?c.thousandSeparator:",",this.decimalSeparatorRegex=new RegExp(b.str.escapeRegExp(this.decimalSeparator),"g"),this.thousandSeparatorRegex=new RegExp(b.str.escapeRegExp(this.thousandSeparator),"g"),this.cleanRegex=new RegExp("[^-0-9"+b.str.escapeRegExp(this.decimalSeparator)+"]","g")},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c).data("value");c=b.is.defined(d)?d:a(c).text().replace(this.cleanRegex,"")}return b.is.string(c)&&(c=c.replace(this.thousandSeparatorRegex,"").replace(this.decimalSeparatorRegex,"."),c=parseFloat(c)),b.is.number(c)?c:null},formatter:function(a,b,c){if(null==a)return"";var d=(a+"").split(".");return 2==d.length&&d[0].length>3&&(d[0]=d[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,this.thousandSeparator)),d.join(this.decimalSeparator)}}),b.columns.register("number",b.NumberColumn)}(jQuery,FooTable),function(a,b){b.ObjectColumn=b.Column.extend({construct:function(a,b){this._super(a,b,"object")},parser:function(c){if(b.is.element(c)||b.is.jq(c)){var d=a(c),e=d.data("value");if(b.is.object(e))return e;e=d.html();try{e=JSON.parse(e)}catch(f){e=null}return b.is.object(e)?e:null}return b.is.object(c)?c:null},formatter:function(a,c,d){return b.is.object(a)?JSON.stringify(a):""}}),b.columns.register("object",b.ObjectColumn)}(jQuery,FooTable),function(a,b){b.Breakpoint=b.Class.extend({construct:function(a,b){this.name=a,this.width=b}})}(jQuery,FooTable),function(a,b){b.Breakpoints=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.current=null,this.array=[],this.cascade=this.o.cascade,this.useParentWidth=this.o.useParentWidth,this.hidden=null,this._classNames="",this.getWidth=b.checkFnValue(this,this.o.getWidth,this.getWidth)},preinit:function(a){var c=this;return this.ft.raise("preinit.ft.breakpoints",[a]).then(function(){c.cascade=b.is["boolean"](a.cascade)?a.cascade:c.cascade,c.o.breakpoints=b.is.hash(a.breakpoints)?a.breakpoints:c.o.breakpoints,c.getWidth=b.checkFnValue(c,a.getWidth,c.getWidth),null==c.o.breakpoints&&(c.o.breakpoints={xs:480,sm:768,md:992,lg:1200});for(var d in c.o.breakpoints)c.o.breakpoints.hasOwnProperty(d)&&(c.array.push(new b.Breakpoint(d,c.o.breakpoints[d])),c._classNames+="breakpoint-"+d+" ");c.array.sort(function(a,b){return b.width-a.width})})},init:function(){var a=this;return this.ft.raise("init.ft.breakpoints").then(function(){a.current=a.get()})},draw:function(){this.ft.$el.removeClass(this._classNames).addClass("breakpoint-"+this.current.name)},calculate:function(){for(var a,c=this,d=null,e=[],f=null,g=c.getWidth(),h=0,i=c.array.length;i>h;h++)a=c.array[h],(!d&&h==i-1||g>=a.width&&(f instanceof b.Breakpoint?g<f.width:!0))&&(d=a),d||e.push(a.name),f=a;return e.push(d.name),c.hidden=e.join(" "),d},visible:function(a){if(b.is.emptyString(a))return!0;if("all"===a)return!1;for(var c=a.split(" "),d=0,e=c.length;e>d;d++)if(this.cascade?b.str.containsWord(this.hidden,c[d]):c[d]==this.current.name)return!1;return!0},check:function(){var a=this,c=a.get();c instanceof b.Breakpoint&&c!=a.current&&a.ft.raise("before.ft.breakpoints",[a.current,c]).then(function(){var b=a.current;return a.current=c,a.ft.draw().then(function(){a.ft.raise("after.ft.breakpoints",[a.current,b])})})},get:function(a){return b.is.undef(a)?this.calculate():a instanceof b.Breakpoint?a:b.is.string(a)?b.arr.first(this.array,function(b){return b.name==a}):b.is.number(a)&&a>=0&&a<this.array.length?this.array[a]:null},getWidth:function(){return b.is.fn(this.o.getWidth)?this.o.getWidth(this.ft):1==this.useParentWidth?this.getParentWidth():this.getViewportWidth()},getParentWidth:function(){return this.ft.$el.parent().width()},getViewportWidth:function(){return Math.max(document.documentElement.clientWidth,window.innerWidth,0)}}),b.components.register("breakpoints",b.Breakpoints,1e3)}(jQuery,FooTable),function(a){a.Column.prototype.breakpoints=null,a.Column.prototype.__breakpoints_define__=function(b){this.breakpoints=a.is.emptyString(b.breakpoints)?null:b.breakpoints},a.Column.extend("define",function(a){this._super(a),this.__breakpoints_define__(a)})}(FooTable),function(a){a.Defaults.prototype.breakpoints=null,a.Defaults.prototype.cascade=!1,a.Defaults.prototype.useParentWidth=!1,a.Defaults.prototype.getWidth=null}(FooTable),function(a,b){b.Columns=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.array=[],this.$header=null,this.showHeader=a.o.showHeader,this._fromHTML=b.is.emptyArray(a.o.columns)&&!b.is.promise(a.o.columns)},parse:function(c){var d=this;return a.Deferred(function(c){function e(c,d){var e=[];if(0==c.length||0==d.length)e=c.concat(d);else{var f=0;b.arr.each(c.concat(d),function(a){a.index>f&&(f=a.index)}),f++;for(var g,h,i=0;f>i;i++)g={},b.arr.each(c,function(a){return a.index==i?(g=a,!1):void 0}),h={},b.arr.each(d,function(a){return a.index==i?(h=a,!1):void 0}),e.push(a.extend(!0,{},g,h))}return e}var f,g,h=[],i=[],j=d.ft.$el.find("tr.footable-header, thead > tr:last:has([data-breakpoints]), tbody > tr:first:has([data-breakpoints]), thead > tr:last, tbody > tr:first").first();if(j.length>0){var k=j.parent().is("tbody")&&j.children().length==j.children("td").length;k||(d.$header=j.addClass("footable-header")),j.children("td,th").each(function(b,c){f=a(c),g=f.data(),g.index=b,g.$el=f,g.virtual=k,i.push(g)}),k&&(d.showHeader=!1)}b.is.array(d.o.columns)&&!b.is.emptyArray(d.o.columns)?(b.arr.each(d.o.columns,function(a,b){a.index=b,h.push(a)}),d.parseFinalize(c,e(h,i))):b.is.promise(d.o.columns)?d.o.columns.then(function(a){b.arr.each(a,function(a,b){a.index=b,h.push(a)}),d.parseFinalize(c,e(h,i))},function(a){c.reject(Error("Columns ajax request error: "+a.status+" ("+a.statusText+")"))}):d.parseFinalize(c,e(h,i))})},parseFinalize:function(a,c){var d,e=this,f=[];b.arr.each(c,function(a){(d=b.columns.contains(a.type)?b.columns.make(a.type,e.ft,a):new b.Column(e.ft,a))&&f.push(d)}),b.is.emptyArray(f)?a.reject(Error("No columns supplied.")):(f.sort(function(a,b){
return a.index-b.index}),a.resolve(f))},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.columns",[a]).then(function(){return c.parse(a).then(function(d){c.array=d,c.showHeader=b.is["boolean"](a.showHeader)?a.showHeader:c.showHeader})})},init:function(){var a=this;return this.ft.raise("init.ft.columns",[a.array]).then(function(){a.$create()})},destroy:function(){var a=this;this.ft.raise("destroy.ft.columns").then(function(){a._fromHTML||a.$header.remove()})},predraw:function(){var a=this,c=!0;a.visibleColspan=0,a.firstVisibleIndex=0,a.lastVisibleIndex=0,a.hasHidden=!1,b.arr.each(a.array,function(b){b.hidden=!a.ft.breakpoints.visible(b.breakpoints),!b.hidden&&b.visible&&(c&&(a.firstVisibleIndex=b.index,c=!1),a.lastVisibleIndex=b.index,a.visibleColspan++),b.hidden&&(a.hasHidden=!0)}),a.ft.$el.toggleClass("breakpoint",a.hasHidden)},draw:function(){b.arr.each(this.array,function(a){a.$el.css("display",a.hidden||!a.visible?"none":"table-cell")}),!this.showHeader&&b.is.jq(this.$header.parent())&&this.$header.detach()},$create:function(){var c=this;c.$header=b.is.jq(c.$header)?c.$header:a("<tr/>",{"class":"footable-header"}),c.$header.children("th,td").detach(),b.arr.each(c.array,function(a){c.$header.append(a.$el)}),c.showHeader&&!b.is.jq(c.$header.parent())&&c.ft.$el.children("thead").append(c.$header)},get:function(a){return a instanceof b.Column?a:b.is.string(a)?b.arr.first(this.array,function(b){return b.name==a}):b.is.number(a)?b.arr.first(this.array,function(b){return b.index==a}):b.is.fn(a)?b.arr.get(this.array,a):null},ensure:function(a){var c=this,d=[];return b.is.array(a)?(b.arr.each(a,function(a){d.push(c.get(a))}),d):d}}),b.components.register("columns",b.Columns,900)}(jQuery,FooTable),function(a){a.Defaults.prototype.columns=[],a.Defaults.prototype.showHeader=!0}(FooTable),function(a,b){b.Rows=b.Component.extend({construct:function(a){this._super(a,!0),this.o=a.o,this.array=[],this.all=[],this.showToggle=a.o.showToggle,this.toggleSelector=a.o.toggleSelector,this.toggleColumn=a.o.toggleColumn,this.emptyString=a.o.empty,this.expandFirst=a.o.expandFirst,this.expandAll=a.o.expandAll,this.$empty=null,this._fromHTML=b.is.emptyArray(a.o.rows)&&!b.is.promise(a.o.rows)},parse:function(){var c=this;return a.Deferred(function(a){var d=c.ft.$el.children("tbody").children("tr");b.is.array(c.o.rows)&&c.o.rows.length>0?c.parseFinalize(a,c.o.rows):b.is.promise(c.o.rows)?c.o.rows.then(function(b){c.parseFinalize(a,b)},function(b){a.reject(Error("Rows ajax request error: "+b.status+" ("+b.statusText+")"))}):b.is.jq(d)?(c.parseFinalize(a,d),d.detach()):c.parseFinalize(a,[])})},parseFinalize:function(c,d){var e=this,f=a.map(d,function(a){return new b.Row(e.ft,e.ft.columns.array,a)});c.resolve(f)},preinit:function(a){var c=this;return c.ft.raise("preinit.ft.rows",[a]).then(function(){return c.parse().then(function(d){c.all=d,c.array=c.all.slice(0),c.showToggle=b.is["boolean"](a.showToggle)?a.showToggle:c.showToggle,c.toggleSelector=b.is.string(a.toggleSelector)?a.toggleSelector:c.toggleSelector,c.toggleColumn=b.is.string(a.toggleColumn)?a.toggleColumn:c.toggleColumn,"first"!=c.toggleColumn&&"last"!=c.toggleColumn&&(c.toggleColumn="first"),c.emptyString=b.is.string(a.empty)?a.empty:c.emptyString,c.expandFirst=b.is["boolean"](a.expandFirst)?a.expandFirst:c.expandFirst,c.expandAll=b.is["boolean"](a.expandAll)?a.expandAll:c.expandAll})})},init:function(){var a=this;return a.ft.raise("init.ft.rows",[a.all]).then(function(){a.$create()})},destroy:function(){var a=this;this.ft.raise("destroy.ft.rows").then(function(){b.arr.each(a.array,function(b){b.predraw(!a._fromHTML)}),a.all=a.array=[]})},predraw:function(){b.arr.each(this.array,function(a){a.predraw()}),this.array=this.all.slice(0)},$create:function(){this.$empty=a("<tr/>",{"class":"footable-empty"}).append(a("<td/>").text(this.emptyString))},draw:function(){var a=this,c=a.ft.$el.children("tbody"),d=!0;a.array.length>0?(a.$empty.detach(),b.arr.each(a.array,function(b){(a.expandFirst&&d||a.expandAll)&&(b.expanded=!0,d=!1),b.draw(c)})):(a.$empty.children("td").attr("colspan",a.ft.columns.visibleColspan),c.append(a.$empty))},load:function(c,d){var e=this,f=a.map(c,function(a){return new b.Row(e.ft,e.ft.columns.array,a)});b.arr.each(this.array,function(a){a.predraw()}),this.all=(b.is["boolean"](d)?d:!1)?this.all.concat(f):f,this.array=this.all.slice(0),this.ft.draw()},expand:function(){b.arr.each(this.array,function(a){a.expand()})},collapse:function(){b.arr.each(this.array,function(a){a.collapse()})}}),b.components.register("rows",b.Rows,800)}(jQuery,FooTable),function(a){a.Defaults.prototype.rows=[],a.Defaults.prototype.empty="No results",a.Defaults.prototype.showToggle=!0,a.Defaults.prototype.toggleSelector="tr,td,.footable-toggle",a.Defaults.prototype.toggleColumn="first",a.Defaults.prototype.expandFirst=!1,a.Defaults.prototype.expandAll=!1}(FooTable),function(a){a.Table.prototype.loadRows=function(a,b){this.rows.load(a,b)}}(FooTable);