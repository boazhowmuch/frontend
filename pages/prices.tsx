import styles from "@styles/Prices.module.scss";
import Button from "components/Button";
import Dropdown from "components/Dropdown";
import SideBar from "components/SideBar";
import StickyHeadTable from "components/Table";

const Prices = () => {
  return (
    <>
      <SideBar />
      <div className={styles.body}>
        <div className={styles.titleBox}>
          <h2 className={styles.pageTitle}>시세 조회</h2>
          <p className={styles.pageDescription}>
            날짜, 품목, 품종별로 양재동 화훼공판장 시세를 조회할 수 있습니다.
          </p>
        </div>
        <p className={styles.date}>2023-05-23 11:25:49 업데이트</p>
        <div className={styles.optionBar}>
          <div className={styles.period}>
            <div className={styles.optionName}>기간</div>
            <Button name="1주일" />
            <Button name="1개월" />
            <Button name="3개월" />
            <Button name="1년" />
          </div>
          <div className={styles.product}>
            <div className={styles.optionName}>품목</div>
            <Dropdown/>
          </div>
          <div className={styles.species}>
            <div className={styles.optionName}>품종</div>
            <Dropdown/>
          </div>
        </div>
       <div className={styles.table}>
        <h3 className={styles.tableName}>품종별 정보</h3>
        <StickyHeadTable/>
       </div>
       <div className={styles.table}>
        <h3 className={styles.tableName}>등급별 정보</h3>
        <StickyHeadTable/>
       </div>
      </div>
    </>
  );
};

export default Prices;
