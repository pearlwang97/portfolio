export const COLORS = {
	background: "#fefcf3",
	text: "#250d00",
	textMuted: "#333333",
	accent: "#dba39a",
	accentOverlay: "rgba(219, 163, 154, 0.6)",
	accentSoft: "#f0dbdb",
	accentText: "#d5927c",
	scrollbarTrack: "#f1f1f1",
	scrollbarThumb: "#888888",
	scrollbarThumbHover: "#555555",
	white: "#ffffff",
};

export const FONTS = {
	sans: "'Montserrat', sans-serif",
	serif: "utopia-std, serif",
	display: "'New York', serif",
};

export const LAYOUT = {
	contentWidth: "1000px",
	gutter: "24px",
	gutterMobile: "16px",
};

export const RADIUS = {
	button: "7px",
	scrollbar: "10px",
};

export const SECTION_SPACING = {
	xs: "50px",
	md: "75px",
	lg: "100px",
};

export const SECTION_MARGINS = {
	compact: {
		xs: "20px",
		sm: "30px",
		md: "40px",
		lg: "50px",
	},
	featured: {
		xs: "75px",
		md: "100px",
		lg: "150px",
	},
};

export const SECTION_LAYOUTS = {
	wrapped: {
		display: "flex",
		flexWrap: "wrap",
	},
	surface: {
		width: "100%",
		height: "100%",
		backgroundColor: COLORS.background,
		color: COLORS.text,
	},
};

export const SECTION_HEADERS = {
	titleMargin: {
		xs: "20px 0",
		sm: "20px 0",
		md: "40px 0",
		lg: "40px 0",
	},
	featureTitleMargin: {
		xs: "25px",
		sm: "25px",
		md: "50px",
		lg: "75px",
	},
	dividerWidth: {
		xs: "50%",
		md: "40%",
		lg: "25%",
	},
};

export const TEXT_HIGHLIGHTS = {
	accentUnderline: {
		backgroundImage: `linear-gradient(180deg, transparent 50%, ${COLORS.accentOverlay} 50%)`,
	},
};

export const TEXT_SCALES = {
	detailTitle: {
		fontSize: {
			xs: "1.125rem",
			sm: "1.125rem",
			md: "1.25rem",
			lg: "1.375rem",
		},
		fontWeight: "550",
	},
	detailSubtitle: {
		fontSize: {
			xs: "1.025rem",
			sm: "1.025rem",
			md: "1.15rem",
			lg: "1.275rem",
		},
	},
};
