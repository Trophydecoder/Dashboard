import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../../model/models';

@Component({
  selector: 'app-userinfo',
  imports: [CommonModule ,FormsModule ],
  templateUrl: './userinfo.component.html',
  styleUrl: './userinfo.component.scss'
})
export class UserinfoComponent {

  cellnumber: string = '';
  user: any;
  washOptions = ['Fullwash', 'Exterior', 'Interior', 'Detailing'];
  selectedOption: string | null = null;

  ngOnInit() {
    this.cellnumber = this.route.snapshot.paramMap.get('cellnumber') || '';
    this.user = Users.find(user => user.cellnumber === this.cellnumber);
  }

  constructor(private route: ActivatedRoute) {}


  
  selectOption(option: string): void {
    console.log('button pressed')
    this.selectedOption = option;
  }
}

