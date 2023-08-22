import React from 'react';
import AreaComponent from './Areacomp';
import Piecomp from './piecom';
import BarComponent from './Barcomp';

function ChartsComponent() {
  return (
    <div className='container'>
      <h1 className='h3 mb-2 text-gray-800'>Charts</h1>
      <p className='mb-4'>
        RechartJs is a composable charting library built on React components
        that is used to generate the charts in this Project. The charts below have
        been customized - for further customization options, please visit the{' '}
        <a target='_blank' href='https://recharts.org/en-US'>
          official RechartJs documentation
        </a>
        .
      </p>

      <div className='row'>
        <div className='col-xl-8 col-lg-7'>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>Area Chart</h6>
            </div>
            <div className='card-body'>
              <div className='chart-area'>
                <AreaComponent></AreaComponent>
              </div>
              <hr />
              Styling for the area chart can be found in the{' '}
              <code>/js/demo/chart-area-demo.js</code> file.
            </div>
          </div>

          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>Bar Chart</h6>
            </div>
            <div className='card-body'>
              <div className='chart-bar'>
                <BarComponent> </BarComponent>
              </div>
              <hr />
              Styling for the bar chart can be found in the{' '}
              <code>/js/demo/chart-bar-demo.js</code> file.
            </div>
          </div>
        </div>

        <div className='col-xl-4 col-lg-5'>
          <div className='card shadow mb-4'>
            <div className='card-header py-3'>
              <h6 className='m-0 font-weight-bold text-primary'>Donut Chart</h6>
            </div>
            <div className='card-body'>
              <div className='chart-pie'>
                <Piecomp></Piecomp>
              </div>
              <hr />
              Styling for the donut chart can be found in the{' '}
              <code>/js/demo/chart-pie-demo.js</code> file.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartsComponent;
