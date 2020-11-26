import { GalleryType, THUMB_SUFFIX } from "components/utils/constants";
import { GalleryImage } from "components/Gallery";

// Generate a map of filename keys (ie. {"chikorita.jpg": filepath}) to the file path given a webpack context
export function generateFilenameMap(r) {
	let filenameMap = {};
	r.keys().forEach((filename) => {
		filenameMap[filename.replace("./", "")] = r(filename).default;
	});
	return filenameMap;
}

// Populates an array of GalleryImages for all images under a gallery type
export function getGalleryImages(gallery, type) {
	// fetch list of images for given gallery type
	let images;
	if (gallery === GalleryType.MAIN) {
		images = generateFilenameMap(getGalleryContext(type));
	} else if (gallery === GalleryType.ICONS) {
		images = generateFilenameMap(getGalleryContext(type));
	}

	// populate list
	let currGalleryImage = new GalleryImage();
	const galleeryImagesList = [];
	Object.entries(images).forEach(([key, value]) => {
		if (key.includes(THUMB_SUFFIX)) {
			// is a thumbnail
			currGalleryImage.thumbnailName = key;
			currGalleryImage.thumbnailSrc = value;
		} else {
			// is a fullsize image
			currGalleryImage.fullsizeName = key;
			currGalleryImage.fullsizeSrc = value;
			currGalleryImage.displayName = getPrettifiedNameFromFile(key);
		}
		if (
			currGalleryImage.thumbnailName &&
			currGalleryImage.thumbnailSrc &&
			currGalleryImage.fullsizeName &&
			currGalleryImage.fullsizeSrc &&
			currGalleryImage.displayName
		) {
			// ready to be pushed
			galleeryImagesList.push(currGalleryImage);
			currGalleryImage = new GalleryImage();
		}
	});
	return galleeryImagesList;
}

// Transforms "chikorita.png" to "Chikorita"
function getPrettifiedNameFromFile(index) {
	let displayName = index.replace(".png", "");
	return displayName.charAt(0).toUpperCase() + displayName.slice(1);
}

// Get context based on gallery type
function getGalleryContext(type) {
	switch (type) {
		case GalleryType.ICONS:
			return require.context(
				"images/animated-icons/",
				false,
				/\.(png|jpe?g|svg|gif)$/
			);
		case GalleryType.MAIN:
		default:
			return require.context(
				"images/stockart/",
				false,
				/\.(png|jpe?g|svg|gif)$/
			);
	}
}
