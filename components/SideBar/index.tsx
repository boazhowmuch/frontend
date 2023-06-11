import Link from "next/link";
import styles from "./styles.module.scss";
import { Logo, MoneyGraphIcon } from "@images/index";

const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <Link href="/" style={{ textDecoration: "none" }}>
      <div className={styles.logoBox}>
        <Logo width={35} height={35} />
        <p className={styles.serivceName}>How-much</p>
      </div>
      </Link>

      <div className={styles.menuBar}>
        <Link href="/prices" style={{ textDecoration: "none" }}>
          <button className={styles.menuBox}>
            <MoneyGraphIcon
              className={styles.menuIcon}
              width={21}
              height={21}
            />
            시세 조회
          </button>
        </Link>
        <Link href="/prices" style={{ textDecoration: "none" }}>
          <button className={styles.menuBox}>
            <MoneyGraphIcon
              className={styles.menuIcon}
              width={21}
              height={21}
            />
            시세 조회
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
