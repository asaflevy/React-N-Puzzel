import React, {Component} from 'react'
import Helper from './utils/Helper'



export default class Board extends Component {
  constructor(props) {
    super(props);
    this.dimension = 3;
    this.helper = new Helper(this.dimension);

    this.state = {
      positions: this.helper.positions,
      shuffledArray: this.helper.shuffledArray
    }
  }
  updatePosition(index) {
    let {shuffledArray} = this.state;
    let emptyIndex = shuffledArray.indexOf(0);
    let targetIndex = shuffledArray.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);
    if (dif === 1 || dif === this.dimension) {
      shuffledArray[emptyIndex] = index;
      shuffledArray[targetIndex] = 0;
      this.setState({shuffledArray});
      let winTheGame  = this.helper.checkForWin(shuffledArray);
      if(winTheGame){
        alert('You Just won');
      }
    }
  }
  render() {
    let style = {
      width: this.helper.dimension * 80 + 10,
      height: this.helper.dimension * 80 + 10
    }
    return (<div className="game" style={style}>
      {this.state.shuffledArray.map((i, key)=> {
        let cellClass = i ? "cell":'empty cell';
        let [x,y] = this.state.positions[this.state.shuffledArray.indexOf(i)];
        return <div className={cellClass}
                    onClick={this.updatePosition.bind(this, i)}
                    style={{transform: `translate3d(${x}px,${y}px,0) scale(1.1)`}}>{i}</div>

      })}
    </div>)
  }
}