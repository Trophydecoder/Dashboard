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
 

  ngOnInit() {
    this.cellnumber = this.route.snapshot.paramMap.get('cellnumber') || '';
    this.user = Users.find(user => user.cellnumber === this.cellnumber);
  }

  constructor(private route: ActivatedRoute) {}

  washTypes = [
    { name: 'Fullwash', img: 'assets/userinfo/fullwash.png' },
    { name: 'Exterior', img: 'assets/userinfo/exterior.png' },
    { name: 'Interior', img: 'assets/userinfo/interior.png' }
  ];
  
  selectedWashIndex: number | null = null;
  
  selectWashType(index: number) {
    this.selectedWashIndex = index;
  }
 
}

