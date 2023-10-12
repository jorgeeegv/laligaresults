export default function CharacterCard({ character }: { character: any }) {
    return (
        <div className="w-full h-full rounded overflow-hidden shadow-lg bg-gray-700 text-gray-200">
            <img
                className="w-full h-52 object-cover"
                src={character.image}
                alt="photo"
            ></img>
            <div className="px-6 py-4">
                <div className="font-bold text-xl">{character.name}</div>
                <div className="text-base">
                    {character.species}, {character.gender}
                </div>
                <div className="text-base mb-2"></div>

                <p className="text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                </p>
            </div>
        </div>
    );
}
