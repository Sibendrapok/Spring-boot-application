import { Component } from '@angular/core';
import { PostService } from "./post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService]
})
export class AppComponent {
  name :string;
  email :string;
  address: Address;
  hobbies: string [];
  showHobbies:boolean;
  posts:Post[];
  constructor(private postService:PostService)
  {

   this.name='Sibendra pokhrel'
    this.email='P.sibendra@gmail.com'
    this.address= {
    districts: "Kathmandu",
    country: "Nepal"

  };
this.hobbies=['CRICKET','TT','FOOTBALl','CHESS','BADMINTON'];
this.showHobbies=false;
postService.getPosts().subscribe(response=>{
  
this.posts=response.json();
})}
toggleHobby()
{
  if(this.showHobbies==true)
    {
    this.showHobbies=false;
    }

else
    { 
this.showHobbies=true;
    }
}

addHobby(hobby)
 {
   this.hobbies.push(hobby);
 }
 deleteHobby(index)
 {
   this.hobbies.splice(index,1);
 }
 }


interface Address
 {
  country:string;
  districts:string;  
}

interface Post{
  id:number;
  title:string;
  body:string;

}