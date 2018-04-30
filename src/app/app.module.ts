// Angular Library Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

// Ignite UI for Angular Imports
import {
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxGridModule,
    IgxIconModule,
    IgxSliderModule,
    IgxButtonModule
} from 'igniteui-angular/main';


// Application Imports
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BankingComponent } from './banking/banking.component';
import { VisaStockComponent } from './visastock/visastock.component';
import { TradesBolotterComponent } from './tradesblotter/tradesblotter.component';
import { TradesBlotterService } from './tradesblotter/tradesblotter.service';
import { InMemoryMockDataService } from './shared/inmemory.data.service';
import { PersonComponent } from './people/person.component';
import { VisaStockrService } from './visastock/visastock.service';
import { BankingService } from './banking/banking.service';
import { AdaptTableService } from './adapttableblotter/adapttableblotter.service';
import { AdaptTableBlotterComponent } from './adapttableblotter/adapttableblotter.component';
import { TradeBlotterBondComponent } from './adapttableblotter/tradeblotterbond.component';
import { PriceBlotterComponent } from './adapttableblotter/priceblotterbond.component';
import { ContactsComponent } from './adapttableblotter/contacts.component';
import { FTSECloseComponent } from './adapttableblotter/ftseclose.component';
import { NorthWindOrdersComponent } from './adapttableblotter/northwindorders.component';
import { PriceBlotterCDSIndexComponent } from './adapttableblotter/priceblottercdsindex.component';
import { PriceBlotterCommodityComponent } from './adapttableblotter/priceblottercommodity.component';
import { SharePlaceService } from './shareplace/shareplace.service';
import { SharePlaceComponent } from './shareplace/shareplace.component';
import { PriceBlotterFxComponent } from './adapttableblotter/priceblotterfx.component';
import { TradeBlotterCDSComponent } from './adapttableblotter/tradeblottercds.component';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        PersonComponent,
        AdaptTableBlotterComponent,
        PriceBlotterComponent,
        TradeBlotterBondComponent,
        BankingComponent,
        NorthWindOrdersComponent,
        PriceBlotterCDSIndexComponent,
        PriceBlotterCommodityComponent,
        FTSECloseComponent,
        VisaStockComponent,
        ContactsComponent,
        TradesBolotterComponent,
        SharePlaceComponent,
        PriceBlotterFxComponent,
        TradeBlotterCDSComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        IgxNavigationDrawerModule,
        IgxNavbarModule,
        IgxLayoutModule,
        IgxRippleModule,
        IgxIconModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxGridModule.forRoot(),
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryMockDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
        )
    ],
    providers: [TradesBlotterService, VisaStockrService, BankingService, AdaptTableService, SharePlaceService],
    bootstrap: [AppComponent],
    entryComponents: [TradeBlotterBondComponent,
        PriceBlotterCDSIndexComponent,
        PriceBlotterCommodityComponent,
        NorthWindOrdersComponent,
        FTSECloseComponent,
        PriceBlotterComponent,
        PriceBlotterFxComponent,
        TradeBlotterCDSComponent,
        ContactsComponent]
})
export class AppModule { }
