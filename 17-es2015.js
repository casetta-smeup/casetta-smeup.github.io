(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./src/assets/dist/esm/kup-paginator.entry.js":
/*!****************************************************!*\
  !*** ./src/assets/dist/esm/kup-paginator.entry.js ***!
  \****************************************************/
/*! exports provided: kup_paginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kup_paginator", function() { return KupPaginator; });
/* harmony import */ var _chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-1851c479.js */ "./src/assets/dist/esm/chunk-1851c479.js");
/* harmony import */ var _chunk_8cdcd574_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-8cdcd574.js */ "./src/assets/dist/esm/chunk-8cdcd574.js");



class KupPaginator {
    constructor(hostRef) {
        Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.max = 0;
        this.perPage = 10;
        this.selectedPerPage = 10;
        this.currentPage = 1;
        this.mode = _chunk_8cdcd574_js__WEBPACK_IMPORTED_MODULE_1__["P"].FULL;
        this.kupPageChanged = Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "kupPageChanged", 6);
        this.kupRowsPerPageChanged = Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "kupRowsPerPageChanged", 6);
    }
    isPrevPageDisabled() {
        return this.currentPage == 1;
    }
    isNextPageDisabled() {
        return this.currentPage * this.perPage >= this.max;
    }
    onPageChange(event) {
        event.stopPropagation();
        if (event.detail.value) {
            this.kupPageChanged.emit({
                newPage: event.detail.value['id'],
            });
        }
    }
    onPrevPage() {
        if (this.isPrevPageDisabled()) {
            return;
        }
        // fire next page event
        this.kupPageChanged.emit({
            newPage: this.currentPage - 1,
        });
    }
    onNextPage() {
        if (this.isNextPageDisabled()) {
            return;
        }
        // fire next page event
        this.kupPageChanged.emit({
            newPage: this.currentPage + 1,
        });
    }
    onRowsPerPage(event) {
        event.stopPropagation();
        if (event.detail.value) {
            this.kupRowsPerPageChanged.emit({
                newRowsPerPage: event.detail.value.id,
            });
        }
    }
    // render functions
    getGoToPageItems(maxNumberOfPage) {
        const goToPageItems = [];
        for (let i = 1; i <= maxNumberOfPage; i++) {
            const item = {};
            item['id'] = i;
            goToPageItems.push(item);
        }
        return goToPageItems;
    }
    getRowsPerPageItems() {
        const rowsPerPageItems = [];
        if (this.currentPage !== this.max) {
            let i = this.perPage;
            if (i === 0) {
                return rowsPerPageItems;
            }
            while (i < this.max) {
                rowsPerPageItems.push({
                    id: i,
                });
                i = i * 2;
            }
            // adding 'max' option
            rowsPerPageItems.push({
                id: this.max,
            });
        }
        else {
            rowsPerPageItems.push({
                id: this.perPage,
            });
        }
        return rowsPerPageItems;
    }
    render() {
        let prevPageClassName = 'mdi mdi-chevron-left';
        if (this.isPrevPageDisabled()) {
            prevPageClassName += ' disabled';
        }
        let nextPageClassName = 'mdi mdi-chevron-right';
        if (this.isNextPageDisabled()) {
            nextPageClassName += ' disabled';
        }
        const maxNumberOfPage = Math.ceil(this.max / this.selectedPerPage);
        const goToPageItems = this.getGoToPageItems(maxNumberOfPage);
        const rowsPerPageItems = this.getRowsPerPageItems();
        return (Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: "paginator" }, Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "align-left" }, "Pagina", Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "prev-page" }, Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("icon", { className: prevPageClassName, onclick: () => this.onPrevPage() })), Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("kup-combo", { items: goToPageItems, isFilterable: false, initialValue: {
                id: this.currentPage,
            }, onKetchupComboSelected: (e) => this.onPageChange(e) }), Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "next-page" }, Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("icon", { className: nextPageClassName, onclick: () => this.onNextPage() })), Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "number-of-pages" }, "di ", maxNumberOfPage)), Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "align-right" }, Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "nextPageGroup" }, "Numero risultati: ", this.max), Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "more-results" }), "Mostra", Object(_chunk_1851c479_js__WEBPACK_IMPORTED_MODULE_0__["h"])("kup-combo", { items: rowsPerPageItems, isFilterable: false, initialValue: {
                id: this.perPage,
            }, onKetchupComboSelected: (e) => this.onRowsPerPage(e) }), "righe per pagina")));
    }
    static get style() { return "\@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);:host{--int_text-color:var(--kup-paginator_text-color,#545454);--int_font-size:var(--kup-paginator_font-size,1rem)}#paginator{color:var(--int_text-color);margin:.5rem 0;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;font-size:var(--int_font-size)}#paginator icon{cursor:pointer;opacity:1;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}#paginator icon:hover:not(.disabled){opacity:.75}#paginator icon.disabled{cursor:default;opacity:.3}#paginator .nextPageGroup,#paginator select{margin:0 .5rem}#paginator .next-page,#paginator .prev-page{margin:0 .25rem}#paginator .nextPageGroup{padding-right:1.5rem}#paginator .number-of-pages{color:#bdbdbd}#paginator kup-combo{margin:0 .25rem}:host([mode=simple]) #paginator .align-left .next-page,:host([mode=simple]) #paginator .align-left .prev-page,:host([mode=simple]) #paginator .align-right{display:none}"; }
}




/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map