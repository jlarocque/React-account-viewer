import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import UserList from "./components/UserList.jsx";

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios
      .get(`all`)
      .then(({data}) => {
        this.setState({data: data})
      })
      .catch((err) => console.log(err))
  }
	render() {
		return (
			<div>
				<UserList users={this.state.data} />
			</div>
		);
	}
}

	ReactDOM.render(<App />, document.getElementById("root"));