import * as React from 'react'; // ファイル内で使用しないが、JSXを使う場合はインポートの必要があるため必須
import { render } from 'react-dom';
import styled from 'styled-components';

const Header = styled.h1`
  color: blue;
`;
const Main = <Header>Markdown Editor</Header>;

render(Main, document.getElementById('app'));
