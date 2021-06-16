import { useEffect } from 'react';

import styles from '../../styles/code.module.scss';

export default function Code(props) {

    return (
        <div className={styles['code-box']}>
            <pre>
                <code>
                    {props.children}
                </code>
            </pre>
        </div>
    )

}