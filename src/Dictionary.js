import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Audio from "./Audio";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [audio, setAudio] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleAudioResponse(response) {
    console.log(response.data);
    setAudio(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=17c4t0bff12cb4a64a5e588oa39474f2`;
    axios.get(apiUrl).then(handleResponse);

    let apiAudioUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiAudioUrl).then(handleAudioResponse);

    let pexelsApiKey =
      "zNNffUC1dzzZsA2mAmX6JE0wAldbbnPiMJRbD8cYFc4nYAc7jw6nmx3t";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          Authorization: `${pexelsApiKey}`,
        },
      })
      .then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="Hint">suggested words: yoga, sunset, coffee, …</div>
          <Audio audio={audio} />
          <Results results={results} />
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
