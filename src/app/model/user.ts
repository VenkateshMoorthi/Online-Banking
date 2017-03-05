import { PrimaryAccount } from './primary-account';
import { SavingsAccount } from './savings-account';
import { Appointment } from './appointment';
import { Recipient } from './recipient';

export class User {

    public userId: number;
    private username: string;
    private password: string;
    private firstname: string;
    private lastname: string;
    private email: string;
    private phone: number;

    private enabled: boolean = true;

    private primaryAccount: PrimaryAccount;
    private savingsAccount: SavingsAccount;
    private appointmentList: Appointment[];
    private recipient: Recipient[];

}

