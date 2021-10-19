import { Component, OnInit } from '@angular/core';
import { NorthwindRestServiceService } from './services/northwind-rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public northwindRestServiceCustomers: any = null;
  public northwindRestServiceOrders: any = null;

  constructor(
    private northwindRestServiceService: NorthwindRestServiceService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindRestServiceService.getCustomers().subscribe(data => this.northwindRestServiceCustomers = data);
    this.northwindRestServiceService.getOrders().subscribe(data => this.northwindRestServiceOrders = data);
  }
}
