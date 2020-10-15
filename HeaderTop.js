import React from 'react';

class HeaderTop extends React.Component {
  render() {
    return (
      <div className='HeaderTop-text'>
        <div>
          <h1>あなたのためのサロンがここにある。</h1>
        </div>
          <p>美を通じ感動を創り出し、笑顔の輪を広げます。</p>
          <p>笑顔が家庭、職場、学校で周りに伝わり、</p>
          <p>明日への活力の源を発信し続ける</p>
          <p>そんな空間を創り出すカンパニーです。</p>
          <p><button className='HeaderTop-button'>お近くのサロンを探す</button></p>
      </div>
    );
  }
}

// Languageコンポーネントをエクスポートしてください
export default HeaderTop;
