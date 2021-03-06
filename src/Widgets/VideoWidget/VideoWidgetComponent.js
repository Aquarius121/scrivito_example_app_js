import * as React from "react";
import * as Scrivito from "scrivito";
import urlFromBinary from "../../utils/urlFromBinary";
import videoPlaceholder from "./videoPlaceholder";

class VideoWidget extends React.Component {
  constructor(props) {
    super(props);

    this.isPlaying = false;
    this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
    this.playVideo = this.playVideo.bind(this);
  }

  componentDidMount() {
    document.addEventListener("fullscreenchange", this.handleFullScreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener(
      "fullscreenchange",
      this.handleFullScreenChange
    );
  }

  handleFullScreenChange(e) {
    if (this.isPlaying) {
      this.elem.pause();
      this.isPlaying = false;
    } else {
      this.elem.play();
      this.isPlaying = true;
    }
  }

  playVideo(id) {
    if (!this.elem) {
      this.elem = document.getElementById(id);
    }
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      this.elem.msRequestFullscreen();
    } else if (this.elem.webkitEnterFullScreen) {
      this.elem.webkitEnterFullScreen();
    }
    this.elem.style.display = "block";
  }

  render() {
    const { widget } = this.props;
    const videoUrl = urlFromBinary(widget.get("source"));
    const showText = widget.get("showText");
    const playText = widget.get("playText");
    const textPosition = widget.get("textPosition");
    const btnSize = widget.get("btnSize");
    const color = widget.get("color");

    if (!videoUrl && !Scrivito.isInPlaceEditingActive()) {
      return null;
    }

    const posterUrl = urlFromBinary(widget.get("poster"));
    const src = posterUrl ? videoUrl : `${videoUrl}#t=0.01`;

    let style = {};
    if (Scrivito.isInPlaceEditingActive() && !videoUrl && !posterUrl) {
      style = videoPlaceholder;
    }

    let btnClass = "btn-play";
    if (!posterUrl) {
      btnClass += " no-poster";
    }

    return (
      <div className={`video-widget ${color} ${btnSize}`}>
        <div className="poster">
          {posterUrl && <img src={posterUrl} alt="poster image"/>}
          <button
            className={btnClass}
            title="Play"
            onClick={() => this.playVideo("video_player" + playText.substr(0, 2))}
          >
            {showText === "yes" && textPosition === "left" && (
              <div>{playText}</div>
            )}
            <div className="circle">
              <i className="fa fa-play" />
            </div>
            {showText === "yes" && textPosition === "right" && (
              <div>{playText}</div>
            )}
          </button>
        </div>
        <Scrivito.ContentTag
          id={"video_player" + playText.substr(0, 2)}
          className="video_player"
          tag="video"
          src={src}
          content={widget}
          attribute="source"
          poster={posterUrl}
          controls
          muted
          width="100%"
          style={style}
        />
      </div>
    );
  }
}

Scrivito.provideComponent("VideoWidget", VideoWidget);
