import React from 'react';

export default function (props) {
  return (
    <a href={"/blog/tags/"+props.tag||""} >本站相关博客</a>
  )
}