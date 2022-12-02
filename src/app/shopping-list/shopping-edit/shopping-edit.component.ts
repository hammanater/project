import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Game } from 'src/app/games/games.model';
import { Gms } from 'src/app/shared/gms.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;
  gameAdded = new EventEmitter<Gms>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const gmsName = this.nameInputRef.nativeElement.nameInput;
    const gmsPrice = this.priceInputRef.nativeElement.priceInput;
    const newGm = new Gms(gmsName, gmsPrice);
    this.gameAdded.emit(newGm);
  }
}
