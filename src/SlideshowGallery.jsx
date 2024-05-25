import React, { useEffect, useState } from 'react';

const SlideshowGallery = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [images, setImages] = useState([]);
  const images1 = [
    {
      image_url:
        'https://img.freepik.com/free-photo/young-female-jacket-shorts-presenting-comparing-something-looking-confident-front-view_176474-37521.jpg?w=1800&t=st=1693037944~exp=1693038544~hmac=97e967909706f9b73b4b47d521acf54806f4b9b3efab6196bc8a69f07efff554',
      caption: 'Image 1',
      backgroundColor: 'red',
    },
    {
      image_url:
        'https://img.freepik.com/free-photo/girl-grey-shirt-showing-something-her-hand_144627-51099.jpg?t=st=1693037931~exp=1693038531~hmac=63713e5a5cf2d23f53ca82b9996ad224ac6e92d0275a53b6debbe6523d7df020',
      caption: 'Image 2',
      backgroundColor: 'black',
    },
    {
      image_url:
        'https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6',
      caption: 'Image 3',
      backgroundColor: 'green',
    },
    {
      image_url:
        'https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d',
      caption: 'Image 4',
    },
    {
      image_url:
        'https://img.freepik.com/free-photo/young-lady-shirt-jacket-making-scales-gesture-looking-cheerful-front-view_176474-85195.jpg?t=st=1693037931~exp=1693038531~hmac=2f83b6689538e4056912c96f448163e9ef10998f48f671b7e50279f81611fbe6',
      caption: 'Image 5',
    },
    {
      image_url:
        'https://img.freepik.com/free-photo/girl-wide-opening-hands-giving-explanation-high-quality-photo_144627-60466.jpg?w=1800&t=st=1693038021~exp=1693038621~hmac=d4520cd86b2aea3e5dda765ede05bb53d70e18a574756d0f41a6806fe325d26d',
      caption: 'Image 6',
    },
  ];

  const fetchApi = (url) => {
    fetch(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        setImages(resp);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  // const URL = 'https://picsum.photos/v2/list';
  const URL = 'https://jsonplaceholder.typicode.com/photos';
  // useEffect(() => {
  //   fetchApi(URL);
  // }, []);

  const handlePrev = () => {
    setCurrentImgIndex((prevInedx) =>
      prevInedx === 0 ? images1.length - 1 : prevInedx - 1
    );
  };
  const handleNext = () => {
    setCurrentImgIndex((prevInedx) =>
      prevInedx === images1.length - 1 ? 0 : prevInedx + 1
    );
  };

  const handleImgClick = (index) => {
    setCurrentImgIndex(index);
  };

  const styles = {
    container: {
      textAlign: 'center',
    },
    canvas: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mainImg: {
      width: '80%',
      height: '70vh',
      objectFit: 'cover',
    },
    navButton: {
      backgroundColor: 'green',
      cursor: 'pointer',
    },
    thumbnailCont: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      flexWrap: 'wrap',
    },
    thumbnail: {
      width: '20%',
      height: 'auto',
      cursor: 'pointer',
      objecyFit: 'cover',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.canvas}>
        <button onClick={handlePrev} style={styles.navButton}>
          (
        </button>
        <img
          style={{
            ...styles.mainImg,
            backgroundColor: `${images1[currentImgIndex].backgroundColor}`,
          }}
          src={images1[currentImgIndex].image_url}
          alt={`Slide ${currentImgIndex}`}
        ></img>
        <button onClick={handleNext} style={styles.navButton}>
          )
        </button>
      </div>

      <div style={styles.thumbnailCont}>
        {images1.map((img, index) => (
          <img
            key={index}
            onClick={() => handleImgClick(index)}
            style={{
              ...styles.thumbnail,
              border:
                currentImgIndex === index
                  ? '2px solid #black'
                  : '2px solid transparent',
            }}
            src={img.image_url}
            alt={`img ${index}`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default SlideshowGallery;
