import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Router } from '@angular/router'
import { UserfrontComponent } from './userfront/userfront.component';
import { NavbarComponent } from './navbar.component';
import {PrimaryaccountComponent} from './primaryaccount/primaryaccount.component';
import {SavingsaccountComponent} from './savingsaccount/savingsaccount.component';
import {DepositComponent} from './deposit/deposit.component';
import {WithdrawComponent} from './withdraw/withdraw.component';
import {TrabetaccountComponent} from './trabetaccount/trabetaccount.component';
import {RecipientComponent} from './recipient/recipient.component';
import {SomeoneelseComponent} from './someoneelse/someoneelse.component';

export const navbarRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: NavbarComponent,
        children: [
            {
                path: '',
                redirectTo:'userfront',
                pathMatch: 'full'
            },
            {
                path: 'userfront',
                component: UserfrontComponent
            }, 
            {   
                path:'primary',
                component:PrimaryaccountComponent
            },
            {
                path:'savings',
                component:SavingsaccountComponent
            },
            {
                path:'deposit',
                component:DepositComponent
            },
            {
                path:'withdraw',
                component:WithdrawComponent
            },
            {
                path:'trabetaccount',
                component:TrabetaccountComponent
            },
            {   
                path:'recipient',
                component:RecipientComponent
            },
            {
                path:'someone',
                component:SomeoneelseComponent
            }
        ]
    }
])