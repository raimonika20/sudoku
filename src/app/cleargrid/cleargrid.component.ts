import {
  FormControl,
  FormGroup,  FormArray,
  Validators,
  ValidatorFn,
  ValidationErrors,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleargrid',
  templateUrl: './cleargrid.component.html',
  styleUrls: ['./cleargrid.component.scss']
})
export class CleargridComponent implements OnInit {
  sdkForm = new FormGroup({
    sudoku : new FormArray([])
  });
  tmpsdk=this.sdkForm.get('sudoku') as FormArray;
  
  orderForm: FormGroup;
  items: FormArray;



  constructor(private formBuilder: FormBuilder) { }
  getSolution(){
    console.log(this.sdkForm.controls['sudoku'].value);
    console.log(this.tmpsdk.value)
    
  }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      items: this.formBuilder.array([  ])
    });
    let arr=this.sdkForm.get('sudoku') as FormArray;
    for (let index = 0; index < 81; index++) {
      // const element = array[index];
       arr.push(new FormControl("1"))
      
    }

    console.log(this.tmpsdk.value)
  }

}

