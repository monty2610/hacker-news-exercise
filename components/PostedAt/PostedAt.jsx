import React from 'react';
import PropTypes from 'prop-types';

const MINUTES_UNIT = 60;
const HOURS_UNIT = 60 * 60;
const DAYS_UNIT = 60 * 60 * 24;
const MONTHS_UNIT = 60 * 60 * 24 * 30;
const YEARS_UNIT = 60 * 60 * 24 * 30 * 12;

const getPostedTime = (createdDate) => {
  const createdTime = new Date(createdDate).getTime();
  const currentTime = new Date().getTime();
  const secDiff = parseInt((currentTime - createdTime) / 1000, 10);
  let postedStr = '';
  if (secDiff < MINUTES_UNIT) {
    postedStr = `${Math.floor(secDiff)} seconds ago`;
  } else if (secDiff < HOURS_UNIT) {
    postedStr = `${Math.floor(secDiff / MINUTES_UNIT)} minutes ago`;
  } else if (secDiff < DAYS_UNIT) {
    postedStr = `${Math.floor(secDiff / HOURS_UNIT)} hours ago`;
  } else if (secDiff < MONTHS_UNIT) {
    postedStr = `${Math.floor(secDiff / DAYS_UNIT)} days ago`;
  } else if (secDiff < YEARS_UNIT) {
    postedStr = `${Math.floor(secDiff / MONTHS_UNIT)} months ago`;
  } else {
    postedStr = `${Math.floor(secDiff / YEARS_UNIT)} years ago`;
  }

  return postedStr;
};

const PostedAt = ({ createdDate }) => (
  <span className="secondary bold">{getPostedTime(createdDate)}</span>
);

PostedAt.propTypes = {
  createdDate: PropTypes.string.isRequired,
};

export default PostedAt;
