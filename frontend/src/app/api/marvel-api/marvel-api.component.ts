import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-marvel-api',
  templateUrl: './marvel-api.component.html',
  styleUrls: ['./marvel-api.component.css']
})
export class MarvelApiComponent implements OnInit {

  getCharactersResponse: Object[];
  getCharacterProfileResponse;
  
  expandedIndex = 0;


  constructor(private marvelAPIService: MarvelApiService) { }

  ngOnInit() {
  }

  clickButton(){
    this.getCharactersResponse = []
    this.marvelAPIService.getCharacters().subscribe((characters: Object[]) =>{
      this.getCharactersResponse = characters;
      console.log(this.getCharactersResponse)
          
    })



  }

}
