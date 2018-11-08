import React from 'react';
import style from './insideblock.scss';
import Footer from '../Footer/Footer';
import CustomizedSlider from '../Sliders/CustomizedSlider';

export default class InsideBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      montoMinValue: 5000,
      montoMaxValue: 50000,
      montoValue: 5000,
      montoSliderName: 'MONTO TOTAL',
      montoStepValue: 500,

      plazoMinValue: 3,
      plazoMaxValue: 24,
      plazoValue: 3,
      plazoSliderName: 'PLAZO',
      plazoStepValue: 1,

      cuotaValue: 0,
    };
    this.getMontoValue = this.getMontoValue.bind(this);
    this.getPlazoValue = this.getPlazoValue.bind(this);
  }

  getMontoValue(montoValue) {
    this.setState({ montoValue }, () => this.updateCuotaValue());
  }

  getPlazoValue(plazoValue) {
    this.setState({ plazoValue }, () => this.updateCuotaValue());
  }

  updateCuotaValue() {
    this.setState({
      cuotaValue: Math.round(this.state.montoValue / this.state.plazoValue),
    });
  }

  render() {
    return (
      <div className={style.insideBlock}>
        <div className={style.title}>Simulá tu crédito</div>

        <div className={style.montoTotalSlider}>
          <CustomizedSlider
            value={this.state.montoValue}
            minValue={this.state.montoMinValue}
            maxValue={this.state.montoMaxValue}
            stepValue={this.state.montoStepValue}
            sliderName={this.state.montoSliderName}
            getValue={this.getMontoValue}
          />
        </div>

        <div className={style.plazoTotalSlider}>
          <CustomizedSlider
            value={this.state.plazoValue}
            minValue={this.state.plazoMinValue}
            maxValue={this.state.plazoMaxValue}
            stepValue={this.state.plazoStepValue}
            sliderName={this.state.plazoSliderName}
            getValue={this.getPlazoValue}
          />
        </div>

        <div className={style.footer}>
          <Footer cuotaValue={this.state.cuotaValue} />
        </div>
      </div>
    );
  }
}
