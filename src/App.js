import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from './layouts/front/MainLayout';

const MainPage = loadable(() => import('./main/pages/MainPage'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));

/* 회원 관련 페이지 S */
const JoinPage = loadable(() => import('./member/pages/JoinPage'));
const LoginPage = loadable(() => import('./member/pages/LoginPage'));
/* 회원 관련 페이지 E */

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />

          {/* 회원 S */}
          <Route path="member/">
            <Route path="join" element={<JoinPage />}></Route>
            <Route path="Login" element={<LoginPage />}></Route>
          </Route>
          {/* 회원 E */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
