import React, {Component} from 'react';
import "./styles.css"

class Post  extends Component{
    state = {
        counter: 0
    }
    addLike = () => {
        this.setState({counter: this.state.counter + 1})
    }
    render() {
        console.log(this.props)
        return(
            <div className="post">
                <p>Name: {this.props.post.name} </p>
                <p>Done tasks: {this.props.post.tasks}</p>
                <span onClick={this.addLike}> &#10084; {this.state.counter}</span>

            </div>
        )
    }
}
export default Post;