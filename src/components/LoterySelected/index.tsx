import React, { useEffect, useState } from "react";
import { IContests } from "../../main/interfaces";
import { useLotteriesContext } from "../hooks/useLotteriesContext";
import styles from "./LoterySelected.module.css";

interface IProps {
  contests: IContests[] | null;
}

const LoterySelected: React.FC<IProps> = ({
  contests
}) => {
  
  const [contest, setContest] = useState<IContests>();
  const { nameContest, numberContestSelected, contestDate } = useLotteriesContext();
  
  useEffect(() => {
   if(contests) setContest(contests[numberContestSelected]);
  }, [contests, numberContestSelected]);


  return contests && (
    <>
      <div className={styles['lotteries-name']}>
        <figure>
          <img width={60} src={require("../../img/mega-sena.png")} alt="loterias" />
        </figure>
        <p>{nameContest}</p>
      </div>

      <div className={styles['contest-number']}>
        <span>concurso nº {contest?.concursoId}</span>
        <span>{contestDate}</span>
      </div>
    </>
  )
}

export default LoterySelected;