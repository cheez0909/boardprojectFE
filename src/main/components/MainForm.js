import React from 'react';
import styled from 'styled-components';
import logo from '../../images/Mainlogo.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUserPlus } from 'react-icons/fa';
import { FiLogIn, FiSearch, FiLogOut } from 'react-icons/fi';
import classNames from 'classnames';
import color from '../../styles/color';
import UserContext from '../../member/modules/UserContext';
import { fontSize } from '../../styles/size';
import { FiLock, FiKey, FiUserPlus } from 'react-icons/fi';

const { primary, secondary, dark } = color;
const { medium } = fontSize;

const MainBox = styled.div`
  position: relative;
  top: 20%;
  width: 573px;
  height: 10%;
  margin: 0px auto;
`;

const SearchBox = styled.div`
  position: relative;
  top: 25%;
  border: 0.25rem solid #500e10;
  border-radius: 24px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 573px;
  height: 40px;
  text-align: center;
  display: flex;
`;

const MemberhBox = styled.div`
  display: flex;
  margin: 0 auto;
  width: 573px;
  padding: 10px 0;
  border-left: 0;
  border-right: 0;
  font-size: 1.5rem;

  a {
    width: 0;
    flex-grow: 1;
    margin-top: 80px;
    text-align: center;
    line-height: 1;

    svg {
      vertical-align: middle; /* 아이콘 가운데 배치 */
    }
  }
`;

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <MainBox>
        <p className="subtitle">MUSICAL</p>
        <img src={logo} alt="logo" />
      </MainBox>
      <SearchBox>
        <div classname="inputWrapper">
          <div classname="miniLogo">logo</div>
          <div classname="searchText">
            <input type="text" name="skey" placeholder={t('검색어_입력')} />
          </div>
          <div className="searchBtn">
            <button type="submit">
              <FiSearch />
            </button>
          </div>
        </div>
      </SearchBox>
      <MemberhBox>
        <Link to="/member/login">
          <FiUserPlus />
          {t('로그인')}
        </Link>
        <Link to="/member/join">
          <FiUserPlus />
          {t('회원가입')}
        </Link>
      </MemberhBox>
    </>
  );
};

export default React.memo(Main);
