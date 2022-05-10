import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  Username: string = '';

  Display = '0';

  Buttons1 = [
    { id: 1, value: '7' },
    { id: 2, value: '8' },
    { id: 3, value: '9' },
    { id: 4, value: '+' },
  ];
  Buttons2 = [
    { id: 5, value: '4' },
    { id: 6, value: '5' },
    { id: 7, value: '6' },
    { id: 8, value: '-' },
  ];
  Buttons3 = [
    { id: 9, value: '1' },
    { id: 10, value: '2' },
    { id: 11, value: '3' },
    { id: 12, value: 'X' },
  ];
  Buttons4 = [
    { id: 13, value: '(' },
    { id: 14, value: 0 },
    { id: 15, value: ')' },
    { id: 16, value: '%' },
  ];

  ngOnInit(): void {}

  onClear() {
    const NewValue = this.Display.substring(0, this.Display.length - 1);
    this.Display = NewValue;
  }

  onSearch() {
    const newValue = this.http
      .post('http://localhost:7777/calculate', {
        username: this.Username,
        calculation: this.Display,
      })
      .subscribe((result: any) => (this.Display = result.result));
  }

  onClick(value: any) {
    if (this.Display === '0') {
      this.Display = value;
      return;
    }

    this.Display = this.Display + value;
  }
}
