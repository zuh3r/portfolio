"use strict";
exports.id = 575;
exports.ids = [575];
exports.modules = {

/***/ 4164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Cursor = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "frenify-cursor cursor-outer",
                "data-default": "yes",
                "data-link": "yes",
                "data-slider": "yes",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "fn-cursor"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "frenify-cursor cursor-inner",
                "data-default": "yes",
                "data-link": "yes",
                "data-slider": "yes",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "fn-cursor",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "fn-left"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "fn-right"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ }),

/***/ 2192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CA": () => (/* binding */ sticky),
/* harmony export */   "CC": () => (/* binding */ dataImage),
/* harmony export */   "_h": () => (/* binding */ customCursor),
/* harmony export */   "jd": () => (/* binding */ aTagClick)
/* harmony export */ });
const aTagClick = ()=>{
    const aTag = document.querySelectorAll("[href='#']");
    for(let i = 0; i < aTag.length; i++){
        const a = aTag[i];
        a.addEventListener("click", (e)=>{
            e.preventDefault();
        });
    }
};
// Data image
const dataImage = ()=>{
    let d = document.querySelectorAll("[data-bg-img");
    for(let i = 0; i < d.length; i++){
        const element = d[i];
        element.style.backgroundImage = `url(${element.getAttribute("data-bg-img")})`;
    }
};
const customCursor = ()=>{
    var myCursor = document.querySelectorAll(".frenify-cursor"), hamburger = document.querySelector(".hamburger"), kura_tm_topbar = document.querySelector(".kura_tm_topbar "), pointer = document.querySelector(".cursor-pointer"), e = document.querySelector(".cursor-inner"), t = document.querySelector(".cursor-outer");
    function mouseEvent(element) {
        element.addEventListener("mouseenter", function() {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        });
        element.addEventListener("mouseleave", function() {
            e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
        });
    }
    if (myCursor.length) {
        if (document.body) {
            let n, i3 = 0, o = !1;
            window.onmousemove = function(s) {
                // console.log(document.querySelector(this));
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i3 = s.clientX;
            }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function() {
                let a = document.querySelectorAll("a"), sliders = document.querySelectorAll(".owl-carousel, .swiper-container, .cursor-link"), slider = document.querySelectorAll(".modal_item");
                e.classList.add("cursor-inner"), t.classList.add("cursor-outer");
                for(let i = 0; i < a.length; i++){
                    const element = a[i];
                    mouseEvent(element);
                }
                for(let i1 = 0; i1 < sliders.length; i1++){
                    const element = sliders[i1];
                    element.addEventListener("mouseenter", function() {
                        e.classList.add("cursor-slider"), t.classList.add("cursor-slider");
                    });
                    element.addEventListener("mouseleave", function() {
                        e.classList.remove("cursor-slider"), t.classList.remove("cursor-slider");
                    });
                }
                for(let i2 = 0; i2 < slider.length; i2++){
                    const element = slider[i2];
                    mouseEvent(element);
                }
                hamburger && mouseEvent(hamburger);
                kura_tm_topbar && mouseEvent(kura_tm_topbar);
                pointer && mouseEvent(pointer);
            }), e.style.visibility = "visible", t.style.visibility = "visible";
        }
    }
};
const sticky = ()=>{
    let offset = window.scrollY;
    const stickys = document.querySelectorAll("body");
    stickys.forEach((sticky1)=>{
        if (sticky1) {
            if (offset > 100) {
                sticky1.classList.add("scrolled");
            } else {
                sticky1.classList.remove("scrolled");
            }
        }
    });
};


/***/ })

};
;