import * as React from "react";
import * as Scrivito from "scrivito";
import placeholderCss from "../../utils/placeholderCss";
import AboutBoxWidget from "../AboutBox/AboutBoxWidgetClass";

// eslint-disable-next-line
const Slider = React.lazy(() => import("react-slick"));

function SlickNextButton(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa fa-chevron-right" />
    </div>
  );
}

function SlickPrevButton(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa fa-chevron-left" />
    </div>
  );
}

Scrivito.provideComponent("AboutTeamWidget", ({ widget }) => {
  const members = widget.get("members");

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Slider
          className="about-team"
          nextArrow={<SlickNextButton />}
          prevArrow={<SlickPrevButton />}
          {...sliderSettings}
        >
          {members.map(member => (
            <div className="about-box" key={member.id()}>
              <div className="image-container">
                <Scrivito.ImageTag content={member} attribute="image" tag="img" alt="personimage"/>
              </div>
              <div className="body">
                <Scrivito.ContentTag
                  content={member}
                  attribute="position"
                  tag="div"
                  className="position"
                />
                <Scrivito.ContentTag
                  content={member}
                  attribute="name"
                  tag="div"
                  className="name"
                />
              </div>
            </div>
          ))}
        </Slider>
      </React.Suspense>
      <Addmember widget={widget} />
    </React.Fragment>
  );
});

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
};

const Addmember = ({ widget }) => {
  if (!Scrivito.isInPlaceEditingActive()) {
    return null;
  }

  return (
    <div className="text-center">
      <a
        href="#"
        style={placeholderCss}
        className="edit-mode-link"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          const newmembers = [...widget.get("members"), new AboutBoxWidget({})];
          widget.update({ members: newmembers });
        }}
      >
        Click to add a member
      </a>
    </div>
  );
};
