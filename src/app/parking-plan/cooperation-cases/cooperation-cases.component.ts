import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperation-cases',
  templateUrl: './cooperation-cases.component.html',
  styleUrls: ['./cooperation-cases.component.less']
})
export class CooperationCasesComponent implements OnInit {

  public index = 0;

  public chooseCase(e) {
    if (e.target.innerHTML === '城市案例') {
      this.index = 0;
    } else {
      this.index = 1;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
