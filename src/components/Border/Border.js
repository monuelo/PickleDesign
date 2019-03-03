import React, {Component} from 'react';
import classNames from 'classnames';
import styles from './Border.module.css';

class Border extends Component {
    render() {
        return (
            <div>
                <div className={classNames(styles.borderSite, styles.bsTop)}></div>
                <div className={classNames(styles.borderSite, styles.bsRight)}></div>
                <div className={classNames(styles.borderSite, styles.bsLeft)}></div>
                <div className={classNames(styles.borderSite, styles.bsBottom)}></div>
            </div>
        );
    }
}

export default Border;