import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoryComponent} from './presentation/components/category/category.component';
import {MainPageComponent} from './presentation/components/main-page/main-page.component';
import {AccountFormComponent} from './account/components/account-form/account-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'main', component: MainPageComponent },
  {
    path: 'category', component: CategoryComponent,
  },
  {
    path: 'category/:aria', component: CategoryComponent,
  },
  {
    path: 'account', component: AccountFormComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
