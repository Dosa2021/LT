import React from 'react';
// Languageコンポーネントをインポートしてください
import Navi from './Navi';
import HeaderTop from './HeaderTop';
import HeaderLink from './HeaderLink';
import News from './News';
import Service from './Service';
import Store from './Store';
import Interview from './Interview';
import Company from './Company';
import Bottom from './Bottom';

class App extends React.Component {
  render() {
    return (
      <div>
          {/* Languageコンポーネントを呼び出してください */}
          <Navi />

        <div className="HeaderTop">
          {/* Languageコンポーネントを呼び出してください */}
          <HeaderTop />
        </div>

        <div className='HeaderLink'>
          <HeaderLink
            name='HTML & CSS'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
          />
          <HeaderLink
            name='JavaScript'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg'
          />
          <HeaderLink
            name='React'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
          />
        </div>

        <div className="News">
          {/* Languageコンポーネントを呼び出してください */}
          <News />
        </div>

        <div className="Service">
          <p>5 Service</p>
          {/* Languageコンポーネントを呼び出してください */}
          <Service />
        </div>

        <div className="Store">
          <p>6 store</p>
          {/* Languageコンポーネントを呼び出してください */}
          <Store />
        </div>

        <div className="Interview">
          <p>Interview</p>
          {/* Languageコンポーネントを呼び出してください */}
          <Interview />
        </div>

        <div className="Company">
          <p>会社情報</p>
          {/* Languageコンポーネントを呼び出してください */}
          <Company />
        </div>

        <div className="Bottom">
          <p>bottom</p>
          {/* Languageコンポーネントを呼び出してください */}
          <Bottom />
        </div>

      </div>
    );
  }
}

export default App;
