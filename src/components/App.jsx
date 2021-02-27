import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function createEmoji(emojis) {
  return (
    <Emoji
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmoji)}
    </div>
  );
}

export default App;
