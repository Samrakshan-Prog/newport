'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
         Hi, I’m Rakshan Parthiban, a passionate full-stack developer from India. Over the past few years, I’ve explored programming through a variety of projects, from building desktop applications with Java Swing to creating web platforms with Flask and AngularJS, and more recently diving deep into the MERN stack. My core skills span MongoDB, Express.js, React, Node.js, Java, Python, Flask, AngularJS, HTML, CSS, and JavaScript, giving me flexibility to work across different environments. What excites me most about development is the problem-solving journey — turning ideas into real, working solutions.
        </p>
        <p>
    I’m always eager to learn new technologies, collaborate on meaningful projects, and grow with every challenge I take on.
    
        </p>
        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
