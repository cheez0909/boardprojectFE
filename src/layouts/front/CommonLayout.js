import Header from '../../layouts/front/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../layouts/front/Footer';

const CommonLayout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default CommonLayout;
