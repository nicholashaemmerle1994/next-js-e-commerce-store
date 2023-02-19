import styles from './layout.module.scss';

export default function HomePage() {
  return (
    <div className={styles.div}>
      <div className={styles.backgroundBlur} />
      <div className={styles.centeredText}>
        <h1>About us</h1>
        <p>
          To provide people with the best Italian coffee was the mission that
          started it all. <br />
          It was our goal to bring the amazing flavors and variety of Italian
          coffee to people's homes, <br />
          so they could enjoy it as much as we do. With years of tasting
          different coffees, we knew <br />
          that our passion was italian roasts, and we wanted to share the ones
          we loved the most.
        </p>
      </div>
    </div>
  );
}
