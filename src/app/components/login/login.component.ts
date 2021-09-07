import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Observable } from 'rxjs';
import { Register } from 'src/app/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUsers:Register[];
  username:string;
  email:string;
  password:string;
  constructor(private registerService:RegisterService) { 
    this.registerService.getUsers().subscribe((user)=>this.allUsers = user)
  }
  ngOnInit(): void { }
  
  onSubmit(username: any,email: any,password: any) {
    if(!this.username || !this.email || !this.password) {
      alert('All fields are required')
    } else {
        const newUser= {
          username: this.username,
          email: this.email,
          password: this.password
        }
        this.registerService.addUser(newUser).subscribe((user)=> {
          this.allUsers.push(user)
        })
        
        console.log(this.allUsers)
        // console.log(newUser)
        this.username = '',
        this.email = '',
        this.password = ''
      }
    }

  }
