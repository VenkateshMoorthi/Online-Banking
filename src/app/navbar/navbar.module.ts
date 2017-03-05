import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { UserfrontComponent } from './userfront/userfront.component';
import{navbarRouting} from './navbar.routing';
import {UserfrontService} from './userfront/userfront.service';
import { PrimaryaccountComponent } from './primaryaccount/primaryaccount.component';
import { SavingsaccountComponent } from './savingsaccount/savingsaccount.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountService} from './account.service';
import { TrabetaccountComponent } from './trabetaccount/trabetaccount.component';
import { RecipientComponent } from './recipient/recipient.component';
import { SomeoneelseComponent } from './someoneelse/someoneelse.component';
@NgModule({
  imports: [
    CommonModule,
    navbarRouting,
    ReactiveFormsModule
  ],
  declarations: [NavbarComponent, UserfrontComponent, PrimaryaccountComponent, SavingsaccountComponent, DepositComponent, WithdrawComponent, TrabetaccountComponent, RecipientComponent, SomeoneelseComponent],
  providers:[UserfrontService,AccountService],
  exports: [NavbarComponent]
})
export class NavbarModule { }
