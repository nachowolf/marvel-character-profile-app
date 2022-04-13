import axios from 'axios'

export  function MarvelService() {

    async function getCharacters(){
        let characters = []
        try{
            let response = await axios.get('http://gateway.marvel.com/v1/public/characters?apikey=9dc84dfbf7e610bf7d1016f93220a996&hash=1c5941bf8e5a862fd5a34a4e2c4d9e68&ts=1&limit=100')
            characters = await response.data.data.results.map((character) =>{
                return{"id": character.id, "name": character.name}
            })

            return characters

        }catch(error){
            console.log(error)
        }
    }

    async function getCharacter(characterID){
        try{
            let character = await axios.get(`http://gateway.marvel.com/v1/public/characters/${characterID}?apikey=9dc84dfbf7e610bf7d1016f93220a996&hash=1c5941bf8e5a862fd5a34a4e2c4d9e68&ts=1`)
            let stories = await axios.get(`http://gateway.marvel.com/v1/public/characters/${characterID}/stories?apikey=9dc84dfbf7e610bf7d1016f93220a996&hash=1c5941bf8e5a862fd5a34a4e2c4d9e68&ts=1`)
            let comics = await axios.get(`http://gateway.marvel.com/v1/public/characters/${characterID}/comics?apikey=9dc84dfbf7e610bf7d1016f93220a996&hash=1c5941bf8e5a862fd5a34a4e2c4d9e68&ts=1`)
            
            let storyList = await stories.data.data.results.map((story) => {
                return {"name":story.originalIssue.name, "title": story.title, "description": story.description}
            })

            let comicList = await comics.data.data.results.map((comic) => {
                return {"title": comic.title, "issueNumber":comic.issueNumber,"description": comic.description}
            })
            let characterResult = await character.data.data.results[0];

            let resultCharacter = {
                    "characters":{
                        "name": characterResult.name,
                        "imagePath": characterResult.thumbnail.path + "/standard_medium.jpg",
                        "stories": storyList,
                        "comics": comicList
                    }
                } 

            return resultCharacter;

        }catch(error){
            console.log(error)
            return error.response.data
        }
    }
    
    return{
        getCharacters,
        getCharacter
    }
}