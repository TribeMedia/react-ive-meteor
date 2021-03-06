this.CommentItem = React.createClass({
  render() {
    return (
      <div className="comment-item">
        <div className="comment-item__photo"></div>

        <div className="comment-item__text">
          <span className="comment-item__name">
            { this.props.username }
          </span>

          <span className="comment-item__desc">
            { this.props.desc }
          </span>

          <div className="comment-item__date">
            { this.props.createdAt.toDateString() }
          </div>
        </div>
      </div>
    );
  },
});

