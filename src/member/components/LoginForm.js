import React from 'react';
import styled from 'styled-components';
import { InputText } from '../../commons/components/InputBoxStyle';
import { MediumButton } from '../../commons/components/ButtonStyle';
import { useTranslation } from 'react-i18next';
import { fontSize } from '../../styles/size';
import { FiLock, FiKey, FiUserPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import MessageBox from '../../commons/components/MessageBox';

const { medium } = fontSize;

const LoginBox = styled.form`
  display: flex;
  flex-direction: column; /* 위에서 아래로 배치 */
  align-items: center; /* 가운데 배치 */
  position: absolute;
  width: 100%;
  height: calc(100% - 315px);
  left: 0;
  top: 215px;

  .inner {
    width: 350px;

    h1 {
      text-align: center;
      color: ${medium};
      margin-bottom: 10px;
    }

    .links {
      display: flex;
      margin-top: 10px;
      padding: 10px 0;
      border: 1px solid #d5d5d5;
      border-left: 0;
      border-right: 0;

      a {
        width: 0;
        flex-grow: 1;
        text-align: center;
        line-height: 1;
        svg {
          vertical-align: middle; /* 아이콘 가운데 배치 */
        }
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

const LoginForm = ({ onChange, onSubmit, form, errors }) => {
  const { t } = useTranslation();
  return (
    <LoginBox onSubmit={onSubmit} autoComplete="off">
      <div className="inner">
        <h1>{t('로그인')}</h1>
        <InputText
          type="text"
          name="email"
          placeholder={t('이메일')}
          onChange={onChange}
          value={form.email}
        />
        <MessageBox messages={errors.email} color="danger" />

        <InputText
          type="password"
          name="password"
          placeholder={t('비밀번호')}
          onChange={onChange}
          value={form.password}
        />
        <MessageBox messages={errors.password} color="danger" />

        <MediumButton type="submit" bcolor="primary" fcolor="#fff">
          {t('로그인')}
        </MediumButton>

        <div className="links">
          <Link to="/member/find_id">
            <FiLock />
            {t('아이디_찾기')}
          </Link>
          <Link to="/member/find_pw">
            <FiKey />
            {t('비밀번호_찾기')}
          </Link>
          <Link to="/member/join">
            <FiUserPlus />
            {t('회원가입')}
          </Link>
        </div>
      </div>
    </LoginBox>
  );
};

export default React.memo(LoginForm);
