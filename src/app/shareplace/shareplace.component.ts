import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { SharePlaceService } from './shareplace.service';
import { Document } from './document';
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { IgxGridCellComponent } from 'igniteui-angular/grid/cell.component'
import { IgxGridRowComponent } from 'igniteui-angular/grid/row.component';


@Component({
    selector: 'app-shareplace',
    templateUrl: './shareplace.component.html',
    styleUrls: ['./shareplace.component.css']
})
export class SharePlaceComponent implements OnInit {
    title = 'SharePlace';
    documents: Document[] = [];

    private iconDictionary = {
        'Modified': 'mode_edit',
        'Uploaded': 'file_upload',
        'Available': 'check_circle',
        'Away': 'query_builder',
        'Busy': 'remove_circle'
    }

    private statusColorDictionary = {
        'Available': 'green',
        'Away': 'yellow',
        'Busy':'red'
    }

    constructor(private sharePlaceService: SharePlaceService) { }

    ngOnInit() {
        this.sharePlaceService.getDocuments().subscribe(result => {
            this.documents = result;
        });
    }

    @ViewChild('selectedColumn') selectedColumn: IgxColumnComponent;
    @ViewChild('checkbox') checkbox: TemplateRef<any>;

    onCellSelected(cell: IgxGridCellComponent) {
        cell.row.rowData.Selected = !cell.row.rowData.Selected;
    }
}
