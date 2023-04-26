(()=>{"use strict";var t=document.querySelector(".profile__btn_action_edit"),e=document.querySelector(".profile__btn_action_add"),r=document.forms["edit-profile"],n=r.name,o=r.about,i=document.querySelector(".profile__name"),u=document.querySelector(".profile__status"),a=document.querySelector(".profile__avatar"),c=document.querySelector(".profile__avatar-edit"),l={};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===s(o)?o:String(o)),n)}var o}var p=function(){function t(e,r,n,o){var i=this,u=e.name,a=e.link,c=e.likes,l=e.owner,s=e._id,f=n.handleCardClick,p=n.handleCardRemove,y=n.handleCardLike;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=u,this._link=a,this._likes=c,this._userId=l._id,this._cardId=s,this._curentId=o,this._templateSelector=r,this._handleCardClick=f,this._handleCardRemove=p,this._handleCardLike=y,this._isLiked=this._likes.filter((function(t){return t._id===i._curentId})).length>0,this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardTitle=this._element.querySelector(".card__title"),this._likeButton=this._element.querySelector(".card__btn_action_like"),this._likeCounter=this._element.querySelector(".card__like-counter"),this._removeIcon=this._element.querySelector(".card__btn_action_remove")}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._setEventListeners(),this._showIconRemove(),this._setUserLikes(),this._cardImage.src=this._link,this._cardTitle.textContent=this._name,this._cardImage.alt=this._name,this._likeCounter.textContent=this._likes.length,this._element}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleCardLike(t._isLiked)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick({name:t._name,link:t._link})})),this._element.querySelector(".card__btn_action_remove").addEventListener("click",(function(){t._handleCardRemove(t)}))}},{key:"removeCard",value:function(){this._element.remove()}},{key:"setLikeState",value:function(t){this._isLiked?(this._likeButton.classList.remove("card__btn_aciton_like-active"),this._likeCounter.textContent=t.likes.length,this._isLiked=!1):(this._likeButton.classList.add("card__btn_aciton_like-active"),this._likeCounter.textContent=t.likes.length,this._isLiked=!0)}},{key:"_showIconRemove",value:function(){this._curentId!==this._userId&&this._removeIcon.classList.add("card__btn_show")}},{key:"_setUserLikes",value:function(){this._isLiked?this._likeButton.classList.add("card__btn_aciton_like-active"):this._likeButton.classList.remove("card__btn_aciton_like-active")}}])&&f(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var m=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,b(n.key),n)}}function v(t,e,r){return(e=b(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var S=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,"_handleClickClose",(function(t){(t.target.classList.contains("popup__btn_action_close")||t.target.classList.contains("popup_opened"))&&r.close()})),v(this,"_handleEscClose",(function(t){"Escape"===t.key&&r.close()})),this._popupItem=document.querySelector(e)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popupItem.addEventListener("click",this._handleClickClose)}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=C(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},w.apply(this,arguments)}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function C(t){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},C(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=C(n);if(o){var r=C(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupPhoto=e._popupItem.querySelector(".popup__photo"),e._popupCaption=e._popupItem.querySelector(".popup__caption"),e}return e=u,(r=[{key:"open",value:function(t,e){w(C(u.prototype),"open",this).call(this),this._popupPhoto.src=e,this._popupPhoto.alt=t,this._popupCaption.textContent=t}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function P(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,q(n.key),n)}}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},R.apply(this,arguments)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function B(t,e,r){return(e=q(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function q(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===j(e)?e:String(e)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(n);if(o){var r=T(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}(this,t)});function u(t,e){var r,n,o=e.callbackFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),B(I(n=i.call(this,t)),"_handleFormSubmit",(function(t){t.preventDefault(),n._callbackFormSubmit(n._getInputValues(),n._submitButton),n.close()})),B(I(n),"setEventListeners",(function(){R((r=I(n),T(u.prototype)),"setEventListeners",r).call(r),n._popupForm.addEventListener("submit",n._handleFormSubmit)})),n._popupForm=n._popupItem.querySelector(".popup__form"),n._formInputList=n._popupItem.querySelectorAll(".popup__input"),n._callbackFormSubmit=o,n._submitButton=n._popupForm.querySelector(".popup__btn_action_submit"),n}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._formInputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"close",value:function(){R(T(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&P(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===U(o)?o:String(o)),n)}var o}var V=function(){function t(e){var r=e.userName,n=e.aboutUser,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=r,this._aboutUser=n,this._avatar=o}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._aboutUser.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar;this._userName.textContent=e,this._aboutUser.textContent=r,this._avatar.src=n}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var D=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=r,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_showInputError",value:function(t,e){var r=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),r.textContent=e,r.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.textContent="",e.classList.remove(this._errorClass)}},{key:"_setEventListeners",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleButtonState()}))})),this._formElement.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}))}))}},{key:"_isValid",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","disabled")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}}])&&N(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function J(t){return J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},J(t)}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==J(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==J(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===J(o)?o:String(o)),n)}var o}var z=function(){function t(e){var r=e.url,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._headers=n}var e,r;return e=t,(r=[{key:"_checkServerResponse",value:function(t){return t.ok?t.json():Promise.reject("Код ошибки: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._checkServerResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._checkServerResponse)}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:r})}).then(this._checkServerResponse)}},{key:"setUserAvatar",value:function(t){var e=t.link;return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkServerResponse)}},{key:"setNewCard",value:function(t){var e=t.name,r=t.link;return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:r})}).then(this._checkServerResponse)}},{key:"removeCard",value:function(t){return fetch("".concat(this._url,"cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkServerResponse)}},{key:"removeLikeCard",value:function(t){return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}}])&&H(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Z(n.key),n)}}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function W(){return W="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=X(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},W.apply(this,arguments)}function X(t){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},X(t)}function Y(t,e,r){return(e=Z(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t){var e=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===M(e)?e:String(e)}var $,tt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=X(n);if(o){var r=X(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===M(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Q(t)}(this,t)});function u(t,e){var r,n,o,a=e.callbackFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),Y(Q(o=i.call(this,t)),"_handleFormSubmit",(function(t){t.preventDefault(),o._callbackFormSubmit(o._cardElement,o._cardId),W((r=Q(o),X(u.prototype)),"close",r).call(r)})),Y(Q(o),"setEventListeners",(function(){W((n=Q(o),X(u.prototype)),"setEventListeners",n).call(n),o._popupForm.addEventListener("submit",o._handleFormSubmit)})),o._callbackFormSubmit=a,o._popupForm=o._popupItem.querySelector(".popup__form"),o}return e=u,(r=[{key:"open",value:function(t,e){this._cardId=e,this._cardElement=t,W(X(u.prototype),"open",this).call(this)}}])&&G(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S),et=new V({userName:i,aboutUser:u,avatar:a}),rt=new O(".popup_type_image"),nt=new tt(".popup_type_confirm-delite",{callbackFormSubmit:function(t,e){t.removeCard(),ct.removeCard(e).catch((function(t){return console.log(t)}))}});function ot(t,e){e.textContent=t?"Сохранение...":"Сохранить"}var it=new F(".popup_type_edit",{callbackFormSubmit:function(t,e){console.log(e),ot(!0,e),ct.setUserInfo(t).then((function(t){return et.setUserInfo(t)})).catch((function(t){return console.log(t)})).finally((function(){return ot(!1,e)}))}}),ut=new F(".popup_type_edit-avatar",{callbackFormSubmit:function(t,e){ct.setUserAvatar(t).then((function(t){return et.setUserInfo(t)})).catch((function(t){return console.log(t)}))}}),at=new F(".popup_type_card",{callbackFormSubmit:function(t,e){var r=t.title,n=t.link;ct.setNewCard({name:r,link:n}).then((function(t){var e=ft(t,$);st.addItem(e)})).catch((function(t){return console.log(t)}))}}),ct=new z({url:"https://mesto.nomoreparties.co/v1/cohort-64/",headers:{authorization:"31554c8a-77dd-4979-b2d2-ecadd12ea5c9","Content-Type":"application/json"}});ct.getUserInfo().then((function(t){$=t._id,et.setUserInfo(t)})).catch((function(t){return console.log(t)})),ct.getInitialCards().then((function(t){st.renderItems(t)})).catch((function(t){return console.log(t)})),rt.setEventListeners(),it.setEventListeners(),at.setEventListeners(),nt.setEventListeners(),ut.setEventListeners();var lt,st=new m({renderer:function(t){var e=ft(t,$);st.addItem(e)}},".photo-grid");function ft(t,e){var r=new p(t,"#cards",{handleCardClick:function(t){var e=t.name,r=t.link;rt.open(e,r)},handleCardRemove:function(e){nt.open(e,t._id)},handleCardLike:function(e){e?ct.removeLikeCard(t._id).then((function(t){return r.setLikeState(t)})):ct.likeCard(t._id).then((function(t){return r.setLikeState(t)}))}},e);return r.generateCard()}t.addEventListener("click",(function(){var t=et.getUserInfo(),e=t.name,r=t.about;n.value=e,o.value=r,l["edit-profile"].resetValidation(),it.open()})),e.addEventListener("click",(function(){l["new-place"].resetValidation(),at.open()})),c.addEventListener("click",(function(){l["edit-avatar"].resetValidation(),ut.open()})),lt={inputSelector:".popup__input",submitButtonSelector:".popup__btn_action_submit",formSelector:".popup__form",inactiveButtonClass:"popup__btn_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(lt.formSelector)).forEach((function(t){var e=new D(lt,t),r=t.getAttribute("name");l[r]=e,e.enableValidation()}))})();
//# sourceMappingURL=main.js.map