import { Component } from '@angular/core';
import { Users, usersList } from '../../../model/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  model = '';
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
    if (
      !this.name || !this.carType || !this.carBrand || !this.model ||
      !this.color || !this.cellnumber || !this.numberPlate
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (this.cellnumber.length < 10) {
      alert("Cell number must be at least 10 digits.");
      return;
    }

    const userExists = Users.find(Users => Users.cellnumber === this.cellnumber);

    if (userExists) {
      alert("User already exists.");
      return;
    }

    const newUser: Users = {
      name: this.name,
      carType: this.carType,
      carBrand: this.carBrand,
      model: this.model,
      color: this.color,
      cellnumber: this.cellnumber,
      numberPlate: this.numberPlate,
    };

    usersList.push(newUser);
    console.log('Registered User:', newUser);
    alert("User registered successfully!");

    // Clear form
    this.name = this.carType = this.carBrand = this.model = this.color = this.cellnumber = this.numberPlate = '';
  }
}