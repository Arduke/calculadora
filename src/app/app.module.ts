import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, CalculatorComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
