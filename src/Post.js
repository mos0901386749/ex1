import React, { Component } from 'react' //rcc

export default class Post extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.content}
                     </p>
                <p>
                    Post by : {this.props.name}
                     </p> 
            </div>
        );
    }
}
