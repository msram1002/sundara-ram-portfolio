import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle, SectionSubText } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  // const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionDivider divider colorAlt/>
        <SectionTitle>
          About Me
      </SectionTitle>
      <SectionSubText style={{marginTop: "3rem"}}>
        I hold a Master of Science Degree (Major in Electrical Engineering and Minor in Computer Science) from West Virgina University, Morgantown.
      </SectionSubText>
      <SectionSubText>
        While I was studying to obtain the specialist academic qualification, I held an Graduate Teaching Assistant (GTA) postion where I developed a Graphical User Interface (GUI) tool. Over the last five years, gained experience in conceptualizing and development of elegant and user friendly websites, with a strong ability to implement mock ups and understanding of delightful user experience design. Highly adaptable, flexible and a proven team player. 
      </SectionSubText>
      <SectionSubText>
        While I am not coding or pushing pixels, you'll find me in the gym or pursuing my papercraft hobby or watching documentaries.
      </SectionSubText>
    </Section>
  );
};

export default Timeline;
