export class Patient {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    surgery: string;
    doctor: string;
    room: string;
    date: number;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : 0;
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : 0;
        this.city = obj ? obj.city : '';
        this.surgery = obj ? obj.surgery : '';
        this.doctor = obj ? obj.doctor : '';
        this.room = obj ? obj.roomroom : '';
        this.date = obj ? obj.date : '';
    }

    toJSON(): any {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            surgery: this.surgery,
            room: this.room,
            date: this.date
        };
    }
}
