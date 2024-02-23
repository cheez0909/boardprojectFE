import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import MainLayout from './layouts/front/MainLayout';
import DetailsLayout from './layouts/front/DetailsLayout';

const MainPage = loadable(() => import('./main/pages/MainPage'));
const NotFound = loadable(() => import('./commons/pages/NotFound'));

/* 회원 관련 페이지 S */
const JoinPage = loadable(() => import('./member/pages/JoinPage'));
const LoginPage = loadable(() => import('./member/pages/LoginPage'));
/* 회원 관련 페이지 E */

/* 마이페이지 S */
const MyMainPage = loadable(() => import('./mypage/pages/MainPage'));
/* 마이페이지 E */

/* 마이페이지 S */
const AdminMainPage = loadable(() => import('./admin/pages/MainPage'));
/* 마이페이지 E */
const DetailsPage = loadable(() => import('./details/pages/DetailsPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />

          {/* 검색화면 S */}
          <Route path="search/" element={<DetailsLayout />}>
            <Route index element={<DetailsPage />}></Route>
          </Route>
          {/* 검색화면 E */}

          {/* 회원 S */}
          <Route path="member/">
            <Route path="join" element={<JoinPage />}></Route>
            <Route path="Login" element={<LoginPage />}></Route>
          </Route>
          {/* 회원 E */}

          {/* 마이페이지 S */}
          <Route path="mypage/">
            <Route index element={<MyMainPage />} />
          </Route>
          {/* 마이페이지 E */}

          {/* 관리자페이지 S */}
          <Route path="admin/">
            <Route index element={<AdminMainPage />} />
          </Route>
          {/* 관리자페이지 E */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
