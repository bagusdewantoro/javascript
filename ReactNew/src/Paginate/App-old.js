import { useState, useEffect } from 'react';

const NewsCard = ({ url, title, author }) => {
	return (
		<div style={{ padding: '20' }}>
			<a href={url}>
				{title} by {author}
			</a>
		</div>
	);
};

function App() {
  const [hits, setHits] = useState([]);
  const [isLoaded, setisLoaded] = useState(true);
  const [query, setQuery] = useState('');
  const URL = `https://hn.algolia.com/api/v1/search?query=${query}`;

  const handleFetch = () => {
    fetch(URL)
      .then(response => response.json())
      .then(body => {
        setHits([...body.hits]);
      })
      .catch(error => console.error('Error', error));
  }

  useEffect(handleFetch, [URL])

  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={(event) => setQuery(event.target.value)} />
      <button onClick={handleFetch}>Get Data</button>
  		{isLoaded ? (
  			hits.map((item) => {
					console.log(item)
					return (
						<div key={item.objectID}>
							<NewsCard
								url={item.url}
								title={item.title}
								author={item.author}
							/>
						</div>
					)
  			})
  		) : (
  			<div></div>
  		)}
    </div>
  );
}

export default App;
