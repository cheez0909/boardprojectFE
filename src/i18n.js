import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko';
import en from './langs/en';

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources, // 언어파일 자원들 추가
  // lng: 'ko', // 기본 언어코드 ko로 하면 영어 사이트도 한국어로 나옴, 네비게이터 객체에 언어에 대한 설정정보가 나옴
  lng: navigator.language,
});
