import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  data = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: true,
    },
  ];

  constructor() {}

  ngOnInit() {}

  onClick(item: any) {
    console.log(item);
  }

  seeData() {
    console.log('%c⧭', 'color: #00a3cc', this.data);
  }
}
