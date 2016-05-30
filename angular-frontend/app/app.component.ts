import {Component, OnInit} from '@angular/core'
import './rxjs-operators'
import {HeroesService} from './heroes.service'

@Component({
  selector: 'my-app',
  template: '<h1>HELLO WORLD</h1><p>{{hero}}</p><input [(ngModel)]="lol"><h3 (keyup)="0">{{lol}}</h3>',
  providers: [HeroesService]
})

export class AppComponent implements OnInit {
  constructor(private heroesService: HeroesService){}
  lol: string
  hero: {hero: string}

  ngOnInit(){
    this.showHero()
  }

  showHero(){
    this.heroesService.getHeroes()
               .subscribe(
               data => this.hero = data.data.hero,
               err => this.logError(err),
               () => console.log(this.hero)
               );
  }
  logError(err) {
    console.error('There was an error: ' + err)
  }
}
