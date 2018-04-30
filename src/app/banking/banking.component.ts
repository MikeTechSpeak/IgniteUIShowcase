import { Component, OnInit } from '@angular/core';
import {BankingService} from '../banking/banking.service';
import {BankingEntity} from '../banking/bankingentity';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html'
})
export class BankingComponent implements OnInit {
  title = 'Banking';
  bankingaccounts: BankingEntity[] = [];
  constructor(private bankingservice: BankingService) { }

  ngOnInit() {
     this.bankingservice.getBankingAccounts().subscribe(t => {
       this.bankingaccounts = t;
       console.log(this.bankingaccounts);
      });
  }
}
