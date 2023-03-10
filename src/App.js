import { useState } from "react";
import "./styles.css";

const emojidict = {
  "๐": "Smiling Emoji",
  "๐": "Grinning Face Emoji",
  "๐": "Grinning Face with Smiling Eyes Emoji",
  "๐": "Laughing Face Emoji",
  "๐": "Sad Emoji",
  "๐": "Confused Emoji",
  "๐ฅบ": "Sad Eyes Emoji",
  "๐ณ": "Embarrassed Emoji",
  "๐": "Upside-Down Face Emoji Meaning	",
  "๐คท": "Shrug Emoji",
  "๐": "Smiling Face With Sunglasses Emoji	๐ฅถ Cold Face Emoji",
  "๐คฃ": " Rolling on the Floor Laughing Emoji",
  "	๐": "Annoyed Emoji",
  "๐ก": "Angry Face Emoji",
  "๐ฌ": "Grimacing Face Emoji",
  "๐ฒ": "Surprised Emoji	",
  "๐ฑ ": "Shocked Emoji",
  "๐จ": "Scared Emoji",
  "โค๏ธ": "Red Heart",
  "๐งก": "Orange Heart",
  "๐": "Yellow Heart",
  "๐": "Green Heart",
  "๐": "Blue Heart",
  "๐": "Purple Heart",
  "๐": "Two Hearts",
  "๐ ": "Sparkling Heart",
  "๐ ": "Broken Heart",
  "๐ค": "Black Heart",
  "๐": " Winking Face Emoji",
  "๐": "Smiling Face with Horns Emoji",
  "๐": " Tongue Emoji",
  "๐": "Peach Emoji",
  "๐": " Eggplant Emoji"
};

var emojisweknow = Object.keys(emojidict);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function emojiInputHandler(event) {
    var userinput = event.target.value;
    var meaning = emojidict[userinput];

    if (meaning === undefined) {
      meaning = "sorry!";
    }

    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojidict[emoji];

    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EMoji Reaction</h1>
      <input classname="input" onChange={emojiInputHandler}></input>

      <h2 className="meaning">{meaning}</h2>

      <h3>emoji we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onlClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
