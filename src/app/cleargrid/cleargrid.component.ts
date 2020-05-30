import {
  FormControl,
  FormGroup,
  FormArray,
  Validators,
  ValidatorFn,
  ValidationErrors,
  FormBuilder
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cleargrid',
  templateUrl: './cleargrid.component.html',
  styleUrls: ['./cleargrid.component.scss']
})
export class CleargridComponent implements OnInit {
  sdkForm = new FormGroup({
    sudoku: new FormArray([])
  });

  get demoArray() {
    return this.sdkForm.get('sudoku') as FormArray;
  }

  constructor() {}

  getSolution() {
    console.log(this.sdkForm.value);
  }

  ngOnInit(): void {
    for (let index = 0; index < 81; index++) {
      this.demoArray.push(new FormControl(1));
    }
  }
}
