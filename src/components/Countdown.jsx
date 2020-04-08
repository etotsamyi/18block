import React from 'react';
import { Slider, Progress, Button } from 'antd';
import music from '../assets/media/hru.mp3';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      minutes: 0,
      seconds: 0,
      active: false,
      allTime: 0,
      progress: 0,
    });
  }

  handleSliderChange = (e) => {
    this.setState({
      seconds: e % 60,
      minutes: e >= 60 ? Math.floor(e / 60) : 0,
    });
  }

  handleSecondsChange = () => (e) => {
    this.setState({ seconds: e.target.value });
  }

  handleMinutesChange = () => (e) => {
    this.setState({ minutes: e.target.value });
  }

  run = () => {
    const {
      seconds, minutes, active, allTime,
    } = this.state;

    if (minutes === 0 && seconds === 1 && active) {
      clearInterval(this.timerID);
      this.setState({ active: !active });
      this.soundPlay();
    }
    if (seconds === 0) {
      this.setState({ seconds: 59, minutes: minutes - 1 });
    } else {
      this.setState({ seconds: seconds - 1 });
    }
    const currentValue = (Number(minutes) * 60 + Number(seconds)) / allTime;
    this.setState({ progress: Math.round(100 - currentValue * 100) });
  }

  handleStartStop = () => {
    const {
      seconds, minutes, active, allTime,
    } = this.state;
    if (allTime === 0) {
      this.setState({
        active: !active,
        allTime: Number(minutes) * 60 + Number(seconds),
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
      minutes: 0,
      progress: 0,
      allTime: 0,
    });
  }

  soundPlay = () => {
    const audio = new Audio(music);
    audio.play();
  }

  render() {
    const {
      minutes, seconds, active, progress, allTime,
    } = this.state;

    return (
      <div>
        <Slider
          max={3600}
          min={0}
          value={Number(minutes) * 60 + Number(seconds)}
          onChange={(e) => this.handleSliderChange(e)}
          disabled={active}
          step={15}
        />
        <input
          type="number"
          min="0"
          max="720"
          value={minutes}
          onChange={this.handleMinutesChange()}
          className="btn"
          placeholder="минуты"
          disabled={active}
        />
        <input
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={this.handleSecondsChange()}
          className="btn"
          placeholder="секунды"
          disabled={active}
        />
        <Button
          className="btn"
          onClick={this.handleStartStop}
          disabled={minutes === 0 && seconds === 0}
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
          {minutes < 10 ? ` 0${minutes}` : ` ${minutes}`}
          {' '}
          :
          {seconds < 10 ? ` 0${seconds}` : ` ${seconds}`}
        </div>
        <Progress
          type="circle"
          percent={progress}
        />
      </div>
    );
  }
}