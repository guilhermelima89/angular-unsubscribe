import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocAsyncComponent } from './components/poc-async.component';
import { PocTakeUntilComponent } from './components/poc-take-until.component';
import { PocTakeComponent } from './components/poc-take.component';
import { PocUnsubComponent } from './components/poc-unsub.component';
import { PocComponent } from './components/poc.component';
import { PocBaseComponent } from './poc-base/poc-base.component';

@NgModule({
  declarations: [
    AppComponent,
    PocBaseComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ModalModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
