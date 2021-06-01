import { Component } from '@angular/core';

@Component({
  selector: 'app-sniper',
  templateUrl: './sniper.component.html',
  styleUrls: ['./sniper.component.css']
})
export class SniperComponent {

  constructor() { }

  onSubmit() {
    console.log('initialize sniper...')
    // request /snipe from webserver
  }
}
