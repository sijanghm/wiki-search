import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages : any = [];

  constructor(private wikiService : WikiService){

  }
  onTerm(term : string){
     this.wikiService.search(term).subscribe((response : any) =>{
        this.pages = response.query.search;
     });

  }
}
