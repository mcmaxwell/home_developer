import './popup.scss'

import React from 'react';
import PropTypes from 'prop-types';

class Popup extends React.Component {

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className={"popup " + this.props.classname} onClick={this.props.closePopup}>
        <div className="popup-content" onClick={this.props.unclosePopup}>
          <span className="close" onClick={this.props.closePopup}>Close</span>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Popup.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string
};


export default Popup;
