import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  signupform:FormGroup;
  name:string;
  email:string;
  hobii:string;
  submit:boolean= false;
  constructor() { }

  ngOnInit() {
    this.signupform = new FormGroup({
      'username':new FormControl("arun",Validators.required),
      'email':new FormControl(null,Validators.required,this.forbiddenemails),
      'hobies':new FormArray([])

    });
  }
  onsubmit(){
    this.submit= true;
    this.name = this.signupform.value.username;
    this.email = this.signupform.value.email;
    this.hobii = this.signupform.value.hobies
    console.log(this.signupform)
  }
  newhobie(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupform.get('hobies')).push(control);
  }

  forbiddenemails(controls:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject) =>{

      setTimeout(()=>{
        if(controls.value === 'test'){
          resolve({'emailisforbiddden':true});
        }else{
          resolve(null);
        }
      },5000)
    });
    return promise;
  }

  resetform(){
    this.signupform.setValue({
      'username':'',
      'email':'',
      'hobies':[]
    });
  }

}
