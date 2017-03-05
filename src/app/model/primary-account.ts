import { PrimaryTransaction } from './primary-transaction';

export class PrimaryAccount {
    private id: number;
    private accountNumber: number;
    private accountBalance: number;

    private primaryTransactionList: PrimaryTransaction[];
}
