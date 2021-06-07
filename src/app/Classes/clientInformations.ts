export class ClientInformations {
        client:{
            fullName: string
            id: number
            nationality: string
            familyMembers: number
            status:string
            address: {province:string,city:string,street:string,postal:string,neighborhood:string}
            phone:  string
            phone2: string
            email: string
        };
        worker:{
            fullName:string
            passport:{passportNum:string,dateOfIssue:Date,placeOfIssue:string}
            nationality: string
            visa: string
            age: number 
            gender: string
            occupation: string
            phone: string
            office: string
            backout:any
            province:string
            city:string
            status:string
            specifications:string
            religion:string
            relatives: {fullName:string,province:string,city:string,phone:string}

        }
        contract:{
          procedureType:string
          authorizationNumber:string
          authorizationDate:Date
          contractNumber:string
          contractType:string
          fileNumber:string
          contractValue: number
        }
      
    
      
}
