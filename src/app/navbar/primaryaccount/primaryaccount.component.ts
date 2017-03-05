import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {ActivatedRoute} from '@angular/router';
import {PrimaryTransaction} from 'app/model/primary-transaction';
@Component({
  selector: 'app-primaryaccount',
  templateUrl: './primaryaccount.component.html',
  styleUrls: ['./primaryaccount.component.css']
})
export class PrimaryaccountComponent implements OnInit {
  id;
  primaryAccountBalance;
  primaryTransactionList; 
  constructor(private accountService:AccountService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    let sub=this.activatedroute.parent.params.subscribe(params=>{
       this.id=params['id'];
       console.log(this.id);
     });
    this.accountService.primaryAccountDetails({userId:this.id})
                        .subscribe(x=>{
                          this.primaryAccountBalance=x.primaryAccountBalance;
                          this.primaryTransactionList=x.primaryTransactionLists;
                          console.log(x.primaryTransactionLists);
                        })
  }

}
