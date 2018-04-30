export class VisaStockEntity {
  VDate: string;
  Open: number;
  High: number;
  Low: number;
  Close: number;
  Volume: string;
  Dividend: number;
  Split: number;
  Ask: number;
  Bid: number;
  AdjOpen: number;
  AdjHigh: number;
  AdjLow: number;
  AdjClose: number;
  AdjVolume: number;
  constructor(VDate: string, Open: number,
    High: number, Low: number, Close: number, Volume: string,
    Dividend: number, Split: number, Ask: number, Bid: number,
    AdjOpen: number, AdjHigh: number, AdjLow: number, AdjClose: number,
    AdjVolume: number) {
     this.VDate = VDate;
     this.Open = Open;
     this.High = High;
     this.Low = Low;
     this.Close = Close;
     this.Volume = Volume;
     this.Dividend = Dividend;
     this.Split = Split;
     this.Ask = Ask;
     this.Bid = Bid;
     this.AdjOpen = AdjOpen;
     this.AdjHigh = AdjHigh;
     this.AdjLow = AdjLow;
     this.AdjClose = AdjClose;
     this.AdjVolume = AdjVolume;
    }
}
