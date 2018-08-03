import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    componentDidMount(){
        fetch('')
    }
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}
ReactDOM.render(
    <HelloMessage name='parcel-react' />,
    document.getElementById('app')
);