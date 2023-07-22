import Link from "next/link";
import styles from "./styles.module.scss";
import { Logo, MoneyGraphIcon } from "@images/index";

function Header() {
  return (
    <div className={styles.headerBox}>
        <div className={styles.logoBox}>
				<Link href="/" style={{ textDecoration: "none" }} className={styles.link}>		
          <Logo width={35} height={35} />
          <p className={styles.serivceName}>How-much</p>
					</Link>
        </div>
    </div>
  );
}

export default Header;
