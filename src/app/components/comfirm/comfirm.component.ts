import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comfirm',
  templateUrl: './comfirm.component.html',
  styleUrls: ['./comfirm.component.scss']
})
export class ComfirmComponent implements OnInit {
  message = 'Thank you for your order!';
  constructor() { }

  ngOnInit(): void {
  }

}
