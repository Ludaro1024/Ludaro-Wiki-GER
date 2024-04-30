import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { t } from '@docusaurus/Translate'; // Correct import
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{t('homepage.title')}</h1>
        <p className="hero__subtitle">{t('homepage.subtitle')}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {t('homepage.startLearningButton')}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  

  return (
    <Layout
      title={t('homepage.metaTitle')}  // Use translated meta title
      description={t('homepage.metaDescription')}>  // Use translated description
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
