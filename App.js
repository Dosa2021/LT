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
import Recruit from './Recruit';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
          <Navi />

        <div className="HeaderTop">
          <HeaderTop />
        </div>

        <div className='HeaderLink'>
          <HeaderLink/>
        </div>

        <div className="News">
          <News />
        </div>

        <div className="Service">
          <Service />
        </div>

        <div className="Store">
          <Store />
        </div>

        <div className="Interview">
          <Interview />
        </div>

        <div className="Company">
          <Company />
        </div>

        <div className="Recruit">
          <Recruit/>
        </div>

        <div className="Footer">
          <Footer/>
        </div>

      </div>
    );
  }
}

export default App;
