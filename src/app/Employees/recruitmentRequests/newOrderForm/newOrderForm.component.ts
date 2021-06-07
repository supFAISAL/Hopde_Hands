import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CurrencyMaskInputMode } from 'ngx-currency';
import { Observable, Observer } from 'rxjs';
import { OrdersService } from 'src/app/Services/allOrders/orders.service';

@Component({
  selector: 'app-newOrderForm',
  templateUrl: './newOrderForm.component.html',
  styleUrls: ['./newOrderForm.component.css']
})
export class NewOrderFormComponent implements OnInit {
  currencyOptions = { prefix: ' SAR ', thousands: ',', decimal: '.', inputMode: CurrencyMaskInputMode.NATURAL }
  validateFormClient!: FormGroup;
  validateFormWorker!: FormGroup;
  validateFormClientAddress!: FormGroup;
  validateFormWorkerRelatives !: FormGroup;
  validateFormWorkerPassport !: FormGroup;
  validateFormContract!:FormGroup;
  isVisible = false;
  formValues = {
    client:{
      fullName: "" ,
      id: null ,
      nationality: "" ,
      familyMembers: null ,
      status:'',
      address: {province:'',city:'',street:'',neighborhood:'',postal:''},
      phone:  '' ,
      phone2: '' ,
      email: "" ,
    },
    workers:[{
      worker:{
          fullName: "",
          passport:{passportNum:'',dateOfIssue:null,placeOfIssue:''},
          nationality: "",
          age: null, 
          visa: '',
          gender: "",
          occupation: "",
          status:'',
          phone: '',
          office: "",
          musandNumber:'',
          province:'',
          city:'',
          specifications:"",
          religion:"",
          relatives: {fullName:'',province:'',city:'',phone:''}
      },
      
      contract:{
        procedureType:'',
        authorizationNumber:'',
        authorizationDate:Date,
        contractNumber:'',
        contractType:'',
        fileNumber:'',
        contractValue: null,
      },
      
    },]
  };

  
  // This for the select input of province and city
  selectedProvince = 'مكة المكرمة';
  selectedCity = 'جدة';
  provinceData = [
    'مكة المكرمة',
    'الرياض',
    'المدينة المنورة',
    'القصيم',
    'الشرقية',
    'عسير',
    'تبوك',
    'حائل',
    'الحدود',
    'جازان',
    'نجران',
    'الباحة',
    'الجوف',
  ];
  cityData: { [place: string]: string[] } = {
    'مكة المكرمة': [
      'مكة المكرمة',
      'جدة',
      'الطائف',
      'القنفذة',
      'الليث',
      'رابغ',
      'خليص',
      'الخربة',
      'رنية',
      'تربة',
      'الجموم',
      'الكامل',
      'المويه',
      'ميسان',
      'أضم',
      'العرضيات',
      'بحرة',
    ],
    الرياض: [
      'الرياض',
      'الدرعية',
      'الخرج',
      'الدوادمي',
      'المجمعة',
      'القويعية',
      'الأفلاج',
      'وادي الدواسر',
      'الزلفي',
      'شقراء',
      'عفيف',
      'الغاط',
      ' حوطة بن تميم',
      'السليل',
      'ضرما',
      'المزاحمية',
      'رماح',
      'ثادق',
      'حريملاء',
      'الحريق',
      'مرات',
    ],
    'المدينة المنورة': [
      'المدينة المنورة',
      'ينبع',
      'العلا',
      'المهد',
      'الحناكية',
      'بدر',
      'خيبر',
      'العيص',
      'وادي الفرع',
    ],
    القصيم: [
      'القصيم',
      'بريدة',
      'عنيزة',
      'الرس',
      'المذنب',
      'البكيرية',
      'البدائع',
      'الأسياح',
      'النبهانية',
      'الشماسية',
      'عيون الجواء',
      'رياض الخبراء',
      'عقلة الصقور',
      'ضرية',
    ],
    الشرقية: [
      'الشرقية',
      'الدمام',
      'الأحساء',
      ' حفر الباطن',
      'الجبيل',
      'القطيف',
      'الخبر,',
      'الخفجي',
      'رأس تنورة',
      'بقيق',
      'النعيرية',
      ' قرية العليا',
      'العديد',
    ],
    عسير: [
      'عسير',
      'أبها',
      'خميس مشيط ',
      'بيشة',
      'النماص',
      'محايل',
      'ظهران الجنوب',
      'تثليث',
      'سراة عبيدة',
      'رجال ألمع',
      'بلقرن',
      'أحد رفيدة',
      'المجاردة',
      'البرك',
      'بارق',
      'تنومة',
      'طريب',
    ],
    تبوك: ['تبوك','الوجه', 'ضبا', 'تيماء', 'أملج', 'حقل', 'البدع'],
    حائل: [
      'حائل',
      'بقعاء',
      'الغزالة',
      'الشنان',
      'الحائط',
      'السليمي',
      'الشملي',
      'موقق',
      'سميراء',
    ],
    'الحدود الشمالية': ['رفحا', 'طريف', 'العويقيلة'],
    جازان: [
      'جازان',
      'صبيا',
      'أبو عريش ',
      'صامتة,',
      'بيش',
      'الدرب',
      'الحرث',
      'ضمد',
      'الريث',
      'فرسان',
      'الدائر',
      'العارضة',
      'أحد المسارحة',
      'العيدابي',
      'فيفا',
      'الطوال',
      'الهروب',
    ],
    نجران: ['نجران','شرورة', 'حبونا', ' بدر الجنوب', 'يدمة', 'ثار', 'خباش', 'الخرخير'],
    الباحة: [
      'الباحة',
      'بلجرشي',
      'المندق',
      'المخواة',
      'قلوة',
      'العقيق',
      'القرى',
      'غامد الزناد',
      'الحجرة',
      'بني حسن',
    ],
    الجوف: ['الجوف  ','سكاكا', 'القريات', 'دومة الجندل', 'طبرجل'],
  };
  //end
  constructor(private fb: FormBuilder,private Orders:OrdersService) { }

