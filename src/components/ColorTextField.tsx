import React from "react";

type ColorTextFieldProps = {
	color: string;
	setColor: React.Dispatch<React.SetStateAction<string>>;
};

const ColorTextField = ({ color, setColor }: ColorTextFieldProps) => {
	const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	};
	return (
		<div className="colorTextField">
			<input
				value={color}
				type="text"
				placeholder="Add color name"
				className="input"
				name="colorName"
				onChange={handleColorChange}
				required
			/>
		</div>
	);
};

export default ColorTextField;
