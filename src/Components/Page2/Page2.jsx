import styles from "./Page2.module.css";
import { FaQuestion } from "react-icons/fa";
import { FaRubleSign } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import React, { useState } from "react";
import Rocket from "../Rocket/Rocket";

const Page2 = () => {
  const [count, setCount] = useState(1);
  const [money, setMoney] = useState(1.1);

  return (
    <div className={styles.page_2}>
      <div className={styles.div_game}>
        <div className={styles.div_win_x}>
          <div className={styles.div_X}>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
            <p className={styles.p_game_x}>2.21x</p>
          </div>

          <div className={styles.div_question}>
            <i className={styles.question_mark}>
              <FaQuestion />
            </i>
          </div>
        </div>
        <Rocket />
      </div>

      <div className={styles.div_buttons}>
        <div className={styles.div_money}>
          <div className={styles.div_plusminus}>
            <p className={styles.p_minus} onClick={() => setCount(count - 1)}>
              -
            </p>
            <div className={styles.div_span}>
              <span className={styles.span}>
                <FaRubleSign />
              </span>{" "}
              {count}
            </div>
            <p className={styles.p_plus} onClick={() => setCount(count + 1)}>
              +
            </p>
          </div>

          <div className={styles.div_money_save}>
            <p className={styles.p_save} onClick={() => setCount(count + 10)}>
              +10
            </p>
            <p className={styles.p_save} onClick={() => setCount(count + 50)}>
              +50
            </p>
            <p className={styles.p_save} onClick={() => setCount(count + 100)}>
              +100
            </p>
            <p className={styles.p_save} onClick={() => setCount(count + 200)}>
              +200
            </p>
            <p className={styles.p_max}>Max</p>
          </div>
        </div>

        <div className={styles.big_butoon}>
          <button className={styles.button}>ПОСТАВИТЬ</button>
        </div>

        <div className={styles.div_money_x}>
          <div className={styles.x_money}>
            <p
              className={styles.p_minus}
              onClick={() => setMoney(+(money - 0.1).toFixed(2))}
            >
              -
            </p>
            <div className={styles.div_span}> x {money} </div>
            <p
              className={styles.p_plus}
              onClick={() => setMoney(+(money + 0.1).toFixed(2))}
            >
              +
            </p>
          </div>

          <div className={styles.div_click}>
            <input className={styles.input} type="checkbox" id="switch" />
            <label className={styles.label} for="switch"></label>
            <p className={styles.p_butt}>Автостоп</p>
            <p className={styles.BsQuestionCircle}>
              <BsQuestionCircle />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
