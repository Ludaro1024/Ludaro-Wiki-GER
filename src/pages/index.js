import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useTranslation } from '@docusaurus/Translate'; // Import useTranslation
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const siteConfig = useDocusaurusContext();
  const  t  = useTranslation(); // Initialize translation hook

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{t('homepage.title')}</h1>  // Translated title
        <p className="hero__subtitle">{t('homepage.subtitle')}</p>  // Translated subtitle
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {t('homepage.startLearningButton')}  // Translated button text
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
      title={`${t('homepage.metaTitle')}`}  // Translated meta title
      description={`${t('homepage.metaDescription')}`}>  // Translated description
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
