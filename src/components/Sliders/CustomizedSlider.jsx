import React from 'react';
import Slider from 'rc-slider';
import style from './Sliders.scss';
import '!style-loader!css-loader!rc-slider/assets/index.css';

const sliderStyle = { width: '70%', marginLeft: '14%', marginTop: '3%' };

export default class CustomizedSlider extends React.Component {
  constructor({ value, minValue, maxValue, stepValue, sliderName, getValue }) {
    super();
    this.state = {
      value,
      minValue,
      maxValue,
      sliderName,
      stepValue,
      getValue,
    };
  }

  onSliderChange = value => {
    this.setState({ value });
    this.state.getValue(value);
  };

  render() {
    return (
      <div>
        <span className={style.montoTotalText}>{this.state.sliderName}</span>
        <input
          className={style.montoTotalValue}
          type="text"
          name="montoTotal"
          value={`$ ${this.state.value}`}
        />
        <div>
          <Slider
            min={this.state.minValue}
            max={this.state.maxValue}
            style={sliderStyle}
            value={this.state.value}
            onChange={this.onSliderChange}
            step={this.state.stepValue}
          />
        </div>
        <span className={style.minValueText}>${this.state.minValue}</span>
        <span className={style.maxValueText}>${this.state.maxValue}</span>
      </div>
    );
  }
}
