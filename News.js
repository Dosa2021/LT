import React from 'react';

class News extends React.Component {
  render() {
    return (
      <div className='News'>
        <div className='News-inner'>
          <div className='News-logo'>
            <img src='' />
          </div>
          <ul className='News-list'>
            <li>2020.09.10&nbsp;★&nbsp;オンラインガイダンスのお知らせ&nbsp;★&nbsp;</li>
            <li>2020.08.26&nbsp;★&nbsp;新たなるコロナ感染対策&nbsp;★&nbsp;</li>
            <li>2020.09.10&nbsp;★&nbsp;コロナ抗体検査実施いたしました&nbsp;★&nbsp;</li>
            <li>2020.09.10&nbsp;★&nbsp;オンライン会社説明会のご案内&nbsp;★&nbsp;</li>
            <li>2020.09.10&nbsp;★&nbsp;コロナ再発で見学に来れない学生さんに...</li>

          </ul>
        </div>
      </div>
    );
  }
}

export default News;
