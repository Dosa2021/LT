import React from 'react';

class Company extends React.Component {
  render() {
    return (
      <div className='Company-menu'>
        <div className='Company-main'>

          <img className='Company-image' src='https://pbs.twimg.com/media/DFx4kTwVwAEY9yB.jpg' />

          <div className='Company-text'>
            <h1>会社情報</h1>
            <p>タカミグループは、地域のお客様に美容を通じて喜んでいただけることをスタッフ
            全員で創造し続けます。各店舗いろいろなサービスをご用意しておりますので、ぜひ、
            ご来店くださいませ。</p>
            <p>タカミグループは、地域のお客様に美容を通じて喜んでいただけることをスタッフ
            全員で創造し続けます。</p>

            <div className='Company-info'>
              <a>会社情報</a>
            </div>

            <div className='Company-q'>
              <a>お問い合わせ</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

// Languageコンポーネントをエクスポートしてください
export default Company;
