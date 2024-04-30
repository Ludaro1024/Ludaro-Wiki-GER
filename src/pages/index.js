import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useTranslation } from '@docusaurus/Translate'; // Import the translation hook
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{t('homepage.title')}</h1>  // Use translation for title
        <p className="hero__subtitle">{t('homepage.subtitle')}</p>  // Use translation for subtitle
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {t('homepage.startLearningButton')}  // Use translation for button text
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { t } = useTranslation(); // Initialize it here too if needed for layout

  return (
    <Layout
      title={t('homepage.metaTitle')}  // Use translation for page title
      description={t('homepage.metaDescription')}>  // Use translation for meta description
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
