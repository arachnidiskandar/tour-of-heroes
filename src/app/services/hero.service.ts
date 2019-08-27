import { MessagesService } from './messages.service';
import { Hero } from './../hero';
import { HEROES } from './../mock-heroes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(public messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
