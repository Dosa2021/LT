import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='Footer'>
        <div className='Footer-inner'>

          <div className='Footer-group'>
            <h1>TATSUYA&nbsp;Group</h1>
            <ul>
              <li>住所&nbsp;〒456-0074</li>
              <li>名古屋市熱田区日比野町59-3</li>
              <li>Tel&nbsp;052-682-8868</li>
              <li>FAX&nbsp;052-6837166</li>
              </ul>
          </div>

          <div className='Footer-salon'>
            <h2>HAIR&nbsp;SALON</h2>
            <ul>
              <li>Hair&nbsp;Space&nbsp;A.I.R</li>
              <li>メンズ美容室タカミ</li>
              <li>美容室Fuwa</li>
              <li>to&nbsp;zone&nbsp;TAKAMI</li>
              <li>T.stage</li>
              <li>Select&nbsp;TAKAMI</li>
              <li>Salon&nbsp;de&nbsp;CloveR</li>
              <li>タカミ&nbsp;荒子店</li>
              <li>美容室U・K・O・N</li>
              <li>BAY&nbsp;SALON&nbsp;TAKAMI</li>
            </ul>
          </div>

          <div className='Footer-about'>
            <h2>ABOUT&nbsp;TAKAMI</h2>
            <ul>
              <li>タカミのサービス</li>
              <li>まつげのエクステ</li>
              <li>ネイル</li>
              <li>ショップ一覧</li>
              <li>採用情報</li>
              <li>会社案内</li>
              <li>個人情報の取り扱い</li>
              <li>お問い合わせ</li>
            </ul>
          </div>

          <div className='Footer-info'>
            <h2>INFORMATION</h2>
            <ul>
              <li>タカミニュース</li>
              <li>マツエクに関するお知らせ</li>
              <li>ネイルに関するお知らせ</li>
              <li>スタッフブログ</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
