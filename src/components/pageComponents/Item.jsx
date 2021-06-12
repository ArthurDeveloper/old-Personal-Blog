import styles from '../../../src/styles/topbar.module.scss'

export default function Item(props) {

    return (
        <li className={styles['item']}>
            {props.children}
        </li>        
    )

}