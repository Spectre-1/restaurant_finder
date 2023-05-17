import React from 'react';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <p>© 2023 Random Restaurant Finder. All rights reserved.</p>
        <div className={classes.socialMedia}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
