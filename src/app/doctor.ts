import patient from "./patient";
export default class doctor {
    pkUserId: number;
    username: string;
    password: string;
    phoneNumber: number;
    firstname: string;
    lastname: string;
    city: string;
    state:string;
    // isActive
    pkDoctorId: number;
    doctorSpecialization:string; 
    createdDate: Date;
    updatedDate: Date;
    patientList:patient;
    // roleId: 
}

