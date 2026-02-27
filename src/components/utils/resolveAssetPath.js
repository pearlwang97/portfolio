const EXTERNAL_PATH_PREFIXES = ["http://", "https://", "data:", "mailto:", "tel:", "#"];

const resolveAssetPath = (path) => {
	if (typeof path !== "string" || path.length === 0) {
		return path;
	}

	if (EXTERNAL_PATH_PREFIXES.some((prefix) => path.startsWith(prefix))) {
		return path;
	}

	if (path.startsWith("/")) {
		return `${process.env.PUBLIC_URL}${path}`;
	}

	return path;
};

export default resolveAssetPath;
