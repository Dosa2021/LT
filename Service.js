import React from 'react';

class Service extends React.Component {
  render() {
    return (
      <div className='Service-menu'>

        <h1>タツヤグループのサービス</h1>

        <div className='Service-hair'>
          <img src="https://yukawanet.com/wp-content/uploads/imgs/6/e/6e3db07a.jpg"/>
          <h2>ヘアサロン</h2>
          <p>10店鋪10通りのコンセプトを実現しております。お子様安心のキッズルーム完備店や
          男性専用美容室、深夜受付サロン、ネイルマツエク同時施術サロンまでご用意しております。</p>
        </div>

        <div className='Service-list'>
          <img src="https://e-moga.jp/wp-content/uploads/2019/07/z_cute.jpg"/>
          <h2>まつげエクステ</h2>
          <p>いつものサロンで完全個室のゆったりと、忙しいあなたにぴったりの通いやすさで
          楽しんでいただきたい。まつげエクステは2ブランドをご用意しております。</p>
        </div>

        <div className='Service-list'>
          <img src="https://staticx.antenna.jp/article_images/6911203_full_ee66d908-5585-4fba-9dd7-5af40adf5006_.jpeg"/>
          <h3>ネイルサロン</h3>
          <p>美容室がやっているネイルサロンだからこそ、カットとの同時背術が可能です。
          定額制でわかりやすい料金と相談しやすいネイリストがお待ちしております。</p>
        </div>


      </div>
    );
  }
}

// Languageコンポーネントをエクスポートしてください
export default Service;
