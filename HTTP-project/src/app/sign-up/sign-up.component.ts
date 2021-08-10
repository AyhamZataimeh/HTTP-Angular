import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from '../post.model';
import { Posts } from '../posts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  genders=['male','female'];
  emails=[];
  users=[];
  myForm=new FormGroup({
    
      email:new FormControl(null,[Validators.email,Validators.required,this.checkEmail.bind(this)]),
      username:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required,Validators.minLength(0)]), 
      confPassword:new FormControl(null,[Validators.required]),  
    
      gender:new FormControl('male',Validators.required)
  })

  constructor(private httpService:Posts,
    private router:Router) { }

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(responseData=>{
      for(let email of responseData){
        this.emails.push(email.email);
        
        

      }
      



    })



    
   
      
    
  }
  submit(form:UserInfo){
    this.httpService.crateUser(form);
    this.router.navigate(['/welcome'],
    {queryParams:{name:form.username,email:form.email},fragment:form.gender})
    
  }

  checkEmail(control:FormControl):{[email:string]:boolean}{
    if(this.emails.indexOf(control.value)!==-1){
      return{'exsit':true};
    }


  }

  back(){
    this.router.navigate(['home'])
  }

}
