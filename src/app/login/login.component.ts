import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
declare function  capGenerate():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = { name: '', password: '' };
  errorMessage = '';
  captcha: any;
  formCaptcha ="";
  isCaptcha = true;


  constructor(private auth: AuthServiceService) {}

  ngOnInit() {
    this.capGenerate()
}


  capGenerate(){
   
    // let c = document.getElementById("myCanvas");
   
    // let ctx = (c as HTMLCanvasElement).getContext("2d");
    // ctx.font = "30px Arial";
    
        // captcha=document.getElementById("captcha");
        let uniqueCaptcha=" ";
        let character="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwx1234567890";
    
        for(let i=0;i<=5;i++){
            uniqueCaptcha += character.charAt(Math.random() * character.length)
        };
        console.log(uniqueCaptcha);
        this.captcha = uniqueCaptcha;
}


  onSubmit() {
    let userId = this.auth.login(this.formData.name, this.formData.password);
    if (!userId) {
      this.errorMessage = 'InValid Account!';
    } else {
      this.errorMessage = '';
      this.auth.storeToken(userId);
      this.auth.canAccess();
    }
    console.log(userId)
  }

  checkCaptcha(){
    this.captcha = this.captcha.trim();
    this.formCaptcha = this.formCaptcha.trim();

    if(this.captcha != this.formCaptcha){
      this.isCaptcha = false;
      console.log("hai")

    }
   

  }
}




