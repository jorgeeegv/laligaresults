import CharacterCard from "./shared/CharacterCard";
import {getCharacters} from './services/getCharacters'
export default async function HomePage(){
    const characters = await getCharacters();
    return (
        <div className="grid grid-cols-4 place-content-center gap-2">
           { characters.results.map((character:any) => (
            <CharacterCard key={character.id} character={character}/>
           ))
           }
        </div>    
    )
}