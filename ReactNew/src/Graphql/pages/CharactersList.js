import './CharacterList.css'
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  return (
    <div className="CharacterList">
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong</div>}
      {data.characters.results.map(c => (
        <div key={c.id}>
          <img src={c.image} alt='loading'/>
          <h2>{c.name}</h2>
        </div>
      ))}
    </div>
  )
}
