import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,  } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {
  collapse: true;
  isFocused: boolean = false;
  someValue = [];
 

  registerForm: FormGroup;
  submitted = false;

panelExpanded = false;
constructor(private fb: FormBuilder) { }



  ngOnInit() {
    this.registerForm = this.fb.group({
       name: ['', Validators.required],
       email: ['', Validators.required],
       number: ['', Validators.required],


       notRequired: this.fb.group({
        company: [''],
        web: [''],
        help: ['',],
        Timeframe:[''],
        budget: [''],


        }),

        chekbox: this.fb.group({
          chekboxgoogle:[''],
          chekboxbing:[''],
          chekboxfacebook:[''],
          chekboxlinkedin:[''],
          chekboxinstragram:[''],
          chekboxmagazine:[''],
          chekboxradio:[''],
          chekboxrecomendation:[''],
          chekboxother:[''],
        })

     });

}

get f() { return this.registerForm.controls; }






onSubmit() {
  this.submitted = true;


  if (this.registerForm.invalid) {
      return;
  }


   console.log('name :' + this.registerForm.value.name );
   console.log('email :' + this.registerForm.value.email );
   console.log('number :' + this.registerForm.value.number );
   console.log('company :' +this.registerForm.value.notRequired.company );
   console.log('web :' +this.registerForm.value.notRequired.web );
   console.log('help :' +this.registerForm.value.notRequired.help );
   console.log('timeframe :' +this.registerForm.value.notRequired.Timeframe );
   console.log('budget :' +this.registerForm.value.notRequired.budget );
   console.log(this.registerForm.value.chekbox);
}


}
