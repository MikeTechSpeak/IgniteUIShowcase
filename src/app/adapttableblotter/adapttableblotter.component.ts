import {Component , OnInit, ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    ComponentRef,
    ComponentFactory} from '@angular/core';
import {AdaptTableService} from '../adapttableblotter/adapttableblotter.service';
import {AdaptableBlotterDsEntity} from '../adapttableblotter/entities/adaptableblotterdsentity';
import {PriceBlotterComponent} from '../adapttableblotter/priceblotterbond.component';
import {TradeBlotterBondComponent} from '../adapttableblotter/tradeblotterbond.component';
import {ContactsComponent} from '../adapttableblotter/contacts.component';
import {FTSECloseComponent} from '../adapttableblotter/ftseclose.component';
import {NorthWindOrdersComponent} from '../adapttableblotter/northwindorders.component';
import {PriceBlotterCDSIndexComponent} from '../adapttableblotter/priceblottercdsindex.component';
import {PriceBlotterCommodityComponent} from '../adapttableblotter/priceblottercommodity.component';
import { PriceBlotterFxComponent } from '../adapttableblotter/priceblotterfx.component';
import { TradeBlotterCDSComponent } from '../adapttableblotter/tradeblottercds.component';
@Component({
    selector: 'app-adapttableblotter',
    templateUrl: './adapttableblotter.component.html'
})

export class AdaptTableBlotterComponent implements OnInit {

    AdapttableBlotterDataSoureOptions: AdaptableBlotterDsEntity[] = [];
    selectedDataSource: AdaptableBlotterDsEntity;

    @ViewChild('gridcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }

    ngOnInit() {
      this.AdapttableBlotterDataSoureOptions = this.getAdaptTableDs();
      this.selectedDataSource = this.AdapttableBlotterDataSoureOptions[0];
      this.entry.clear();
      const factory = this.resolver.resolveComponentFactory(PriceBlotterComponent);
      const componentRef = this.entry.createComponent(factory);

    }
    changeDs(ds) {
        console.log(this.selectedDataSource.Title);
        this.changeDataSource();
    }

    changeDataSource() {
        if (this.selectedDataSource.Id === '1') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(ContactsComponent);
            const componentRef = this.entry.createComponent(factory);
            //componentRef.instance.message = message;

        } else if (this.selectedDataSource.Id === '2') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(FTSECloseComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '3') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(NorthWindOrdersComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '4') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(PriceBlotterComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '5') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(PriceBlotterCDSIndexComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '6') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(PriceBlotterCommodityComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '7') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(PriceBlotterFxComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '8') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(TradeBlotterBondComponent);
            const componentRef = this.entry.createComponent(factory);
          } else if (this.selectedDataSource.Id === '9') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(TradeBlotterCDSComponent);
            const componentRef = this.entry.createComponent(factory);
          }


    }

    // getAdaptTableDs() {
    //     return [
    //         new AdaptableBlotterDsEntity('1', 'Price Blotter Bond'),
    //         new AdaptableBlotterDsEntity('2', 'Trade Blotter Bond'),
    //         new AdaptableBlotterDsEntity('3', 'Contacts'),
    //         new AdaptableBlotterDsEntity('4', 'FTSE Close'),
    //         new AdaptableBlotterDsEntity('5', 'NorthWind Orders'),
    //     ];
    // }
    getAdaptTableDs() {
        return [
            new AdaptableBlotterDsEntity('1', 'Contacts'),
            new AdaptableBlotterDsEntity('2', 'FTSE Close'),
            new AdaptableBlotterDsEntity('3', 'NorthWind Orders'),
            new AdaptableBlotterDsEntity('4', 'Price Blotter Bond'),
            new AdaptableBlotterDsEntity('5', 'Price Blotter CDSIndex'),
            new AdaptableBlotterDsEntity('6', 'Price Blotter Commodity'),
            new AdaptableBlotterDsEntity('7', 'Price Blotter FX'),
            new AdaptableBlotterDsEntity('8', 'Trade Blotter Bond'),
            new AdaptableBlotterDsEntity('9', 'Trade Blotter CDS')
        ];
    }
}
