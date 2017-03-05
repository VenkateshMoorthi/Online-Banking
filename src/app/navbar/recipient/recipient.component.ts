import { Component, OnInit } from '@angular/core';
import { Recipient } from 'app/model/recipient';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css']
})
export class RecipientComponent implements OnInit {

  recipient: Recipient = new Recipient();
  recipientForm: FormGroup;
  name = new FormControl('');
  email = new FormControl('');
  phone = new FormControl('');
  accountNumber = new FormControl('');
  description = new FormControl('');

  id;
  recipientList: Recipient[];
  constructor(private fb: FormBuilder, private activatedroute: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    let sub = this.activatedroute.parent.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.recipientForm = this.fb.group({
      name: this.name,
      email: this.email,
      phone: this.phone,
      accountNumber: this.accountNumber,
      description: this.description
    });

    this.accountService.getRecipients({ userId: this.id }).subscribe(x => {
      this.recipientList = x;
    });
  }

  addedit() {

    if (this.recipient.id) {
      this.accountService.editRecipient({ recipient: this.recipient, userId: this.id }).subscribe(x => {
        this.recipientList=x;
        console.log(x);
      })
      console.log({ recipient: this.recipient, userId: this.id });
    } else {

      this.accountService.addRecipient({
        name: this.name.value,
        email: this.email.value,
        phone: this.phone.value,
        accountNumber: this.accountNumber.value,
        description: this.description.value,
        userId: this.id
      }).subscribe(x => {
        console.log(x);
      }, null, () => {
        this.accountService.getRecipients({ userId: this.id }).subscribe(x => {
          this.recipientList = x;
          console.log(x)
        });
      });
    }
  }

  editRecipient(recipient) {
    console.log(recipient);
    let ret = this.recipientList.find(x => x.id === recipient);

    this.recipient = ret;
    console.log(ret);
  }
  delete(recipient){
    this.accountService.deleteRecipient({userId:this.id,recipientId:recipient})
                       .subscribe(x=>{
                         this.recipientList=x;
                       })   
    console.log(recipient);
  }
}
