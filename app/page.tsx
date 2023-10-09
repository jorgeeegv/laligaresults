import CharacterCard from './shared/CharacterCard';
import { getCharacters } from './services/getCharacters';
export default async function HomePage() {
    const characters = await getCharacters();
    return (
        <div className='mx-48'>
            <h1 className='text-4xl font-bold w-full text-center mb-10'>Character List</h1>
        <div className="grid grid-cols-3 gap-x-8 gap-y-8  place-content-center mx-auto ">
            {characters.results.map((character: any) => (
               <div className='col inline-flex justify-center'>
                 <CharacterCard key={character.id} character={character} />
               </div>
            ))}
        </div>
        </div>
    );
}
