import React from 'react';
import styled from 'styled-components';
import logo from '../../images/Mainlogo.svg';
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
  width: 764px;
  height: 10%;
  margin: 0px auto;
`;

const SearchBox = styled.div`
  position: relative;
  justify-content: space-between;
  display: flex;
  top: 25%;
  margin: 0 auto;
  position: relative;
  top: 25%;
  align-items: center;
  width: 764px;
  height: 40px;
  text-align: center;

  .miniLogo {
    text-align: center;
  }

  .searchInput {
    padding: 10px;
    border: 3px solid gray;
    border-radius: 24px;
    box-shadow: none;
    outline: none;
    width: 600px;
    font-size: 16px;
  }

  .searchBtn {
    padding: 10px 20px;
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    margin: 0px;
    background-color: #f8f9fa;
    cursor: pointer;
    font-size: 16px;
  }
`;

const MemberhBox = styled.div`
  display: flex;
  margin: 0 auto;
  width: 764px;
  padding: 10px 0;
  border-left: 0;
  border-right: 0;
  font-size: 1.5rem;
  position: relative;

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
        <div>logo</div>
        <input
          type="text"
          name="skey"
          placeholder={t('검색어_입력')}
          className="searchInput"
        />
        <button type="submit" className="searchBtn">
          <FiSearch />
        </button>
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
