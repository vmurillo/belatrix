import { Component, OnInit } from '@angular/core';
import { Money } from '../../models/money';
import { ExchangeService } from '../../services/exchange.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  private originMoney: Money = new Money(0, 'USD');
  private destinationMoney: Money = new Money(0, 'EUR');

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
  }

  convertMoney() {
    this.exchangeService.getExchange(this.originMoney.currency, this.destinationMoney.currency)
    .subscribe((exchange: number) => this.destinationMoney.amount = exchange * this.originMoney.amount);
  }
}
