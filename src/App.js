import { useState } from "react";
import "./styles.css";

const emojidict = {
  "🙂": "Smiling Emoji",
  "😃": "Grinning Face Emoji",
  "😁": "Grinning Face with Smiling Eyes Emoji",
  "😂": "Laughing Face Emoji",
  "😞": "Sad Emoji",
  "😕": "Confused Emoji",
  "🥺": "Sad Eyes Emoji",
  "😳": "Embarrassed Emoji",
  "🙃": "Upside-Down Face Emoji Meaning	",
  "🤷": "Shrug Emoji",
  "😎": "Smiling Face With Sunglasses Emoji	🥶 Cold Face Emoji",
  "🤣": " Rolling on the Floor Laughing Emoji",
  "	😑": "Annoyed Emoji",
  "😡": "Angry Face Emoji",
  "😬": "Grimacing Face Emoji",
  "😲": "Surprised Emoji	",
  "😱 ": "Shocked Emoji",
  "😨": "Scared Emoji",
  "❤️": "Red Heart",
  "🧡": "Orange Heart",
  "💛": "Yellow Heart",
  "💚": "Green Heart",
  "💙": "Blue Heart",
  "💜": "Purple Heart",
  "💕": "Two Hearts",
  "💖 ": "Sparkling Heart",
  "💔 ": "Broken Heart",
  "🖤": "Black Heart",
  "😉": " Winking Face Emoji",
  "😈": "Smiling Face with Horns Emoji",
  "👅": " Tongue Emoji",
  "🍑": "Peach Emoji",
  "🍆": " Eggplant Emoji"
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
