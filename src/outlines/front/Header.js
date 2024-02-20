import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../../images/logo (1).png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUserPlus } from 'react-icons/fa';
import { FiLogIn, FiSearch, FiLogOut } from 'react-icons/fi';
import classNames from 'classnames';
import color from '../../styles/color';
import UserContext from '../../member/modules/UserContext';
import { fontSize } from '../../styles/size';

const { primary, secondary, dark } = color;
const { medium } = fontSize;

const HeaderBox = styled.header`
  /* HeaderBox 전체 적용 */
  background: #fff;

  /* .layout-width 내부 S */
  .layout-width {
    display: flex;
    align-items: center;
    height: 115px;

    /* .logo form .link S */
    .logo,
    form,
    .links {
      flex-grow: 1;
      width: 0;
    }
    /* .logo form .link E */

    /* form 내부 S */
    form {
      text-align: center;
      display: flex;

      /* 버튼 내부 S */
      button {
        background: ${dark};
        border: 0;
        color: #fff;
        width: 60px;
        height: 60px;

        svg {
          color: #fff;
          font-size: 2.25rem;
        }
      }
      /* 버튼 내부 E */

      input[type='text'] {
        flex-grow: 1;
        height: 60px;
        border: 2px solid ${dark};
        padding: 0 15px;
      }
    }
    /* form 내부 E */

    /* links 클래스 내부 S */
    .links {
      text-align: right;

      a {
        margin-left: 15px;
        font-size: ${medium}rem;
        line-height: 1;
      }

      .icon {
        font-size: 2.25rem;
        color: ${secondary};
        vertical-align: middle;
      }

      .on {
        .icon {
          color: ${primary};
        }
      }
    }
    /* links 클래스 내부 S */
  }
  /* .layout-width 내부 E */
`;

const Header = () => {
  const { t } = useTranslation();

  const {
    state: { isLogin },
  } = useContext(UserContext);

  return (
    <HeaderBox>
      <div className="layout-width">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <form>
          <input type="text" name="skey" placeholder={t('검색어_입력')} />
          <button type="submit">
            <FiSearch />
          </button>
        </form>

        <div className="links">
          {isLogin ? (
            <>
              <NavLink
                to="/member/logout"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <FiLogOut className="icon" /> {t('로그아웃')}
              </NavLink>
              <NavLink
                to="/mypage"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('마이페이지')}
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/member/login"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <FiLogIn className="icon" /> {t('로그인')}
              </NavLink>
              <NavLink
                to="/member/join"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <FaUserPlus className="icon" />
                {t('회원가입')}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </HeaderBox>
  );
};

export default React.memo(Header);
