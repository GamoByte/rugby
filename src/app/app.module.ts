import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent} from './server/server.component';
import { BraaiComponent } from './braai/braai.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams/teams.component';
import { TeamviewComponent } from './teams/teamview/teamview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './account/login/login.component';
import { UsersModule } from './users/users.module';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './helpers';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent } from './notifications/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    BraaiComponent,
    FixturesComponent,
    TeamsComponent,
    TeamviewComponent,
    UsersComponent,
    LoginComponent,
    UsersComponent,
    UsersModule,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
