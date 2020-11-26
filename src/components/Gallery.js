import React, { useState, useRef, useEffect } from "react";
import { GalleryType, THUMB_SUFFIX } from "components/utils/constants";
import {
   generateFilenameMap,
   getPrettifiedNameFromFile,
} from "components/utils/fileUtils";

import styles from "components/Gallery.module.scss";

const getGalleryImages = (gallery, context) => {
   let images;
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
   console.log(`images: ${JSON.stringify(images)}`);
   return images;
};

function Gallery({ type }) {
   const defaultTitle =
      type === GalleryType.ICONS ? "Animated Icons" : "Art Gallery";
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
   const images = getGalleryImages(type, getContext(type));

   const handleThumbnailClick = (e, indexOfFullsize, displayName) => {
      setShownImage(images[indexOfFullsize]);
      setTitle(displayName);
   };

   const handleOnClear = (e) => {
      setShownImage(null);
      setTitle(defaultTitle);
   };

   const sidebarClass = shownImage ? styles.Sidebar : "";

   return (
      <div className={styles.ContentContainer}>
         <h1>{title}</h1>
         <p>Select a thumbnail to view full size.</p>
         <div className={styles.GalleryContainer}>
            {shownImage && (
               <FullsizeImage
                  src={shownImage}
                  displayName={title}
                  handleOnClear={handleOnClear}
               />
            )}

            <div className={styles.Side}>
               <div
                  className={`${styles.ThumbnailContainer} ${sidebarClass}`}
                  ref={thumbnailsRef}
               >
                  {Object.keys(images)
                     .filter((filename) => filename.includes(THUMB_SUFFIX))
                     .map((thumbnail, i) => {
                        const indexOfFullsize = thumbnail.replace(
                           THUMB_SUFFIX,
                           ""
                        );
                        const displayName = getPrettifiedNameFromFile(
                           indexOfFullsize
                        );
                        console.log(`indexOfFullsize ${indexOfFullsize}`);
                        return (
                           <Thumbnail
                              key={i}
                              src={images[thumbnail]}
                              displayName={displayName}
                              onClick={(e) =>
                                 handleThumbnailClick(
                                    e,
                                    indexOfFullsize,
                                    displayName
                                 )
                              }
                           />
                        );
                     })}
               </div>
               {shownImage && showScrollBottom && (
                  <div className={styles.Scroll}>
                     Scroll
                     <i className={`material-icons ${styles.ExpandMoreIcon}`}>
                        expand_more
                     </i>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
   // }
}

function FullsizeImage({ src, handleOnClear, displayName }) {
   const imageRef = useRef(null);

   // generate a random BG color
   const classNames = [
      styles.Blue,
      styles.Red,
      styles.Yellow,
      styles.Green,
      styles.Purple,
   ];
   const bgColor = classNames[Math.floor(Math.random() * classNames.length)];

   useEffect(() => {
      imageRef.current.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   });
   return (
      <div className={styles.FullsizeImageContainer} ref={imageRef}>
         <div className={styles.Clear}>
            <i
               onClick={handleOnClear}
               className={`material-icons ${styles.ClearIcon}`}
            >
               clear
            </i>
         </div>
         <div className={styles.FullsizeImage}>
            <div className={`${styles.FullsizeImageInner} ${bgColor}`}>
               <img src={src} alt={displayName} />
            </div>
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
