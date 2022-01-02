import { Component, OnInit } from '@angular/core';
import { AddsService } from 'src/app/service/adds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public addsService: AddsService) {}

  ngOnInit() {}
}
