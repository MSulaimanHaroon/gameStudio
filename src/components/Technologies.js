import React from 'react';
import './styles/Technologies.css';
import Heading from './heading';
import Unreal from './assets/technologies/Unreal.png';
import AppBrain from './assets/technologies/App-Brain.png'
import AppAnnie from './assets/technologies/App-Annie.png'
import BuildBox from './assets/technologies/Build-Box.png'
import Cocos2dx from './assets/technologies/Cocos-2dx.png'
import Construct from './assets/technologies/Construct.png'
import Phaser from './assets/technologies/prg_gun_blk2.svg'
import SensorTower from './assets/technologies/Sensor-Tower.png'
import SplitMetrics from './assets/technologies/Split-Metrics.png'
import Unity from './assets/technologies/Unity.png'


const cardData = [
  {
    modelName: "Unreal",
    modelImage: Unreal,
  },
  {
    modelName: "App Brain",
    modelImage: AppBrain,
  },
  {
    modelName: "App Annie",
    modelImage: AppAnnie,
  },
  {
    modelName: "Build-Box",
    modelImage: BuildBox,
  },
  {
    modelName: "Cocos 2dx",
    modelImage: Cocos2dx,
  },
  {
    modelName: "Construct",
    modelImage: Construct,
  },
  {
    modelName: "Phaser",
    modelImage: Phaser,
  },
  {
    modelName: "SensorTower",
    modelImage: SensorTower,
  },
  {
    modelName: "SplitMetrics",
    modelImage: SplitMetrics,
  },
  {
    modelName: "Unity",
    modelImage: Unity,
  },
  // Add more objects like this for each card you want to display
];

const Technologies = () => {
  return (
    <section id='tech' className='tools'>
    <div className="void" id="void">
      <div className="crop">
        <ul id="card-list" style={{ '--count': 10 }}>
          {cardData.map((card, index) => (
            <li className='list' key={index}>
              <div className="card">
                <a href="/">
                <img className='model-img' src={card.modelImage} alt=''/>
                  <span className="model-name">{card.modelName}</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask">
        <div className='text-tech'>
          <Heading heading="Technologies" textColor="rgb(255, 0, 5)" lineColor="rgb(255, 0, 5)" />
          <p>We are passionate about unlocking our potential to the maximum on mobile application development services being offered worldwide.</p>
        </div>
      </div>
      <div className="center-circle"></div>
    </div>
    </section>
  );
};

export default Technologies;
