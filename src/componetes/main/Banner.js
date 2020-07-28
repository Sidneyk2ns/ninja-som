import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Banner extends React.Component{
	

  render() {
 const images = [
  {
    original: '/img/banner-1.png',
  },
  {
    original: '/img/banner-2.png',
  },
   {
    original: '/img/banner-2.png',
 
  },  

];
    return <ImageGallery items={images} showThumbnails={false} showPlayButton={false}showBullets={true}showFullscreenButton={false} />;
  }
}