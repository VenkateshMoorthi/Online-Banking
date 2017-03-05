import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {AccountService} from '../account.service';
import {ActivatedRoute,Router,Route} from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  id;
  accountType=new FormControl('');
  amount=new FormControl('');
  depositForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private accountService:AccountService,
    private activatedroute:ActivatedRoute,
    private router:Router,
    private route:Router) { }

  ngOnInit() {
    this.depositForm=this.fb.group({
      accountType:this.accountType,
      amount:this.amount
    });
  
     let sub=this.activatedroute.parent.params.subscribe(params=>{
       this.id=params['id'];
     });
  }

  deposit(){
   this.accountService.depositAmount({accountType:this.accountType.value,amount:this.amount.value,userId:this.id})
                       .subscribe(x=>{
                         if(x.status==200){
                           this.router.navigateByUrl('/home/'+this.id+'/userfront');
                         }
                         console.log(x)
                        });
                        
    console.log({accountType:this.accountType.value,amount:this.amount.value,userId:this.id});
  }
}
