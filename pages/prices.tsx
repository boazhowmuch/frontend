import styles from "@styles/Prices.module.scss";
import SideBar from "components/SideBar";

const Prices = () => {
  return (
    <>
      <SideBar />
      <div className={styles.body}>
        <div className={styles.titleBox}>
          <h2 className={styles.pageTitle}>시세 조회</h2>
          <p className={styles.pageDescription}>날짜, 품목, 품종별로 양재동 화훼공판장 시세를 조회할 수 있습니다.</p>
        </div>
      </div>
    </>
  );
};

export default Prices;
