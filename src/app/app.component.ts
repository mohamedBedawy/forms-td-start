import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  submitted: boolean;
  ngOnInit(): void {}
  @ViewChild('f', { static: true }) signupForm: NgForm;

  genders = ['male', 'female'];
  user={
    username:'',
    email:'',
    secrectQuestion:'',
    gender:''
  }

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
    debugger
    this.submitted= true;
   this.user.username = this.signupForm.value.userName;
   this.user.email = this.signupForm.value.email;
   this.user.secrectQuestion = this.signupForm.value.QuestionAnswer;
   this.user.gender = this.signupForm.value.gender;
   this.signupForm.reset()
  }
}
