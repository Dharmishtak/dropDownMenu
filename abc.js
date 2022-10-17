class Hello extends React.Component {
    render() {
      return
      ;
    }
  }
  class Link extends React.Component {
  state = {
    open: false
    }
    handleClick = () => {
    this.setState({ open: !this.state.open });
    }
    render () {
    const { open } = this.state;
    return (
 
        <button onclick="activateLasers()">
        Activate Lasers
      </button>
            
      )
    }
  }
  ReactDOM.render(
    
    document.getElementById('container')
  );