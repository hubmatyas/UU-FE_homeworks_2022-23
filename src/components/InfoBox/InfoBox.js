import React from 'react';
import './InfoBox.css';

const InfoBox = (props) => {
  return (
    <li className="infobox">
        <strong>{ props.content }</strong>
        <span>{ props.value }</span>
    </li>
  )
}

export default InfoBox