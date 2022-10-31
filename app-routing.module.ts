import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsMainComponent } from './news-main/news-main.component';
import { NewsSectionOneComponent } from './news-section-one/news-section-one.component';

const routes: Routes = [
  { path: 'newsMain', component: NewsMainComponent},
  { path: 'newsDetail', component: NewsSectionOneComponent},
  { path: '', redirectTo: '/newsMain', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
