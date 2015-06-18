var InputComponent = React.createClass({
  getInitialState: function() {
    return {value: this.props.val};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function(){
    return (
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
    );
  }
});
React.render(<InputComponent val="Default value" />, document.getElementById('content'));