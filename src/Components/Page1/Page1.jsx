import styles from "./Page1.module.css";
import im from "../img/coin.399f8de.svg";
import { FaRubleSign, FaUser, FaRegDotCircle } from "react-icons/fa";

const Page1 = () => {
  return (
    <div className={styles.global_page}>
      <div className={styles.page_1}>
        <div className={styles.page1_header}>
          <div className={styles.header_1}>
            <i className={styles.i_icon}>
              {" "}
              <FaRegDotCircle />
            </i>
            <h4 className={styles.header1_h4}>456 игроков</h4>
          </div>
          <div className={styles.div_after}></div>
          <div className={styles.header_2}>
            <div className={styles.header_2_2}>
              <i className={styles.icon_i}>
                <FaRubleSign />
              </i>
              <h4 className={styles.header1_h4}>25525</h4>
            </div>
            <img src={im} alt="" />
          </div>
        </div>

        <div className={styles.page_user}>
          <div className={styles.user}>
            <h5 className={styles.user_h5}>ИГРОК И СТАВКА</h5>
          </div>
          <div className={styles.kesh}>
            <h5 className={styles.kesh_h5}>КЭФ</h5>
            <h5 className={styles.kesh_h5}>ВЫИГРЫШ</h5>
          </div>
        </div>

        <div className={styles.div_user}>
          <div className={styles.user1}>
            <div className={styles.user_profil}>
              <div className={styles.user_photo}>
                <i className={styles.photo}>
                  <FaUser />
                </i>
              </div>
              <div className={styles.user_name}>
                <h2 className={styles.user_h2}>Gevorg</h2>
                <p className={styles.user_money}>35135</p>
              </div>
            </div>
            <div className={styles.user_win}>
              <p className={styles.p_win_x}>2x</p>
              <p className={styles.p_win_money}>2000</p>
            </div>
          </div>

          <div className={styles.user1}>
            <div className={styles.user_profil}>
              <div className={styles.user_photo}>
                <i className={styles.photo}>
                  <FaUser />
                </i>
              </div>
              <div className={styles.user_name}>
                <h2 className={styles.user_h2}>Hayk</h2>
                <p className={styles.user_money}>35135</p>
              </div>
            </div>
            <div className={styles.user_win}>
              <p className={styles.p_win_x}>2x</p>
              <p className={styles.p_win_money}>2000</p>
            </div>
          </div>

          <div className={styles.user1}>
            <div className={styles.user_profil}>
              <div className={styles.user_photo}>
                <i className={styles.photo}>
                  <FaUser />
                </i>
              </div>
              <div className={styles.user_name}>
                <h2 className={styles.user_h2}>Paruyr</h2>
                <p className={styles.user_money}>35135</p>
              </div>
            </div>
            <div className={styles.user_win}>
              <p className={styles.p_win_x}>2x</p>
              <p className={styles.p_win_money}>2000</p>
            </div>
          </div>

          <div className={styles.user1}>
            <div className={styles.user_profil}>
              <div className={styles.user_photo}>
                <i className={styles.photo}>
                  <FaUser />
                </i>
              </div>
              <div className={styles.user_name}>
                <h2 className={styles.user_h2}>Angel</h2>
                <p className={styles.user_money}>35135</p>
              </div>
            </div>
            <div className={styles.user_win}>
              <p className={styles.p_win_x}>2x</p>
              <p className={styles.p_win_money}>2000</p>
            </div>
          </div>

          <div className={styles.user1}>
            <div className={styles.user_profil}>
              <div className={styles.user_photo}>
                <i className={styles.photo}>
                  <FaUser />
                </i>
              </div>
              <div className={styles.user_name}>
                <h2 className={styles.user_h2}>Arman</h2>
                <p className={styles.user_money}>35135</p>
              </div>
            </div>
            <div className={styles.user_win}>
              <p className={styles.p_win_x}>2x</p>
              <p className={styles.p_win_money}>2000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
