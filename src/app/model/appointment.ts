import { User } from './user'

export class Appointment {
    private id: number;
    private date: number;
    private location: number;
    private description: string;
    private confirmed: boolean;

    private user: User;
}
