import {inject, Injectable} from '@angular/core';
import { Observable, of} from 'rxjs';
import {User} from '../models';
import {HttpClient} from '@angular/common/http';

export const configFactory = (config: UserDataService): (() => Observable<boolean>) => {
  return () => config.loadAppConfig();
};


@Injectable({
  providedIn: 'root'

})

export class UserDataService {
  Http = inject(HttpClient)
  URL = "http://localhost:3000/users"


  getUser():Observable<User[]>{
    return this.Http.get<User[]>(this.URL)
  }

  loadAppConfig(): Observable<boolean>{

    return of (true)
  }
}
