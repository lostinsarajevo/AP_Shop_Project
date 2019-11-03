import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: User;

  constructor(private http: HttpClient) { }

  postUser(formData: User) {
  }

  getUser(email: string, password: string) {
  }
}
