import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      userID: null,
      email: '',
      username: '',
      password: ''
    };
  }

  onSubmit(form: NgForm) {
    this.userExists(form);
  }

  userExists(form: NgForm) {
    this.service.getUser(form.value.email, form.value.password);
  }



}
