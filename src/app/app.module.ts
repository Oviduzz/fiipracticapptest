import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PresentationComponent } from './presentation/components/presentation/presentation.component';
import { AriasComponent } from './presentation/components/arias/arias.component';
import { CategoryComponent } from './presentation/components/category/category.component';
import { MainPageComponent } from './presentation/components/main-page/main-page.component';
import { CategoryTitleComponent } from './presentation/components/category/category-title/category-title.component';
import { CategoryTrainersComponent } from './presentation/components/category/category-trainers/category-trainers.component';
import {MatAutocompleteModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AccountFormComponent } from './account/components/account-form/account-form.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './shared/components/search/search.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    AriasComponent,
    CategoryComponent,
    MainPageComponent,
    CategoryTitleComponent,
    CategoryTrainersComponent,
    AccountFormComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatMenuModule,
    MatIconModule]
})
export class AppModule { }
