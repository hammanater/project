import { Component, OnInit } from '@angular/core';
import { Game } from '../games.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[] = [
    new Game('Star wars: Empire at War','A strategy game in which you play in the Imperial Civil War', 'https://www.gamers-outlet.net/image/cache/wp/gj/Covers/emp2_cover-500x500.webp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
