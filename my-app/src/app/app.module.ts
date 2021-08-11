import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClarityModule } from '@clr/angular';
import { CdsModule } from '@cds/angular';

import { CustomPlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [AppComponent, CustomPlaceholderComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, CdsModule, ClarityModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
