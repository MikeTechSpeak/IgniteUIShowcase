export class BankingEntity {

    AccountType: string;
    AccountName: string;
    Currency: string;
    Availability: number;
    StartingAmount: number;
    NumberTitle: number;
    constructor(AccountType: string, AccountName: string,Currency: string,
        Availability: number,
        StartingAmount: number,
        NumberTitle: number) {
            this.AccountType = AccountType;
            this.AccountName = AccountName;
            this.Currency = Currency;
            this.Availability = Availability;
            this.StartingAmount = StartingAmount;
            this.NumberTitle = NumberTitle;
        }

}
