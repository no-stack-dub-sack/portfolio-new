import React from 'react';
import styled from 'styled-components';

const Highlight = styled.span`
  color: ${props => props.color};
  font-weight: bold;
`;

const AboutText = () => (
  <div>
    {'My name is '}<Highlight color="black">{'Peter A. Weinberg'}</Highlight>{`, and
    I am a `}<Highlight color="red">{'self-taught'}</Highlight>{` JavaScript Developer
    with an affinity for Open Source Software
    and learning all things Web. I am also a Core Team member at freeCodeCamp.`}
    <br /><br />
    {`About 18 months ago, I had never written a single line of code. Since that
    time, through `}<Highlight color="#337ab7">{'freeCodeCamp '}</Highlight>{' and various'}
    <Highlight color="#337ab7"> OSS </Highlight>{` contributions, I have gained a
    strong foundation in modern web development and a new direction.`}
    <br /><br />
    {'I have a '}<Highlight color="#337ab7">{'passion'}</Highlight>{` for learning, problem
    solving, and creating things that never might have been. I spend every free
    second I have pursuing this passion. It's all about`}
    <Highlight color="#337ab7">{' the journey'}</Highlight>{`, and I can't wait to
    see where this one takes me.`}
  </div>
);

export default AboutText;
