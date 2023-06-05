import { useState, useEffect } from "react";
import tinycolor from "tinycolor2";

type ColorSquareProps = {
	color: string;
};

const ColorSquare = ({ color }: ColorSquareProps) => {
	const [textColor, setTextColor] = useState("#000000");
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const isDark = tinycolor(color).isDark();
		setTextColor(isDark ? "#ffffff" : "#000000");
	}, [color]);

	const handleCopyColor = () => {
		navigator.clipboard.writeText(tinycolor(color).toHexString());
		setCopied(true);
	};

	useEffect(() => {
		if (!copied) {
			return;
		}

		const timeoutId = setTimeout(() => {
			setCopied(false);
		}, 750);

		return () => clearTimeout(timeoutId);
	}, [copied]);

	return (
		<div
			className="colorSquare"
			style={{ backgroundColor: color, color: textColor, boxShadow: `0 0 20px ${color}` }}
			onClick={handleCopyColor}
		>
			{color ? (
				<>
					<p>{color}</p>
					<div className="hexValue">{tinycolor(color).toHexString()}</div>
					{copied && <div className="copied">Copied!</div>}
				</>
			) : (
				<p>Empty Value</p>
			)}
		</div>
	);
};

export default ColorSquare;
