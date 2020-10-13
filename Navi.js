import React from 'react';

class Navi extends React.Component {
  render() {
    return (
      <div className='Navi'>
        <div className='Navi-inner'>
          <div className='Navi-logo'>
            <h1>TATSUYa &nbsp; Group</h1>
          </div>
          <ul className='Navi-list'>
            <li>会社概要</li>
            <li>採用</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navi;
