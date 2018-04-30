import {
    Component,
    OnInit,
    QueryList,
    ViewChild,
    ViewEncapsulation,
    AfterViewInit
} from '@angular/core';

import { IgxColumnComponent } from 'igniteui-angular/grid/column.component';
import { IgxDateSummaryOperand, IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular/grid/grid-summary';
import { IgxGridComponent } from 'igniteui-angular/grid/grid.component';

import { IgxToggleDirective, IgxAvatarComponent, STRING_FILTERS } from 'igniteui-angular/main';
import { data } from './data';

class DealsSummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'average' || obj.key === 'sum') {
                const summaryResult = obj.summaryResult;
                // apply formatting to float numbers
                if (Number(summaryResult) === summaryResult && summaryResult % 1 !== 0) {
                    obj.summaryResult = summaryResult.toFixed(2);
                }
                return obj;
            }
        });
        return result;
    }
}

class EarliestSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'earliest') {
                return obj;
            }
        });
        return result;
    }
}

class SoonSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(summaries?: any[]): IgxSummaryResult[] {
        const result = super.operate(summaries).filter((obj) => {
            if (obj.key === 'latest') {
                obj.label = 'Soon';
                return obj;
            }
        });
        return result;
    }
}

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid',
    styleUrls: ['./feature-rich-igxGrid.component.scss'],
    templateUrl: './feature-rich-igxGrid.component.html'
})
export class FeatureRichGridComponent implements OnInit, AfterViewInit {

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid1: IgxGridComponent;

    @ViewChild('toggleRefHiding') public toggleHiding: IgxToggleDirective;
    @ViewChild('toggleRefPinning') public togglePinning: IgxToggleDirective;

    public localData: any[];
    public dealsSummary = DealsSummary;
    public earliestSummary = EarliestSummary;
    public soonSummary = SoonSummary;

    public cols: QueryList<IgxColumnComponent>;
    public hiddenColsLength: number;
    public pinnedColsLength: number;

    constructor() { }

    public ngOnInit() {
        this.localData = data;
    }

    public ngAfterViewInit() {
        this.cols = this.grid1.columnList;
        this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
        this.pinnedColsLength = this.grid1.pinnedColumns.length;
    }

    public toggleHidingContent() {
        if (this.toggleHiding.collapsed) {
            if (!this.togglePinning.collapsed) {
                this.togglePinning.close(true);
            }
            this.toggleHiding.open(true);
        } else {
            this.toggleHiding.close(true);
        }
    }

    public togglePinningContent() {
        if (this.togglePinning.collapsed) {
            if (!this.toggleHiding.collapsed) {
                this.toggleHiding.close(true);
            }
            this.togglePinning.open(true);
        } else {
            this.togglePinning.close(true);
        }
    }

    public toggleVisibility(col: IgxColumnComponent) {
        if (col.hidden) {
            this.hiddenColsLength--;
        } else {
            this.hiddenColsLength++;
        }
        col.hidden = !col.hidden;
    }

    public togglePin(col: IgxColumnComponent) {
        if (col.pinned) {
            this.grid1.unpinColumn(col.field);
            this.pinnedColsLength--;
        } else {
            this.grid1.pinColumn(col.field);
            this.pinnedColsLength++;
        }
    }
}
