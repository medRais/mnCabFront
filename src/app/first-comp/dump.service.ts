import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DumpService {

  //  current: Person;

  constructor(private http:Http){

  }


  getResult() {
  return this.http.get("../assets/data.json")
           .toPromise()
           .then(response => response.json())
           .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
