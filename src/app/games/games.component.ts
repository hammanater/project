import { Component, OnInit } from '@angular/core';
import { Game } from './games.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  selectedGame: Game
  games = []

  constructor() { }

  ngOnInit(): void {
  }

}
