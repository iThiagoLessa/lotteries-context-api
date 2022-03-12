import React, { useEffect, useState } from 'react';
import styles from './Lotteries.module.css';
import SelectLottery from "../components/SelectLottery";
import LoterySelected from "../components/LoterySelected";
import NumbersResult from "../components/Results";

import { useFetch } from "../components/hooks/useFetch";
import { IContests, lotteries } from './interfaces';
import { useLotteriesContext } from '../components/hooks/useLotteriesContext';

const Lotteries: React.FC = () => {

  const { data: lotteries, isFetching: loadingLotteries } = useFetch<lotteries[] | null>("https://brainn-api-loterias.herokuapp.com/api/v1/loterias");
  const { data: contests } = useFetch<IContests[] | null>("https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos");
  
  const [contest, setContest] = useState<IContests | null>(null);

  const { addNameContest, nameContest, numberContestSelected } = useLotteriesContext();

  const normalizeString = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
  }

  useEffect(() => {
    if(lotteries) addNameContest(normalizeString(lotteries[0].nome));
  }, [lotteries, addNameContest]);

  useEffect(() => {
    if(contests) {
      setContest(contests[numberContestSelected]);
    }
  }, [contests, numberContestSelected]);

  return (
    <div className={`${styles.app} ${styles[nameContest.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')]}`}>

      <div className={styles['functional-content']}>
        <SelectLottery lotteries={lotteries} isFetching={loadingLotteries} />
        <LoterySelected contests={contests} />
      </div>

      <div className={styles['result-content']}>
        <NumbersResult contest={contest} />
      </div>
      
    </div>
  );
}

export default Lotteries;
