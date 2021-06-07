import { Injectable } from '@angular/core';
import { ClientInformations } from 'src/app/Classes/clientInformations';

@Injectable({
  providedIn: 'root',
})
export class BackEndService {
  constructor() {}
  ClientsData = [
    {
      client: {
        fullName: 'فيصل عبدالله حسين الأهدل',
        id: 2170431510,
        nationality: 'يمني',
        familyMembers: 5,
        status: 'متزوج',
        address: {
          province: 'مكة المكرمة',
          city: 'مكة المكرمة',
          street: 'شارع يحيى المعلمي',
          postal: '12345',
          neighborhood: 'حي العزيزية',
        },
        phone: '00966557834743',
        phone2: '00966557447852',
        email: 'ahdal.fa@gmail.com',
      },
      workers: [
        {
          worker: {
            fullName: 'Marwa Hani Rateb',
            passport: {
              passportNum: '221704157',
              dateOfIssue: new Date('05 October 2011 14:48 UTC'),
              placeOfIssue: 'Manila',
            },
            nationality: 'Philippines',
            visa: '1234567891',
            age: 25,
            gender: 'female',
            occupation: 'عاملة منزلية',
            phone: '007885547431',
            office: 'CV-12345',
            backout: false,
            province: 'san antonio',
            city: 'Parac',
            status: 'Married',
            specifications: 'حسب المواصفات',
            religion: 'مسلم',
            relatives: {
              fullName: 'Any',
              province: 'Any',
              city: 'Any',
              phone: 'Any',
            },
            pickUp: { status: false, by: "" },
          },
          contract: {
            procedureType: 'Home Maiden',
            authorizationNumber: '1211474458',
            authorizationDate: new Date('05 October 2011 14:48 UTC'),
            contractNumber: '1121457',
            contractType: 'مساند',
            fileNumber: 'B-1123',
            contractValue: 18000,
          },
          procedures: [
            { musaned_contract: true, date: [] },
            { polo_contract: true, date: [] },
            { sending_contract: false, date: [] },
            { contract_signed: false, date: [] },
            { school: false, date: [] },
            { fingerPrint: false, date: [] },
            { visa: false, date: [] },
            { travel_permit: false, date: [] },
            { ticket_book: false, date: [] },
          ],
        },
        {
          worker: {
            fullName: 'Marwa Hani Rateb',
            passport: {
              passportNum: '221704157',
              dateOfIssue: new Date('05 October 2011 14:48 UTC'),
              placeOfIssue: 'Manila',
            },
            nationality: 'Philippines',
            visa: '1325465789',
            age: 25,
            gender: 'female',
            occupation: 'عاملة منزلية',
            phone: '007885547431',
            office: 'CV-12345',
            backout: false,
            province: 'san antonio',
            city: 'Parac',
            status: 'Married',
            specifications: 'حسب المواصفات',
            religion: 'مسلم',
            relatives: {
              fullName: 'Any',
              province: 'Any',
              city: 'Any',
              phone: 'Any',

            },
            pickUp: { status: false, by: "" },

          },
          contract: {
            procedureType: 'Home Maiden',
            authorizationNumber: '1211474458',
            authorizationDate: new Date('05 October 2011 14:48 UTC'),
            contractNumber: '1121457',
            contractType: 'مساند',
            fileNumber: 'B-1123',
            contractValue: 18000,
          },
          procedures: [
            { musaned_contract: true, date: [] },
            { polo_contract: true, date: [] },
            { sending_contract: true, date: [] },
            { contract_signed: true, date: [] },
            { school: true, date: [] },
            { fingerPrint: true, date: [] },
            { visa: true, date: [] },
            { travel_permit: true, date: [] },
            { ticket_book: true, date: [new Date('25 Mars 2020 14:48 UTC')] },
          ],
        },
      ],
      verifiedBy: { name: 'فيصل عبدالله حسين الأهدل', id: 2170431510 },
    },
    {
      client: {
        fullName: 'سالم محمد مأمون المولد',
        id: 2170431511,
        nationality: 'Saudi Arabia',
        familyMembers: 8,
        status: 'متزوج',
        address: {
          province: 'الرياض',
          city: 'الرياض',
          street: 'شارع يحيى المعلمي, حي الربوة',
          postal: '12345',
          neighborhood: 'الربوة',
        },
        phone: '00996557841478',
        phone2: '009665875684157',
        email: 'ahdal.fa@gmail.com',
      },
      workers: [
        {
          worker: {
            fullName: 'Salwa Moha ',
            passport: {
              passportNum: '221704157',
              dateOfIssue: new Date('05 October 2011 14:48 UTC'),
              placeOfIssue: 'Manila',
            },
            nationality: 'Bangladesh',
            age: 45,
            visa: '1254786541',
            gender: 'female',
            occupation: 'chef',
            phone: '007885547431',
            office: 'BR-11214',
            backout: false,
            province: 'Dhaka',
            city: 'Dhaka',
            status: 'Married',
            specifications: 'حسب المواصفات',
            religion: 'مسلم',
            relatives: {
              fullName: 'Any',
              province: 'Any',
              city: 'Any',
              phone: 'Any',
            },
            pickUp: { status: false, by: "" },
          },

          contract: {
            procedureType: 'Chef',
            authorizationNumber: '1211474458',
            authorizationDate: new Date('05 October 2020 14:48 UTC'),
            contractNumber: '1121457',
            contractType: 'مساند',
            fileNumber: 'B-1123',
            contractValue: 30000,
          },
          procedures: [
            { musaned_contract: false, date: [] },
            { medical_examination: false, date: [] },
            { school: false, date: [] },
            { fingerPrint: false, date: [] },
            { visa: false, date: [] },
            { travel_permit: false, date: [] },
            { ticket_book: false, date: [] },
          ],
        },
      ],
      verifiedBy: { name: 'فيصل عبدالله حسين الأهدل', id: 2170431510 },
    },
    {
      client: {
        fullName: 'Almuneer Khalid Salim Aladdressi',
        id: 222,
        nationality: 'Sudan',
        familyMembers: 8,
        status: 'متزوج',
        address: {
          province: 'مكة المكرمة',
          city: 'جدة',
          street: 'شارع يحيى المعلمي, حي الربوة',
          postal: '12345',
          neighborhood: 'الربوة',
        },
        phone: '00966558732140',
        phone2: '00966589631475',
        email: 'ha.fa@gmail.com',
      },
      workers: [
        {
          worker: {
            fullName: 'Aydha Alhaiwa ',
            passport: {
              passportNum: '221704157',
              dateOfIssue: new Date('05 October 2011 14:48 UTC'),
              placeOfIssue: 'Manila',
            },
            nationality: 'Uganda',
            age: 50,
            visa: '12022547441',
            gender: 'female',
            occupation: 'House Maiden',
            phone: '0032214114',
            office: 'UG-1212',
            backout: false,
            province: 'Kampala',
            city: 'Kampala',
            status: 'Married',
            specifications: 'حسب المواصفات',
            religion: 'مسلم',
            relatives: {
              fullName: 'Any',
              province: 'Any',
              city: 'Any',
              phone: 'Any',
            },

            pickUp: { status: false, by: null },
          },

          contract: {
            procedureType: 'House Maiden',
            authorizationNumber: '554774122',
            authorizationDate: new Date('01 October 2017 14:48 UTC'),
            contractNumber: '87412257',
            contractType: 'الكتروني',
            fileNumber: 'B-1025',
            contractValue: 25000.5,
          },
          procedures: [
            { musaned_contract: false, date: [] },
            { medical_examination: false, date: [] },
            { training: false, date: [] },
            { Police_certificate: false, date: [] },
            { fingerPrint: false, date: [] },
            { visa: false, date: [] },
            { ticket_book: false, date: [] },
          ],
        },
      ],
      verifiedBy: { name: 'فيصل عبدالله حسين الأهدل', id: 2170431510 },
    },

    {
      client: {
        fullName: 'Abdualrahman Musilm khalid Alghamdi',
        id: 333,
        nationality: 'Saudi',
        familyMembers: 5,
        status: 'متزوج',
        address: {
          province: 'مكة المكرمة',
          city: 'جدة',
          street: 'شارع يحيى المعلمي, حي الربوة',
          postal: '12345',
          neighborhood: 'الربوة',
        },
        phone: '00966557412479',
        phone2: '00966336512014',
        email: 'ha.muadi@gmail.com',
      },
      workers: [
        {
          worker: {
            fullName: 'Onyia Sauuil',
            passport: {
              passportNum: '221704157',
              dateOfIssue: new Date('05 October 2011 14:48 UTC'),
              placeOfIssue: 'Manila',
            },
            nationality: 'Kenya',
            age: 25,
            visa: '2210147774',
            gender: 'female',
            occupation: 'House Maiden',
            phone: '0066577841474',
            office: 'Ky-1021',
            backout: false,
            province: 'Nairobi',
            city: 'Nairobi',
            status: 'Married',
            specifications: 'حسب المواصفات',
            religion: 'مسلم',
            relatives: {
              fullName: 'Any',
              province: 'Any',
              city: 'Any',
              phone: 'Any',
            },

            pickUp: { status: false, by: null },
          },

          contract: {
            procedureType: 'House Maiden',
            authorizationNumber: '5547441471',
            authorizationDate: new Date('20 October 2017 14:48 UTC'),
            contractNumber: '66541235',
            contractType: 'الكتروني',
            fileNumber: 'B-554',
            contractValue: 35000,
          },
          procedures: [
            { musaned_contract: false, date: [] },
            { medical_examination: false, date: [] },
            { training: false, date: [] },
            { Police_certificate: false, date: [] },
            { fingerPrint: false, date: [] },
            { visa: false, date: [] },
            { ticket_book: false, date: [] },
          ],
        },
      ],
      verifiedBy: { name: 'فيصل عبدالله حسين الأهدل', id: 2170431510 },
    },
  ];

