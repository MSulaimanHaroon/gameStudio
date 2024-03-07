import  InfiniteCarousel  from "./InfiniteCarousel";
import Heading from'./heading';
import {  useRef } from "react";
import './styles/Game.css'

export default function Games() {

  const ref = useRef(null);


  return (
    <section id="product" className="game-main"
       ref={ref}>     
        <Heading heading="Our Products" textColor="white" lineColor="white"/>
      <div
        id="scene"
      >
      
        <InfiniteCarousel />
      </div>
    </section>
  );
}
