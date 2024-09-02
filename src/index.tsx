import * as React from 'react'; // ファイル内で使用しないが、JSXを使う場合はインポートの必要があるため必須
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import { Editor } from './pages/editor';

// ページ全体に適用するスタイル
const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`;

const Main = (
  <>
    <GlobalStyle />
    <Editor />
  </>
);

render(Main, document.getElementById('app'));
