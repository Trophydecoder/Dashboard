import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Users } from '../../../model/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logoandbuttons',
  imports: [CommonModule , FormsModule],
  templateUrl: './logoandbuttons.component.html',
  styleUrl: './logoandbuttons.component.scss'
})
export class LogoandbuttonsComponent {
  constructor(private router: Router) {} 
  Users = Users;
  userExists: any = null;
  buttons = true;
  Modal = false;
  cellnumber: string = '';



  showModal(){
    this.Modal = true; 
    this.buttons = false;
  }


  closeModal() {
    console.log('closeModal triggered');
  
    const trimmedNumber = this.cellnumber.trim();
    
    if (!trimmedNumber) {
      alert("Please enter a cell number");
      return;
    }
  
    if (!/^\d+$/.test(trimmedNumber)) {
      alert("Cell number must contain digits only");
      return;
    }
  
    if (trimmedNumber.length < 10) {
      alert("Cell number must be at least 10 digits");
      return;
    }
  
    this.userExists = Users.find(user => user.cellnumber === trimmedNumber);
  
    if (this.userExists) {
      console.log('User already exists');
      // Navigating to userinfo page if number found in database model
      this.router.navigate(['/user-info', this.cellnumber]);
    } else {
      console.log('Register user');
      this.router.navigate(['/user-register', this.cellnumber]); 
    }
  }
  
  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.key;
  
    if (!/^\d$/.test(charCode)) {
      event.preventDefault();
    }
  }
}  