  expenses = [
    {
      refrence: 221078845,
      date: new Date('05 October 2011 14:48 UTC'),
      invoiceNum: 22544789551545,
      amount: 2500,
      description: 'مصاريف معدات النظافة',
    },
  ];

  Offices = [
    {
      id: 'CV-123',
      office: 'White House',
      country: 'Philippines',
      commercialRegistrationNo: 123456789,
      coordinatorName: 'Oda Besso',
      coordinatorNumber: '0063281234567',
      email: 'something@gmail.com',
      address: 'Mega State Building Araneta Ave Cor Agno Ext1100,Manila',
      username: 'oda123',
      password: 'oda123',
      role: 'external-office',
    },
  ];

  externalTransfers = [
    {
      refrence: 221078845,
      date: new Date('05 October 2011 14:48 UTC'),
      invoiceNum: 22544789551545,
      amount: 2500,
      amountDollar: 620,
      office: 'Whie House Office',
      description: 'تكلفة تذكرة العاملة بسبب رفضها المتابعة مع العميل',
    },
  ];

  // roles : 0 = Admin , 1 : second which in our case is finance , 2 : normal local employee , 10
  employeesData = [
    {
      fullName: 'فيصل عبدالله حسين الأهدل',
      birthday: new Date('05 October 2011 14:48 UTC'),
      id: 2170431510,
      nationality: 'يمني',
      status: 'أعزب',
      jobTitle: 'مدخل بيانات',
      phone: '0557834743',
      email: 'ahdal.fa@gmail.com',
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },

    {
      fullName: 'فيصل عبدالله حسين الأهدل',
      birthday: new Date('05 October 2011 14:48 UTC'),
      id: 2170431501,
      nationality: 'يمني',
      status: 'أعزب',
      jobTitle: 'مدخل بيانات',
      phone: '0557834743',
      email: 'mma@gmail.com',
      username: 'admin123',
      password: 'admin',
      role: 'finance',
    },

    {
      fullName: 'فيصل عبدالله حسين الأهدل',
      birthday: new Date('05 October 2011 14:48 UTC'),
      id: 2170431510,
      nationality: 'يمني',
      status: 'أعزب',
      jobTitle: 'مدخل بيانات',
      phone: '0557834743',
      email: 'ahdal.fa@gmail.com',
      username: 'asdman',
      password: 'asdman',
      role: 'employee',
    },
  ];

