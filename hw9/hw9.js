class NameForm extends React.Component { 
    constructor(props) { 
      super(props); 
      this.state = { 
        value: '', 
        itemList: [], 
      }; 
      this.handleChange = this.handleChange.bind(this); 
      this.handleSubmit = this.handleSubmit.bind(this); 
    } 
    handleChange(event) { 
      this.setState({value: event.target.value}); 
    } 
    handleSubmit(event) { 
      this.state.itemList.push(this.state.value); 
      this.setState({value: '', itemList: this.state.itemList,}); 
      event.preventDefault(); 
    } 
    render() { 
      return ( 
        <div> 
        <form onSubmit={this.handleSubmit}> 
          <label> 
            CGU Todo list<br/>
            <input type="text" value={this.state.value}  onChange={this.handleChange} /> 
          </label> 
          <input type="submit" value="Add" /> 
        </form> 
        <ul style={{ textAlign: 'left' }}> 
          {this.state.itemList.map((item, index) => <li key={`item_${index}`}>{item}</li>) } 
        </ul> 
        </div> 
      ); 
    } 
  } 
  ReactDOM.render(<NameForm />,document.getElementById('root'));