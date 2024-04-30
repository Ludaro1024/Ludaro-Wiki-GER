import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Einfach zu Benutzen',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      Die Ludaro Wiki ist so gestaltet, dass sie von jedermann genutzt werden kann und es jedem ermöglicht, auch ohne vorheriges Wissen, etwas Neues zu lernen!
      </>
    ),
  },
  {
    title: 'Open-Source',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Die Ludaro-Wiki ist ein Open-Source-Projekt, was bedeutet, dass sie von jedem bearbeitet werden kann – auch von dir, wenn du etwas ändern möchtest! Du musst nur auf den "Bearbeiten"-Button klicken und schon kannst du loslegen!
      </>
    ),
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
     Auf unserem discord (https://discord.ludaro.de) findest du immer leute die bereit sind dir zu helfen! Egal ob du Fragen hast oder einfach nur mit anderen reden möchtest, wir sind für dich da!
     </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
