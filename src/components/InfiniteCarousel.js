import { useState } from "react";
import { ImageData } from "./assets/data";
import { motion } from "framer-motion";
import './styles/infinitecarousel.css';

const InfiniteCarousel = () => {
  const [rotateY, setRotateY] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  const selectItem = (index) => {
    if (
      Math.abs(index - selectedItem) === 1 ||
      index - selectedItem === ImageData.length - 1 ||
      selectedItem - index === ImageData.length - 1
    ) {
      if (index === selectedItem + 1) {
        setRotateY(rotateY + 40);
      } else if (index === selectedItem - 1) {
        setRotateY(rotateY - 40);
      } else if (index - selectedItem === ImageData.length - 1) {
        setRotateY(rotateY - 40);
      } else {
        setRotateY(rotateY + 40);
      }
      setSelectedItem(index);
    }
  };

  const getOpacity = (index, selectedItem) => {
    if (index === selectedItem) {
      return 1;
    }
    if (selectedItem === 8) {
      if (index === 7 || index === 0) {
        return 0.9;
      }
      return 0.4;
    }
    if (selectedItem === 0) {
      if (index === 8 || index === 1) {
        return 0.9;
      }
      return 0.4;
    }
    if (index === selectedItem + 1 || index === selectedItem - 1) {
      return 0.9;
    }
    return 0.4;
  };

  return (

    <motion.div

      id="carousel"
      style={{
        transformStyle: "preserve-3d",
        width: window.innerWidth * 0.55,
        height: window.innerWidth * 0.35,
        position: "absolute",
        color: "white",
      }}
      animate={{
        transform: `translateZ(-${window.innerWidth * 0.8
          }px) rotateZ(-3deg) rotateY(${rotateY}deg)`,
      }}
    >

      {ImageData.map((image, index) => {
        const isSelected = index === selectedItem;
        return (
          <motion.div
            style={{
              userSelect: 'none',
              position: "absolute",
              width: window.innerWidth * 0.55,
              height: window.innerWidth * 0.35,
              cursor: "pointer",
              padding: 20,
              transform: `rotateY(${index * -40}deg) translateZ(${window.innerWidth * 0.8
                }px)`,
            }}
            animate={{
              opacity: getOpacity(index, selectedItem),
            }}
            transition={{ type: "spring", damping: 40, stiffness: 100 }}
            onClick={() => selectItem(index)}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                zIndex: 50,
              }}
            >
              <motion.div
                animate={{
                  y: isSelected ? -100 : -40,
                  opacity: isSelected ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  stiffness: 200,
                  damping: 10,
                  type: "spring",
                }}
                className="game-title"
              >
                {image.title}
              </motion.div>
              <motion.div
                animate={{
                  y: isSelected ? -70 : -20,
                  opacity: isSelected ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  stiffness: 200,
                  damping: 10,
                  type: "spring",
                }}
                className="game-desc"
              >
                {image.director}
              </motion.div>
              <motion.div
                animate={{
                  y: isSelected ? -46 : 0,
                  opacity: isSelected ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  stiffness: 200,
                  damping: 10,
                  type: "spring",
                }}
                className="game-desc"
              >
                {image.country}
              </motion.div>
            </div>
            <img
              width={"100%"}
              height={"100%"}
              style={{
                position: "absolute",
                objectFit: "cover",
                borderRadius: 16,
                top: 0,
              }}
              src={image.src}
              alt=""
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default InfiniteCarousel;
