import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface ILogs {
  calculation: string;
  id: number;
  result: string;
  username: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  Logs: ILogs[] | any = [];

  ngOnInit(): void {
    this.http
      .get('http://localhost:7777/logs')
      .subscribe((result) => (this.Logs = result));
  }
}
