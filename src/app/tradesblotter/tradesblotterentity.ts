export class TradesBlotterEntity {
    DeskId: number;
    TradeId: number;
    InstrumentId: string;
    Title: string;
    Notionals: string;
    Counterparty: string;
    Currency: string;
    Country: string;
    ChangeOnYear: number;
    Price: number;
    MoodysRa: string;
    Flag: string;

    constructor(DeskId: number, TradeId: number, InstrumentId: string,
        Title: string, Notionals: string, Counterparty: string,
        Currency: string, Country: string, ChangeOnYear: number, Price: number, MoodysRa: string,
        Flag: string) {
          this.DeskId = DeskId;
          this.TradeId = TradeId;
          this.InstrumentId = InstrumentId;
          this.Title = Title;
          this.Notionals = Notionals;
          this.Counterparty = Counterparty;
          this.Currency = Currency;
          this.Country = Country;
          this.ChangeOnYear = ChangeOnYear;
          this.Price = Price;
          this.MoodysRa = MoodysRa;
          this.Flag = Flag;

        }
}
