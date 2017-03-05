import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-savingsaccount',
  templateUrl: './savingsaccount.component.html',
  styleUrls: ['./savingsaccount.component.css']
})
export class SavingsaccountComponent implements OnInit {

  id;
  savingsAccountBalance;
  savingsTransactionList;

  constructor(private accountService: AccountService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    let sub = this.activatedroute.parent.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.accountService.savingsAccountDetails({ userId: this.id })
      .subscribe(x => {
        this.savingsAccountBalance = x.savingsAccountBalance;
        this.savingsTransactionList = x.savingsTransactionLists;
        console.log(x.savingsTransactionLists);
      });
  }
}


