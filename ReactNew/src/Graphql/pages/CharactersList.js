import './CharacterList.css'
import { useCharacters } from '../hooks/useCharacters';

export default function CharactersList() {
  const { error, loading, data } = useCharacters();
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error...</div>

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
