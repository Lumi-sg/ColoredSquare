import { useState } from "react";
import "./styles/App.css";
import "./styles/reset.css";
import ColorSquare from "./components/ColorSquare";
import ColorTextField from "./components/ColorTextField";

function App() {
	const [color, setColor] = useState("");
	return (
		<div className="pageContainer">
			<ColorSquare color={color} />
			<ColorTextField color={color} setColor={setColor} />
		</div>
	);
}

export default App;
