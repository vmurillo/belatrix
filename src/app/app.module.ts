import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExchangeComponent } from './components/exchange/exchange.component';

import { ExchangeService } from './services/exchange.service';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InputformatPipe } from './pipes/inputformat.pipe';
import { InputCurrencyDirective } from './directives/input-currency.directive';
import { ExchangeListComponent } from './components/exchange-list/exchange-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    NavigationComponent,
    InputformatPipe,
    InputCurrencyDirective,
    ExchangeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ExchangeService,
    InputformatPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
