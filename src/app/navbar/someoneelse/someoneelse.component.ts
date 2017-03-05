import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';
import { AccountService } from '../account.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-someoneelse',
  templateUrl: './someoneelse.component.html',
  styleUrls: ['./someoneelse.component.css']
})
export class SomeoneelseComponent implements OnInit {

  recipient=new FormControl('');
  accountType=new FormControl('');
  amount=new FormControl('')
  recipientList:any[];

  someoneForm:FormGroup;

  id;
  constructor(private fb:FormBuilder,private accountService:AccountService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    let sub = this.activatedroute.parent.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.someoneForm=this.fb.group({
      recipient:this.recipient,
      accountType:this.accountType,
      amount:this.amount
    });
    this.accountService.getRecipients({userId:this.id})
                      .subscribe(x=>{
                        this.recipientList=x;
                      })
  }

  transfer(){
    this.accountService.someOneElse({
          recipientId:this.recipient.value,
          accountType:this.accountType.value,
          amount:this.amount.value,
          userId:this.id})
                       .subscribe(x=>{
                         console.log(x);
                       });     
    console.log({recipientId:this.recipient,accountType:this.accountType,amount:this.amount,userId:this.id});
  }
}
