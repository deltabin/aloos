import styles from "./cards.module.css";

export const HomeCards = () => {
  return (
    <section className="flex justify-between">
      <div className={styles.inf__block}>Возможности</div>
      <div className={styles.inf__block}>Почему мы?</div>
      <div className={styles.inf__block}>Чем занимаемся?</div>
      <div className={styles.inf__block}>Наша команда!</div>
    </section>
  );
};
