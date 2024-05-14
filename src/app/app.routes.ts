import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';
import { Page1Component } from './components/page1/page1.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pagea', pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pagea', component: PageaComponent },
  { path: 'pageb', component: PagebComponent },
  { path: 'pagec', component: PagecComponent },
  { path: 'page1', component: Page1Component },
  { path: '**', redirectTo: '/home'}
];
