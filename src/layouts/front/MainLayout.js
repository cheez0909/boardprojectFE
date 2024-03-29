import Header from '../../outlines/front/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../outlines/front/Footer';
import React from 'react';
import styled from 'styled-components';

const ContentBox = styled.main`
  min-height: 500px;
`;

const MainLayout = () => {
  return (
    <>
      <ContentBox>
        <Outlet />
      </ContentBox>
      <Footer />
    </>
  );
};

export default React.memo(MainLayout);
