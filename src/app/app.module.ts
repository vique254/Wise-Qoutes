import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuoteComponent } from './quote/quote.component';
import { DateAgoPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailComponent,
    QuoteComponent,
    DateAgoPipe,
    QuoteFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
