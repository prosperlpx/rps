import { useState } from "react";
import { Rules, Game } from "./utils/exports";
import { cancelIcon, bgTriangle } from "./utils/imageExports";

export default function App() {
  const [showRules, setShowRules] = useState(true);

  const removeRules = () => setShowRules((prevBool) => (prevBool = false));

  return (
    <main>
      {showRules && <Rules
          text="rules"
          btnVal={cancelIcon}
          img={bgTriangle}
          handleRules={removeRules}
        />
      }
        
        <Game />
    </main>
  );
}
