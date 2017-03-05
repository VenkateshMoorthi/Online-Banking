import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {UserfrontService} from './userfront.service';

@Component({
  selector: 'app-userfront',
  templateUrl: './userfront.component.html',
  styleUrls: ['./userfront.component.css']
})
export class UserfrontComponent implements OnInit {

  primaryAccountBalance:number;
  savingsAccountBalance:number; 

  constructor(private activatedroute:ActivatedRoute,private userfrontService:UserfrontService,private router:Router) { }

  ngOnInit() {
    let id;
    let sub=this.activatedroute.params.subscribe(params=>{
      id=params['id'];});
   if(id==null){
     let sub=this.activatedroute.parent.params.subscribe(params=>{
       id=params['id'];
     });
   }   

    this.userfrontService.getBalanceDetaisl({userid:id})
                          .subscribe(x=>{
                            this.primaryAccountBalance=x.primaryAccountBalance;
                            this.savingsAccountBalance=x.savingsAccountBalance;
        });
  }

}
