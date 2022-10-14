import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  customYearValues = [2025, 2022, 2016, 2008, 2004, 2000, 1996];
  constructor() {}

  ngOnInit() {}

  dateChange(event) {
    console.log('%c⧭', 'color: #aa00ff', event);

    console.log('%c⧭', 'color: #e50000', new Date(event.detail.value));
  }
}
