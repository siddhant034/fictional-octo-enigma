import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  navigateToMarket(secretValue, keyValue) {
    console.log(secretValue, keyValue);
    const binance = require('node-binance-api');
    binance.options({
      APIKEY: keyValue,
      APISECRET: secretValue,
      useServerTime: true,
      test: true
    });
    this.router.navigate(['/crypto-bot/market']);
  }

}
