import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './css/Tags.css';

const Tags = function ({ tags }) {
  return (
    <div className="tags">
      {(tags ? tags.split(',') : []).map((elem) => (
        <div key={elem} className="tag">
          {`#${elem}`}
        </div>
      ))}
    </div>
  );
};

Tags.propTypes = {
  tags: PropTypes.string.isRequired,
};

export default Tags;
