import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography disabled={isFirstItemVisible} onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Typography disabled={isLastItemVisible} onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, isBodyParts }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {isBodyParts ? <BodyPart item={item} bodyPart={bodyParts} setBodyPart={setBodyPart} /> 
        : <ExerciseCard exercise={item} />
        }
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;