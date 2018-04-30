export class TradeBlotterBondEntity {

   TradeId: number;
   TradeDate: string;
   BuySell: string;
   Notional: number;
   Currency: string;
   TradedAt: number;
   Isin: string;
   ObligationName: string;
   CounterParty: string;
   MaturityDate: string;
   EffectiveDate: string;
   Jurisdiction: string;
   Ticker: string;
   Coupon: number;
   Cusip: string;
   Trader: string;
   Status: string;

   constructor(TradeId: number,
    TradeDate: string,
    BuySell: string,
    Notional: number,
    Currency: string,
    TradedAt: number,
    Isin: string,
    ObligationName: string,
    CounterParty: string,
    MaturityDate: string,
    EffectiveDate: string,
    Jurisdiction: string,
    Ticker: string,
    Coupon: number,
    Cusip: string,
    Trader: string,
    Status: string) {

        this.TradeId =  TradeId;
        this.TradeDate = TradeDate;
        this.BuySell =   BuySell;
        this.Notional = Notional;
        this.Currency =  Currency;
        this.TradedAt =  TradedAt;
        this.Isin =  Isin;
        this.ObligationName =   ObligationName;
        this.CounterParty =   CounterParty;
        this.MaturityDate =  MaturityDate;
        this.EffectiveDate =  EffectiveDate;
        this.Jurisdiction =  Jurisdiction;
        this.Ticker =  Ticker;
        this.Coupon =  Coupon;
        this.Cusip =  Cusip;
        this.Trader = Trader;
        this.Status =  Status;

   }
}
