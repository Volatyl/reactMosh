import React, { Component } from "react";

class Counter extends Component {
  state = { count: 1, tags: [] };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return this.state.tags.map((tag) => <ul><li key={tag}>{tag}</li></ul>);
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
