import React from 'react';
import { Button } from 'antd';

export default class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      msTime: 0,
      active: false,
    };
  }

  run = () => {
    const { msTime } = this.state;
    this.setState({ msTime: msTime + 1 });
  }

  handleStart = () => {
    const { active } = this.state;
    this.setState({ active: !active });
    if (!active) {
      this.timerID = setInterval(() => this.run(), 10);
    } else {
      clearInterval(this.timerID);
    }
  }

  handleDrop = () => {
    clearInterval(this.timerID);
    this.setState({
      msTime: 0,
      active: false,
    });
  }

  timeToClock = () => {
    const {
      msTime,
    } = this.state;
    const sTime = Math.floor(msTime / 100);
    const mTime = Math.floor(sTime / 60);
    const hTime = Math.floor(mTime / 60);

    return {
      msTime: msTime % 100,
      sTime: sTime - (mTime * 60),
      mTime: mTime - (hTime * 60),
      hTime,
    };
  }

  render() {
    const {
      msTime, sTime, mTime, hTime,
    } = this.timeToClock();
    const { active } = this.state;

    return (
      <div>
        <Button className="btn" onClick={this.handleStart}>{active ? 'Пауза' : 'Запустить'}</Button>
        <Button className="btn" onClick={this.handleDrop}>Сброс</Button>
        <div className="clock">
          {hTime < 10 ? `0${hTime}` : `${hTime}`}
          {' '}
          :
          {mTime < 10 ? ` 0${mTime}` : ` ${mTime}`}
          {' '}
          :
          {sTime < 10 ? ` 0${sTime}` : ` ${sTime}`}
          {' '}
          :
          {msTime < 10 ? ` 0${msTime}` : ` ${msTime}`}
        </div>
      </div>
    );
  }
}
