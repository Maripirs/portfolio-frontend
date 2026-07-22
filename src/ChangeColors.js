const changeColors = (theme) => {
	if (theme === "light") {
		document.documentElement.style.setProperty("--background1", "white");
		document.documentElement.style.setProperty("--background2", "#afbbc6");
		document.documentElement.style.setProperty("--background3", "#afbbc640");
		document.documentElement.style.setProperty("--background4", "#AFBBC6");
		document.documentElement.style.setProperty("--color1", "#524f6b");
		document.documentElement.style.setProperty("--color2", "black");
		document.documentElement.style.setProperty("--color3", "white");
		document.documentElement.style.setProperty(
			"--color4",
			"rgb(85, 85, 107, 0.5)"
		);
		document.documentElement.style.setProperty(
			"--page-gradient",
			"linear-gradient(145deg, #ffffff 0%, #fbfcfd 58%, #eef3f8 100%)"
		);
		document.documentElement.style.setProperty(
			"--nav-gradient",
			"linear-gradient(180deg, rgba(175, 187, 198, 0.98), rgba(143, 157, 172, 0.98))"
		);
		document.documentElement.style.setProperty(
			"--section-gradient",
			"linear-gradient(90deg, rgba(175, 187, 198, 0.18), rgba(175, 187, 198, 0.42), rgba(82, 79, 107, 0.08))"
		);
		document.documentElement.style.setProperty(
			"--card-gradient",
			"linear-gradient(145deg, rgba(255, 255, 255, 0.98), rgba(247, 249, 252, 0.96))"
		);
		document.documentElement.style.setProperty(
			"--card-active-gradient",
			"linear-gradient(145deg, rgba(175, 187, 198, 0.9), rgba(238, 243, 248, 0.96))"
		);
		document.documentElement.style.setProperty(
			"--button-gradient",
			"linear-gradient(135deg, #afbbc6, #8f9dac)"
		);
		document.documentElement.style.setProperty(
			"--card-border",
			"rgba(82, 79, 107, 0.12)"
		);
		document.documentElement.style.setProperty(
			"--soft-card-shadow",
			"0 18px 34px rgba(0, 0, 0, 0.12)"
		);
		document.documentElement.style.setProperty("--project-shadow", "#00000020");
		document.documentElement.style.setProperty(
			"--dr-border",
			"saturate(0) brightness(10)"
		);
		document.documentElement.style.setProperty(
			"--dr-lines",
			"saturate(1) brightness(0) invert(30%) sepia(11%) saturate(1166%) hue-rotate(207deg) brightness(96%) contrast(87%)"
		);
		document.documentElement.style.setProperty("--dr-shadows", "saturate(0)");
		document.documentElement.style.setProperty(
			"--dr-fill",
			"saturate(0) brightness(10)"
		);
	} else {
		document.documentElement.style.setProperty("--background1", "#212025");
		document.documentElement.style.setProperty("--background2", "#323246");
		document.documentElement.style.setProperty("--background3", "#292954");
		document.documentElement.style.setProperty("--background4", "#AFBBC6");
		document.documentElement.style.setProperty("--project-shadow", "#00000040");
		document.documentElement.style.setProperty("--color1", "white");
			document.documentElement.style.setProperty("--color2", "white");
			document.documentElement.style.setProperty("--color3", "white");
			document.documentElement.style.setProperty("--color4", "85, 85, 107, 0.5");
			document.documentElement.style.setProperty(
				"--page-gradient",
				"linear-gradient(145deg, #212025 0%, #252533 58%, #1c1c24 100%)"
			);
			document.documentElement.style.setProperty(
				"--nav-gradient",
				"linear-gradient(180deg, rgba(50, 50, 70, 0.98), rgba(36, 36, 52, 0.98))"
			);
			document.documentElement.style.setProperty(
				"--section-gradient",
				"linear-gradient(90deg, rgba(50, 50, 70, 0.62), rgba(41, 41, 84, 0.78), rgba(175, 187, 198, 0.1))"
			);
			document.documentElement.style.setProperty(
				"--card-gradient",
				"linear-gradient(145deg, rgba(44, 44, 61, 0.94), rgba(33, 32, 37, 0.98))"
			);
			document.documentElement.style.setProperty(
				"--card-active-gradient",
				"linear-gradient(145deg, rgba(50, 50, 70, 0.98), rgba(70, 69, 91, 0.9))"
			);
			document.documentElement.style.setProperty(
				"--button-gradient",
				"linear-gradient(135deg, #323246, #55556b)"
			);
			document.documentElement.style.setProperty(
				"--card-border",
				"rgba(255, 255, 255, 0.08)"
			);
			document.documentElement.style.setProperty(
				"--soft-card-shadow",
				"0 18px 34px rgba(0, 0, 0, 0.26)"
			);
		document.documentElement.style.setProperty(
			"--dr-border",
			"saturate(0) brightness(10) "
		);
		document.documentElement.style.setProperty(
			"--dr-lines",
			"saturate(1) brightness(0) invert(8%) sepia(8%) saturate(1112%) hue-rotate(212deg) brightness(92%) contrast(87%)"
		);
		document.documentElement.style.setProperty("--dr-shadows", "saturate(0)");
		document.documentElement.style.setProperty(
			"--dr-fill",
			"saturate(0) brightness(10)"
		);
	}
};
export default changeColors;
