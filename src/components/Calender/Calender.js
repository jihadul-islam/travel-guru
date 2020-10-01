import React from 'react';
import CalImg from '../../icon/calender_icon.png'
class Calender extends React.Component {
  state={
    curTime : new Date().toLocaleString(),
  }
  render(){
    return (
      <div style={{marginLeft:'25px'}}>
       <img src={CalImg} alt=""/> {this.state.curTime}
      </div>
    );
  }
}

export default  Calender;
