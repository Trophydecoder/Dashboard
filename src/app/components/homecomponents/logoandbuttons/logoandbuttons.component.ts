import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-logoandbuttons',
  imports: [CommonModule , FormsModule],
  templateUrl: './logoandbuttons.component.html',
  styleUrl: './logoandbuttons.component.scss'
})
export class LogoandbuttonsComponent {
  logoandbuttons :boolean = true;
  modal :boolean = false;
  
  showModal(){
    this.logoandbuttons = false; 
    this.modal = true;
  }

  closeModal(){
    this.modal = false; 
    this.logoandbuttons = true;
  }
}
