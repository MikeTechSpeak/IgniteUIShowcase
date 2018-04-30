// Angular Library Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { IgxFinancialChartModule } from '@infragistics/igniteui-angular-charts/ES5/igx-financial-chart-module';
import { IgxCategoryChartModule } from '@infragistics/igniteui-angular-charts/ES5/igx-category-chart-module';
// Ignite UI for Angular Imports
import {
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxGridModule,
    IgxIconModule,
    IgxSliderModule,
    IgxButtonModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxCheckboxModule,
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
import { FinChartComponent } from './financialChart/financialChart.component';
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
import { CategoryChartComponent } from './category-chart/category-chart.component';
import { FeatureRichGridComponent } from './feature-rich-igxGrid/feature-rich-igxGrid.component';
import { FinDataService } from './shared/finData.service';
import { HttpModule } from '@angular/http';



@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        PersonComponent,
        FinChartComponent,
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
        TradeBlotterCDSComponent,
        CategoryChartComponent,
        FeatureRichGridComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        IgxNavigationDrawerModule,
        IgxNavbarModule,
        IgxFinancialChartModule,
        IgxCategoryChartModule,
        IgxLayoutModule,
        IgxRippleModule,
        IgxIconModule,
        IgxButtonModule,
        IgxSliderModule,
        IgxGridModule.forRoot(),
        IgxAvatarModule,
        IgxBadgeModule,
        IgxInputGroupModule,
        IgxProgressBarModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxCheckboxModule,
        IgxToggleModule,
        HttpClientModule,
        HttpModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryMockDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
        )
    ],
    providers: [TradesBlotterService, VisaStockrService, BankingService, AdaptTableService, SharePlaceService, FinDataService],
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
