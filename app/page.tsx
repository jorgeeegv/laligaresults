import CharacterCard from './shared/CharacterCard';
import { getCharacters } from './services/getCharacters';
export default async function HomePage() {
    const characters = await getCharacters();
    return (
        <div className="mx-16 md:mx-48">
            <h1 className="text-4xl font-bold w-full text-center mb-10">
                Character List
            </h1>
            {characters &&
            characters.results &&
            characters.results.length > 0 ? (
                <div className="grid md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-8  place-content-center mx-auto ">
                    {characters.results.map((character: any) => (
                        <div className="col inline-flex justify-center hover:scale-105 transition duration-500 cursor-pointer">
                            <CharacterCard
                                key={character.id}
                                character={character}
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            )}
        </div>
    );
}
