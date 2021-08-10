import { HttpClient, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "./post.model";
import {map,catchError,tap} from 'rxjs/operators';
import { throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class Posts{
    constructor(private http:HttpClient){}

    crateUser(users:UserInfo){
        const form={email:users.email,name:users.username,password:users.password,gender:users.gender};

        this.http.post<{name:string}>('https://http-75e19-default-rtdb.firebaseio.com/users.json',form)
        .subscribe(responseData=>{
            console.log(responseData);
            
        },catchError(error=>{
            return throwError(error);
        }))
    }

    getUsers(){
        const users=[];
        return this.http.get('https://http-75e19-default-rtdb.firebaseio.com/users.json')
        .pipe(map(responseData=>{
            for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                    users.push(responseData[key]);



                }
                
                

            }
            return users;
            

        },catchError(error=>{
            return throwError(error);
        })))
    }

    deleteUsers(){
        return this.http.delete('https://http-75e19-default-rtdb.firebaseio.com/users.json')
    }

}