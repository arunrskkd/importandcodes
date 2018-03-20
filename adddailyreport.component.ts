import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray} from '@angular/forms';
@Component({
  selector: 'app-adddailyreport',
  templateUrl: './adddailyreport.component.html',
  styleUrls: ['./adddailyreport.component.css']
})
export class AdddailyreportComponent implements OnInit {
  heroForm:FormGroup;
  cities = [
    {label:'Select City', value:null},
    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      date:'',
      Greenhouse: '',
      itemRows:  this.fb.array([this.createItem() ])
   })
     

}

addNewRow() {
  // control refers to your formarray
  const control = <FormArray>this.heroForm.get('itemRows');
  // add new formgroup
  control.push(this.createItem());
}

onsubmit(form:FormGroup){
  console.log(form.value)
}

createItem(): FormGroup {
  return this.fb.group({
    description: '',
    manpower:'',
    greenhouse:''
   
  });
}

deleteRow(index: number) {
  const control =  <FormArray>this.heroForm.get('itemRows');
  control.removeAt(index);
}

// deleteRow(index: number) {
//   // control refers to your formarray
//   const control = <FormArray>this.heroForm.controls['itemRows'];
//   // remove the chosen row
//   control.removeAt(index);
// }

}
export class MyModel {

  value: Date;

}


