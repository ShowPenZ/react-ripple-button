import React from 'react';
import ClassName from 'classnames';
import PropTypes from 'prop-types';

import './RippleButton.css';

function debounce(func, delay) {
  let inDebounce = '';
  inDebounce = undefined;

  return () => {
    let args = '';
    let context = '';

    context = this;
    args = arguments;

    clearTimeout(inDebounce);

    // eslint-disable-next-line no-return-assign
    return (inDebounce = setTimeout(() => func.apply(context, args), delay));
  };
}

class RippleButton extends React.Component {
  static propTypes = {
    btnClassName: PropTypes.string,
    btnStyle: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    btnClassName: '',
    btnStyle: {},
  };

  constructor() {
    super();
    const that = this;

    that.ripples = null;
    that.ripple = null;
    that.rippleContainer = null;
  }

  componentDidMount() {
    const that = this;

    that.ripples = document.querySelectorAll('[ripple]');

    that.rippleContainer = document.createElement('div');
    that.rippleContainer.className = 'ripple--container';

    that.ripple = that.ripples;
    that.ripple[0].addEventListener('mousedown', that.showRipple);
    that.ripple[0].addEventListener('mouseup', debounce(that.cleanUp, 2000));
    that.ripple[0].rippleContainer = that.rippleContainer;
    that.ripple[0].appendChild(that.rippleContainer);
  }

  showRipple = e => {
    const that = this;
    let pos = null;
    let rippler = '';
    let size = 0;
    let style = '';
    let x = 0;
    let y = 0;

    rippler = document.createElement('span');

    size = that.rippleContainer.offsetWidth;
    pos = that.rippleContainer.getBoundingClientRect();
    x = e.pageX - pos.left - size / 2;
    y = e.pageY - pos.top - size / 2;

    style = 'top:' + y + 'px; left: ' + x + 'px; height: ' + size + 'px; width: ' + size + 'px;';

    that.rippleContainer.appendChild(rippler);

    return rippler.setAttribute('style', style);
  };

  cleanUp = () => {
    const that = this;

    while (that.rippleContainer.firstChild) {
      that.rippleContainer.removeChild(that.rippleContainer.firstChild);
    }
  };

  render() {
    const that = this;
    const { btnClassName, btnStyle, onClick, text } = that.props;

    return (
      <button className={ClassName('defaultBtn', btnClassName)} ripple="ripple" style={btnStyle} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default RippleButton;
