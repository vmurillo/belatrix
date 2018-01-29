import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import {ExchangeMap} from '../../models/exchange-map';
import {ExchangeService} from '../../services/exchange.service';

@Component({
  selector: 'app-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.css']
})
export class ExchangeListComponent implements OnInit {
  exchangeMap: ExchangeMap = {'PEN': 100, 'PER': 12};
  private originCurrency = 'USD';
  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.loadExchanges();
    Observable.timer(1000 * 60 * 10, 1000).subscribe(this.loadExchanges);
  }

  loadExchanges() {
    this.exchangeService.getExchanges(this.originCurrency).subscribe(
      exm => this.exchangeMap = exm
    );
  }

  keys(): Array<string> {
    return Object.keys(this.exchangeMap);
  }
}
