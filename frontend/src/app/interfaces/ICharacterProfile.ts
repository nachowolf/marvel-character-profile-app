export interface ICharacterProfile {

    characters:{
        name: string;
    imagePath: string;
    stories: IStory[];
    comics: IComic[];
    }

}

interface IStory {name:string, title:string, description:string}
interface IComic {title:string, issueNumber:number, description:string}
