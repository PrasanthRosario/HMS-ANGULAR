export default class patient {
    pkUserId: string;
    username: string;
    password: string;
    phoneNumber: string;
    firstname: string;
    lastname: string;
    city: string;
    state:string;
    // isActive
    pkPatientId: number;
    bloodGroup : string;
    weight : number;
    createdDate: Date;
    updatedDate: Date;
    fkRoleId: number; 
}

