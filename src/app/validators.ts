import { FormControl } from '@angular/forms'
export default class CustomValidator {

    
validateBloodGroup(c: FormControl) {
    let bloodGroup = ["A+","B+","O+","AB+","AB-"];
    return bloodGroup.includes(c.value) ? null : {
      validateBloodGroup : {
        valid : false
      }
    } 
  }

  validatePhoneNumber(c: FormControl) {
    let PhoneRegex = "[6-9]\\d{9}";
    return PhoneRegex.match(c.value) ? null : {
      validatePhoneNumber : {
        valid : false
      }
    }
  }
  
}