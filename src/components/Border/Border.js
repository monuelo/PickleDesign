import React, {Component} from 'react';
import classnames from 'classnames';
import styles from './Border.module.css';

class Border extends Component {
    render() {
        return (
            <div>
                <div className={classnames(styles.borderSite, styles.bsTop)}></div>
                <div className={classnames(styles.borderSite, styles.bsRight)}></div>
                <div className={classnames(styles.borderSite, styles.bsLeft)}></div>
                <div className={classnames(styles.borderSite, styles.bsBottom)}></div>
            </div>
        );
    }
}

export default Border;