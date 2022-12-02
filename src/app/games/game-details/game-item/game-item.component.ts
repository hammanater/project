import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../games.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Output() gameSelected = new EventEmitter<Game>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.gameSelected.emit();
  }

}
