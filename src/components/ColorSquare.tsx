import React from "react";

type ColorSquareProps = {
	color: string;
};

const ColorSquare = ({ color }: ColorSquareProps) => {
	return (
		<div className="colorSquare" style={{ backgroundColor: color }}>
			{color ? <p>{color}</p> : <p>Empty Value</p>}
		</div>
	);
};

export default ColorSquare;
