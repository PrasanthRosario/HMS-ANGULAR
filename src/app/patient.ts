export default class patient {
    pkUserId: string = "";
    username: string = "";
    password: string = "";
    phoneNumber: string = "";
    firstname: string = "";
    lastname: string ="";
    city: string ="";
    state:string = "";
    // isActive
    pkPatientId: number = 0;
    bloodGroup : string = "";
    weight : number =0;
    createdDate: Date ;
    updatedDate: Date;
    fkRoleId: number = 0; 
}