  ngOnInit() {
     //For Clients
     this.validateFormClient = this.fb.group({
      fullName: [null, [Validators.required]],
      id: [null, [Validators.required],[this.newClientAsyncValidator]],
      nationality: [null, [Validators.required]],
      familyMembers: [null, [Validators.required]],
      status: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      phone2: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
    });
    //End
    //For address in Client
    this.validateFormClientAddress = this.fb.group({
      street: [null, [Validators.required]],
      neighborhood: [null, [Validators.required]],
      province: [null, [Validators.required]],
      city: [null, [Validators.required]],
      postal: [null, [Validators.required]],
    });
    //End

    //For House Keeper
    this.validateFormWorker = this.fb.group({
      fullName: [null, [Validators.required]],
      nationality: [null, [Validators.required]],
      visa: [null, [Validators.required]],
      age: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      cv: [null, [Validators.required]],
      province: [null, [Validators.required]],
      city: [null, [Validators.required]],
      status: [null, [Validators.required]],
      specifications: [null, [Validators.required]],
      religion: [null, [Validators.required]],


    });
    //End
    //For worker relatives
    this.validateFormWorkerRelatives= this.fb.group({
      fullName: [null, [Validators.required]],
      province: [null, [Validators.required]],
      city: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
    //end
    //For worker Passport
    this.validateFormWorkerPassport= this.fb.group({
      passportNum: [null, [Validators.required]],
      dateOfIssue: [null, [Validators.required]],
      placeOfIssue: [null, [Validators.required]],
    });
    //end
    //For contract information
    this.validateFormContract = this.fb.group({
      authorizationNumber: [null, [Validators.required]],
      authorizationDate: [null, [Validators.required]],
      contractNumber: [null, [Validators.required]],
      contractType: [null, [Validators.required]],
      contractValue: [null, [Validators.required]],
      fileNumber: [null, [Validators.required]],

    });
    //End
  }

   // The function for the select input of Province and city
   provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }
  //end

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;

    // to clear the data after submit
    this.validateFormClient.reset();

    //End
// to clear the data after submit
this.validateFormClientAddress.reset();

//End
// to clear the data after submit
this.validateFormWorkerRelatives.reset();

//End
// to clear the data after submit
this.validateFormWorkerPassport.reset();

//End
    // to clear the data after submit
    this.validateFormWorker.reset();
    //End
    // to clear the data after submit
    this.validateFormContract.reset();
    //End
  }

