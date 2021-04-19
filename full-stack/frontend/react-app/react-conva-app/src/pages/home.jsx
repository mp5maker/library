import React from "react";
import { Stage, Layer, Star, Text, Rect, Circle, Image } from "react-konva";

const useImage = (src) => {
  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    const _image = new window.Image();
    _image.onload = () => setImage(_image);
    _image.onerror = () => setImage("");
    _image.src = src;
  }, [src]);

  return image;
};

const Home = () => {
  const [isStarDragging, setIsStarDragging] = React.useState(false);
  const image = useImage("https://picsum.photos/200/300");

  const handleDragStart = (_event) => {
    setIsStarDragging(true);
  };

  const handleDragEnd = (_event) => {
    setIsStarDragging(false);
  };

  console.log(image);

  return image ? (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image image={image} x={0} y={window.innerHeight / 2} draggable />
        <Text text={"Try to drag the star"} />
        <Star
          key={1}
          id={1}
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}
          numPoints={5}
          innerRadius={20}
          outerRadius={50}
          fill={"#89b717"}
          opacity={0.8}
          draggable
          rotation={0}
          shadowColor={"black"}
          shadowBlur={10}
          shadowOpacity={0.6}
          shadowOffsetX={5}
          shadowOffsetY={5}
          scaleX={isStarDragging ? 1.2 : 1}
          scaleY={isStarDragging ? 1.2 : 1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        />
        <Rect
          width={50}
          height={50}
          x={window.innerWidth / 3}
          y={window.innerHeight / 3}
          fill="red"
          draggable
        />
        <Circle
          x={200}
          y={200}
          stroke="black"
          radius={50}
          draggable
          x={window.innerWidth / 2}
          y={window.innerHeight / 2}
        />
      </Layer>
    </Stage>
  ) : (
    <></>
  );
};

export default Home;
