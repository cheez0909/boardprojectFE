import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import MainContainer from '../containers/MainContainer';

// 프론트의 메인페이지
const MainPage = () => {
  const { t } = useTranslation();
  /* 에러 프로세스 작동하는 지 확인 S*/
  // const result = false;
  // if (!result) {
  //   throw new Error('에러 발생!!!');
  // }
  /* 에러 프로세스 작동하는 지 확인 E*/

  return (
    <>
      <Helmet>
        <title>{t('메인페이지')}</title>
      </Helmet>
      <MainContainer></MainContainer>
    </>
  );
};

export default React.memo(MainPage);
