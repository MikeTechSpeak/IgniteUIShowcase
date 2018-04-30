export interface TradeBlotterCDSEntity {

    TradeId: number;
    TradeDate: string;
    BuySell: string;
    Notional: number;
    Coupon: number;
    Currency: string;
    ReferenceEntity: string;
    Ticker: string;
    ShortName: string;
    Counterparty: string;
    MaturityDate: string;
    EffectiveDate: string;
    Tenor: number;
    RedEntityCode: string;
    EntityCusip: string;
    EntityType: string;
    Jurisdiction: string;
    Sector: string;
    Trader: string;
    Status: string;
}
