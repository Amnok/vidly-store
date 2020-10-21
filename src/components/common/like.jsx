import React from 'react';

export default function like(props) {
  const { liked, onClick } = props;
  let classes = 'fa fa-heart';
  if (!liked) {
    classes += '-o';
  }

  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    ></i>
  );
}
