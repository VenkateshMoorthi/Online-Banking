import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {AccountService} from '../account.service';
import {ActivatedRoute,Router,Route} from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
id;
  accountType=new FormControl('');
  amount=new FormControl('');
  depositForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private accountService:AccountService,
    private activatedroute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.depositForm=this.fb.group({
      accountType:this.accountType,
      amount:this.amount
    });
  
     let sub=this.activatedroute.parent.params.subscribe(params=>{
       this.id=params['id'];
       console.log(this.id);
     });
  }

  withdraw(){
  this.accountService.withdrawAmount({accountType:this.accountType.value,amount:this.amount.value,userId:this.id})
                       .subscribe(x=>{
                         if(x.status==200){
                           this.router.navigateByUrl('/home/'+this.id+'/userfront');
                         }
                        });
                        
    console.log({accountType:this.accountType.value,amount:this.amount.value,userId:this.id});
  }

}
