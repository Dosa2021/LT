import React from 'react';

export class Store extends React.Component {
  render() {
    return (
      <div className='Store-menu'>

        <div className='Store-text'>
          <h2>店舗展開</h2>
          <p>タカミグループは、地域のお客様に美容を通じて</p>
          <p>喜んでいただけることをスタッフ全員で創造し続けます。</p>
          <p>各店舗いろいろなサービスをご用意しておりますので、ぜひ、ご来店くださいませ。</p>
        </div>

        <div className='Store-button'>
          <a><button>お近くのショップを探す</button></a>
        </div>

      </div>
    );
  }
}

export default Store;