  monthlyExpenses = [
    {
      externalOffice: 1800,
      workerContract: 10000,
      agency: 500,
      send: 50,
      generalExpenses: 300,
      musandRatio: 2.5,
      workerPickup: 500,
    },
  ];

  requstedData = [];
  employeeLogin = [];

  searchForClientData(id: number) {
    this.ClientsData.forEach((el) => {
      if (id == el.client.id) {
        this.requstedData.push(el);
        // we used this to make the procedures hidden for the user untill he clicks on the name so we added the show object
        this.requstedData.forEach((element) => {
          console.log(element.client.fullName);
          element.workers.forEach((element) => {
            element.worker.show = false;
          });
        });

        //end
      }
    });
  }

  searchForLogin(username: string, password: string) {
    this.employeesData.forEach((el) => {
      if (username === el.username && password === el.password) {
        this.employeeLogin.push(el);
        localStorage.setItem('token', JSON.stringify(el));
      }
    });
    if (this.employeeLogin.length === 0) {
      this.Offices.forEach((el) => {
        if (username === el.username && password === el.password) {
          this.employeeLogin.push(el);
          localStorage.setItem('token', JSON.stringify(el));
        }
      });
    }
  }
  employeeLogout() {
    this.employeeLogin.length = 0;
    localStorage.removeItem('token');
  }
}
