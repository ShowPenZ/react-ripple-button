# react-ripple-button

> a ripple-button component for React that from Ripple buttons https://codepen.io/jh3y/pen/EKGXEY

## Installation

```
$ npm install react-ripple-button --save
$ yarn add react-ripple-button
```

## Usage

```javascript
import RippleBtn from "react-ripple-button";

class App extends React.Component {
  render() {
    const onClick = () => {
      console.log(565);
    };

    return <RippleBtn btnClassName="test" text="test" onClick={onClick} />;
  }
}

export default App;

//css
.test {
  background-color: red !important;
  width: 300px;
  height: 150px;
}

```

## Properties

```javascript
  static propTypes = {
    btnClassName: PropTypes.string,      //Custom component name
    btnStyle: PropTypes.object,          //Custom component style
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired    //Custom component content
  };

  static defaultProps = {
    btnClassName: "",
    btnStyle: {}
  };
```

# License

MIT
