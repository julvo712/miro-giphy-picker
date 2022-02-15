import * as React from 'react';
import ReactDOM from 'react-dom';
import Gif from './components/Gif'
import GifGallery from './components/GifGallery'

async function init() {
    miro.board.ui.on("drop", async ({ x, y, target }) => {
        if (target instanceof HTMLImageElement) {
          const image = await miro.board.createImage({ x, y, url: target.src });
          await miro.board.viewport.zoomTo(image);
        }
      });
  }


function App() {
  React.useEffect(() => {
    init();
  }, []);


  const [galleryReady, setGalleryReady] = React.useState(0)
  const [apiData, setApiData] = React.useState("")

  function handleSearchClick() {
    let limit = document.getElementById("limitselector").value
    let apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=5T1aivzKqhOZgWZZFgQAQC6j909kRShN&limit=' + limit + '&q=';
    //console.log(giphyURL)
    let searchbar = document.getElementById("searchbar");
    if(searchbar.value != "") {
      //console.log(searchbar.value)
      apiUrl += searchbar.value;
      //console.log(apiUrl)
      fetch(apiUrl) 
          .then(response => response.json())
          .then(data => {
          //console.log(data)
          setGalleryReady(1)
          setApiData(data)
      });
    }
    
  }

  return (

    <div className="grid scroll">
    <div className="cs1 ce12">
        <div className="form-group">
            <div className="cs1 ce12">
            <label>Keyword</label>
                <input id="searchbar" className="input" type="text" placeholder="Keyword" />
            </div>
            <div className="cs1 ce12">
            <label>How many?</label>
              <select id="limitselector" class="select select-small">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
            <div className='cs1 ce12'><p> </p></div>
            <div className="cs1 ce12">
            <button type="submit" onClick={handleSearchClick} className="button button-primary">Search</button>
            </div>
    </div>
    </div>
      <GifGallery galleryready={galleryReady} apidata={apiData} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));



/***
 * 
<Gif even="False" source="https://media4.giphy.com/media/KzDqC8LvVC4lshCcGK/giphy.gif?cid=3a0f4ca86kqfmn1sdc35pqciy4vpbazeybovoc3lwozmhpbx&rid=giphy.gif&ct=g"/>
      <Gif even="True" source="https://media3.giphy.com/media/CgueQ55XydeE0/giphy.gif?cid=3a0f4ca85kysodk4mnfvug5ohs3j9seres3p9xmw5ydyaxce&rid=giphy.gif&ct=g"/>
      <Gif even="False" source="https://media4.giphy.com/media/KzDqC8LvVC4lshCcGK/giphy.gif?cid=3a0f4ca86kqfmn1sdc35pqciy4vpbazeybovoc3lwozmhpbx&rid=giphy.gif&ct=g"/>
      <Gif even="True" source="https://media1.giphy.com/media/QPSQa1EsERHO50i1Cg/giphy.gif?cid=3a0f4ca85kysodk4mnfvug5ohs3j9seres3p9xmw5ydyaxce&rid=giphy.gif&ct=g"/>
      <Gif even="False" source="https://media4.giphy.com/media/KzDqC8LvVC4lshCcGK/giphy.gif?cid=3a0f4ca86kqfmn1sdc35pqciy4vpbazeybovoc3lwozmhpbx&rid=giphy.gif&ct=g"/>
      <Gif even="True" source="https://media4.giphy.com/media/KzDqC8LvVC4lshCcGK/giphy.gif?cid=3a0f4ca86kqfmn1sdc35pqciy4vpbazeybovoc3lwozmhpbx&rid=giphy.gif&ct=g"/>
      <Gif even="False" source="https://media1.giphy.com/media/QPSQa1EsERHO50i1Cg/giphy.gif?cid=3a0f4ca85kysodk4mnfvug5ohs3j9seres3p9xmw5ydyaxce&rid=giphy.gif&ct=g"/>
      <Gif even="True" source="https://media3.giphy.com/media/CgueQ55XydeE0/giphy.gif?cid=3a0f4ca85kysodk4mnfvug5ohs3j9seres3p9xmw5ydyaxce&rid=giphy.gif&ct=g"/>
      ***/