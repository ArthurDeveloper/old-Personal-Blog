import styles from '../../styles/code.module.scss';

export default function Code(props) {

    return (
        <div className={styles['code-box']}>
            <code>
                <pre>
                    {props.children}
                </pre>
            </code>
        </div>
    )

}