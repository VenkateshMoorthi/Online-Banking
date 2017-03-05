import { SavingsAccount } from './savings-account';


export class SavingsTransaction {
    private id: number;
    private date: string;
    private description: string;
    private type: string;
    private status: string;
    private amount: number;
    private availableBalance: number;

    private savingsAccount: SavingsAccount;
}
