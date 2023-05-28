import './Projects.css';

import { useState, useEffect, useRef } from 'react';
import { ImEarth } from "react-icons/im";
import { DiGithubBadge } from "react-icons/di";
import { motion } from 'framer-motion';
import image1 from '../assets/project1.png';
import image2 from '../assets/project2.png';
import image3 from '../assets/project3.png';
import image4 from '../assets/project4.png';
import { Link } from 'react-router-dom';

const images = [
  { image: image1, link: 'https://sigmanager.netlify.app' },
  { image: image2, link: 'https://calling-system.netlify.app' },
  { image: image3, link: 'https://gitrepository.netlify.app' },
  { image: image4, link: 'https://weatherforecastnow.netlify.app' },
];

function Projects() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <div className='projects'>
      <h1>Meus Projetos</h1>

      <motion.div className='bodyProjects' whileTap={{ cursor: "grabbing" }}>
        <motion.div
          ref={carousel}
          className='inner'
          drag="x"
          dragConstraints={{ left: -700, right: 700 }}
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map(item => (
            <motion.div className='image-item' key={item.link}>
              <Link to={item.link} target='_blank'>
                <img src={item.image} alt='imagem' />
                <button className='viewProject'>Ver projeto</button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <h5 className='h5Title linkViewAllProjecth5'>
        <Link className='linkViewAllProject' to='https://github.com/ricsjs?tab=repositories' target='_blank'>
          Ver mais projetos
        </Link>
      </h5>
    </div>
  );
}

export default Projects;
