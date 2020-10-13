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
            <li>2020.10</li>
            <li>2020.11</li>
            <li>2020.12</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default News;
