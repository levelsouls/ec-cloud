import React from 'react'
import styles from '../styles/Product.module.css'

function Product (props: any) {
    return (
        <>
        <ul className={styles.product}>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.price}>{props.price + "円"}</p>
            <p className={styles.detail}>{props.detail}</p>
        </ul>
        </>
    );
}

export default Product;