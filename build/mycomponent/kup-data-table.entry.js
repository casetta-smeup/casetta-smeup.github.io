const h = window.mycomponent.h;

class KetchupDataTable {
    constructor() {
        this.config = {};
        this.globalFilter = '';
        this.currentPage = 1;
        this.currentRowsPerPage = 10;
    }
    configHandler(newValue) {
        if (newValue && newValue.rowsPerPage) {
            this.currentRowsPerPage = newValue.rowsPerPage;
        }
    }
    getColumns() {
        return this.data && this.data.data && this.data.data.columns
            ? this.data.data.columns
            : [{ title: '' }];
    }
    getRows() {
        return this.data && this.data.data && this.data.data.rows
            ? this.data.data.rows
            : [];
    }
    get filters() {
        if (this.config && this.config.filter) {
            return this.config.filter;
        }
        return {};
    }
    set filters(value) {
        if (this.config) {
            this.config = Object.assign({}, this.config, { filter: value });
        }
        else {
            this.config = {
                showFilter: true,
                filter: value,
            };
        }
    }
    get sort() {
        if (this.config && this.config.sort) {
            return this.config.sort;
        }
        return [];
    }
    set sort(sort) {
        if (this.config) {
            this.config = Object.assign({}, this.config, { sort });
        }
        else {
            this.config = {
                sort,
            };
        }
    }
    getFilteredRows() {
        if ((this.filters && Object.keys(this.filters).length > 0) ||
            this.globalFilter) {
            const keys = Object.keys(this.filters);
            // filtering rows
            return this.getRows().filter((r) => {
                // check global filter
                if (this.globalFilter) {
                    let found = false;
                    for (let i = 0; i < this.data.data.columns.length; i++) {
                        const c = this.data.data.columns[i];
                        const cellValue = r.cells[c.name].value;
                        if (cellValue
                            .toLowerCase()
                            .includes(this.globalFilter.toLocaleLowerCase())) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        return false;
                    }
                }
                return (keys.filter((key) => {
                    const filterValue = this.filters[key];
                    // getting cell value
                    const cellValue = r.cells[key];
                    if (!cellValue || !cellValue.value) {
                        return false;
                    }
                    if (cellValue.value
                        .toLowerCase()
                        .includes(filterValue.toLowerCase())) {
                        return true;
                    }
                }).length === keys.length);
            });
        }
        return this.getRows();
    }
    showFilters() {
        return this.config && this.config.showFilter;
    }
    showSort() {
        if (this.config) {
            return (!this.config.hasOwnProperty('enableSort') ||
                this.config.enableSort);
        }
        return true;
    }
    onColumnSort(e) {
        const columnName = e.target.dataset.col;
        // check if columnName is already in sort array
        let i = 0;
        for (; i < this.sort.length; i++) {
            const sortObj = this.sort[i];
            if (sortObj.column === columnName) {
                break;
            }
        }
        if (i < this.sort.length) {
            // already in array... switching sort
            const sortObj = this.sort[i];
            const newSortObj = Object.assign({}, sortObj, { sortMode: sortObj.sortMode === 'A' ? 'D' : 'A' });
            const newSort = [...this.sort];
            newSort[i] = newSortObj;
            this.sort = newSort;
        }
        else {
            const sortObj = {
                column: columnName,
                sortMode: 'A',
            };
            // if CTRL is pressed, push to array
            // else, replace current array
            if (e.ctrlKey) {
                this.sort = [...this.sort, sortObj];
            }
            else {
                this.sort = [sortObj];
            }
        }
    }
    onFilterChange(event) {
        // resetting current page
        this.currentPage = 1;
        // getting column name from data-col
        const columnName = event.target.dataset.col;
        const newFilters = Object.assign({}, this.filters);
        if (event.detail.value.length === 0) {
            delete newFilters[columnName];
        }
        else {
            newFilters[columnName] = event.detail.value;
        }
        this.filters = newFilters;
    }
    onGlobalFilterChange(event) {
        // resetting current page
        this.currentPage = 1;
        this.globalFilter = event.detail.value;
    }
    sortRows(rows) {
        if (this.sort.length === 0) {
            // no sort -> return rows as they are
            return rows;
        }
        // check multiple sort
        const isMultiSort = this.sort.length > 1;
        // sorting rows
        return rows.sort((r1, r2) => {
            if (isMultiSort) {
                for (let i = 0; i < this.sort.length; i++) {
                    const sortObj = this.sort[i];
                    // getting cell value
                    const value1 = r1.cells[sortObj.column].value;
                    const value2 = r2.cells[sortObj.column].value;
                    if (value1 === value2) {
                        // same value -> next column
                        continue;
                    }
                    const sortMode = sortObj.sortMode === 'A' ? 1 : -1;
                    return sortMode * value1.localeCompare(value2);
                }
                // same row
                return 0;
            }
            else {
                const sortObj = this.sort[0];
                // getting cell value
                const value1 = r1.cells[sortObj.column].value;
                const value2 = r2.cells[sortObj.column].value;
                const sortMode = sortObj.sortMode === 'A' ? 1 : -1;
                return sortMode * value1.localeCompare(value2);
            }
        });
    }
    get rowsPerPage() {
        return this.config && this.config.rowsPerPage
            ? this.config.rowsPerPage
            : 10;
    }
    paginateRows(rows) {
        const start = this.currentPage * this.currentRowsPerPage -
            this.currentRowsPerPage;
        return rows.slice(start, start + this.currentRowsPerPage);
    }
    getSortIcon(columnName) {
        // check if column in sort array
        for (let i = 0; i < this.sort.length; i++) {
            const sortObj = this.sort[i];
            if (sortObj.column === columnName) {
                return 'A' === sortObj.sortMode
                    ? 'mdi-sort-ascending'
                    : 'mdi-sort-descending';
            }
        }
        // default
        return 'mdi-sort';
    }
    handlePageChanged({ detail }) {
        this.currentPage = detail.newPage;
    }
    handleRowsPerPageChanged({ detail }) {
        this.currentRowsPerPage = detail.newRowsPerPage;
    }
    // render methods
    renderHeader() {
        return this.getColumns().map((column) => {
            // filter
            let filter = null;
            if (this.showFilters()) {
                let filterValue = '';
                if (this.filters && this.filters[column.name]) {
                    filterValue = this.filters[column.name];
                }
                filter = (h("div", null,
                    h("kup-text-input", { initialValue: filterValue, "data-col": column.name, onKetchupTextInputUpdated: (e) => {
                            this.onFilterChange(e);
                        } })));
            }
            // sort
            let sort = null;
            if (this.showSort()) {
                sort = (h("span", { class: "column-sort" },
                    h("icon", { class: 'mdi ' + this.getSortIcon(column.name), "data-col": column.name, onClick: (e) => this.onColumnSort(e) })));
            }
            return (h("th", null,
                h("span", { class: "column-title" }, column.title),
                sort,
                filter));
        });
    }
    render() {
        // header
        const header = this.renderHeader();
        // rows
        // 1) filters
        const filteredRows = this.getFilteredRows();
        // 2) sort
        const sortedRows = this.sortRows(filteredRows);
        // 3) pagination
        const paginatedRows = this.paginateRows(sortedRows);
        // 4) jsx
        let rows = null;
        if (paginatedRows.length === 0) {
            rows = (h("tr", null,
                h("td", { colSpan: this.getColumns().length }, "Empty data")));
        }
        else {
            rows = paginatedRows.map((row) => {
                const cells = this.getColumns().map(({ name }) => {
                    return h("td", null, row.cells[name].value);
                });
                return h("tr", null, cells);
            });
        }
        const paginator = (h("kup-paginator", { max: filteredRows.length, perPage: this.rowsPerPage, currentPage: this.currentPage, onKupPageChanged: (e) => this.handlePageChanged(e), onKupRowsPerPageChanged: (e) => this.handleRowsPerPageChanged(e) }));
        let globalFilter = null;
        if (this.config && this.config.globalFilter) {
            globalFilter = (h("div", { id: "globalFilter" },
                h("kup-text-input", { label: "Global filter", onKetchupTextInputUpdated: (event) => this.onGlobalFilterChange(event) })));
        }
        return (h("div", null,
            paginator,
            globalFilter,
            h("table", null,
                h("thead", null,
                    h("tr", null, header)),
                h("tbody", null, rows))));
    }
    static get is() { return "kup-data-table"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "config": {
            "type": "Any",
            "attr": "config",
            "mutable": true,
            "watchCallbacks": ["configHandler"]
        },
        "currentPage": {
            "state": true
        },
        "currentRowsPerPage": {
            "state": true
        },
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "globalFilter": {
            "state": true
        }
    }; }
    static get style() { return "\@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n  table,\n  table th,\n  table td {\n    border: 1px solid black; }\n  table th,\n  table td {\n    padding: 0.5rem; }\n  table .column-sort {\n    margin-left: 0.5rem;\n    cursor: pointer; }\n  table th input {\n    display: block; }\n\n#globalFilter {\n  margin-bottom: 0.5rem;\n  text-align: center; }"; }
}

