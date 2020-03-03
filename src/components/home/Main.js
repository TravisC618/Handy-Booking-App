import React from 'react';
import Carousel from './Carousel';
import HomePoster from './HomePoster';
import HomeTasks from './HomeTasks';
import ButtonGroup from './ButtonGroup';
import Taskers from './Taskers';
import Things from './Things';
import '../../css/home/main.css';

const Main = props => {
    return (
        <main>
          <HomePoster />
          <ButtonGroup />
          <HomeTasks />
          <Taskers />
          <Things />
        </main>
    )
}

export default Main;