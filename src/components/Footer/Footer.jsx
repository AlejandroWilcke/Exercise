import React from 'react';
import style from './footer.scss';

export default props => (
  <div>
    <div>
      <div>
        <h2 className={style.cuotaFija}>
          CUOTA FIJA POR MES{' '}
          <span className={style.cuotaValue}>${props.cuotaValue}</span>
        </h2>
      </div>
      <button
        onClick={() => alert('Should advance to credit.')}
        className={`btn btn-success ${style.obtenerCreditoBtn}`}
      >
        OBTENÉ CRÉDITO
      </button>
      <button
        onClick={() => alert('Should advance to details')}
        className={`btn btn-primary ${style.verDetalleBtn}`}
      >
        VER DETALLE DE <br />
        CUOTAS
      </button>
    </div>
  </div>
);
