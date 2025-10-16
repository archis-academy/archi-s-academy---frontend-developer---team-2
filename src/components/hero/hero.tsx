import styles from "./hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <p className={styles.hero__eyebrow}>Design / Build / Innovate</p>
        <h1 className={styles.hero__title}>
          Elevating spaces that blend beauty and purpose.
        </h1>
        <p className={styles.hero__description}>
          Archis partners with forward-thinking teams to deliver architecture
          and interiors that feel timeless, sustainable, and human-centered.
          Let&apos;s co-create environments where people thrive.
        </p>
        <div className={styles.hero__actions}>
          <a className={styles.hero__primaryCta} href="#projects">
            View projects
          </a>
          <a className={styles.hero__secondaryCta} href="#contact">
            Book a consultation
          </a>
        </div>
      </div>

      <div className={styles.hero__visual} aria-hidden="true">
        <div className={styles.hero__insight}>
          <span className={styles.hero__insightValue}>120+</span>
          <span className={styles.hero__insightLabel}>Completed spaces</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
