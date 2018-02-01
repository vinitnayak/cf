/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(t){t.jqx.jqxWidget("jqxDropDownButton","",{}),t.extend(t.jqx._jqxDropDownButton.prototype,{defineInstance:function(){var e={disabled:!1,width:null,height:null,arrowSize:19,enableHover:!0,openDelay:250,closeDelay:300,animationType:"default",enableBrowserBoundsDetection:!1,dropDownHorizontalAlignment:"left",dropDownVerticalAlignment:"bottom",popupZIndex:2e4,dropDownContainer:"default",autoOpen:!1,rtl:!1,initContent:null,dropDownWidth:null,dropDownHeight:null,focusable:!0,template:"default",touchMode:!1,aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["open","close","opening","closing"]};return this===t.jqx._jqxDropDownButton.prototype?e:(t.extend(!0,this,e),e)},createInstance:function(e){var o=this;o.width||(o.width=200),o.height||(o.height=25),o.isanimating=!1;var n=t("<div style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropDownButtonWrapper' style='outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropDownButtonContent' unselectable='on' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'/><div id='dropDownButtonArrow' unselectable='on'  style='background-color: transparent; border: none; float: right; position: relative;'><div unselectable='on'></div></div></div></div>");o.host.attr("tabindex")?(n.attr("tabindex",o.host.attr("tabindex")),o.host.removeAttr("tabindex")):n.attr("tabindex",0),o.focusable||n.removeAttr("tabIndex"),t.jqx.aria(this),o.popupContent=o.host.children(),o.host.attr("role","button"),0==o.popupContent.length?(o.popupContent=t("<div>"+o.host.text()+"</div>"),o.popupContent.css("display","block"),o.element.innerHTML=""):o.popupContent.detach();var r=this;o.addHandler(o.host,"loadContent",function(t){r._arrange()});try{var s="dropDownButtonPopup"+o.element.id,i=t(t.find("#"+s));i.length>0&&i.remove(),t.jqx.aria(this,"aria-haspopup",!0),t.jqx.aria(this,"aria-owns",s);var a=t("<div class='dropDownButton' style='overflow: hidden; left: -1000px; top: -1000px; position: absolute;' id='dropDownButtonPopup"+o.element.id+"'></div>");a.addClass(o.toThemeProperty("jqx-widget-content")),a.addClass(o.toThemeProperty("jqx-dropdownbutton-popup")),a.addClass(o.toThemeProperty("jqx-popup")),a.addClass(o.toThemeProperty("jqx-rc-all")),"element"!=o.dropDownContainer&&a.css("z-index",o.popupZIndex),t.jqx.browser.msie&&a.addClass(o.toThemeProperty("jqx-noshadow")),o.popupContent.appendTo(a),"element"==o.dropDownContainer?a.appendTo(o.host):a.appendTo(document.body),o.container=a,o.container.css("visibility","hidden")}catch(t){}o.touch=t.jqx.mobile.isTouchDevice(),o.dropDownButtonStructure=n,o.host.append(n),o.dropDownButtonWrapper=o.host.find("#dropDownButtonWrapper"),o.firstDiv=o.dropDownButtonWrapper.parent(),o.dropDownButtonArrow=o.host.find("#dropDownButtonArrow"),o.arrow=t(o.dropDownButtonArrow.children()[0]),o.dropDownButtonContent=o.host.find("#dropDownButtonContent"),o.dropDownButtonContent.addClass(o.toThemeProperty("jqx-dropdownlist-content")),o.dropDownButtonWrapper.addClass(o.toThemeProperty("jqx-disableselect")),o.rtl&&o.dropDownButtonContent.addClass(o.toThemeProperty("jqx-rtl"));d=this;o.host.parents()&&o.addHandler(o.host.parents(),"scroll.dropdownbutton"+o.element.id,function(t){d.isOpened()&&d.close()}),o.addHandler(o.dropDownButtonWrapper,"selectstart",function(){return!1}),o.dropDownButtonWrapper[0].id="dropDownButtonWrapper"+o.element.id,o.dropDownButtonArrow[0].id="dropDownButtonArrow"+o.element.id,o.dropDownButtonContent[0].id="dropDownButtonContent"+o.element.id;var d=this;o.propertyChangeMap.disabled=function(e,o,n,r){r?(e.host.addClass(d.toThemeProperty("jqx-dropdownlist-state-disabled")),e.host.addClass(d.toThemeProperty("jqx-fill-state-disabled")),e.dropDownButtonContent.addClass(d.toThemeProperty("jqx-dropdownlist-content-disabled"))):(e.host.removeClass(d.toThemeProperty("jqx-dropdownlist-state-disabled")),e.host.removeClass(d.toThemeProperty("jqx-fill-state-disabled")),e.dropDownButtonContent.removeClass(d.toThemeProperty("jqx-dropdownlist-content-disabled"))),t.jqx.aria(e,"aria-disabled",e.disabled)},o.disabled&&(o.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-disabled")),o.host.addClass(o.toThemeProperty("jqx-fill-state-disabled")),o.dropDownButtonContent.addClass(o.toThemeProperty("jqx-dropdownlist-content-disabled")));var l=o.toThemeProperty("jqx-rc-all")+" "+o.toThemeProperty("jqx-fill-state-normal")+" "+o.toThemeProperty("jqx-widget")+" "+o.toThemeProperty("jqx-widget-content")+" "+o.toThemeProperty("jqx-dropdownlist-state-normal");if(o.host.addClass(l),o.arrow.addClass(o.toThemeProperty("jqx-icon-arrow-down")),o.arrow.addClass(o.toThemeProperty("jqx-icon")),o.template&&o.host.addClass(o.toThemeProperty("jqx-"+o.template)),o._setSize(),o.render(),t.jqx.browser.msie&&t.jqx.browser.version<8&&(o.container.css("display","none"),o.host.parents(".jqx-window").length>0)){var p=o.host.parents(".jqx-window").css("z-index");a.css("z-index",p+10),o.container.css("z-index",p+10)}},setContent:function(t){var e=this;e.dropDownButtonContent.children().remove(),e.dropDownButtonContent[0].innerHTML="",e.dropDownButtonContent.append(t)},val:function(t){var e=this;if(0==arguments.length||"object"==typeof t)return e.dropDownButtonContent.text();e.dropDownButtonContent.html(t)},getContent:function(){var t=this;return t.dropDownButtonContent.children().length>0?t.dropDownButtonContent.children():t.dropDownButtonContent.text()},_setSize:function(){var e=this;null!=e.width&&-1!=e.width.toString().indexOf("px")?e.host[0].style.width=e.width:void 0==e.width||isNaN(e.width)||(e.host[0].style.width=parseInt(e.width)+"px"),null!=e.height&&-1!=e.height.toString().indexOf("px")?e.host[0].style.height=e.height:void 0==e.height||isNaN(e.height)||(e.host[0].style.height=parseInt(e.height)+"px");var o=!1;null!=e.width&&-1!=e.width.toString().indexOf("%")&&(o=!0,e.host.width(e.width)),null!=e.height&&-1!=e.height.toString().indexOf("%")&&(o=!0,e.host.height(e.height));var n=this;o&&e.refresh(!1),t.jqx.utilities.resize(e.host,function(){n._arrange()})},isOpened:function(){var e=this,o=t.data(document.body,"openedJQXButton"+e.element.id);return null!=o&&o==e.popupContent},focus:function(){var t=this;try{t.host.focus()}catch(t){}},render:function(){var e=this;e.removeHandlers();var o=this,n=!1;e.touch||(e.addHandler(e.host,"mouseenter",function(){!o.disabled&&o.enableHover&&(n=!0,o.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-hover")),o.arrow.addClass(o.toThemeProperty("jqx-icon-arrow-down-hover")),o.host.addClass(o.toThemeProperty("jqx-fill-state-hover")))}),e.addHandler(e.host,"mouseleave",function(){!o.disabled&&o.enableHover&&(o.host.removeClass(o.toThemeProperty("jqx-dropdownlist-state-hover")),o.host.removeClass(o.toThemeProperty("jqx-fill-state-hover")),o.arrow.removeClass(o.toThemeProperty("jqx-icon-arrow-down-hover")),n=!1)})),o.autoOpen&&(e.addHandler(e.host,"mouseenter",function(){!o.isOpened()&&o.autoOpen&&(o.open(),o.host.focus())}),e.addHandler(t(document),"mousemove."+o.element.id,function(t){if(o.isOpened()&&o.autoOpen){var e=o.host.coord(),n=e.top,r=e.left,s=o.container.coord(),i=s.left,a=s.top;canClose=!0,t.pageY>=n&&t.pageY<=n+o.host.height()&&t.pageX>=r&&t.pageX<r+o.host.width()&&(canClose=!1),t.pageY>=a&&t.pageY<=a+o.container.height()&&t.pageX>=i&&t.pageX<i+o.container.width()&&(canClose=!1),canClose&&o.close()}})),e.addHandler(e.dropDownButtonWrapper,"mousedown",function(t){if(!o.disabled){var e="visible"==o.container.css("visibility");if(!o.isanimating){if(e)return o.close(),!1;o.open(),o.focusable||t.preventDefault&&t.preventDefault()}}}),e.touch&&e.addHandler(t(document),t.jqx.mobile.getTouchEventName("touchstart")+"."+e.element.id,o.closeOpenedDropDown,{me:this,popup:e.container,id:e.element.id}),e.addHandler(t(document),"mousedown."+e.element.id,o.closeOpenedDropDown,{me:this,popup:e.container,id:e.element.id}),e.addHandler(e.host,"keydown",function(t){var e="visible"==o.container.css("visibility");return"none"==o.host.css("display")||("13"==t.keyCode&&(o.isanimating||e&&o.close()),115==t.keyCode?(o.isanimating||(o.isOpened()?o.isOpened()&&o.close():o.open()),!1):(t.altKey&&"block"==o.host.css("display")&&(38==t.keyCode?o.isOpened()&&o.close():40==t.keyCode&&(o.isOpened()||o.open())),void("27"==t.keyCode&&(o.ishiding||(o.close(),void 0!=o.tempSelectedIndex&&o.selectIndex(o.tempSelectedIndex))))))}),e.addHandler(e.firstDiv,"focus",function(){o.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-focus")),o.host.addClass(o.toThemeProperty("jqx-fill-state-focus"))}),e.addHandler(e.firstDiv,"blur",function(){o.host.removeClass(o.toThemeProperty("jqx-dropdownlist-state-focus")),o.host.removeClass(o.toThemeProperty("jqx-fill-state-focus"))})},removeHandlers:function(){var e=this,o=this;e.removeHandler(e.dropDownButtonWrapper,"mousedown"),e.removeHandler(e.host,"keydown"),e.removeHandler(e.firstDiv,"focus"),e.removeHandler(e.firstDiv,"blur"),e.removeHandler(e.host,"mouseenter"),e.removeHandler(e.host,"mouseleave"),e.autoOpen&&(e.removeHandler(e.host,"mouseenter"),e.removeHandler(e.host,"mouseleave")),e.removeHandler(t(document),"mousemove."+o.element.id)},_findPos:function(e){for(;e&&("hidden"==e.type||1!=e.nodeType||t.expr.filters.hidden(e));)e=e.nextSibling;var o=t(e).coord(!0);return[o.left,o.top]},testOffset:function(e,o,n){var r=this,s=e.outerWidth(),i=e.outerHeight(),a=t(window).width()+t(window).scrollLeft(),d=t(window).height()+t(window).scrollTop();if(o.left+s>a&&s>r.host.width()){var l=r.host.coord().left,p=s-r.host.width();o.left=l-p+2}return o.left<0&&(o.left=parseInt(r.host.coord().left)+"px"),o.top-=Math.min(o.top,o.top+i>d&&d>i?Math.abs(i+n+22):0),o},_getBodyOffset:function(){var e=0,o=0;return"0px"!=t("body").css("border-top-width")&&(e=parseInt(t("body").css("border-top-width")),isNaN(e)&&(e=0)),"0px"!=t("body").css("border-left-width")&&(o=parseInt(t("body").css("border-left-width")),isNaN(o)&&(o=0)),{left:o,top:e}},open:function(){t.jqx.aria(this,"aria-expanded",!0);var e=this,o=this;if((null==e.dropDownWidth||"auto"==e.dropDownWidth)&&null!=e.width&&e.width.indexOf&&-1!=e.width.indexOf("%")){var n=e.host.width();e.container.width(parseInt(n))}o._raiseEvent("2");var r,s=e.popupContent,i=(t(window).scrollTop(),t(window).scrollLeft(),parseInt(e._findPos(e.host[0])[1])+parseInt(e.host.outerHeight())-1+"px"),a=parseInt(Math.round(e.host.coord(!0).left));r=a+"px";var d=t.jqx.mobile.isSafariMobileBrowser()||t.jqx.mobile.isWindowsPhone();e.ishiding=!1,e.tempSelectedIndex=e.selectedIndex,null!=d&&d&&(r=t.jqx.mobile.getLeftPos(e.element),i=t.jqx.mobile.getTopPos(e.element)+parseInt(e.host.outerHeight()),"0px"!=t("body").css("border-top-width")&&(i=parseInt(i)-e._getBodyOffset().top+"px"),"0px"!=t("body").css("border-left-width")&&(r=parseInt(r)-e._getBodyOffset().left+"px")),s.stop(),e.host.addClass(e.toThemeProperty("jqx-dropdownlist-state-selected")),e.host.addClass(e.toThemeProperty("jqx-fill-state-pressed")),e.arrow.addClass(e.toThemeProperty("jqx-icon-arrow-down-selected"));var l=!1;t.jqx.browser.msie&&t.jqx.browser.version<8&&(l=!0),l&&e.container.css("display","block"),e.container.css("left",r),e.container.css("top",i);var p=!1,h=function(){if("right"==e.dropDownHorizontalAlignment||e.rtl){var t=e.container.width(),o=Math.abs(t-e.host.width());t>e.host.width()?e.container.css("left",parseInt(Math.round(a))-o+"px"):e.container.css("left",parseInt(Math.round(a))+o+"px")}};if(h.call(this),"top"==e.dropDownVerticalAlignment){var c=s.height();p=!0,e.container.height(s.outerHeight()),s.addClass(this.toThemeProperty("jqx-popup-up"));var u=parseInt(e.host.outerHeight()),m=parseInt(i)-Math.abs(c+u);e.interval&&clearInterval(e.interval),e.interval=setInterval(function(){if(s.outerHeight()!=e.container.height()){e.container.height(s.outerHeight());var t=parseInt(i)-Math.abs(s.height()+u);e.container.css("top",t)}},50),s.css("top",23),e.container.css("top",m)}if(e.enableBrowserBoundsDetection){var w=e.testOffset(s,{left:parseInt(e.container.css("left")),top:parseInt(i)},parseInt(e.host.outerHeight()));parseInt(e.container.css("top"))!=w.top?(p=!0,e.container.height(s.outerHeight()),s.css("top",23),e.interval&&clearInterval(e.interval),e.interval=setInterval(function(){if(s.outerHeight()!=o.container.height()){var t=o.testOffset(s,{left:parseInt(e.container.css("left")),top:parseInt(i)},parseInt(e.host.outerHeight()));e.container.css("top",t.top),e.container.height(s.outerHeight())}},50)):s.css("top",0),e.container.css("top",w.top),parseInt(e.container.css("left"))!=w.left&&e.container.css("left",w.left)}if("none"==e.animationType)e.container.css("visibility","visible"),t.data(document.body,"openedJQXButtonParent",o),t.data(document.body,"openedJQXButton"+e.element.id,s),s.css("margin-top",0),s.css("opacity",1),e._raiseEvent("0"),h.call(o);else{e.container.css("visibility","visible");var f=s.outerHeight();o.isanimating=!0,"fade"==e.animationType?(s.css("margin-top",0),s.css("opacity",0),s.animate({opacity:1},e.openDelay,function(){t.data(document.body,"openedJQXButtonParent",o),t.data(document.body,"openedJQXButton"+o.element.id,s),o.ishiding=!1,o.isanimating=!1,o._raiseEvent("0")}),h.call(o)):(s.css("opacity",1),p?s.css("margin-top",f):s.css("margin-top",-f),h.call(o),s.animate({"margin-top":0},e.openDelay,function(){t.data(document.body,"openedJQXButtonParent",o),t.data(document.body,"openedJQXButton"+o.element.id,s),o.ishiding=!1,o.isanimating=!1,o._raiseEvent("0")}))}p?(e.host.addClass(e.toThemeProperty("jqx-rc-t-expanded")),e.container.addClass(e.toThemeProperty("jqx-rc-b-expanded"))):(e.host.addClass(e.toThemeProperty("jqx-rc-b-expanded")),e.container.addClass(e.toThemeProperty("jqx-rc-t-expanded"))),e.focusable&&(e.firstDiv.focus(),setTimeout(function(){o.firstDiv.focus()},10)),e.container.addClass(e.toThemeProperty("jqx-fill-state-focus")),e.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-focus")),e.host.addClass(o.toThemeProperty("jqx-fill-state-focus"))},close:function(){t.jqx.aria(this,"aria-expanded",!1);var e=this,o=e.popupContent,n=e.container,r=this;r._raiseEvent("3");var s=!1;if(t.jqx.browser.msie&&t.jqx.browser.version<8&&(s=!0),e.isOpened()){if(t.data(document.body,"openedJQXButton"+e.element.id,null),"none"==e.animationType)e.container.css("visibility","hidden"),s&&e.container.css("display","none");else if(!r.ishiding){r.isanimating=!0,o.stop();var i=o.outerHeight();o.css("margin-top",0);var a=-i;parseInt(e.container.coord().top)<parseInt(e.host.coord().top)&&(a=i),"fade"==e.animationType?(o.css({opacity:1}),o.animate({opacity:0},e.closeDelay,function(){n.css("visibility","hidden"),r.isanimating=!1,r.ishiding=!1,s&&n.css("display","none")})):o.animate({"margin-top":a},e.closeDelay,function(){n.css("visibility","hidden"),r.isanimating=!1,r.ishiding=!1,s&&n.css("display","none")})}e.ishiding=!0,e.host.removeClass(e.toThemeProperty("jqx-dropdownlist-state-selected")),e.host.removeClass(e.toThemeProperty("jqx-fill-state-pressed")),e.arrow.removeClass(e.toThemeProperty("jqx-icon-arrow-down-selected")),e.host.removeClass(e.toThemeProperty("jqx-rc-b-expanded")),e.container.removeClass(e.toThemeProperty("jqx-rc-t-expanded")),e.host.removeClass(e.toThemeProperty("jqx-rc-t-expanded")),e.container.removeClass(e.toThemeProperty("jqx-rc-b-expanded")),e.container.removeClass(e.toThemeProperty("jqx-fill-state-focus")),e.host.removeClass(e.toThemeProperty("jqx-dropdownlist-state-focus")),e.host.removeClass(e.toThemeProperty("jqx-fill-state-focus")),e._raiseEvent("1")}},closeOpenedDropDown:function(e){var o=e.data.me,n=t(e.target);if(t(e.target).ischildof(e.data.me.host))return!0;if(t(e.target).ischildof(e.data.me.popupContent))return!0;var r=!1;return t.each(n.parents(),function(){if("undefined"!=this.className){if(this.className.indexOf&&-1!=this.className.indexOf("dropDownButton"))return r=!0,!1;if(this.className.indexOf&&-1!=this.className.indexOf("jqx-popup"))return r=!0,!1}}),r||o.close(),!0},refresh:function(){this._arrange()},_arrange:function(){var t=this,e=parseInt(t.host.width()),o=parseInt(t.host.height()),n=(t.arrowSize,t.arrowSize),r=e-n-6;if(r>0&&(t.dropDownButtonContent[0].style.width=r+"px"),t.dropDownButtonContent[0].style.height=parseInt(o)+"px",t.dropDownButtonContent[0].style.left="0px",t.dropDownButtonContent[0].style.top="0px",t.dropDownButtonArrow[0].style.width=parseInt(n)+"px",t.dropDownButtonArrow[0].style.height=parseInt(o)+"px",t.rtl&&(t.dropDownButtonArrow.css("float","left"),t.dropDownButtonContent.css("float","right"),t.dropDownButtonContent.css("left",-3)),null!=t.dropDownWidth)if(t.dropDownWidth.toString().indexOf("%")>=0){e=parseInt(t.dropDownWidth)*t.host.width()/100;t.container.width(e)}else t.container.width(t.dropDownWidth);null!=t.dropDownHeight&&t.container.height(t.dropDownHeight)},destroy:function(){t.jqx.utilities.resize(this.host,null,!0);var e=this;e.interval&&clearInterval(e.interval),e.removeHandler(e.dropDownButtonWrapper,"selectstart"),e.removeHandler(e.dropDownButtonWrapper,"mousedown"),e.removeHandler(e.host,"keydown"),e.host.removeClass(),e.removeHandler(t(document),"mousedown."+e.element.id,self.closeOpenedDropDown),e.host.remove(),e.container.remove()},_raiseEvent:function(e,o){var n=this;void 0==o&&(o={owner:null}),2!=e||n.contentInitialized||n.initContent&&(n.initContent(),n.contentInitialized=!0);var r=n.events[e];args=o,args.owner=this;var s=new t.Event(r);return s.owner=this,2!=e&&3!=e&&4!=e||(s.args=o),n.host.trigger(s)},resize:function(t,e){var o=this;o.width=t,o.height=e,o._setSize(),o._arrange()},propertiesChangedHandler:function(t,e,o){o.width&&o.height&&2==Object.keys(o).length&&(t._setSize(),t._arrange(),t.close())},propertyChangedHandler:function(e,o,n,r){var s=this;void 0!=s.isInitialized&&0!=s.isInitialized&&(e.batchUpdate&&e.batchUpdate.width&&e.batchUpdate.height&&2==Object.keys(e.batchUpdate).length||("template"==o&&(e.host.removeClass(e.toThemeProperty("jqx-"+n)),e.host.addClass(e.toThemeProperty("jqx-"+e.template))),"rtl"==o&&(r?(e.dropDownButtonArrow.css("float","left"),e.dropDownButtonContent.css("float","right")):(e.dropDownButtonArrow.css("float","right"),e.dropDownButtonContent.css("float","left"))),"autoOpen"==o&&e.render(),"theme"==o&&null!=r&&t.jqx.utilities.setTheme(n,r,e.host),"width"!=o&&"height"!=o||(e._setSize(),e._arrange())))}})}(jqxBaseFramework);
