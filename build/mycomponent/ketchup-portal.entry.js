const h = window.mycomponent.h;

import { b as setElementOffset } from './chunk-1011ad13.js';

class KetchupPortal {
    constructor() {
        /**
         * Tells the portal instance if it can be visible or not
         */
        this.isVisible = false;
        /**
         * Array of custom css vars which needs to be mirrored. Their value is computed from cssVarsRef
         */
        this.mirroredCssVars = [];
        /**
         * Calculated offset of where the portal must be positioned
         */
        this.refOffset = {};
        /**
         * The HTML element on which the virtual node must be appended
         */
        this.portalRootNode = document.body;
        //---- Internal state ----
        this.instance = document.createElement('ketchup-portal-instance');
    }
    //---- Lifecycle ----
    // Initial operations
    componentWillLoad() {
        // Attach the created element to the designed father
        this.portalRootNode.appendChild(this.instance);
    }
    // Actual operations on the elements
    componentWillUpdate() {
        // Updates tree node
        this.instance.vNodes = this.nodes;
        // Creates style node
        const styleNode = this.styleNode.cloneNode(true);
        styleNode.setAttribute('data-portal-style', 'true');
        this.instance.styleNode = styleNode;
        // Sets new position
        setElementOffset(this.instance, this.refOffset);
        // Sets visibility
        this.instance.isVisible = this.isVisible;
    }
    // Before being unmounted
    componentDidUnload() {
        this.portalRootNode.removeChild(this.instance);
    }
    //---- Watchers ----
    onPortalRootNodeChange(newValue) {
        newValue.appendChild(this.instance);
    }
    //---- Methods ----
    computeCssVars(el, props) {
        if (window) {
            const computed = window.getComputedStyle(el);
            props.forEach(prop => {
                this.instance.style.setProperty(prop, computed.getPropertyValue(prop));
            });
        }
    }
    /**
     * Returns the root node instance of the KetchupPortalInstance element
     */
    async getPortalInstance() {
        return this.instance;
    }
    onFrameError() {
        this.ketchupHtmlError.emit();
    }
    onFrameLoaded() {
        this.ketchupHtmlLoaded.emit();
    }
    //---- Rendering functions ----
    // This is portal component, which does not need any rendering
    render() { return null; }
    static get is() { return "ketchup-portal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "cssVarsRef": {
            "type": "Any",
            "attr": "css-vars-ref"
        },
        "getPortalInstance": {
            "method": true
        },
        "isVisible": {
            "type": Boolean,
            "attr": "is-visible"
        },
        "mirroredCssVars": {
            "type": "Any",
            "attr": "mirrored-css-vars"
        },
        "nodes": {
            "type": "Any",
            "attr": "nodes"
        },
        "portalRootNode": {
            "type": "Any",
            "attr": "portal-root-node",
            "watchCallbacks": ["onPortalRootNodeChange"]
        },
        "refOffset": {
            "type": "Any",
            "attr": "ref-offset"
        },
        "styleNode": {
            "type": "Any",
            "attr": "style-node"
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
}

class KetchupPortalInstance {
    constructor() {
        /**
         * Specifies if the current portal instance should be displayed or not.
         */
        this.isVisible = false;
        /**
         * Virtual node list the KetchupPortalInstance must render
         */
        this.vNodes = null;
    }
    //---- Life cycle ----
    componentWillUpdate() {
        if (!this.port.shadowRoot.querySelector('style[data-portal-style]')) {
            this.port.shadowRoot.insertBefore(this.styleNode, this.port.shadowRoot.querySelector('style'));
        }
    }
    /**
     * When loading the frame has thrown an error

    @Event({
        eventName: 'ketchupHtmlError',
        composed: true,
        cancelable: false,
        bubbles: true
    })
    ketchupHtmlError: EventEmitter;

    onFrameError() {
        this.ketchupHtmlError.emit();
    }*/
    //---- Rendering functions ----
    // This is portal component, which does not need any rendering
    render() {
        console.log("portal instance", this.vNodes);
        return this.vNodes;
    }
    static get is() { return "ketchup-portal-instance"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "isVisible": {
            "type": Boolean,
            "attr": "is-visible",
            "reflectToAttr": true
        },
        "port": {
            "elementRef": true
        },
        "styleNode": {
            "type": "Any",
            "attr": "style-node"
        },
        "vNodes": {
            "type": "Any",
            "attr": "v-nodes"
        }
    }; }
    static get style() { return ":host {\n  display: none !important;\n  position: absolute !important;\n  z-index: 99999 !important; }\n\n:host([is-visible]) {\n  display: inline-block !important; }"; }
}

export { KetchupPortal, KetchupPortalInstance };