  submitForm() {
    // For Client values validate
    for (const i in this.validateFormClient.controls) {
      this.validateFormClient.controls[i].markAsDirty();
      this.validateFormClient.controls[i].updateValueAndValidity();
    }
    //End

    // Form House Keepers values validate
    for (const i in this.validateFormWorker.controls) {
      this.validateFormWorker.controls[i].markAsDirty();
      this.validateFormWorker.controls[i].updateValueAndValidity();
    }
    //End

    // Form contract values validate
    for (const i in this.validateFormContract.controls) {
      this.validateFormContract.controls[i].markAsDirty();
      this.validateFormContract.controls[i].updateValueAndValidity();
    }
    //End

    // Form clientAddress values validate
    for (const i in this.validateFormClientAddress.controls) {
      this.validateFormClientAddress.controls[i].markAsDirty();
      this.validateFormClientAddress.controls[i].updateValueAndValidity();
    }
    //End

    // Form worker Relatives values validate
    for (const i in this.validateFormWorkerRelatives.controls) {
      this.validateFormWorkerRelatives.controls[i].markAsDirty();
      this.validateFormWorkerRelatives.controls[i].updateValueAndValidity();
    }
    //End

      // Form worker Passport values validate
      for (const i in this.validateFormWorkerPassport.controls) {
        this.validateFormWorkerPassport.controls[i].markAsDirty();
        this.validateFormWorkerPassport.controls[i].updateValueAndValidity();
      }
      //End

    // checking if the data valid to go to the rest of the functions
    if (this.validateFormClient.valid && this.validateFormWorker.valid&&this.validateFormContract.valid&&
      this.validateFormClientAddress.valid,this.validateFormWorkerRelatives.valid&&this.validateFormWorkerPassport.valid) {
      console.log('Button ok clicked!');
      console.log(this.formValues)
      this.isVisible = false;

      // to set the formvalues object to the form values first we included only the client then we added the Worker info inside a new created object ;
      // OLD this.formValues = this.validateFormClient.value;
      // OLD this.WorkerInfo = this.validateFormWorker.value;
       this.formValues.client = this.validateFormClient.value;
       this.formValues.workers[0].worker = this.validateFormWorker.value;
       this.formValues.client.address = this.validateFormClientAddress.value
       this.formValues.workers[0].worker.relatives = this.validateFormWorkerRelatives.value;
       this.formValues.workers[0].worker.passport = this.validateFormWorkerPassport.value;


       // to assign data from client form & Worker form into contract values without repeaten
       this.formValues.workers[0].contract = this.validateFormContract.value
       this.formValues.workers[0].contract.procedureType = this.validateFormWorker.value.occupation;

      
      this.Orders.postFunction(this.formValues)
      //end

      //To merge the data in one variable if needed
      //End

      //To send the data to the alluser Table

      // to clear the data after submit
      this.validateFormClient.reset();

      //End

      // to clear the data after submit
      this.validateFormWorker.reset();
      //End

// to clear the data after submit
this.validateFormClientAddress.reset();

//End
// to clear the data after submit
this.validateFormWorkerRelatives.reset();

//End
// to clear the data after submit
this.validateFormWorkerPassport.reset();

//End
    // to clear the data after submit
    this.validateFormContract.reset();
    //End

      // Closing the modal when clicking ok after validate the data
      if (this.validateFormClient.valid && this.validateFormWorker.valid) {
        console.log('Button ok clicked!');
        this.isVisible = false;
      }
      //End
    }else{
      console.log('error')
      console.log(this.validateFormContract.value.contractType)
    }
    //End of the condition
  }
  
  newClientAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    this.Orders.confirmNewClient(control.value)
  
    setTimeout(() => {
      if (!this.Orders.newClient) {
        console.log(this.Orders.newClient)
        this.formValues.client = this.Orders.existingClient
        console.log(this.Orders.existingClient)
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
        this.formValues.client = {
          fullName: "" ,
          id: null ,
          nationality: "" ,
          familyMembers: null ,
          status:'',
          address: {province:'',city:'',street:'',neighborhood:'',postal:''},
          phone:  '' ,
          phone2: '' ,
          email: "" ,
        }

      }
      observer.complete();
    }, 1000);
  });
}
