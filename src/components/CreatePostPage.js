import React, {Component} from 'react';
import TopPanel from "./TopPanel";
import AddPost from "./AddPost";
import Post from "./Post";

import "./styles.css"

class CreatePostPage extends Component {
    state = {
        posts: []
    }
    addDataPost = data => {
        this.setState({posts: this.state.posts.concat(data)})
    }

    render() {
        return(
            <div>
                <TopPanel />
                <AddPost addDataPost = {this.addDataPost} />
                <div className="post-block">
                    {this.state.posts.map((post, i) => <Post post = {post} key={i}/>)}
                </div>
            </div>
        )
    }
}
export default CreatePostPage;