import { useState, useContext } from "react";
import { ImageContext } from "../../../App";
import Image from "../image";
import Modal from '../modal';

const Gallery = () => {
    const [modalOpen, setModalOpen] = useState(false);
  const [imageClicked, setImageClicked] = useState(null);
  const images = useContext(ImageContext);

  const handleImageClick=(image)=>{
    setImageClicked(image);
    setModalOpen(true)
  }

  const handlePrevClick=()=>{
    if(imageClicked===0) return;

    setImageClicked(prev => prev-1);
  }

  const handleNextClick=()=>{
    if(imageClicked===images.length-1) return;

    setImageClicked(prev=>prev+1);
  }

  return (
    <section className="slideshow__gallery">
      {images.map((image, index) => (
        <div className="galley__image" key={index} onClick={()=>handleImageClick(index)}>
          <Image image={image} />
        </div>
      ))}

      {imageClicked!==null && modalOpen &&  
      <Modal heading={'Lightbox'}  setOpen={setModalOpen}>
            <div className="lightbox__image">
                <Image image={images[imageClicked]} />
                <button onClick={handlePrevClick} className="galley__btn prev">{'<'}</button>
                <button onClick={handleNextClick} className="galley__btn next">{'>'}</button>
            </div>
        </Modal>}
    </section>
  );
};

export default Gallery;
