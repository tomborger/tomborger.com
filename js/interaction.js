$(function(){$(".anim").addClass("running")}),$(function(){$(".site-nav-item").hover(function(){var a=$("#"+$(this).attr("data-target")),b=$(".active-view").height()/2;a.hasClass("active-view")||a.css({clip:"rect(0,10000px,"+b+"px,0)","z-index":3})},function(){var a=$("#"+$(this).attr("data-target"));a.hasClass("active-view")||a.css({clip:"rect(0,10000px,0,0)","z-index":3})}),$(".site-nav-item").on("click touchstart",function(){var a=$("#"+$(this).attr("data-target"));a.hasClass("active-view")||($(".site-nav-item").toggleClass("active-nav-item"),a.css({clip:"rect(0,10000px,10000px,0)","z-index":3}),$("section").toggleClass("active-view"),setTimeout(function(){a.css({clip:"","z-index":""})},400))}),$(".site-nav-toggle").on("click",function(){$(".site-header").toggleClass("displayButtons")}),$(".site-nav-item").on("click",function(){window.location.hash=$(this).data("target")}),window.onhashchange=function(a){var b=window.location.hash.substring(1)||"about";$("#"+b).addClass("active-view"),$("section:not(#"+b+")").removeClass("active-view"),$(".site-nav-item").removeClass("active-nav-item").filter(".site-nav-item-"+b).addClass("active-nav-item"),a.preventDefault()},$(document).ready(function(){$(window).trigger("hashchange")})});var selScrollable="#work, .work-sample";$(document).on("touchmove",function(a){a.preventDefault()}),$("body").on("touchstart",selScrollable,function(a){0===a.currentTarget.scrollTop?a.currentTarget.scrollTop=1:a.currentTarget.scrollHeight===a.currentTarget.scrollTop+a.currentTarget.offsetHeight&&(a.currentTarget.scrollTop-=1),0===a.currentTarget.scrollLeft?a.currentTarget.scrollLeft=1:a.currentTarget.scrollWidth===a.currentTarget.scrollLeft+a.currentTarget.offsetWidth&&(a.currentTarget.scrollLeft-=1)}),$("body").on("touchmove",selScrollable,function(a){$(this)[0].scrollHeight>$(this).innerHeight()&&a.stopPropagation(),$(this)[0].scrollWidth>$(this).innerWidth()&&a.stopPropagation()}),$(window).on("orientationchange",function(){window.scrollTo(0,0)}),$(function(){var a=function(){$("#about").wrapInner("<div id='_transient'></div>");var a=$("#about").height()-$("#_transient").outerHeight();if(!(1>a)){var b=a/2;$("#_transient").contents().unwrap(),$(".about-animation").css({"margin-top":b})}};a(),$(window).on("resize orientationChange",function(){a()})}),$(function(){var a={active:!1,origTop:null,origLeft:null,origWidth:null,getDetachedStyles:function(){var a=this;return{top:a.origTop+"px",left:a.origLeft+"px",width:a.origWidth+"px"}},resetDetachedStyles:function(){return{top:"",left:"",width:""}},activate:function(a){var b=this;this.active=!0,this.$frame=a,this.origTop=this.$frame.offset().top,this.origLeft=this.$frame.offset().left,this.origWidth=this.$frame.width(),this.$sample=this.$frame.find(".work-sample"),this.$sample.css(this.getDetachedStyles()).addClass("highlighting").appendTo("main"),setTimeout(function(){$("body").addClass("work-sample-active")},0),setTimeout(function(){b.$sample.addClass("highlighted").removeClass("highlighting").css(b.resetDetachedStyles())},50)},deactivate:function(){var a=this;$("body").removeClass("work-sample-active"),setTimeout(function(){a.$sample.css(a.getDetachedStyles()).removeClass("highlighted").addClass("obscuring")},0),setTimeout(function(){a.$sample.removeClass("obscuring").css(a.resetDetachedStyles()).appendTo(a.$frame)},300),this.active=!1},init:function(){var a=this;$(".work-sample-item").on("click",function(){a.active||a.activate($(this))}),$(document).on("click",".back-button",function(){a.active&&a.deactivate()})}};a.init()});