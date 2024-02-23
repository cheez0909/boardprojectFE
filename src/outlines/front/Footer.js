import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  background: #f9f9f9;
  min-height: 70px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterDiv = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding: 20px 0;
  font-size: x-small;
  color: lightgray;
  opacity: 70%;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterDiv>
        <div>
          <span>
            <a
              href="https://www.notion.so/SeeYa-46f2637af5c5471289041fe2f1070b40"
              target="_blank"
            >
              서비스 소개
            </a>
            <span> / </span>
          </span>
          <span>
            <a
              href="https://www.notion.so/90e17b348efc43fbaf5721493388d7d2"
              target="_blank"
            >
              이용약관
            </a>
            <span> / </span>
          </span>
          <span>
            <a
              href="https://www.notion.so/6fddc25388c740dbb60f03654f006abf"
              target="_blank"
            >
              개인정보처리방침
            </a>
            <span> / </span>
          </span>
          <span>
            <a href="/faq/">FAQ</a>
          </span>
        </div>
        <p>Copyright 2021 (SeeYa!) All rights reserved.</p>
      </FooterDiv>
    </FooterBox>
  );
};

export default React.memo(Footer);
