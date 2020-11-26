import React, { useState, useRef } from "react";
import { GalleryType } from "components/utils/constants";
import { getGalleryImages } from "components/utils/fileUtils";
import SearchBar from "components/reusable/SearchBar";
import Modal from "components/reusable/Modal";
import _ from "lodash";
import styles from "./Gallery.module.scss";

export class GalleryImage {
   fullsizeName: string;
   fullsizeSrc: string;
   thumbnailSrc: string;
   thumbnailName: string;
   displayName: string;
}

function Gallery({ type }) {
   const defaultTitle =
      type === GalleryType.ICONS ? "Animated Icons" : "Art Gallery";

   const completeImagesList = getGalleryImages(type);
   const [imagesList, setImagesList] = useState([...completeImagesList]);
   const [shownImage, setShownImage] = useState(null);
   const thumbnailsRef = useRef(null);

   const handleThumbnailClick = (e, image) => {
      setShownImage(image);
   };

   const handleClose = (e) => {
      setShownImage(null);
   };

   const handleSearchTermChange = (newInput) => {
      const filteredKeys = Object.keys(completeImagesList).filter((key) =>
         key.startsWith(newInput)
      );
      setImagesList(_.pick(completeImagesList, filteredKeys));
   };

   return (
      <div className={styles.ContentContainer}>
         <h1>{defaultTitle}</h1>

         {shownImage && (
            <Modal
               show={!!shownImage}
               closeModal={handleClose}
               title={shownImage.displayName}
            >
               <FullsizeImage
                  src={shownImage.fullsizeSrc}
                  displayName={shownImage.fullsizeName}
               />
            </Modal>
         )}

         <div className={styles.SearchBar}>
            <SearchBar onInputChange={handleSearchTermChange} />
         </div>

         <div className={`${styles.ThumbnailContainer}`} ref={thumbnailsRef}>
            {imagesList.map((image, i) => {
               return (
                  <Thumbnail
                     key={i}
                     src={image.thumbnailSrc}
                     displayName={imagesList.displayName}
                     onClick={(e) => handleThumbnailClick(e, image)}
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
