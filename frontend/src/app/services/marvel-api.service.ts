import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICharacter } from '../interfaces/ICharacter';
import { ICharacterProfile } from '../interfaces/ICharacterProfile';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<ICharacter[]>{
    return this.http.get<ICharacter[]>('http://localhost:3000/api/marvel/characters');
  }

  public getCharacterProfile( character: ICharacter): Observable<ICharacterProfile>{
    return this.http.post<ICharacterProfile>("http://localhost:3000/api/marvel/character/profile", {"id":character.id});
  }
}
