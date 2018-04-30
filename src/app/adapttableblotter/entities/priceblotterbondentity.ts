export class PriceBlotterBondEntity {

    Isin: string;
    Instrument: string;
    Sector: string;
    Price: number;
    BidOfferSpread: number;
    Bid: number;
    Ask: number;
    IssueTracker: string;
    Coupon: number;
    Currency: string;
    Tier: string;
    Depth: number;
    Spread: number;
    Rating: string;
    Country: string;
    Cusip: string;

    constructor(Isin: string,
        Instrument: string,
        Sector: string,
        Price: number,
        BidOfferSpread: number,
        Bid: number,
        Ask: number,
        IssueTracker: string,
        Coupon: number,
        Currency: string,
        Tier: string,
        Depth: number,
        Spread: number,
        Rating: string,
        Country: string,
        Cusip: string) {

        this.Isin = Isin;
        this.Instrument = Instrument;
        this.Sector = Sector;
        this.Price = Price;
        this.BidOfferSpread = BidOfferSpread;
        this.Bid = Bid;
        this.Ask = Ask;
        this.IssueTracker = IssueTracker;
        this.Coupon = Coupon;
        this.Currency = Currency;
        this.Tier = Tier;
        this.Depth = Depth;
        this.Spread = Spread;
        this.Rating = Rating;
        this.Country = Country;
        this.Cusip = Cusip;
    }
}
