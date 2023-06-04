import styles from './styles.module.scss';

interface ButtonProps {
	name: string;
};

const Button = (props :ButtonProps) => {
	return (
		<button className={styles.button}>{props.name}</button>
	)
};

export default Button;