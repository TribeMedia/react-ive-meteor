/*global Post, User */

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='create-post'>
        <textarea placeholder="Let us know what you think!"
                  onChange={ this.updateDesc.bind(this) } />

        <button onClick={ this.createPost.bind(this) }>
          Submit Post
        </button>
      </div>
    );
  }

  updateDesc(e) {
    this.setState({
      desc: e.target.value
    });
  }

  createPost() {
    if (User.loggedOut()) return alert("You must be logged in to post!");
    if (!this.state.desc) return;

    Post.create({
      desc: this.state.desc,
      userName: User.username()
    }, this.onError);
    this.resetForm();
  }

  onError(err, res) {
    if (err && err.error === 401) {
      alert("You need to login before creating a post");
    } else if (err) {
      alert("Server error");
    }
  }

  resetForm() {
    this.setState({});
    $('textarea').val('');
  }
}

this.CreatePost = CreatePost;

