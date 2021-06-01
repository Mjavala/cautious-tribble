import { Component, OnInit } from '@angular/core';
// add REST Api endpoint service
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  payload: any = [];
  constructor (private api: ApiService) {}
  ngOnInit() {
    //this.getSniper()
  }
  /*
  getSniper() {
    this.api.startSniping()
      .subscribe(data => {
        /*
        for (const d of (data as any)) {
          this.payload.push({
            name: d.name,
            price: d.price
          });
        }
        console.log(data);
      });
  }
  */
}
