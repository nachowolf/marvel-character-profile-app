import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ICharacter } from './interfaces/ICharacter';
import { ICharacterProfile } from './interfaces/ICharacterProfile';
import { MarvelApiService } from './services/marvel-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'marvel-character-profile-app';

  selectedCharacter :ICharacter[] = [];
  previousIndex: number;
  characters : ICharacter[] = [];
  characterProfile: ICharacterProfile;

  constructor(private marvelAPIService: MarvelApiService) { }

  ngOnInit() {}

  clickButton(){
    this.characters = []
    this.showLoader('characters-spinner')
    this.marvelAPIService.getCharacters().subscribe((character: ICharacter[]) =>{
      if(character){
        this.hideLoader("characters-spinner")
        this.characters = character;     
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
          this.marvelAPIService.getCharacterProfile(this.selectedCharacter[0]).subscribe((character: ICharacterProfile) =>{
            this.hideLoader("profile-spinner")
            this.characterProfile = character;
          })
        }       
    }


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
