import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaculatorComponent } from './components/caculator/caculator.component';
import { StoreModule } from '@ngrx/store';
import { calculatorReducer} from './ngrx/reducers/calculator.reducer'

@NgModule({
  declarations: [
    AppComponent,
    CaculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({result : calculatorReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
