import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // this only needs to be imported once in your app
import { StyledPictureBox } from './picturebox.styled';

export default class PictureBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <StyledPictureBox>
        <div className="thumbnails">
          <img src={this.props.thumb} alt="" onClick={() => this.setState({ isOpen: true })}/>
          {isOpen && (
            <Lightbox
              mainSrc={this.props.images[photoIndex]}
              nextSrc={this.props.images[(photoIndex + 1) % this.props.images.length]}
              prevSrc={this.props.images[(photoIndex + this.props.images.length - 1) % this.props.images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + this.props.images.length - 1) % this.props.images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % this.props.images.length,
                })
              }
            />
          )}
          <h3>{this.props.desc}</h3>
        </div>
      </StyledPictureBox>
    );
  }
}
