import React from 'react';

class HeaderLink extends React.Component {
  render() {
    return (
      <div className='HeaderLink'>

        <div className='HeaderLink-eye'>
          <a>EYELASH</a>
        </div>
        <div className='HeaderLink-rec'>
          <a>RECRUIT</a>
        </div>
        <div className='HeaderLink-nail'>
          <a>NAIL</a>
        </div>
        <div className='HeaderLink-hair'>
          <a>HAIR&nbsp;DONATION</a>
        </div>

      </div>
    );
  }
}

export default HeaderLink;
