const h = window.mycomponent.h;

class KetchupTextInput {
    constructor() {
        /**
         * The label to show when button isButton is active
         */
        this.label = 'Apri in nuova finestra';
        /**
         * If true, the ketchup-html takes the shape of a button
         */
        this.isButton = false;
        /**
         * The address which must be referenced by the iframe
         */
        this.src = '';
    }
    onFrameError() {
        this.ketchupHtmlError.emit();
    }
    onFrameLoaded() {
        this.ketchupHtmlLoaded.emit();
    }
    //---- Rendering functions ----
    render() {
        return !this.isButton ?
            h("iframe", { class: "ketchup-frame", onError: this.onFrameError.bind(this), onLoad: this.onFrameLoaded.bind(this), src: this.src }) :
            h("a", { href: this.src, target: "_blank" },
                h("ketchup-button", { align: "right", iconClass: "mdi mdi-open-in-new", label: this.label }));
    }
    static get is() { return "ketchup-html"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "isButton": {
            "type": Boolean,
            "attr": "is-button",
            "reflectToAttr": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
    static get events() { return [{
            "name": "ketchupHtmlError",
            "method": "ketchupHtmlError",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }, {
            "name": "ketchupHtmlLoaded",
            "method": "ketchupHtmlLoaded",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
    static get style() { return "/**\n* \@prop --htm_height, --kup-html_height: Specifies the height the frame must have. Default: 600px ;\n* \@prop --htm_width, --kup-html_width: Specifies the width of the frame Default: 100% ;\n*/\n:host {\n  --htm_height: var(--kup-html_height, 600px);\n  --htm_width: var(--kup-html_width, 100%);\n  display: inline-block;\n  width: 100%; }\n\n:host([is-button]) {\n  display: inline-block;\n  width: auto; }\n\n.ketchup-frame {\n  height: var(--htm_height);\n  width: var(--htm_width); }"; }
}

export { KetchupTextInput as KetchupHtml };
