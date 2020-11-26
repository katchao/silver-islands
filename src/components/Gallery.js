import React, { useState, useRef, useEffect } from "react";
import { GalleryType, THUMB_SUFFIX } from "components/utils/constants";
import {
   generateFilenameMap,
   getPrettifiedNameFromFile,
} from "components/utils/fileUtils";
import SearchBar from "components/reusable/SearchBar";
import Modal from "components/reusable/Modal";
import _ from "lodash";

import styles from "components/Gallery.module.scss";

// creates a map of image name to URL
const getGalleryImages = (gallery, context) => {
   let images = new Map();
   if (gallery === GalleryType.MAIN) {
      images = generateFilenameMap(
         require.context("images/stockart/", false, /\.(png|jpe?g|svg|gif)$/)
      );
   } else if (gallery === GalleryType.ICONS) {
      images = generateFilenameMap(
         require.context(
            "images/animated-icons/",
            false,
            /\.(png|jpe?g|svg|gif)$/
         )
      );
   }
   return images;
};

function Gallery({ type }) {
   const defaultTitle =
      type === GalleryType.ICONS ? "Animated Icons" : "Art Gallery";

   const getContext = (type) => {
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
   };

   const fullImagesList = getGalleryImages(type, getContext(type));
   const [imagesListMap, setImagesListMap] = useState({ ...fullImagesList });
   const [shownImage, setShownImage] = useState(null);
   const [title, setTitle] = useState(defaultTitle);
   const [showScrollBottom, setShowScrollBottom] = useState(false);
   const thumbnailsRef = useRef(null);
   useEffect(() => {
      if (shownImage) {
         setShowScrollBottom(
            thumbnailsRef.current.scrollHeight >
               thumbnailsRef.current.clientHeight
         );
      }
   }, [shownImage]);

   const handleThumbnailClick = (e, indexOfFullsize, displayName) => {
      setShownImage(imagesListMap[indexOfFullsize]);
      setTitle(displayName);
   };

   const handleClose = (e) => {
      setShownImage(null);
   };

   const handleSearchTermChange = (newInput) => {
      const filteredKeys = Object.keys(fullImagesList).filter((key) =>
         key.startsWith(newInput)
      );
      setImagesListMap(_.pick(fullImagesList, filteredKeys));
   };

   return (
      <div className={styles.ContentContainer}>
         <h1>{defaultTitle}</h1>

         <Modal show={!!shownImage} closeModal={handleClose} title={title}>
            <FullsizeImage src={shownImage} displayName={title} />
         </Modal>

         <div className={styles.SearchBar}>
            <SearchBar onInputChange={handleSearchTermChange} />
         </div>

         <div className={`${styles.ThumbnailContainer}`} ref={thumbnailsRef}>
            {Object.keys(imagesListMap)
               .filter((filename) => filename.includes(THUMB_SUFFIX))
               .map((thumbnail, i) => {
                  const indexOfFullsize = thumbnail.replace(THUMB_SUFFIX, "");
                  const displayName = getPrettifiedNameFromFile(
                     indexOfFullsize
                  );
                  return (
                     <Thumbnail
                        key={i}
                        src={imagesListMap[thumbnail]}
                        displayName={displayName}
                        onClick={(e) =>
                           handleThumbnailClick(e, indexOfFullsize, displayName)
                        }
                     />
                  );
               })}
         </div>
      </div>
   );
}

function FullsizeImage({ src, displayName }) {
   // generate a random BG color
   const classNames = [
      styles.Blue,
      styles.Red,
      styles.Yellow,
      styles.Green,
      styles.Purple,
   ];
   const bgColor = classNames[Math.floor(Math.random() * classNames.length)];

   return (
      <div className={styles.FullsizeImage}>
         <div className={`${styles.FullsizeImageInner} ${bgColor}`}>
            <img src={src} alt={displayName} />
         </div>
      </div>
   );
}

function Thumbnail({ src, onClick, displayName }) {
   return (
      <div className={styles.Thumbnail}>
         <img src={src} onClick={onClick} alt={`${displayName} Thumbnail`} />
      </div>
   );
}

export default Gallery;
