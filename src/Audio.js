import React from "react";
import "./Audio.css";

export default function Audio(props) {
  console.log(props.audio);
  if (props.audio) {
    return (
      <section className="Audio">
        <h2>{props.audio.word}</h2>
        <div className="Phonetic">
          {props.audio.phonetics.map(function (phonetic, index) {
            return (
              <div className="phonetics" key={index}>
                <a
                  href={phonetic.audio}
                  target="_blank"
                  rel="norefferer"
                  className="sound"
                >
                  🔊
                </a>
                <span className="audiotext">{phonetic.text}</span>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
