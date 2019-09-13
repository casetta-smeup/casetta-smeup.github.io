'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-c31c1549.js');

class KupTooltip {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        /**
         * Layout used to display the items
         */
        this.layout = '1';
        this.visible = false;
        this.detailVisible = false;
        // ---- Non reactive ----
        this.tooltipPosition = {};
        // check if the event kupTooltipLoadDetail was triggered
        this.kupTooltipLoadDetailTriggered = false;
        this.kupTooltipLoadDetail = __chunk_1.createEvent(this, "kupTooltipLoadDetail", 6);
    }
    onDataChanged() {
        this.detailVisible = true;
    }
    // ---- Private methods ----
    hasData() {
        return !!this.detailData && !!this.detailData.rows;
    }
    resetTimeouts() {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
            this.tooltipTimeout = null;
        }
        if (this.loadDetailTimeout) {
            clearTimeout(this.loadDetailTimeout);
            this.loadDetailTimeout = null;
        }
    }
    loadDetail() {
        this.loadDetailTimeout = null;
        this.kupTooltipLoadDetail.emit();
        this.kupTooltipLoadDetailTriggered = true;
    }
    get rows() {
        return this.hasData() ? this.detailData.rows : [];
    }
    // ---- Listeners ----
    onMouseOver() {
        if (!this.tooltipTimeout) {
            this.tooltipTimeout = setTimeout(() => {
                this.tooltipTimeout = null;
                // resetting position
                this.tooltipPosition = {};
                const rect = this.wrapperEl.getBoundingClientRect();
                // vertical position
                if (window.innerHeight - rect.bottom < 150) {
                    this.tooltipPosition.bottom = `${rect.height + 3}px`;
                }
                else {
                    this.tooltipPosition.top = `${rect.height}px`;
                }
                // horizontal position
                if (window.innerWidth - rect.left < 350) {
                    // 350 is the min-width of the tooltip
                    this.tooltipPosition.right = `0`;
                }
                else {
                    this.tooltipPosition.left = `0`;
                }
                this.visible = true;
                if (!this.kupTooltipLoadDetailTriggered) {
                    // timeout to load detail
                    this.loadDetailTimeout = setTimeout(() => this.loadDetail(), 250);
                }
                else {
                    // timeout to set the detail visible
                    this.loadDetailTimeout = setTimeout(() => (this.detailVisible = true), 250);
                }
            }, 500);
        }
    }
    onMouseLeave() {
        this.resetTimeouts();
        this.visible = false;
        this.detailVisible = false;
    }
    // ---- Render methods ----
    getDefaultLayout() {
        return [
            __chunk_1.h("div", { class: "left" }, __chunk_1.h("slot", { name: "slot1" })),
            __chunk_1.h("div", { class: "right" }, __chunk_1.h("div", null, __chunk_1.h("slot", { name: "slot2" })), __chunk_1.h("div", { class: "slot3" }, __chunk_1.h("slot", { name: "slot3" })), __chunk_1.h("div", null, __chunk_1.h("slot", { name: "slot4" }))),
        ];
    }
    getLayout2() {
        return (__chunk_1.h("div", null, __chunk_1.h("slot", { name: "slot1" })));
    }
    getLayout3() {
        return [
            __chunk_1.h("div", { class: "slot1" }, __chunk_1.h("slot", { name: "slot1" })),
            __chunk_1.h("div", { class: "slot2" }, __chunk_1.h("slot", { name: "slot2" })),
            __chunk_1.h("div", { class: "slot3" }, __chunk_1.h("slot", { name: "slot3" })),
        ];
    }
    createTooltip() {
        let mainContent = null;
        const mainContentClass = {};
        if (this.layout === '2') {
            mainContent = this.getLayout2();
            mainContentClass['layout2'] = true;
        }
        else if (this.layout === '3') {
            mainContent = this.getLayout3();
            mainContentClass['layout3'] = true;
        }
        else {
            mainContent = this.getDefaultLayout();
        }
        let detailContent = null;
        if (this.hasData()) {
            detailContent = this.rows.map((row) => (__chunk_1.h("div", { class: "detail-row" }, __chunk_1.h("div", { class: "detail-row__label" }, row.cells['label'].value), __chunk_1.h("div", { class: "detail-row__value" }, row.cells['value'].value))));
        }
        const detailClass = {
            visible: this.detailVisible && this.hasData(),
        };
        const tooltipStyle = Object.assign({}, this.tooltipPosition);
        return (__chunk_1.h("div", { id: "tooltip", hidden: !this.visible, style: tooltipStyle }, __chunk_1.h("div", { id: "main-content", class: mainContentClass }, mainContent), __chunk_1.h("div", { id: "detail", class: detailClass }, detailContent)));
    }
    render() {
        return (__chunk_1.h("div", { id: "wrapper", onMouseOver: this.onMouseOver.bind(this), onMouseLeave: this.onMouseLeave.bind(this), ref: (el) => (this.wrapperEl = el) }, __chunk_1.h("slot", null), this.createTooltip()));
    }
    get tooltipEl() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "detailData": ["onDataChanged"]
    }; }
    static get style() { return ":host{--tlt_background:var(--kup-tlt_background,#fff);--tlt_detail-lbl-color:var(--kup-detail-lbl-color,#888);--tlt_shadow:var(--kup-tlt_shadow,0px 0px 7.5px 0px hsla(0,0%,50.2%,0.5))}:host #wrapper{position:relative;display:inline-block}:host #wrapper #tooltip{position:absolute;background:var(--tlt_background);z-index:1000;-webkit-box-shadow:var(--tlt_shadow);box-shadow:var(--tlt_shadow);border-radius:3px;min-width:350px}:host #wrapper #tooltip #main-content{margin:20px;display:-ms-flexbox;display:flex}:host #wrapper #tooltip #main-content .left{width:75px;margin-right:15px}:host #wrapper #tooltip #main-content .right{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between}:host #wrapper #tooltip #main-content.layout2{-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}:host #wrapper #tooltip #main-content.layout3{-ms-flex-direction:column;flex-direction:column}:host #wrapper #tooltip #main-content.layout3>div:not(:last-child){margin-bottom:6px}:host #wrapper #tooltip #detail:not(.visible){max-height:0;opacity:0;-webkit-transition:max-height .5s ease-out,opacity .5s ease-out;transition:max-height .5s ease-out,opacity .5s ease-out}:host #wrapper #tooltip #detail.visible{border-top:1px solid #ccc;padding:20px;max-height:500px;opacity:1;-webkit-transition:max-height .5s ease-in,opacity .5s ease-in;transition:max-height .5s ease-in,opacity .5s ease-in}:host #wrapper #tooltip #detail .detail-row{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host #wrapper #tooltip #detail .detail-row:not(:last-child){margin-bottom:6px}:host #wrapper #tooltip #detail .detail-row__label{color:var(--tlt_detail-lbl-color)}"; }
}

exports.kup_tooltip = KupTooltip;
