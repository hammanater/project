import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Game } from 'src/app/games/games.model';
import { Gm } from 'src/app/shared/gms.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('priceInput') priceInputRef: ElementRef;
  gameAdded = new EventEmitter<Gm>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const GmName = this.nameInputRef.nativeElement.nameInput;
    const GmPrice = this.priceInputRef.nativeElement.priceInput;
    const newGms = new Gm(GmName, GmPrice);
    this.gameAdded.emit(newGms);
    console.log('test')
  }
}
