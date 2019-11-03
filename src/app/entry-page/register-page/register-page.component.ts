import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

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
    this.insertUser(form);
  }

  insertUser(form: NgForm) {
    this.service.postUser(form.value);
  }

}
