import React from 'react';
import { Slider, Progress, Button } from 'antd';
import music from '../assets/media/timer-end.mp3';

export default class Countdown extends React.Component {
  state = {
    seconds: 0,
    active: false,
    allTime: 0,
  }

  secondsToBeautifulTime = () => {
    const { seconds } = this.state;
    const minute = Math.floor(seconds / 60);
    return {
      minute: minute < 10 ? `0${minute}` : minute,
      second: seconds % 60 < 10 ? `0${seconds - minute * 60}` : seconds - minute * 60,
    };
  }

  handleSliderChange = (e) => {
    this.setState({
      seconds: e,
    });
  }

  handleSecondsChange = (e) => {
    const { seconds } = this.state;
    const prevTime = seconds;
    this.setState({ seconds: Number(e.target.value) + (prevTime - (prevTime % 60)) });
  }

  handleMinutesChange = (e) => {
    const { seconds } = this.state;
    const prevTime = seconds % 60;
    this.setState({ seconds: prevTime + Number(e.target.value) * 60 });
  }

  run = () => {
    const {
      seconds, active,
    } = this.state;
    if (seconds === 1) {
      clearInterval(this.timerID);
      this.setState({ seconds: seconds - 1, active: !active });
      this.soundPlay();
    } else {
      this.setState({ seconds: seconds - 1 });
    }
  }

  handleStartStop = () => {
    const {
      seconds, active, allTime,
    } = this.state;
    if (allTime === 0) {
      this.setState({
        active: !active,
        allTime: Number(seconds),
      });
    } else {
      this.setState({ active: !active });
    }
    if (!active) {
      this.timerID = setInterval(() => this.run(), 1000);
    } else {
      clearInterval(this.timerID);
    }
  }

  handleDrop = () => {
    clearInterval(this.timerID);
    this.setState({
      active: 0,
      seconds: 0,
      allTime: 0,
    });
  }

  soundPlay = () => {
    const audio = new Audio(music);
    audio.play();
  }

  render() {
    const {
      seconds, active, allTime,
    } = this.state;
    const currentValue = (Number(seconds)) / allTime;
    const progress = Math.round(100 - currentValue * 100);
    const { minute, second } = this.secondsToBeautifulTime();

    return (
      <div>
        <Slider
          max={3600}
          min={0}
          value={Number(seconds)}
          onChange={(e) => this.handleSliderChange(e)}
          disabled={active}
          step={15}
        />
        <input
          type="number"
          min="0"
          max="720"
          value={minute}
          onChange={this.handleMinutesChange}
          className="btn"
          placeholder="минуты"
          disabled={active}
        />
        <input
          type="number"
          min="0"
          max="59"
          value={second}
          onChange={this.handleSecondsChange}
          className="btn"
          placeholder="секунды"
          disabled={active}
        />
        <Button
          className="btn"
          onClick={this.handleStartStop}
          disabled={seconds === 0}
        >
          {active ? 'Пауза' : 'Старт'}
        </Button>
        <Button
          className="btn"
          onClick={this.handleDrop}
          disabled={!allTime}
        >
          Сброс
        </Button>
        <div className="clock">
          {minute}
          {' '}
          :
          {second}
        </div>
        <Progress
          type="circle"
          percent={progress}
        />
      </div>
    );
  }
}
