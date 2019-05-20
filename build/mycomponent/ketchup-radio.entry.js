const h = window.mycomponent.h;

import { b as generateUniqueId } from './chunk-31f65c6e.js';

class KetchupRadio {
    constructor() {
        /**
         * Label to describe the radio group
         */
        this.label = '';
        /**
         * Direction in which the radio elements must be placed
         */
        this.direction = 'horizontal';
        /**
         * Chooses which field of an item object should be used to create the list and be filtered.
         */
        this.displayedField = 'id';
        /**
         * Radio elements to display
         */
        this.items = [];
        /**
         * Radio elements value
         */
        this.radioName = '';
        /**
         * Chooses which field of an item object should be used to create the list and be filtered.
         */
        this.valueField = 'id';
        //---- Internal state ----
        this.selectedRadio = null;
    }
    //---- Validating props ----
    checkDirection(newVal) {
        if (!/horizontal|vertical/.test(newVal)) {
            throw new Error('ketchup-radio: direction must be horizontal or vertical.');
        }
    }
    // Typing for input element UIEvent & {target: HTMLInputElement}
    onRadioChanged(radio) {
        this.ketchupRadioChanged.emit({
            value: radio,
            oldValue: this.selectedRadio,
        });
        this.selectedRadio = radio;
    }
    //---- Rendering functions ----
    radioElementsComposer() {
        return this.items.map((radio) => {
            // The id is necessary for the label to be associated with the input
            // TODO Anyway this can be extracted into another map object to avoid creating a new id each time the component is painted.
            const uId = generateUniqueId(radio[this.valueField]);
            return h("li", { class: 'ketchup-radio__item' + (this.selectedRadio && this.selectedRadio[this.valueField] === radio[this.valueField] ? ' ketchup-radio__item--selected' : '') },
                h("div", null,
                    h("input", { id: uId, type: "radio", name: this.radioName, value: radio[this.valueField], onChange: this.onRadioChanged.bind(this, radio) })),
                h("label", { htmlFor: uId }, radio[this.displayedField]));
        });
    }
    render() {
        let classRadioGroup = 'ketchup-radio__group';
        // When direction is horizontal
        if (this.direction === 'horizontal') {
            classRadioGroup += ' ketchup-radio__group--horizontal';
        }
        return (h("div", null,
            this.label ? h("p", null, this.label) : null,
            h("ul", { class: classRadioGroup }, this.radioElementsComposer())));
    }
    static get is() { return "ketchup-radio"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "direction": {
            "type": String,
            "attr": "direction",
            "watchCallbacks": ["checkDirection"]
        },
        "displayedField": {
            "type": String,
            "attr": "displayed-field"
        },
        "items": {
            "type": "Any",
            "attr": "items"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "radioName": {
            "type": String,
            "attr": "radio-name"
        },
        "selectedRadio": {
            "state": true
        },
        "valueField": {
            "type": String,
            "attr": "value-field"
        }
    }; }
    static get events() { return [{
            "name": "ketchupRadioChanged",
            "method": "ketchupRadioChanged",
            "bubbles": true,
            "cancelable": false,
            "composed": true
        }]; }
    static get style() { return "/**\n* \@prop --rad_font-size, --kup-radio_font-size: Sets font size and icon radio button size (size * 1.4)\n* \@prop --rad_border-color, --kup-radio_border-color: Set default color of external border of the radio element\n* \@prop --rad_border-color--selected --kup-radio_border-color: Set selected color of external border of the radio element\n* \@prop --rad_color, --kup-radio_color: Sets radio element color when selected radio appears\n* \@prop --rad_tr-duration, --kup-radio_transition-duration: Sets all components transitions duration\n*/\n:host {\n  --rad_font-size: var(--kup-radio_font-size, 14px);\n  --rad_border-color: var(--kup-radio_border-color, #808080);\n  --rad_border-color--selected: var(--kup-radio_border-color, #676767);\n  --rad_color: var(--kup-radio_color, #4e908f);\n  --rad_tr-duration: var(--kup-radio_transition-duration, 0.6s); }\n\n.ketchup-radio__group {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  position: relative;\n  z-index: 0; }\n  .ketchup-radio__group.ketchup-radio__group--horizontal {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap; }\n\n.ketchup-radio__item {\n  -ms-flex-align: center;\n  align-items: center;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-pack: center;\n  justify-content: center;\n  position: relative;\n  margin: 10px 12px;\n  z-index: 0; }\n  .ketchup-radio__item > div {\n    -ms-flex-align: center;\n    align-items: center;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    height: calc(var(--rad_font-size) * 1.4);\n    -ms-flex-pack: center;\n    justify-content: center;\n    position: relative;\n    width: calc(var(--rad_font-size) * 1.4);\n    z-index: 0; }\n    .ketchup-radio__item > div::before, .ketchup-radio__item > div::after {\n      border-radius: 50%;\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      content: ''; }\n    .ketchup-radio__item > div::before {\n      border: 1px solid var(--rad_border-color);\n      height: 100%;\n      left: 0;\n      position: absolute;\n      top: 0;\n      -webkit-transition: border-color var(--rad_tr-duration);\n      transition: border-color var(--rad_tr-duration);\n      width: 100%;\n      z-index: 0; }\n    .ketchup-radio__item > div::after {\n      background-color: var(--rad_color);\n      height: calc(100% - 6px);\n      position: relative;\n      opacity: 0;\n      -webkit-transition: opacity var(--rad_tr-duration);\n      transition: opacity var(--rad_tr-duration);\n      width: calc(100% - 6px);\n      z-index: 1; }\n    .ketchup-radio__item > div > input {\n      cursor: pointer;\n      height: 100%;\n      left: 0;\n      margin: 0;\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      width: 100%;\n      z-index: 2; }\n  .ketchup-radio__item--selected div::before {\n    border-color: var(--rad_border-color--selected); }\n  .ketchup-radio__item--selected div::after {\n    opacity: 1; }\n  .ketchup-radio__item label {\n    cursor: pointer;\n    font-size: var(--rad_font-size);\n    margin-left: 10px; }"; }
}

export { KetchupRadio };
