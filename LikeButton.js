'use strict'
const element = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false}
  }

  render() {
    if(this.state.liked) return 'you like it';

    return element(
      'button',
      {onClick: () => this.setState({liked: true})},
      'like n.n'
    );
  };
};

const reactContainer = document.getElementById('App');
ReactDOM.render(element(LikeButton), reactContainer);