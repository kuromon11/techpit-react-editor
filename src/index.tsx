import * as React from 'react'; // ファイル内で使用しないが、JSXを使う場合はインポートの必要があるため必須
import { render } from 'react-dom';

const Main = <h1>Markdown Editor</h1>;
render(Main, document.getElementById('app'));
