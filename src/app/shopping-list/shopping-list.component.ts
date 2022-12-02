import { Component, OnInit } from '@angular/core';
import { Gms } from '../shared/gms.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Gm: Gms[] = [
    new Gms ('Defcon', '$9.99'),
    new Gms ('Astroneer', '$29.99')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onGameAdded(Gm: Gms) {
    this.Gm.push(Gm)
  }

}
