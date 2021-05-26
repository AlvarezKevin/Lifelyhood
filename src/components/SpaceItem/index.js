import React from "react";
import { Link } from "react-router-dom";
// SpaceItem is a reusable component to use in space pages such as PersonalSpace, SchoolSpace and WorkSpace. It has img, title, imgSrc, color theme and redirect url as props.
const SpaceItem = ({ title, imgSrc, to, alt, colorClassName }) => {
  return (
    <div className={`page-box ${colorClassName}`}>
      <div className="page-title">
        <Link className="page-img" to={to}>
          <img src={imgSrc} alt={title || alt} />
        </Link>
        {!alt && <h5>{title}</h5>}
      </div>
    </div>
  );
};

export default SpaceItem;
