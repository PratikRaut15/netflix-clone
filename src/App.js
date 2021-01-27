import react from 'react'
import requests from './Requests';
import Row from './Row'
import Banner from './Banner';
import "./App.css";
import Nav from './Nav';
function App() {
  return (
      <div className="App">
      {/** Navbar **/} 
      <Nav/>
      {/** Banner **/} 
      <Banner/>
      
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
       <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </div>
  );
}

export default App;
