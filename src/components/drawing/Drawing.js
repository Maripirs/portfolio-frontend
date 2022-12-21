import "./Drawing.css";
import { lineWork, bodyFill, shadows, backgroundFill } from "./maripi-drawing";

const Drawing = (props) => {
	return (
		<div
			className={props.home ? "circle-crop" : "multi-crop"}
			style={{ width: props.dimention }}
		>
			<div className="drawing-container">
				<img
					className="drawing-img"
					src={backgroundFill}
					id="background-fill"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={bodyFill}
					id="body-fill"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={shadows}
					id="shadows"
					alt="logo-layer"
				/>
				<img
					className="drawing-img"
					src={lineWork}
					id="line-work"
					alt="logo-layer"
				/>
			</div>
		</div>
	);
};

export default Drawing;
