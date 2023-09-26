import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();

    function handleResponse(response) {
      console.log(response.data.meanings[0]);
    }

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=17c4t0bff12cb4a64a5e588oa39474f2`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}