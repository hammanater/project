import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Gm } from '../shared/gms.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Gms: Gm[] = [
    new Gm ('Defcon', '$9.99'),
    new Gm ('Astroneer', '$29.99')
  ]
  getGm() {
    return this.Gms.slice();
  }

  ngOnInit(): void {

  }

  GmsChanged = new Subject<{Gm:string}>();

  onGameAdded(Gms: Gm) {
    this.Gms.push(Gms)
    this.GmsChanged.next(this.getGm())
  }

}
