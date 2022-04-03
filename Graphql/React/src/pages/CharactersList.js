import './CharacterList.css'
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <div className="CharacterList">
      {data.characters.results.map(c => (
        <div key={c.id}>
          <img src={c.image} alt='loading'/>
          <h2>{c.name}</h2>
        </div>
      ))}
    </div>
  )
}
