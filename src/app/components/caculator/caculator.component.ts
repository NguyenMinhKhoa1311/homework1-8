//máy tính nhớ theo của anh mạnh


import { Component } from '@angular/core';
import { Caculator } from 'src/app/model/Caculator';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent {
  firstNumberArray: string[] = [];
  secondNumberArray: string[] = [];
  caculator: Caculator = {
    firstNumber: 0,
    secondNumber: 0,
    result: 0,
    operation: ''
  }
  isToSecondNumber = false;
  isFristOperation = false;

  isNumericString(value: string): boolean {
    const numericStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    return numericStrings.includes(value);
  }
  pressKeyWord(value: string) {

    if (this.isToSecondNumber && this.isNumericString(value)) {
      this.secondNumberArray.push(value);
      this.caculator.secondNumber = parseFloat(this.secondNumberArray.join(''));
      switch (this.caculator.operation) {
        case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
        case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
        case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
        case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
      }
    }

    if (value == '+' || value == '-' || value == '*' || value == '/') {
      if (this.isFristOperation) {
        this.caculator.firstNumber = this.caculator.result;
        this.secondNumberArray = [];
      }
      this.isToSecondNumber = true;
      this.caculator.operation = value;
      this.isFristOperation = true;
    }

    if (!this.isToSecondNumber && this.isNumericString(value)) {
      this.firstNumberArray.push(value);
      this.caculator.firstNumber = parseFloat(this.firstNumberArray.join(''));
      console.log(this.firstNumberArray);
    }
    console.log(this.caculator.firstNumber, this.caculator.secondNumber,);
  }
  clearAll() {
    this.caculator = {
      firstNumber: 0,
      secondNumber: 0,
      result: 0,
      operation: ''
    }
    this.firstNumberArray = []
    this.secondNumberArray = []
    this.isToSecondNumber = false;
    this.isFristOperation = false;
  }
  delete() {
    if(!this.isToSecondNumber){
      this.firstNumberArray.pop();
      if (this.firstNumberArray.length == 0) {
        this.caculator.firstNumber = 0;
        console.log(this.caculator.secondNumber);
      } else {
        this.caculator.firstNumber = parseFloat(this.firstNumberArray.join(''));
      }
    }
    else{
      this.secondNumberArray.pop();
      if (this.secondNumberArray.length == 0) {
        this.caculator.secondNumber = 0;
        console.log(this.caculator.secondNumber);
      } else {
        this.caculator.secondNumber = parseFloat(this.secondNumberArray.join(''));
      }
      switch (this.caculator.operation) {
        case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
        case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
        case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
        case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
      }
    }
  }
  clear() {
    this.caculator.secondNumber = 0;
    this.secondNumberArray = [];
    switch (this.caculator.operation) {
      case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
      case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
      case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
      case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
    }
  }

}





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// máy tính nhà phùng minh khoa aka chó cỏ
// import { Component } from '@angular/core';
// import { Caculator } from 'src/app/model/Caculator';

// @Component({
//   selector: 'app-caculator',
//   templateUrl: './caculator.component.html',
//   styleUrls: ['./caculator.component.scss']
// })
// export class CaculatorComponent {
//   firstNumberArray: string[] = [];
//   secondNumberArray: string[] = [];
//   caculator: Caculator = {
//     firstNumber: 0,
//     secondNumber: 0,
//     result: 0,
//     operation: ''
//   }
//   isToSecondNumber = false;
//   isFristOperation = false;
//   isFirstEqual = false;

//   isNumericString(value: string): boolean {
//     const numericStrings = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
//     return numericStrings.includes(value);
//   }
//   pressKeyWord(value: string) {

//     if (value == '=' && this.isFirstEqual) {
//       this.caculator.firstNumber = this.caculator.result;
//       switch (this.caculator.operation) {
//         case '+': this.caculator.result += this.caculator.secondNumber; break;
//         case '-': this.caculator.result -= this.caculator.secondNumber; break;
//         case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
//         case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
//       }
//     }
//     if (value == '=') {
//       this.isFirstEqual = true;
//       switch (this.caculator.operation) {
//         case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
//         case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
//         case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
//         case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
//       }
//     }
//     if ((this.isToSecondNumber) && (this.isNumericString(value))) {
//       this.secondNumberArray.push(value);
//       this.caculator.secondNumber = parseFloat(this.secondNumberArray.join(''));
//       console.log('222', this.secondNumberArray)
//       if (this.isFirstEqual) {
//         switch (this.caculator.operation) {
//           case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
//           case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
//           case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
//           case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
//         }
//       }
//     }
//     if (value == '+' || value == '-' || value == '*' || value == '/') {
//       if (this.isFristOperation) {
//         this.caculator.firstNumber = this.caculator.result;
//         console.log('nn1');
//         this.secondNumberArray.splice(0, this.secondNumberArray.length);
//       }
//       this.isToSecondNumber = true;
//       this.caculator.operation = value;
//       this.isFristOperation = true;
//     }
//     if (!this.isToSecondNumber) {
//       this.firstNumberArray.push(value);
//       this.caculator.firstNumber = parseFloat(this.firstNumberArray.join(''));
//       console.log(this.firstNumberArray);
//     }
//     if (value == 'del') {
//       this.secondNumberArray.pop();

//       if (this.secondNumberArray.length == 0) {
//         this.caculator.secondNumber = 0;
//         console.log(this.caculator.secondNumber);
//       } else {
//         this.caculator.secondNumber = parseFloat(this.secondNumberArray.join(''));
//       }

//       console.log(this.secondNumberArray.length)

//       console.log(this.caculator.secondNumber);

//       switch (this.caculator.operation) {
//         case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
//         case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
//         case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
//         case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
//       }
//       return;
//     }
//     if (value == 'no') {
//       return;
//     }
//     if (value == 'no') {
//       return;
//     }
//     console.log(this.caculator.firstNumber, this.caculator.secondNumber,);
//   }
//   clearAll() {
//     this.caculator = {
//       firstNumber: 0,
//       secondNumber: 0,
//       result: 0,
//       operation: ''
//     }
//     this.firstNumberArray.splice(0, this.firstNumberArray.length);
//     this.secondNumberArray.splice(0, this.secondNumberArray.length)
//     this.isToSecondNumber = false;
//     this.isFristOperation = false;
//     this.isFirstEqual = false;
//   }
//   delete() {
//     this.secondNumberArray.pop();
//     if (this.secondNumberArray.length == 0) {
//       this.caculator.secondNumber = 0;
//       console.log(this.caculator.secondNumber);
//     } else {
//       this.caculator.secondNumber = parseFloat(this.secondNumberArray.join(''));
//     }
//     switch (this.caculator.operation) {
//       case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
//       case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
//       case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
//       case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
//     }
//   }
//   clear() {
//     this.caculator.secondNumber = 0;
//     this.secondNumberArray = [];
//     switch (this.caculator.operation) {
//       case '+': this.caculator.result = this.caculator.firstNumber + this.caculator.secondNumber; break;
//       case '-': this.caculator.result = this.caculator.firstNumber - this.caculator.secondNumber; break;
//       case '*': this.caculator.result = this.caculator.firstNumber * this.caculator.secondNumber; break;
//       case '/': this.caculator.result = this.caculator.firstNumber / this.caculator.secondNumber; break;
//     }
//   }
// }

