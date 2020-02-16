import React from 'react';
import 'react-virtualized/styles.css';
import List from 'react-virtualized/dist/commonjs/List';
import '../../css/browse_tasks/task-list.css'

class InfiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    
    const items = [
      'Coca Cola',
      'Sprite',
      'Coors',
      'Yenda',
      'Mount Franklin',
      'Pump',
    ];
    
    let list = [];
    for (let i=0; i <= 1000; i++) {
      list.push(items[i % items.length] + ' - ' + i);
    }

    this.list = list;
  }

  rowRenderer = ({ index, isScrolling, key, style }) => {
    return (
      <div className='infinite-scroll-row' key={key} style={style}>
        {this.list[index]}
      </div>
    );
  };
  
  render() {
    return (
      <List className='infinite-scroll-list' width={350} height={800}
        rowCount={ this.list.length } rowHeight={100}
        rowRenderer={ this.rowRenderer }/>
    );
  }
}


export default InfiniteScroll;

