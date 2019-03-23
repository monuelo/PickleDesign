import React, { Component } from 'react';
import styles from './Footer.module.css'
import { Container, Row, Col } from 'reactstrap';
import classNames from 'classnames';
import GitHub from '../../assets/img/github.svg'
import Behance from '../../assets/img/behance.svg'
import LinkedIn from '../../assets/img/linkedin.svg'

class Footer extends Component {
    render() {
        return (
            <footer className={classNames('footer', 'section', styles.pickleFooter)}>
                <Container>
                    <Row>
                        <Col md="12" className='text-center'>
                            <ul className={classNames('text-small', 'text-uppercase', 'list-inline')}>
                                <li className='list-inline-item'>
                                    <button>
                                        Profile
                                    </button>
                                </li>
                                <li className='list-inline-item'>
                                    <button>
                                        Projects
                                    </button>
                                </li>
                                <li className='list-inline-item'>
                                    <button>
                                        Contact
                                    </button>
                                </li>
                            </ul>
                            <ul className={classNames('text-small', 'text-uppercase', 'list-inline')}>
                                <li className='list-inline-item'>
                                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/hericlesme'>
                                        <img alt='GitHub' className={styles.socialIcon} src={GitHub} />
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a target='_blank' rel='noopener noreferrer' href='https://behance.net/hericlesme'>
                                        <img alt='Behance' className={styles.socialIcon} src={Behance} />
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/hericlesme'>
                                        <img alt='Linkedin' className={styles.socialIcon} src={LinkedIn} />
                                    </a>
                                </li>
                            </ul>
                            <span className={classNames('text-small', 'd-block')}>Made in Brazil</span>
                            <span className={classNames('text-small', 'd-block')}>© 2019 Pickle. All rights reserved.</span>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;  