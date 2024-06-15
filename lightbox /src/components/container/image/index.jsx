import PropTypes from 'prop-types';

const Image = ({image})=>{
    return (
       <img  src={image.image_url} alt={image.caption} />
    );
}

Image.propTypes={
    image:PropTypes.object
}

export default Image;