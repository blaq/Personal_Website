// Unused code but saved for future ideas


import React, {Component} from 'react';
import axios from 'axios';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    //Function which is called when the component loads for the first time
    componentDidMount() {
        this.getProfile(this.props.val)
    }

    //Function which is called whenver the component is updated
    componentDidUpdate(prevProps) {

        //get Self Details only if props has changed
        if (this.props.val !== prevProps.val) {
            this.getProfile(this.props.val)
        }
    }

    //Function to Load the self data from json.
    getProfile(id) {
        axios.get('assets/profile.json').then(response => {
            this.setState({profile: response})
        })
    };

    render() {
        if (!this.state.profile)
            return (<p>Loading Data</p>)
        return (
            <div className="self">
                <p>Name : {Profile.data.name}</p>
            </div>
        )
    }
}
export default class Profile extends React.Component {
    state = {
      name: ''
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const profile = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <p>
          { this.state.name}
        </p>
      )
    }
  }