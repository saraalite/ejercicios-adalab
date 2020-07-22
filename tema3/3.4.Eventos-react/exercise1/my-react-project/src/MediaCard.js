import React from 'react';

class MediaCard extends React.Component {
    render() {
      return (
    <body className="main-container">
      <div className="media-card">
        <header className="card-header">
          <div className="image-container">
            <img src={this.props.img} className="profile-pic" alt="profile pic" />
          </div>
          <section className="name-date">
            <span>{this.props.name}</span>
            <span>{this.props.date}</span>
          </section>
        </header>
      <p> {this.props.text}</p>
          <section className="footer">
            <span>Read more...</span>
            <span>{this.props.likes} ♥</span>
  
          </section>
      </div>
     </body>
      );
    }
  }




export default MediaCard;