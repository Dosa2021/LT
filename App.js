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
  constructor(props) {
		super(props);
    this.state = {active: false};
	}

  render() {
    return (
      <div>
        <button onClick={e => this.setState({active: true})}>{this.state.active ? 123 : 987}</button>
          {/* Languageコンポーネントを呼び出してください */}
          <Navi />

        <div className="HeaderTop">
          {/* Languageコンポーネントを呼び出してください */}
          <HeaderTop />
        </div>

        <div className='HeaderLink'>
          <HeaderLink/>
        </div>

        <div className="News">
          {/* Languageコンポーネントを呼び出してください */}
          <News />
        </div>

        <div className="Service">
          {/* Languageコンポーネントを呼び出してください */}
          <Service />
        </div>

        <div className="Store">
          <p>6 store</p>
          {/* Languageコンポーネントを呼び出してください */}
          <Store />
        </div>

        <div className="Interview">
          {/* Languageコンポーネントを呼び出してください */}
          <Interview />
        </div>

        <div className="Company">
          {/* Languageコンポーネントを呼び出してください */}
          <Company />
        </div>

        <div className="Recruit">
          <Recruit/>
          {/* Languageコンポーネントを呼び出してください */}
        </div>

        <div className="Footer">
          <Footer/>
          {/* Languageコンポーネントを呼び出してください */}
        </div>

      </div>
    );
  }
}

export default App;
