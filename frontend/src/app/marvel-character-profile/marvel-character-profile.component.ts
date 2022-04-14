import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../interfaces/ICharacter';
import { ICharacterProfile } from '../interfaces/ICharacterProfile';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-marvel-character-profile',
  templateUrl: './marvel-character-profile.component.html',
  styleUrls: ['./marvel-character-profile.component.css']
})
export class MarvelCharacterProfileComponent implements OnInit {

  title = 'marvel-character-profile-app';

  selectedCharacter :ICharacter[] = [];
  previousIndex: number;
  characters : ICharacter[] = [];
  characterProfile: ICharacterProfile = null;

  constructor(private marvelAPIService: MarvelApiService) { }

  ngOnInit() {}

  clickButton(){
    this.characters = []
    this.showLoader('characters-spinner')
    this.marvelAPIService.getCharacters().subscribe((character: ICharacter[]) =>{
      if(character){
        this.hideLoader("characters-spinner")
        if(this.characterProfile == null){
        this.characters = character;     
        }
        else{
          this.characters = character.filter(char => char.name !== this.characterProfile.characters.name);
        }
      }
          
    })



  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } 
    else {
      transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
        if(this.selectedCharacter.length > 1){
          let index = this.selectedCharacter[0].name !== this.selectedCharacter[event.currentIndex].name ? 0 : 1;
          transferArrayItem(
            event.container.data,
            event.previousContainer.data,
            index,  
            event.previousIndex,
            );
        }
        this.characterProfile = null;
        if(this.selectedCharacter.length != 0){
          this.showLoader('profile-spinner')
        }       
    }

this.marvelAPIService.getCharacterProfile(this.selectedCharacter[0]).subscribe((character: ICharacterProfile) =>{
  this.hideLoader("profile-spinner")
  this.characterProfile = character;
})
  }
  hideLoader(id: string){
    document.getElementById(id)
    .style.display = 'none';
  }
  showLoader(id: string){
    document.getElementById(id)
    .style.display = 'flex';
  }

}
