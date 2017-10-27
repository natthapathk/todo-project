import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoComponent } from './todo/todo.component';
import { Transition } from '@uirouter/angular';

export const StateList = [
  {
    name: 'login',
    url: '/login',
    component: LoginComponent
  },
  {
    name: 'home',
    url: '/home',
    component: HomeComponent
  },
  {
    name: 'profile',
    parent: 'home',
    url: '/profile',
    component: ProfileComponent
  },
  {
    name: 'todo',
    parent: 'home',
    url: '/todo',
    component: TodoComponent
  }
]
