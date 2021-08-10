import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from '../post.model';
import { Posts } from '../posts.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  emails=['admin@admin.com'];
  passwords=[];
  users=[];
  userPassword=null;
  form=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required,this.checkUser.bind(this)]),
    password:new FormControl(null,[Validators.required,this.checkPassword.bind(this)])

  })

  constructor(private httpSerice:Posts,
    private router:Router) { }

  ngOnInit(): void {
    this.httpSerice.getUsers().subscribe(responseData=>{
      this.users=responseData;
      for(let user of this.users){
        this.emails.push(user.email);
        this.passwords.push(user.password);
      }

      for(let user of responseData ){
        if(this.form.get('email').value===user.email){
          console.log(user.email);
          
          this.passwords.push(user.password);
          break;
        }
      }

     
      console.log(this.users);
      console.log(this.emails);
      
      
      
      

      
    });
 
    
   
  }

  logIn(form:UserInfo){
    if(this.form.get('email').value==='admin@admin.com'){
      this.router.navigate(['/users'])

    }else {
      this.router.navigate(['/welcome'],{queryParams:{email:form.email}})
    }
    this.passwords=[];


  }
  checkUser(control:FormControl):{[user:string]:boolean}{
   
    if(this.emails.indexOf(control.value)===-1  ){
      return {'not-exsit':true};
    }
   
    

  }

  checkPassword(control:FormControl):{[password:string]:boolean}{
    if(this.passwords.indexOf(control.value)===-1){
      return {'invalid':true}
    }

   
     
    return null;
   
    

    
      
  }
  // c(control:FormControl):Promise<any>{
  //   const promise= new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       if(this.emails.indexOf(control.value)===-1){
  //         resolve({'not-exsit':true});
  //       }
  //       else {
  //         resolve (null);
  //       }
       
        

  //     },1000)
  //   })
  //   return promise;
  // }
  


  


}
