import React from 'react';
import Carousel from './Carousel';
import HomeTasks from './HomeTasks';
import ButtonGroup from './ButtonGroup';
import Taskers from './Taskers';
import '../../css/home/main.css';

const Main = props => {
    return (
        <main>
          <Carousel />
          <ButtonGroup />
          <HomeTasks />
          <Taskers />
        </main>
    )
}

export default Main;