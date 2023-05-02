/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import '../css/OfficialSlide.css';
import OfficialPost from './OfficialPost';

const OfficialSlide = function ({ officialPosts, slideRef, currentIndex }) {
  return (
    <div className="official-slide">
      <div
        ref={slideRef}
        className="official-slide-box"
        style={{
          transition: 'all 500ms ease-in-out',
          transform: `translateX(${
            -1 * ((100 / officialPosts.length) * currentIndex)
          }%)`,
        }}
      >
        {officialPosts.map((post) => (
          <div className="official-slide-item">
            <OfficialPost key={post.postId} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

OfficialSlide.propTypes = {
  officialPosts: PropTypes.array.isRequired,
  slideRef: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default OfficialSlide;
