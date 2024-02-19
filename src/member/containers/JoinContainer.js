import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import JoinForm from '../components/JoinForm';

const JoinContainer = () => {
  const [form, setForm] = useState({}); // 양식 항목 데이터
  const [errors, setErrors] = useState({}); // 유효성 검사 실패 시 필드, 메세지
  const { t } = useTranslation();

  // ajax형태로 보낼 거라서 기본 동작 차단
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); // 기본동작 차단

      /* 필수 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
        confirmPassword: t('비밀번호를_확인하세요.'),
        name: t('회원명을_입력하세요.'),
        agree: t('가입약관에_동의하세요.'),
      };
      /* 필수 항목 E */

      const _errors = {}; // 검증 실패 시 담아주는 에러 객체

      /* 필수 항목 검증 S */
      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];

        const fieldValue =
          key === 'agree' ? form[key] : form[key] ? form[key].trim() : '';

        if (!fieldValue) _errors[key].push(value);
      }
      /* 필수 항목 검증 E */

      setErrors(() => _errors);
    },
    [t, form], // 문구를 보여주기 위해 넣음 alert이 아닌
  );

  // name값 가져와서 form에 업데이트
  // 소괄호가 없으면 함수의 구현체로 인식함
  // '(' {...form, [e.target.name] : e.target.value.trim()} ')'
  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value.trim() }));
  }, []);

  const onToggle = useCallback(
    (e) =>
      setForm((form) => {
        form.agree = form.agree || false;
        return { ...form, agree: !form.agree };
      }),
    [],
  );

  return (
    <JoinForm
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
      form={form}
      errors={errors}
    />
  );
};

export default React.memo(JoinContainer);
