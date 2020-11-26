import { GalleryType } from "components/utils/constants";

// Generate a map of filename keys (ie. {"chikorita.jpg": filepath}) to the file path given a webpack context
export function generateFilenameMap(r) {
	let filenameMap = {};
	r.keys().forEach((filename) => {
		filenameMap[filename.replace("./", "")] = r(filename).default;
	});
	return filenameMap;
}

// Transforms "chikorita.png" to "Chikorita"
export function getPrettifiedNameFromFile(index) {
	let displayName = index.replace(".png", "");
	return displayName.charAt(0).toUpperCase() + displayName.slice(1);
}

// Fetch a map of all the images for the given gallery
export const getGalleryImages = (gallery, context) => {
	let images;
	if (gallery === GalleryType.MAIN) {
		images = generateFilenameMap(context);
	} else if (gallery === GalleryType.ICONS) {
		images = generateFilenameMap(context);
	}
	return images;
};
