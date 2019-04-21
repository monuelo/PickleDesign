import React, { Component } from 'react';
import styles from './About.module.css';
import TextLoop from "react-text-loop";

class About extends Component {

    render() {
        return (
            <div className={styles.about}>
                <div className={styles.float}>
                    <p className={styles.title}>ABOUT</p>
                    <h4>
                        COMING SOON
                    </h4>
                </div>
            </div>
        );
    }
}

export default About;