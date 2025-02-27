import React, { useEffect, useState, lazy, useContext, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ThemeContext } from '@context/ThemeContext';
import HomeBanner from '@layouts/home/homeBanner/HomeBanner';
// import Roadmap from '@layouts/home/roadmap/Roadmap';

const Roadmap = lazy(() => import('@layouts/home/roadmap/Roadmap'));
const KeyBenefits = lazy(() => import('@layouts/home/keyBenefits/KeyBenefits'));
const LowerFees = lazy(() => import('@layouts/home/lowerFees/LowerFees'));
const Marketplace = lazy(() => import('@layouts/home/marketplace/Marketplace'));
const InfoBlock = lazy(() => import('@layouts/home/infoBlock/InfoBlock'));
const TradeOnTheGo = lazy(
  () => import('@layouts/home/tradeOnTheGo/TradeOnTheGo')
);
const Community = lazy(() => import('@layouts/home/community/Community'));

export default function Home() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const [isInitialLoadComplete, setIsInitialLoadComplete] = useState(false);

  useEffect(() => {
    const forceScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    };

    forceScrollToTop();
    const timer = setTimeout(() => {
      forceScrollToTop();
      setIsInitialLoadComplete(true);
    }, 50);

    window.addEventListener('load', forceScrollToTop);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', forceScrollToTop);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('Home.Metadata.title')}</title>
        <meta name="description" content={t('Home.Metadata.description')} />
      </Helmet>
      <main>
        <HomeBanner t={t} theme={theme} />
        <Roadmap t={t} theme={theme} />

        {isInitialLoadComplete && (
          <Suspense fallback={null}>
            <KeyBenefits t={t} theme={theme} />
            <LowerFees t={t} theme={theme} />
            <InfoBlock t={t} theme={theme} />
            <Marketplace t={t} theme={theme} />
            <TradeOnTheGo t={t} theme={theme} />
            <Community t={t} theme={theme} />
          </Suspense>
        )}
      </main>
    </>
  );
}
