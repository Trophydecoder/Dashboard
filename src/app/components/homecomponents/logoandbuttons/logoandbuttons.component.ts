import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Users } from '../../../model/models';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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


async showModal() {
  const { value: cellnumber } = await Swal.fire({
    title: "Enter Cell Number",
    input: "text",
    inputLabel: "Your Cell Number",
    inputPlaceholder: "Enter a valid cell number",
    inputAttributes: {
      maxlength: "10",
      pattern: "\\d*",
      inputmode: "numeric"
    },
    showCancelButton: true
  });

  if (cellnumber) {
    const trimmedNumber = cellnumber.trim();

    if (!/^\d+$/.test(trimmedNumber)) {
      Swal.fire("Error", "Cell number must contain digits only", "error");
      return;
    }

    if (trimmedNumber.length < 10) {
      Swal.fire("Error", "Cell number must be at least 10 digits", "error");
      return;
    }

    this.cellnumber = trimmedNumber;
    this.userExists = Users.find(user => user.cellnumber === trimmedNumber);

    if (this.userExists) {
      console.log('User already exists');
      this.router.navigate(['/user-info', trimmedNumber]);
    } else {
      console.log('Register user');
      this.router.navigate(['/user-register', trimmedNumber]);
    }
  }
}
}