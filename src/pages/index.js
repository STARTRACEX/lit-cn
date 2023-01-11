import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.title+ " hero__title"}>
          <span>Lit-cn</span>.<span>startrace</span>.<span>games</span>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.start}>
          <Link
            to="/beforestart">
            开始
          </Link>
        </div>
        <div className={styles.eng}>
          <Link href='//lit.dev/docs/' >
            英文文档
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Hi there'
      description={siteConfig}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
