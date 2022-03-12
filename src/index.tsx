import React from 'react';
import ReactDOM from 'react-dom';
import { LotteriesContextProvider } from './components/hooks/useLotteriesContext';
import './index.css';
import Lotteries from './main';

ReactDOM.render(
    <LotteriesContextProvider>
      <Lotteries />
    </LotteriesContextProvider>,
  document.getElementById('root')
);
