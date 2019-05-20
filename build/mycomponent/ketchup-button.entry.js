const h = window.mycomponent.h;

class KetchupButton {
    constructor() {
        this.flat = false;
        this.fillspace = false;
        this.showtext = true;
        this.showicon = true;
        this.rounded = false;
        this.transparent = false;
        this.iconUrl = 'https://cdn.materialdesignicons.com/3.2.89/css/materialdesignicons.min.css';
    }
    onBtnClickedHandler() {
        this.ketchupButtonClicked.emit({ id: this.ketchupButtonEl.dataset.id });
    }
    _isHint() {
        return 'Hint' === this.textmode;
    }
    render() {
        let btnLabel = null;
        if ((!this._isHint() || (this._isHint() && this.flat)) &&
            this.showtext &&
            this.label) {
            btnLabel = h("span", { class: "button-text" }, this.label);
        }
        let icon = null;
        if (this.showicon && this.iconClass) {
            icon = h("span", { class: 'button-icon ' + this.iconClass });
        }
        let btnClass = '';
        if (this.flat) {
            btnClass = 'flat-btn';
        }
        else {
            if (this.buttonClass) {
                btnClass += this.buttonClass;
            }
            if (this.rounded) {
                btnClass += ' rounded';
            }
            if (this.transparent) {
                btnClass += ' transparent';
            }
        }
        if (this.fillspace) {
            btnClass += ' fillspace';
        }
        if (this.align) {
            if ('right' === this.align) {
                btnClass += ' align-right';
            }
            else if ('left' === this.align) {
                btnClass += ' align-left';
            }
        }
        btnClass = btnClass.trim();
        let title = '';
        if (this._isHint()) {
            title = this.label;
        }
        // TODO: check if the div element can be removed by passing JSX an array of elements
        return [
            h("link", { href: this.iconUrl, rel: "stylesheet", type: "text/css" }),
            h("button", { class: btnClass, title: title, onClick: () => this.onBtnClickedHandler() },
                icon,
                btnLabel),
        ];
    }
    static get is() { return "ketchup-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "align": {
            "type": String,
            "attr": "align"
        },
        "buttonClass": {
            "type": String,
            "attr": "button-class"
        },
        "fillspace": {
            "type": Boolean,
            "attr": "fillspace"
        },
        "flat": {
            "type": Boolean,
            "attr": "flat"
        },
        "iconClass": {
            "type": String,
            "attr": "icon-class"
        },
        "iconUrl": {
            "type": String,
            "attr": "icon-url"
        },
        "ketchupButtonEl": {
            "elementRef": true
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "rounded": {
            "type": Boolean,
            "attr": "rounded"
        },
        "showicon": {
            "type": Boolean,
            "attr": "showicon"
        },
        "showtext": {
            "type": Boolean,
            "attr": "showtext"
        },
        "textmode": {
            "type": String,
            "attr": "textmode"
        },
        "transparent": {
            "type": Boolean,
            "attr": "transparent"
        }
    }; }
    static get events() { return [{
            "name": "ketchupButtonClicked",
            "method": "ketchupButtonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ":host {\n  /* CSS vars\n   * https://stackoverflow.com/questions/41950834/buttons-not-inheriting-parent-div-font-size\n   * As stated above, form elements do not usually inherit stiles from the root of the element.\n   * Therefore css vars are provided\n   */\n  /**\n   * \@prop --btn_font-style, --kup-button_font-style: Sets button font style.\n   * \@prop --btn_font-size, --kup-button_font-size: Sets button font size.\n   * \@prop --btn_font-weight, --kup-button_font-weight: Sets the font weight of the button\n   * \@prop --btn_font-family, --kup-button_font-family: sets the font family of the button\n   * \@prop --btn_icon-size, --kup-button_icon-size: Set icon size.\n   * \@prop --btn_main-color, --kup-button_main-color: Sets the main color of the button.\n   * \@prop --btn_text-color, --kup-button_text-color: Sets color of the button text.\n   * \@prop --btn_text-color--transparent, --kup-button_text-color--transparent: Sets text color when button is transparent.\n   * \@prop --btn_icon-color, --kup-button_icon-color: Sets icon color.\n   * \@prop --btn_icon--transparent, --kup-button_icon-color--transparent: Sets icon color when button is transparent.\n   * \@prop --btn_animation-duration, --kup-button_animation-duration: Sets duration of all transitions of the component.\n   * \@prop --btn_border-color, --kup-button_border-color: Sets border color of the button only when it is transparent.\n  */\n  --btn_font-style: var(--kup-button_font-style, 'normal');\n  --btn_font-size: var(--kup-button_font-size, 14px);\n  --btn_font-weight: var(--kup-button_font-weight, 400);\n  --btn_font-family: var(--kup-button_font-family, inherit);\n  --btn_icon-size: var(--kup-button_icon-size, 18px);\n  --btn_main-color: var(--kup-button_main-color, #4e908f);\n  --btn_text-color: var(--kup-button_text-color, #ffffff);\n  --btn_text-color--transparent: var(\n    --kup-button_text-color--transparent,\n    gray\n  );\n  --btn_text-decoration: var(--kup-button_text-decoration, 'none');\n  --btn_icon-color: var(--kup-button_icon-color, #ffffff);\n  --btn_icon--transparent: var(--kup-button_icon-color--transparent, gray);\n  --btn_animation-duration: var(--kup-button_animation-duration, 0.3s);\n  --btn_border-color: var(--kup-button_border-color, #4e908f);\n  /**\n   * \@prop --btn_color-info: Background color of the button when info state is set\n   * \@prop --btn_color-danger: Background color of the button when danger state is set\n   * \@prop --btn_color-danger--hover: Background color of the button when danger:hover state is set\n   * \@prop --btn_color-warning: Background color of the button when warning state is set\n   * \@prop --btn_color-selected: Background color of the button when selected state is set\n   */\n  --btn_color-info: var(--kup-color-info, #6a8fd1);\n  --btn_color-danger: var(--kup-danger-danger, #f0423c);\n  --btn_color-danger--hover: var(--kup-danger-color--hover, #d91e18);\n  --btn_color-warning: var(--kup-info-color, #ffd454);\n  --btn_color-selected: var(--kup-info-color, #ffc107); }\n\n:host(.fillspace) button {\n  width: 100%; }\n\nbutton {\n  background: var(--btn_main-color);\n  border-radius: 2px;\n  border: none;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  color: var(--btn_text-color);\n  cursor: pointer;\n  font-family: var(--btn_font-family);\n  font-size: var(--btn_font-size);\n  font-weight: var(--btn_font-weight);\n  line-height: 30px;\n  padding: 0px 8px;\n  text-align: center;\n  -webkit-transition: -webkit-box-shadow var(--btn_animation-duration);\n  transition: -webkit-box-shadow var(--btn_animation-duration);\n  transition: box-shadow var(--btn_animation-duration);\n  transition: box-shadow var(--btn_animation-duration), -webkit-box-shadow var(--btn_animation-duration);\n  white-space: nowrap; }\n  button:hover {\n    -webkit-box-shadow: 2px 2px 5px 1px rgba(100, 100, 100, 0.7);\n    box-shadow: 2px 2px 5px 1px rgba(100, 100, 100, 0.7); }\n  button > .button-icon {\n    display: block;\n    color: var(--btn_icon-color);\n    fill: var(--btn_icon-color);\n    float: left;\n    width: var(--btn_icon-size); }\n  button > .button-text {\n    font-style: var(--btn_font-style);\n    -webkit-text-decoration: var(--btn_text-decoration);\n    text-decoration: var(--btn_text-decoration); }\n  button.rounded {\n    border-radius: 15px; }\n  button.transparent {\n    background-color: transparent;\n    border: 1px solid var(--btn_border-color);\n    color: var(--btn_text-color--transparent); }\n    button.transparent > .button-icon {\n      color: var(--btn_icon-color--transparent);\n      fill: var(--btn_icon-color--transparent); }\n  button.btn-info {\n    background: var(--btn_color-info); }\n  button.btn-danger {\n    background: var(--btn_color-danger); }\n    button.btn-danger:hover {\n      background: var(--btn_color-danger--hover); }\n  button.btn-warning {\n    background: var(--btn_color-warning); }\n  button.btn-selected {\n    background: var(--btn_color-selected); }\n  button.flat-btn {\n    background: none;\n    border: none;\n    color: var(--btn_main-color); }\n    button.flat-btn:hover {\n      -webkit-box-shadow: none;\n      box-shadow: none; }\n    button.flat-btn .button-text {\n      text-decoration: underline; }\n    button.flat-btn > .button-icon {\n      color: var(--btn_main-color);\n      fill: var(--btn_main-color); }\n  button.align-right {\n    text-align: right; }\n    button.align-right > .button-icon {\n      float: right; }\n  button.align-left {\n    text-align: left; }\n  button.fillspace {\n    width: 100%; }"; }
}

export { KetchupButton };
