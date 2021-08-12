import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(value: any, user:any,id:any ){
    const users=[];
    let i:number=0;

    if(value.length===0 || user===''){
      return value;
    }
    for(const key of value){
      if(key[id].startsWith(user)){
        users.push(key);
        
      }

     
    }
    return users;
   
  }
}
