import React, { useState, useRef, useEffect } from "react";
import { GalleryType } from "components/utils/constants";
import { getGalleryImages } from "components/utils/fileUtils";
import SearchBar from "components/reusable/SearchBar";
import Modal from "components/reusable/Modal";
import styles from "./Gallery.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

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
   //debugger;
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
      const newImagesList = completeImagesList.filter((image) =>
         image.displayName.toLowerCase().startsWith(newInput.toLowerCase())
      );
      setImagesList(newImagesList);
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
               <ImageModalView
                  shownImage={shownImage}
                  imagesList={imagesList}
                  handleThumbnailClick={handleThumbnailClick}
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

// The contents of the modal when you click on the image (includes the full size image and the secondary thumbnail list view)
function ImageModalView({ shownImage, imagesList, handleThumbnailClick }) {
   const thumbnailCarouselRef = useRef(null);
   const selectedThumbnail = useRef(null);
   const [thumbnailCarouselCanScroll, setThumbnailCarouselCanScroll] = useState(
      true
   );

   const scrollThumbnailCarousel = (direction) => {
      if (direction === "right") {
         thumbnailCarouselRef.current.scrollLeft +=
            thumbnailCarouselRef.current.clientWidth - 10;
      } else {
         thumbnailCarouselRef.current.scrollLeft -=
            thumbnailCarouselRef.current.clientWidth - 10;
      }
   };

   useEffect(() => {
      if (selectedThumbnail.current) {
         selectedThumbnail.current.scrollIntoView({ inline: "center" });
      }

      setThumbnailCarouselCanScroll(
         thumbnailCarouselRef.current
            ? thumbnailCarouselRef.current.scrollWidth >
                 thumbnailCarouselRef.current.clientWidth
            : true
      );
   }, [setThumbnailCarouselCanScroll]);

   const scrollArrowClasses = thumbnailCarouselCanScroll
      ? `material-icons ${styles.ScrollArrow}`
      : `material-icons ${styles.DisabledScrollArrow}`;

   return (
      <div>
         <FullsizeImage
            src={shownImage.fullsizeSrc}
            displayName={shownImage.fullsizeName}
         />
         <div className={styles.ModalThumbnailViewContainer}>
            <div>
               <i
                  onClick={() => scrollThumbnailCarousel("left")}
                  className={scrollArrowClasses}
               >
                  arrow_back_ios
               </i>
            </div>
            <div
               className={styles.ModalThumbnailView}
               ref={thumbnailCarouselRef}
            >
               {imagesList.map((image, i) => {
                  const selected = image.displayName === shownImage.displayName;
                  return (
                     <Thumbnail
                        key={i}
                        src={image.thumbnailSrc}
                        displayName={imagesList.displayName}
                        onClick={(e) => handleThumbnailClick(e, image)}
                        selected={selected}
                     >
                        {selected && <div ref={selectedThumbnail}> </div>}
                     </Thumbnail>
                  );
               })}
            </div>
            <div>
               <i
                  onClick={() => scrollThumbnailCarousel("right")}
                  className={scrollArrowClasses}
               >
                  arrow_forward_ios
               </i>
            </div>
         </div>
      </div>
   );
}

// The full size window of the image
function FullsizeImage({ src, displayName }) {
   const [loading, setLoading] = useState(true);
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
         {loading && <ClipLoader size={100} color={"#ea1fa9"} />}
         <div className={`${styles.FullsizeImageInner} ${bgColor}`}>
            <img src={src} alt={displayName} onLoad={() => setLoading(false)} />
         </div>
      </div>
   );
}

// The image thumbnail
function Thumbnail({ src, onClick, displayName, selected, children }) {
   return (
      <div>
         <div
            className={
               selected
                  ? `${styles.ThumbnailSelected} ${styles.Thumbnail}`
                  : `${styles.Thumbnail}`
            }
         >
            <img src={src} onClick={onClick} alt={`${displayName} Thumbnail`} />
         </div>
         {children}
      </div>
   );
}

export default Gallery;
