import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IonTitle,IonContent, IonButton,IonInput,
  IonList,IonSelect,IonSelectOption,IonItem,IonAvatar,IonLabel} from "@ionic/angular/standalone";
import {NgForOf, NgIf} from "@angular/common";
import {Film} from "../models/film";
import {FilmsService} from "../providers/films.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.scss'],
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    RouterLink,
    IonTitle,IonContent, IonButton,IonInput,IonList,IonSelect,IonSelectOption,IonItem,
    IonLabel,IonAvatar
  ],
  standalone: true
})
export class RechercherComponent  implements OnInit {
  title: string = '';
  year?: number;
  type: string = '';
  error: string = '';
  films? : Array<Film>;
  async rechercher(){
    this.error = '';
    if (!this.title || this.title.length <= 3) {
      this.error = 'Veuillez saisir un titre de plus de 3 caractères';
      return;
    }
    if (this.year && (this.year < 1900 || this.year > 2050)) {
      this.error = 'Veuillez saisir une année entre 1900 et 2050';
      return;
    }
    this.filmService.search(this.title,this.type,this.year).subscribe({
      next:(e) =>{
        this.films = e;
        this.remplaceCaractereHTML(this.films);
      },
      error: err => {
        this.films = undefined
      }
    }

    )
  }
  private remplaceCaractereHTML(datas: Array<Film>) {
// ForEach
    for (let current of datas) {
      console.log("Avant les remplacements :");
      console.log(current);
//l'expression régulière à remplacer
      var regexp = /&acute;/gi;
      current.title = current.title.replace(regexp, "'");
      var regexp = /&egrave;/gi;
      current.title = current.title.replace(regexp, "è");
      var regexp = /&eacute;/gi;
      current.title = current.title.replace(regexp, "é");
      var regexp = /&euml;/gi;
      current.title = current.title.replace(regexp, "ë");
      console.log("Après :")
      console.log(current);
    }
  }

  allerVersDetail(){
    this.router.navigate(['/detail'])
  }
  constructor(private filmService :FilmsService, private router: Router) {}

  ngOnInit() {}

}
