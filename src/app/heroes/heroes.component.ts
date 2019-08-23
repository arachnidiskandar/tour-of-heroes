import { HEROES } from './../mock-heroes';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes;
  selectedHero: Hero;
  hero = {
    id:1,
    name: 'nome'
  };
  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
