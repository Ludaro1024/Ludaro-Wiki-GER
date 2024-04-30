import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocalization } from '@docusaurus/theme-common'; // Correct import for localization
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { i18n } = useLocalization(); // Using the localization hook

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{i18n.translate('homepage.title')}</h1>  // Correct method to translate
        <p className="hero__subtitle">{i18n.translate('homepage.subtitle')}</p>  // Correct method to translate
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            {i18n.translate('homepage.startLearningButton')}  // Correct method to translate
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { i18n } = useLocalization(); // Using the localization hook here as well

  return (
    <Layout
      title={i18n.translate('homepage.metaTitle')}  // Correct method to translate
      description={i18n.translate('homepage.metaDescription')}>  // Correct method to translate
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
