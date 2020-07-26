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
  selector: 'app-reloadsample',
  templateUrl: './reloadsample.component.html',
  styleUrls: ['./reloadsample.component.scss']
})
export class ReloadsampleComponent implements OnInit {

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
    // alert(str);
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
  sample =  ["050010040107000602000905000208030501040070020901080406000401000304000709020060010",
          "020030090000907000900208005004806500607000208003102900800605007000309000030020050",
          "005000006070009020000500107804150000000803000000092805907006000030400010200000600",
          "040000050001943600009000300600050002103000506800020007005000200002436700030000040",
          "004000000000030002390700080400009001209801307600200008010008053900040000000000800",
          "360020089000361000000000000803000602400603007607000108000000000000418000970030014",
          "500400060009000800640020000000001008208000501700500000000090084003000600060003002",
          "007256400400000005010030060000508000008060200000107000030070090200000004006312700",
          "000000000079050180800000007007306800450708096003502700700000005016030420000000000",
          "030000080009000500007509200700105008020090030900402001004207100002000800070000090",
          "200170603050000100000006079000040700000801000009050000310400000005000060906037002",
];


loadRandomPuzzle(){
  let rnd =  Math.round(Math.random()*10)
  let currPuzzle=this.sample[rnd]
 
  // this.isImageLoading = true;
  let index=0;
  this.demoArray.controls.forEach(element => {
    element.setValue(currPuzzle[index++]);  
    });
     

}

ngOnInit(): void {
  let rnd =  Math.round(Math.random()*10)
  let currPuzzle=this.sample[rnd]
  for (let index = 0; index < 81; index++) {
    this.demoArray.push(new FormControl(currPuzzle[index]));
  }
  }
}