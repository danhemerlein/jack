import React, { Component } from 'react';
import './Image.scss';

class Image extends Component {

  render() {
    const { src, alt, style, bg, children } = this.props;
    let bgStyle = {
      ...style,
      backgroundColor: 'gray',
      backgroundImage: `url(${src})`
    };

    if (!bg) {
      return (
        <img
          style={style}
          src={src}
          alt={alt}
          className="Image w100 h100"
        />
      );
    }
    return (
      <div style={bgStyle} className="Image w100 h100">
        {children}
      </div>
    );
  }
}

export default Image;
