import { getCharacter } from '../../services/getCharacter';
import CharacterCard from '../../shared/CharacterCard';

export default async function CharacterDetail({
    params,
}: {
    params: { id: number };
}) {
    const character = await getCharacter(params.id);
    return <CharacterCard key={character.id} character={character} />;
}
