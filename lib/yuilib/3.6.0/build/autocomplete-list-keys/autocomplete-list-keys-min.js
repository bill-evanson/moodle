/*
YUI 3.6.0 (build 5521)
Copyright 2012 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
YUI.add("autocomplete-list-keys",function(g){var c=40,a=13,d=27,f=9,b=38;function e(){g.before(this._bindKeys,this,"bindUI");this._initKeys();}e.prototype={_initKeys:function(){var h={},i={};h[c]=this._keyDown;i[a]=this._keyEnter;i[d]=this._keyEsc;i[f]=this._keyTab;i[b]=this._keyUp;this._keys=h;this._keysVisible=i;},destructor:function(){this._unbindKeys();},_bindKeys:function(){this._keyEvents=this._inputNode.on("keydown",this._onInputKey,this);},_unbindKeys:function(){this._keyEvents&&this._keyEvents.detach();this._keyEvents=null;},_keyDown:function(){if(this.get("visible")){this._activateNextItem();}else{this.show();}},_keyEnter:function(i){var h=this.get("activeItem");if(h){this.selectItem(h,i);}else{return false;}},_keyEsc:function(){this.hide();},_keyTab:function(i){var h;if(this.get("tabSelect")){h=this.get("activeItem");if(h){this.selectItem(h,i);return true;}}return false;},_keyUp:function(){this._activatePrevItem();},_onInputKey:function(j){var h,i=j.keyCode;this._lastInputKey=i;if(this.get("results").length){h=this._keys[i];if(!h&&this.get("visible")){h=this._keysVisible[i];}if(h){if(h.call(this,j)!==false){j.preventDefault();}}}}};g.Base.mix(g.AutoCompleteList,[e]);},"3.6.0",{requires:["autocomplete-list","base-build"]});