import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'

import {Observable} from 'rxjs/Observable'

@Injectable()

export class HeroesService {
  hero: {hero: string}
  heroesUrl = "http://localhost:9393/"
  constructor(private http: Http){}

  getHeroes(){
    return this.http.get(this.heroesUrl)
             .map(res => res.json())

             // .toPromise()
             // .then(response => response.json().data)
             // .catch(this.logError)
  }


}
