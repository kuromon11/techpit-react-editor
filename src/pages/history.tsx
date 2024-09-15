import * as React from 'react';
const { useState, useEffect } = React;
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getMemos, MemoRecord } from '../indexeddb/memos';

import { Header } from '../components/header';

const HeaderArea = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
  padding: 0 1rem;
`;

export const History: React.FC = () => {
  return (
    <>
      <HeaderArea>
        <Header title="履歴">
          <Link to="/editor">エディタに戻る</Link>
        </Header>
      </HeaderArea>
      <Wrapper>TODO: 履歴表示</Wrapper>
    </>
  );
};
