import { User } from './user';

export class Recipient {
    public id: number;
    public name: string;
    public email: string;
    public phone: string;
    public accountNumber: number;
    public description: string;

    public user: User;
}
