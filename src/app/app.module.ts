import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent} from './server/server.component';
import { BraaiComponent } from './braai/braai.component';
import { WarningComponent } from './notifications/warning/warning.component';
import { SuccessComponent } from './notifications/success/success.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { TeamviewComponent } from './teams/teamview/teamview.component';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'fixtures', component: FixturesComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'teamview', component: TeamviewComponent},
  // {path: "**",redirectTo:"welcome"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    BraaiComponent,
    WarningComponent,
    SuccessComponent,
    FixturesComponent,
    TeamsComponent,
    TeamviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
