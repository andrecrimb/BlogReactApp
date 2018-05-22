import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../actions'
import {Link} from 'react-router-dom'
class PostsShow extends Component {

    componentDidMount() {
        if(!this.props.post){
            const {id}  = this.props.match.params;
            this.props.fetchPost(id)
        }
    }

    onDeleteClick() {
        const {id}  = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        });
    }

    render() {
        const {post} = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <Link to="/">Back to index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >Delete post</button>
                <h3>{post.title}</h3>
                <h3>Categories: {post.categories}</h3>
                <h3>{post.content}</h3>
            </div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    console.log(posts);
    return {post: posts[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)