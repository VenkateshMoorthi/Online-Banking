import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup} from '@angular/forms';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-trabetaccount',
  templateUrl: './trabetaccount.component.html',
  styleUrls: ['./trabetaccount.component.css']
})
export class TrabetaccountComponent implements OnInit {

  id;
  transferfrom=new FormControl('');
  transferto=new FormControl('');
  amount=new FormControl('');
  trabetForm:FormGroup;

  constructor( private fb:FormBuilder,
    private accountService:AccountService,
    private activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let sub=this.activatedroute.parent.params.subscribe(params=>{
       this.id=params['id'];
       console.log(this.id);
     });

     this.trabetForm=this.fb.group({
       transferfrom:this.transferfrom,
       transferto:this.transferto,
       amount:this.amount
    })
  }

  transfer(){
    this.accountService.transferBetweenAccounts({
      transferfrom:this.transferfrom.value,
      transferto:this.transferto.value,
      amount:this.amount.value,
      userId:this.id    
    }).subscribe(x=>{
      console.log(x);
    })
    
    console.log({
      transferfrom:this.transferfrom.value,
      transferto:this.transferto.value,
      amount:this.amount.value,
      userId:this.id    
    });
  }

  change(){
    if(this.transferfrom.value=='Primary'){
      this.transferto.setValue('Savings');
    }else{
      this.transferto.setValue('Primary');
    }
  }
}
