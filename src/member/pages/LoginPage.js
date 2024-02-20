import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import LoginContainer from '../containers/LoginContainer';
import UserContext from '../modules/UserContext';

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      <UserContext.Provider
        value={{ userInfo: { email: 'user02@test.org', name: '사용자02' } }}
      >
        <LoginContainer />
      </UserContext.Provider>
    </>
  );
};

export default React.memo(LoginPage);