class KetchupPaginator {
    constructor() {
        this.max = 0;
        this.perPage = 10;
        this.currentPage = 1;
        this.currentPerPage = 0;
    }
    perPageHandler(newValue) {
        this.currentPerPage = newValue;
    }
    // lifecycle hooks
    componentWillLoad() {
        this.perPageHandler(this.perPage);
    }
    isPrevPageDisabled() {
        return this.currentPage == 1;
    }
    isNextPageDisabled() {
        return this.currentPage * this.currentPerPage >= this.max;
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
    onGoToPage({ target }) {
        this.kupPageChanged.emit({
            newPage: parseInt(target.value),
        });
    }
    onRowsPerPage({ target }) {
        this.currentPerPage = parseInt(target.value);
        this.kupRowsPerPageChanged.emit({
            newRowsPerPage: this.currentPerPage,
        });
    }
    // render functions
    getGoToPageOptions(maxNumberOfPage) {
        const goToPageOptions = [];
        goToPageOptions.push(h("option", { value: "1", selected: this.currentPage === 1 }, "1"));
        for (let i = 2; i <= maxNumberOfPage; i++) {
            goToPageOptions.push(h("option", { value: i, selected: this.currentPage === i }, i));
        }
        return goToPageOptions;
    }
    getRowsPerPageOptions() {
        const rowsPerPageOptions = [];
        if (this.currentPage != this.max) {
            let i = this.perPage;
            if (i === 0) {
                return rowsPerPageOptions;
            }
            while (i < this.max) {
                rowsPerPageOptions.push(h("option", { value: i, selected: i === this.currentPerPage }, i));
                i = i * 2;
            }
            // adding 'max' option
            rowsPerPageOptions.push(h("option", { value: this.max, selected: this.max === this.currentPerPage }, this.max));
        }
        else {
            rowsPerPageOptions.push(h("option", { value: this.currentPerPage, selected: true }, this.currentPerPage));
        }
        return rowsPerPageOptions;
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
        const maxNumberOfPage = Math.ceil(this.max / this.currentPerPage);
        const goToPageOptions = this.getGoToPageOptions(maxNumberOfPage);
        const rowsPerPageOptions = this.getRowsPerPageOptions();
        return (h("div", { id: "paginator" },
            h("div", { class: "align-left" },
                "Pagina",
                h("span", { class: "prev-page" },
                    h("icon", { className: prevPageClassName, onclick: () => this.onPrevPage() })),
                h("select", { onChange: (e) => this.onGoToPage(e) }, goToPageOptions),
                h("span", { class: "next-page" },
                    h("icon", { className: nextPageClassName, onclick: () => this.onNextPage() })),
                "Di ",
                maxNumberOfPage),
            h("div", { class: "align-right" },
                h("span", { class: "nextPageGroup" },
                    "Numero risultati: ",
                    this.max),
                "Mostra",
                h("select", { onChange: (e) => this.onRowsPerPage(e) }, rowsPerPageOptions),
                "righe per pagina")));
    }
    static get is() { return "kup-paginator"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "currentPage": {
            "type": Number,
            "attr": "current-page"
        },
        "currentPerPage": {
            "state": true
        },
        "max": {
            "type": Number,
            "attr": "max"
        },
        "perPage": {
            "type": Number,
            "attr": "per-page",
            "watchCallbacks": ["perPageHandler"]
        }
    }; }
    static get events() { return [{
            "name": "kupPageChanged",
            "method": "kupPageChanged",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "kupRowsPerPageChanged",
            "method": "kupRowsPerPageChanged",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
    static get style() { return "\@import url(https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css);\n#paginator {\n  margin-bottom: 0.5rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n  #paginator icon {\n    cursor: pointer; }\n    #paginator icon.disabled {\n      cursor: default;\n      opacity: 0.3; }\n  #paginator .prevPage,\n  #paginator .nextPage,\n  #paginator select,\n  #paginator .nextPageGroup {\n    margin: 0 0.1rem; }\n  #paginator .nextPageGroup {\n    border-right: 1px solid black;\n    padding-right: 0.3rem; }"; }
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

// shamelessy copyed from https://github.com/ionic-team/ionic/blob/master/core/src/utils/helpers.ts
function debounceEvent(event, wait) {
    const original = event._original || event;
    return {
        _original: event,
        emit: debounce_1(original.emit.bind(original), wait),
    };
}
// export function debounce(func: (...args: any[]) => void, wait = 0) {
//     let timer: any;
//     return (...args: any[]): any => {
//         clearTimeout(timer);
//         timer = setTimeout(func, wait, ...args);
//     };
// }

class KetchupTextInput {
    constructor() {
        /**
         * Marks the field as clearable, allowing an icon to delete its content
         */
        this.initialValue = '';
        /**
         * Marks the field as clearable, allowing an icon to delete its content
         */
        this.isClearable = false;
        /**
         * Label to describe the radio group
         */
        this.label = '';
        /**
         * The max length of the text field.
         * Default value copied from here: https://www.w3schools.com/tags/att_input_maxlength.asp
         */
        this.maxLength = 524288;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ketchupTextInputUpdated` event after each keystroke.
         */
        this.debounce = 400;
        //-- Validating props --
        //---- Internal state ----
        this.value = '';
        //-- Constants --
        this.classInputText = 'ketchup-input-text';
    }
    debounceChanged() {
        this.ketchupTextInputUpdated = debounceEvent(this.ketchupTextInputUpdated, this.debounce);
    }
    //---- Lifecycle Hooks  ----
    componentWillLoad() {
        // Sets initial value inside the element
        this.value = this.initialValue;
    }
    componentDidLoad() {
        this.debounceChanged();
    }
    //---- Public Methods ----
    /**
     * Triggers the focus event on the input text
     * @method triggerFocus
     */
    triggerFocus() {
        // For focus issues, maybe have a look here
        // https://github.com/ionic-team/stencil/issues/180
        // https://github.com/ionic-team/stencil/issues/1008
        this.inputEl.focus();
        this.textInput.focus();
    }
    //---- Events and handlers ----
    /**
     * Clear the current content inside the the text input
     */
    onClearClick() {
        this.value = '';
        setTimeout(() => this.triggerFocus(), 10);
    }
    /**
     * Listens for keydown events to get when 'Enter' is pressed, firing a submit event.
     */
    onKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.ketchupTextInputSubmit.emit({
                value: this.value,
            });
        }
    }
    onInputBlurred(event) {
        const { target } = event;
        this.inputBlur.emit({
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }
    onInputFocused(event) {
        const { target } = event;
        this.inputFocused.emit({
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }
    onInputUpdated(event) {
        const { target } = event;
        this.ketchupTextInputUpdated.emit({
            value: target.value,
            oldValue: this.value,
        });
        this.value = target.value;
    }
    //---- Rendering functions ----
    render() {
        const containerClass = this.classInputText + '__container';
        let lbl = null;
        if (this.label) {
            lbl = h("label", { htmlFor: "ketchup-input" }, this.label);
        }
        return (h("div", { class: containerClass +
                (this.isClearable
                    ? ' ' + containerClass + '--clearable'
                    : '') },
            lbl,
            h("input", { id: "ketchup-input", class: this.classInputText +
                    (this.isClearable
                        ? ' ' + this.classInputText + '--clearable'
                        : ''), maxlength: this.maxLength, ref: (el) => (this.textInput = el), tabindex: "0", value: this.value, onBlur: this.onInputBlurred.bind(this), onInput: this.onInputUpdated.bind(this), onFocus: this.onInputFocused.bind(this), onKeyDown: this.onKeyDown.bind(this) }),
            this.isClearable ? (h("button", { "aria-label": "Close", class: this.classInputText + '__clear', role: "button", onClick: this.onClearClick.bind(this) },
                h("svg", { viewBox: "0 0 24 24" },
                    h("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" })))) : null));
    }
    static get is() { return "kup-text-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "debounce": {
            "type": Number,
            "attr": "debounce",
            "watchCallbacks": ["debounceChanged"]
        },
        "initialValue": {
            "type": String,
            "attr": "initial-value"
        },
        "inputEl": {
            "elementRef": true
        },
        "isClearable": {
            "type": Boolean,
            "attr": "is-clearable"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "maxLength": {
            "type": Number,
            "attr": "max-length"
        },
        "triggerFocus": {
            "method": true
        },
        "value": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ketchupTextInputBlurred",
            "method": "inputBlur",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupTextInputFocused",
            "method": "inputFocused",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupTextInputSubmit",
            "method": "ketchupTextInputSubmit",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupTextInputUpdated",
            "method": "ketchupTextInputUpdated",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
    static get style() { return "/**\n* \@prop --int_font-size, --kup-text-input_font-size: Set height of the font and the svg icon\n* \@prop --int_border-color, --kup-text-input_border-color: Set normal border color of the input\n* \@prop --int_border-color--selected, --kup-text-input_border-color: Set color of the border when focused or hovered\n* \@prop --int_tr-duration, --kup-text-input_transition-duration: Set all transitions duration\n* \@prop --int_icon-color, --kup-text-input_icon-color: Set icon color\n* \@prop --int_icon-color--hover, --kup-text-input_icon-color--hover: Set icon color when hovered\n*/\n:host {\n  --int_font-size: var(--kup-text-input_font-size, 14px);\n  --int_border-color: var(--kup-text-input_border-color, #808080);\n  --int_border-color--selected: var(\n    --kup-text-input_border-color--selected,\n    #4e908f\n  );\n  --int_tr-duration: var(--kup-text-input_transition-duration, 0.6s);\n  --int_icon-color: var(--kup-text-input_icon-color, #808080);\n  --int_icon-color--hover: var(\n    --kup-text-input_icon-color--hover,\n    #676767\n  );\n  display: inline-block; }\n\nlabel {\n  margin-right: 0.5rem; }\n\n.ketchup-input-text {\n  background-color: #ffffff;\n  border: 1px solid var(--int_border-color);\n  border-radius: 2px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: none;\n  padding: 4px 6px;\n  position: relative;\n  -webkit-transition: background-color var(--int_tr-duration);\n  transition: background-color var(--int_tr-duration);\n  z-index: 0; }\n  .ketchup-input-text__container {\n    display: inline-block;\n    position: relative;\n    z-index: 0; }\n  .ketchup-input-text:hover, .ketchup-input-text:focus {\n    border-color: var(--int_border-color--selected); }\n  .ketchup-input-text--clearable {\n    padding-right: calc( 6px + 4px * 2 + var(--int_font-size)); }\n  .ketchup-input-text__clear {\n    -ms-flex-align: center;\n    align-items: center;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin: 0;\n    outline: none;\n    padding: 4px;\n    position: absolute;\n    right: 6px;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n    transform: translateY(-50%);\n    z-index: 1; }\n    .ketchup-input-text__clear > svg {\n      fill: var(--int_icon-color);\n      height: var(--int_font-size);\n      -webkit-transition: fill var(--int_tr-duration);\n      transition: fill var(--int_tr-duration);\n      width: var(--int_font-size); }\n    .ketchup-input-text__clear:hover > svg {\n      fill: var(--int_icon-color--hover); }"; }
}

export { KetchupDataTable as KupDataTable, KetchupPaginator as KupPaginator, KetchupTextInput as KupTextInput };
