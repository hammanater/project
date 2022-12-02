import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from '../games.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Output() gameWasSelected = new EventEmitter<Game>()
  games: Game[] = [
    new Game('Star wars: Empire at War','A strategy game in which you play in the Imperial Civil War.', 'https://m.media-amazon.com/images/I/81vSTTOR7lL._SX342_.jpg'),
    new Game('Sins of a Solar Empire 2','A recently announced sequal to the RTS game: Sins of a Solar Empire. Not much is known about the game yet.', 'https://assets-prd.ignimgs.com/2022/09/15/sins-of-a-solar-empire-2-button-1663273452419.jpg?width=300&crop=1%3A1%2Csmart'),
    new Game('Stellaris','A Grand Strategy game that is set mainly for deplomacy, and space combat.', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Stellaris_cover_art.jpg/220px-Stellaris_cover_art.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }

  onGameSelected(game: Game) {
    this.gameWasSelected.emit(game)
  }

}
