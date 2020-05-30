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
import { SudokuService } from '../services/sudoku.service';
import { environment } from '../../environments/environment';

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

  constructor(private sudokuService: SudokuService) {}

  imageToShow: any;
  isImageLoading: boolean;

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
      'load',
      () => {
        this.imageToShow = reader.result;
      },
      false
    );

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getSolution() {
    let str = '';
    // console.log(this.sdkForm.value);
    this.demoArray.controls.forEach(element => {
      str += element.value;
    });
    alert(str);
    this.sudokuService.getSudokuSolution(str).subscribe(
      data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      },
      error => {
        this.isImageLoading = false;
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    for (let index = 0; index < 81; index++) {
      this.demoArray.push(new FormControl(environment.sampleSudoku[index]));
    }
  }
}
