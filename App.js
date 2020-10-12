import React from 'react';
// Languageコンポーネントをインポートしてください
import Language from './Language';
import Header2 from './Header2';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="language">
          {/* Languageコンポーネントを呼び出してください */}
          <Language />
        </div>

        <div className="Header2">
          {/* Languageコンポーネントを呼び出してください */}
          <Header2 />
        </div>

      </div>
    );
  }
}

export default App;
