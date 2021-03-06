import { EventEmitter } from '../../stencil.core';
import { ComboItem, ComboPosition, KetchupComboEvent } from './kup-combo-declarations';
import { GenericObject } from '../../types/GenericTypes';
export declare class KupCombo {
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    displayedField: string;
    /**
     * Allows to pass an initial selected item for the combobox
     */
    initialValue: ComboItem | null;
    /**
     * Marks the field as clearable, allowing an icon to delete its content
     */
    isClearable: boolean;
    /**
     * Marks the field as filterable, allowing an input text to filter the options
     */
    isFilterable: boolean;
    /**
     * Items which can be selected
     */
    items: ComboItem[];
    /**
     * Label to describe the radio group
     */
    label: string;
    /**
     * An arbitrary object object which can be passed to the component.
     * It will be returned when ketchupComboSelected event is fired, inside detail.info.obj
     */
    obj?: GenericObject;
    /**
     * Chooses which field of an item object should be used to create the list and be filtered.
     */
    valueField: string;
    /**
     * If true, the combobox uses a Stencil portal to create the menu.
     * Please use this feature carefully, only if needed.
     * @see kup-portal readme for more details.
     */
    usePortal: boolean;
    value: string;
    filter: string;
    isOpen: boolean;
    comboEl: HTMLElement;
    selected: ComboItem | null;
    portalRef?: HTMLKupPortalElement;
    /**
     * Creates a variable with an instance of the handler for the click event and binds this instance of the combo box to it.
     * This is used to add and more importantly remove events listeners attached to the body.
     * Sets listener on document to check if a click originated elsewhere
     * In that case closes the combo
     */
    clickFunction: any;
    comboText: HTMLInputElement;
    comboPosition: ComboPosition;
    constructedStyleSheet: any;
    internalCssVars: string[];
    baseClass: string;
    componentWillLoad(): void;
    componentDidLoad(): void;
    componentDidUnload(): void;
    /**
     * Programmatically close the combo box
     * @method closeCombo
     */
    closeCombo(): Promise<void>;
    /**
     * Programmatically opens the combo box
     * @method openCombo
     */
    openCombo(): Promise<void>;
    reflectInitialValue(newValue: ComboItem | null, oldValue?: ComboItem): void;
    reflectValueField(newValue: string): void;
    calcBoxPosition(): {
        isRight: boolean;
        isTop: boolean;
    };
    /**
     * Clear the current content inside the the text input
     * @method onClearClick
     */
    onClearClick(): void;
    /**
     * Opens the combo box when clicked
     * @method onComboClick
     */
    onComboClick(): void;
    /**
     * Function to trigger when document is clicked.
     * If the event does not come from within the element, then the list is closed.
     *
     * To check when the event comes from this element, you can't rely on event.target.
     * That's because, as stated by ShadowDOM specs, event targets gets rewritten.
     * @see https://polymer-library.polymer-project.org/3.0/docs/devguide/shadow-dom
     * The event.path property is for Chrome only (maybe also Opera) and it is not standard.
     *
     * The specs also specify that the correct way to get from which element the event was effectively originated,
     * the correct and standard method to use is event.composedPath(), which return an array of the elements the event has traversed.
     * In this way, you can correctly detect when to close the menu or not.
     *
     * However, composed path is not supported by all browser, especially those which do not support ShadowDOM.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath
     * But in that case you can traverse the DOM starting from the target element and going up.
     */
    onDocumentClick(event: UIEvent): Promise<void>;
    /**
     * Function which gets triggered when filter changes
     * @param event
     */
    onFilterUpdate(event: CustomEvent): void;
    /**
     * When an item gets selected
     * @param item
     */
    onItemSelected(item: ComboItem): void;
    /**
     * When an element has been selected
     */
    ketchupComboSelected: EventEmitter<KetchupComboEvent>;
    onComboSelected(item: ComboItem | null, oldItem: ComboItem | null): void;
    composeList(): any;
    render(): any[];
}
