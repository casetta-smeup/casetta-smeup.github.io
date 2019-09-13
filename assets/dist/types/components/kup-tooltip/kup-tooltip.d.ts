import { EventEmitter } from '../../stencil.core';
import { DataTable, Row } from '../kup-data-table/kup-data-table-declarations';
export declare class KupTooltip {
    /**
     * Layout used to display the items
     */
    layout: string;
    /**
     * Data for the detail
     */
    detailData: DataTable;
    visible: boolean;
    detailVisible: boolean;
    tooltipEl: HTMLElement;
    /**
     * Triggered when a box is clicked
     */
    kupTooltipLoadDetail: EventEmitter;
    onDataChanged(): void;
    private tooltipPosition;
    private kupTooltipLoadDetailTriggered;
    private tooltipTimeout;
    private loadDetailTimeout;
    private wrapperEl;
    private hasData;
    private resetTimeouts;
    private loadDetail;
    readonly rows: Row[];
    private onMouseOver;
    private onMouseLeave;
    private getDefaultLayout;
    private getLayout2;
    private getLayout3;
    private createTooltip;
    render(): any;
}
