import { h } from '@stencil/core';
export class KupTooltip {
    constructor() {
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
            h("div", { class: "left" },
                h("slot", { name: "slot1" })),
            h("div", { class: "right" },
                h("div", null,
                    h("slot", { name: "slot2" })),
                h("div", { class: "slot3" },
                    h("slot", { name: "slot3" })),
                h("div", null,
                    h("slot", { name: "slot4" }))),
        ];
    }
    getLayout2() {
        return (h("div", null,
            h("slot", { name: "slot1" })));
    }
    getLayout3() {
        return [
            h("div", { class: "slot1" },
                h("slot", { name: "slot1" })),
            h("div", { class: "slot2" },
                h("slot", { name: "slot2" })),
            h("div", { class: "slot3" },
                h("slot", { name: "slot3" })),
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
            detailContent = this.rows.map((row) => (h("div", { class: "detail-row" },
                h("div", { class: "detail-row__label" }, row.cells['label'].value),
                h("div", { class: "detail-row__value" }, row.cells['value'].value))));
        }
        const detailClass = {
            visible: this.detailVisible && this.hasData(),
        };
        const tooltipStyle = Object.assign({}, this.tooltipPosition);
        return (h("div", { id: "tooltip", hidden: !this.visible, style: tooltipStyle },
            h("div", { id: "main-content", class: mainContentClass }, mainContent),
            h("div", { id: "detail", class: detailClass }, detailContent)));
    }
    render() {
        return (h("div", { id: "wrapper", onMouseOver: this.onMouseOver.bind(this), onMouseLeave: this.onMouseLeave.bind(this), ref: (el) => (this.wrapperEl = el) },
            h("slot", null),
            this.createTooltip()));
    }
    static get is() { return "kup-tooltip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["kup-tooltip.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["kup-tooltip.css"]
    }; }
    static get properties() { return {
        "layout": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Layout used to display the items"
            },
            "attribute": "layout",
            "reflect": false,
            "defaultValue": "'1'"
        },
        "detailData": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "DataTable",
                "resolved": "DataTable",
                "references": {
                    "DataTable": {
                        "location": "import",
                        "path": "../kup-data-table/kup-data-table-declarations"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Data for the detail"
            }
        }
    }; }
    static get states() { return {
        "visible": {},
        "detailVisible": {}
    }; }
    static get events() { return [{
            "method": "kupTooltipLoadDetail",
            "name": "kupTooltipLoadDetail",
            "bubbles": true,
            "cancelable": false,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Triggered when a box is clicked"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "tooltipEl"; }
    static get watchers() { return [{
            "propName": "detailData",
            "methodName": "onDataChanged"
        }]; }
}
