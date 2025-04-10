"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 5492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ThemeProviderContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
const ThemeProvider = ({ children , defaultTheme ="dark" , ...props })=>{
    const [theme, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultTheme);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        // Save theme to localStorage
        localStorage.setItem("theme", theme);
    }, [
        theme
    ]);
    const value = {
        theme,
        setTheme: (newTheme)=>setTheme(newTheme)
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeProviderContext.Provider, {
        value: value,
        ...props,
        children: children
    });
};
function useTheme() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ThemeProviderContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}


/***/ })

};
;