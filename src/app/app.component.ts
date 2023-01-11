import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  @ViewChild('f', { static: true }) signupForm: NgForm;

  genders = ['male', 'female'];

  suggestUserName() {
    // const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData: {
    //     userName: 'Mohamed',
    //     email:'mm@gmail.com'
    //   },
    //   secret:'',
    //   QuestionAnswer:'',
    //   gender:'male'
    // });
    this.signupForm.form.patchValue({
      userData: {
        userName: 'Mohamed'}

    });
  }

  // onSubmit(f:NgForm){
  //   console.log('Submnitted',f)
  // }

  onSubmit() {
    console.log('Submnitted', this.signupForm);
  }
}
