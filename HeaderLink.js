import React from 'react';

class HeaderLink extends React.Component {
  render() {
    return (
      <div className='HeaderLink-item'>
        {/* props名nameの値を表示するように書き換えてください */}
        <div className='HeaderLink-name'>{this.props.name}</div>

        {this.props.name/* src属性の値を、props名imageの値に書き換えてください */}
        <img
          className='HeaderLink-image'
          src={this.props.image}
        />

      </div>
    );
  }
}

export default HeaderLink;
