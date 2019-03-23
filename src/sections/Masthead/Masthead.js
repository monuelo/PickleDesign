import React, { Component } from 'react';
import styles from './Masthead.module.css';
import TextLoop from "react-text-loop";

class Masthead extends Component {

    constructor(props) {
        super(props);

        this.state = {
            roles: ['Designer', 'Developer', 'Creator'],
        }
    }

    render() {
        return (
            <div className={styles.masthead}>
                <h1 className={styles.title}>
                    Hi! I'm <span>Pickle</span>.
                </h1>
                <TextLoop children={this.state.roles} className={styles.role} interval={4000} />
            </div>
        );
    }
}

export default Masthead;