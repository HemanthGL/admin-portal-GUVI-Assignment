import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'admin-kit';

    constructor() { }

    // for Feather Icons to works
    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
      feather.replace();
    }
  
}
