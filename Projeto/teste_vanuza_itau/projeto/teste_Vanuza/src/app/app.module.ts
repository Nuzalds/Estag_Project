import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Importando o módulo de formulários reativos do angular
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ngx-currency-mask';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Adicionando o módulo de formulários reativos no módulo da nossa aplicação
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
