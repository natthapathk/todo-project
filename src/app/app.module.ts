// modules zone
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
// component zone
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';

import { StateList } from './app.state-list';
import { uiRouterConfig } from './app.uirouter-config';
import { TodoService } from './todo/shared/todo.service';

@NgModule({
  declarations: [ // import component
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    ProfileComponent,
    TodoComponent
  ],
  imports: [ // import modules
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    UIRouterModule.forRoot({
      states: StateList,
      useHash: true,
      config: uiRouterConfig
    })
  ],
  providers: [TodoService], //เอาไว้ import service ที่เขียนขึ้นเอง
  bootstrap: [AppComponent]
})
export class AppModule { }
