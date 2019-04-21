import React, { Component } from 'react';
import styles from './Masthead.module.css';
import TextLoop from "react-text-loop";
import WhiteLogo from "../../assets/img/WhiteLogo.png";

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
                <img src={WhiteLogo} alt='Logo' className={styles.logo}/>
                <TextLoop children={this.state.roles} className={styles.role} interval={4000} />
            </div>
        );
    }
}

export default Masthead;