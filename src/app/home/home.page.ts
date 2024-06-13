import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RechercherComponent} from "../rechercher/rechercher.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RechercherComponent
  ],
})
export class HomePage {
  constructor() {}
}
