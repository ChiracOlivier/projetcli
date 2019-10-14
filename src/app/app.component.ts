import { Component } from '@angular/core';
import {resolve} from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise(
    // tslint:disable-next-line:no-shadowed-variable
    (resolve , reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        },
            2000
      );
    });
  appareils = [
   {
  name: 'Machine à laver',
  status: 'éteint'
    },
    {
  name: 'Télévision',
    status: 'allumé'
    },
    {
  name: 'Machine à écrire',
    status: 'éteint'
    }
        ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }
   onAllumer() {
    console.log('on allume tout!');
   }

}
