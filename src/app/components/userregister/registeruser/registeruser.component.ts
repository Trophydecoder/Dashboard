import { Component } from '@angular/core';
import { Users, usersList } from '../../../model/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registeruser',
  imports: [CommonModule ,FormsModule],
  templateUrl: './registeruser.component.html',
  styleUrl: './registeruser.component.scss'
})
export class RegisteruserComponent {
  name = '';
  carType = '';
  carBrand = '';
  color = '';
  cellnumber = '';
  numberPlate = '';

  allowOnlyLetters(event: KeyboardEvent) {
    if (!/^[a-zA-Z\s]*$/.test(event.key)) {
      event.preventDefault();
    }
  }

  allowOnlyDigits(event: KeyboardEvent) {
    if (!/^\d$/.test(event.key)) {
      event.preventDefault();
    }
  }

  registerUser() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
  
    if (
      !this.name || !this.carType || !this.carBrand || 
      !this.color || !this.cellnumber || !this.numberPlate
    ) {
      Toast.fire({
        icon: "error",
        title: "Please fill in all fields."
      });
      return;
    }
  
    if (this.cellnumber.length < 10) {
      Toast.fire({
        icon: "error",
        title: "Cell number must be at least 10 digits."
      });
      return;
    }
  
    const userExists = Users.find(user => user.cellnumber === this.cellnumber);
  
    if (userExists) {
      Toast.fire({
        icon: "error",
        title: "User already exists."
      });
      return;
    }
  
    const newUser: Users = {
      name: this.name,
      carType: this.carType,
      carBrand: this.carBrand,
      color: this.color,
      cellnumber: this.cellnumber,
      numberPlate: this.numberPlate,
    };
  
    usersList.push(newUser);
    console.log('Registered User:', newUser);
  
    Toast.fire({
      icon: "success",
      title: "User registered successfully!"
    });
  
    // Clear form
    this.name = this.carType = this.carBrand  = this.color = this.cellnumber = this.numberPlate = '';
  }
}