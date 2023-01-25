import { useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = (props) => {
	const imageArr = [...props.images];
	const [currentImage, setCurrentImage] = useState(0);
	const handleChangeImage = (e) => {
		let direction = parseInt(e.target.closest(".change-image").id);
		let newInd = (currentImage + direction + imageArr.length) % imageArr.length;

		setCurrentImage(newInd);
	};
	return (
		<div className="project-img-cont">
			<div className="carrousel">
				<div
					className="move-back change-image"
					id="-1"
					onClick={handleChangeImage}
				>
					<p>&lt;</p>
				</div>
				<div
					className="move-forward change-image"
					id="1"
					onClick={handleChangeImage}
				>
					<p>&gt;</p>
				</div>
				{imageArr.map((image, idx) => (
					<img
						className="project-img-element"
						src={image}
						key={"projectImg" + idx}
						alt="project screenshot"
						style={{ transform: `translate(-${currentImage * 100}%)` }}
					/>
				))}
			</div>
			<div className="tracker">
				{imageArr.map((image, idx) => (
					<div
						key={"tracker" + idx}
						className={"circle " + (currentImage === idx ? "filled" : "")}
					></div>
				))}
			</div>
		</div>
	);
};

export default ImageCarousel;
