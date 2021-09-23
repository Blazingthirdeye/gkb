import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'DAO',
    Svg: require('../../static/img/dao.svg').default,
    description: (
      <>
        Gitcoin is a Decentralized Autonomous Organization governed by the holders of the GTC token. 
      </>
    ),
  },
  {
    title: 'Token',
    Svg: require('../../static/img/token.svg').default,
    description: (
      <>
        The Gitcoin token (GTC) is distributed to active participants in Gitcoin’s mission. 
      </>
    ),
  },
  {
    title: 'Grants',
    Svg: require('../../static/img/grants.svg').default,
    description: (
      <>
        With Gitcoin Grants, you can support exciting projects that you love.
      </>
    ),
  },
  {
    title: 'Bounties',
    Svg: require('../../static/img/bounties.svg').default,
    description: (
      <>
        Gitcoin is a bounty-based collaboration tool that works easily with Github.
      </>
    ),
  },
  {
    title: 'Quests',
    Svg: require('../../static/img/quests.svg').default,
    description: (
      <>
        Gitcoin Quests is a fun, gamified way to learn about the web3 ecosystem, compete with your friends, earn rewards, and level up your decentralization-fu!
      </>
    ),
  },
  {
    title: 'Policy',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Gitcoin Code of Conduct.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
