import React, {Component} from 'react';
import "./styles.css"

class AddPost extends Component {
    state = {
        name: '',
        text: ''
    }
    changeName = e => {
        this.setState({name:e.target.value})
    }
    changeText = e => {
        this.setState({text:e.target.value})
    }
    addPost = () => {
        const data = {
            name: this.state.name,
            tasks: this.state.text
        }
        if (this.state.name !== '' && this.state.text !== '') {
            this.props.addDataPost(data);
            this.setState({name: '', text: ''})
        }
    }
    render() {
        return (
            <div className="add-post">
                <input type="text" value={this.state.name} onChange={this.changeName}/>
                <input type="text" value={this.state.text} onChange={this.changeText}/>
                <button className="add-post-button" onClick={this.addPost}>Добавити</button>
                <p>{this.state.text}</p>
            </div>
        )
    }
}
export default AddPost;