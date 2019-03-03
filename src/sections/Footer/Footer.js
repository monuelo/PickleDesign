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
                                    <a href='#'>
                                        Profile
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='#'>
                                        Projects
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a href='#'>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <ul className={classNames('text-small', 'text-uppercase', 'list-inline')}>
                                <li className='list-inline-item'>
                                    <a>
                                        <img className={styles.socialIcon} src={GitHub} />
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a>
                                        <img className={styles.socialIcon} src={Behance} />
                                    </a>
                                </li>
                                <li className='list-inline-item'>
                                    <a>
                                        <img className={styles.socialIcon} src={LinkedIn} />
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