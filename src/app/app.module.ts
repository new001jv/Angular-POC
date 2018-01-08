import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { ReportsComponent } from './reports/reports.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RolesComponent } from './roles/roles.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    ReportsComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    RolesComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'welcome', component: WelcomeComponent,
      },
      {
        path: 'products', component: TableComponent
      },
      {
        path: 'roles', component: RolesComponent
      },
      {
        path: 'usersettings', component: UserSettingsComponent 
      },
      {
        path: '', redirectTo: 'welcome', pathMatch: 'full'
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavComponent,
  ]
})
export class AppModule { }
