import Image from "next/image";
import styles from "./styles.module.scss";
import { Logo, MoneyGraphIcon } from "@images/index";
const SideBar = () => {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.logoBox}>
        <Image src={Logo} alt="logo" width={35} />
				<p className={styles.serivceName}>How-much</p>
      </div>

			<div className={styles.menuBar}>
				<div className={styles.menuBox}>
					<Image className={styles.menuIcon} src={MoneyGraphIcon} alt="" width={16}/>
          <p>시세 조회</p>
				</div>
        <div className={styles.menuBox}>
					<Image className={styles.menuIcon} src={MoneyGraphIcon} alt="" width={16}/>
          <p>시세 조회</p>
				</div>
			</div>
    </div>
  );
};

export default SideBar;
