import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import { produce } from 'immer';
// import UserContext from '../modules/UserContext';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  // const {
  //   state: { isLogin },
  //   actions: { setIsLogin },
  // } = useContext(UserContext);

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => {
          draft[e.target.name] = e.target.value.trim();
        }),
      ),
    [],
  );

  // const onChange = useCallback(
  //   (e) =>
  //     setForm((form) => ({
  //       ...form,
  //       [e.target.name]: e.target.value.trim(),
  //     })),
  //   [],
  // );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      /* 필수 입력 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
      };
      /* 필수 입력 항목 E */

      const _errors = {};
      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];
        form[key] = form[key] || '';
        if (!form[key].trim()) {
          _errors[key].push(value);
        }
      }

      setErrors(_errors);
    },
    [t, form],
  );

  return (
    <>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
      {/* <UserConsumer>
        {({ state, actions }) => (
          <>
            <div>로그인 상태 : {state.isLogin ? '로그인' : '미로그인'}</div>
            <button
              type="button"
              onClick={() => actions.setIsLogin(!state.isLogin)}
            >
              변경
            </button>
          </>
        )}
      </UserConsumer> */}

      {/* <div>로그인 : {isLogin ? '로그인' : '미로그인'}</div>
      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        변경
      </button> */}
    </>
  );
};

export default React.memo(LoginContainer);
