import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TodoService {
  protected _URL:string = "";

  getListTodo(){
    return [
      {
        task: "Test Task",
        description: "For Test todo List",
        completeFlag: false
      }
    ]
  }
}
