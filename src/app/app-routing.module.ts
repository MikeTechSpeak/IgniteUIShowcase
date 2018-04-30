import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BankingComponent } from './banking/banking.component';
import { VisaStockComponent } from './visastock/visastock.component';
import { TradesBolotterComponent } from './tradesblotter/tradesblotter.component';
import { PersonComponent } from './people/person.component';
import { AdaptTableBlotterComponent } from './adapttableblotter/adapttableblotter.component';
import { SharePlaceComponent } from './shareplace/shareplace.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: VisaStockComponent, data: { text: 'Visa Stock Prices', icon: 'home' } },
    { path: 'people', component: PersonComponent, data: { text: 'People', icon: 'directions_run' } },
    { path: 'adapattableblotter', component: AdaptTableBlotterComponent, data: { text: 'Adapt Table Blotter', icon: 'monetization_on' } },
    { path: 'banking', component: BankingComponent, data: { text: 'Banking Accounts', icon: 'monetization_on' } },
    { path: 'trade', component: TradesBolotterComponent, data: { text: 'Trade Blotter', icon: 'insert_chart' } },
    { path: 'sharePlace', component: SharePlaceComponent, data: { text: 'Share Place', icon: 'share' } },
    { path: 'about', component: AboutComponent, data: { text: 'About', icon: 'info' } }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
