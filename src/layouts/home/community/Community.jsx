import PropTypes from 'prop-types';
import styles from './Community.module.css';
import { useContext, useMemo } from 'react';
import { ThemeContext } from '@context/ThemeContext';
import GradientTitle from '@components/gradientTitle/GradientTitle';
import CommunitySlider from '@components/sliders/communitySlider/CommunitySlider';
import { motion } from 'framer-motion';
import { slowFadeInBottomToTop } from '@animations/fadeInVariants';

Community.propTypes = {
  t: PropTypes.func.isRequired,
};

/**
 * Our Community layout section that contains the title and slider
 * @returns {JSX.Element}
 */
export default function Community({ t }) {
  const { theme } = useContext(ThemeContext);
  const list = useMemo(
    () => [
      {
        id: 1,
        name: t('Home.Community.person1.name'),
        description: t('Home.Community.person1.description'),
      },
      {
        id: 2,
        name: t('Home.Community.person2.name'),
        description: t('Home.Community.person2.description'),
      },
      {
        id: 3,
        name: t('Home.Community.person3.name'),
        description: t('Home.Community.person3.description'),
      },
      {
        id: 4,
        name: t('Home.Community.person3.name'),
        description: t('Home.Community.person3.description'),
      },
    ],
    [t]
  );

  return (
    <section className={`${styles.community} ${styles[theme]}`}>
      <motion.h2
        variants={slowFadeInBottomToTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <GradientTitle>{t('Home.Community.title')}</GradientTitle>
      </motion.h2>
      <CommunitySlider list={list} />
      <p className={styles.cta}>
        {t('Home.Community.cta.0')} <a href="#">{t('Home.Community.cta.1')}</a>{' '}
        {t('Home.Community.cta.2')} <a href="#">{t('Home.Community.cta.3')}</a>
      </p>
    </section>
  );
}
