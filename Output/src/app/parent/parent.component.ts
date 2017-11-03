import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  agreed = 0
  disagree = 0
  names = ["shyma", "jumana", "nofa", "abed", "haneen"]

  onVoted(agreed:boolean){
    agreed ? this.agreed++ : this.disagree++;
  }

  constructor() { }

  ngOnInit() {
  }

}
