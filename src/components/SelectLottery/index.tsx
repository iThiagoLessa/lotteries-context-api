import React from "react";
import { lotteries } from "../../main/interfaces";
import { useLotteriesContext } from "../hooks/useLotteriesContext";
import styles from "./SelectLottery.module.css";



interface IProps {
  lotteries: lotteries[] | null;
  isFetching: boolean;
}

const SelectLottery: React.FC<IProps> = ({
  lotteries,
  isFetching
}) => {

  const {addNameContest, addNumberContestSelected, numberContestSelected} = useLotteriesContext();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => { 
    const textvalue = e.target.selectedOptions[0].text;

    addNumberContestSelected(Number(e.target.value));
    if(textvalue) addNameContest(textvalue); 
  }

  return (
    <header className={styles['select-lotery']}>
      <select onChange={(e) => handleSelect(e)}>
        { isFetching ?
          (
            <option>Carregando..</option>
          ) :
          lotteries?.map(item => {
            return(
              <option key={item.id} defaultValue={numberContestSelected} value={item.id}>{item.nome}</option>
            )
          })
        }
      </select>
    </header>
  )
}

export default SelectLottery;