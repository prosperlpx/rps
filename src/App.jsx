import { useState } from "react";
import { Rules } from "./utils/compExports";
import { cancelIcon, bgTriangle } from "./utils/imageExports";

export default function App() {
  const [showRules, setShowRules] = useState(true);

  const removeRules = () => setShowRules((prevBool) => (prevBool = false));

  return (
    <main>
      {showRules && <Rules text="rules" btnVal={cancelIcon} img={bgTriangle} handleRules={removeRules} />}

      <p>Hello world</p>
    </main>
  );
}

