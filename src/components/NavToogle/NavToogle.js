import React, { Component } from 'react';
import styles from './NavToogle.module.css';

class NavToogle extends Component {
    render() {
        return (
            <div className={styles.navToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default NavToogle;