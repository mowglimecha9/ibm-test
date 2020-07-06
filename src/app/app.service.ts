import { Injectable } from '@angular/core';
import {dinosaurs} from './dinosaurs'
import { Observable, of, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  dinosaurList = dinosaurs;
  constructor() {

  }

  getDinos(searchText) :Observable<any> {
    const dinos = of(this.dinosaurList).pipe(map(item => item.filter(value => value.includes(searchText))))
    return dinos;
  }
}
