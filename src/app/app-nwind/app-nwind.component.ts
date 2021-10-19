import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-app-nwind',
  templateUrl: './app-nwind.component.html',
  styleUrls: ['./app-nwind.component.scss']
})
export class AppNwindComponent implements OnInit {
  public northwindCustomers: any = null;

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
  }
}
