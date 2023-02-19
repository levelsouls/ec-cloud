import React from 'react'
import styles from '../styles/ProductsList.module.css'
import Product from './product'

class Products {
    name: string;
    price: number;
    detail: string;

    constructor(name: string, price: number, detail: string){
        this.name = name;
        this.price = price;
        this.detail = detail;
    }
}

const productsList: Products[] = [
    new Products("Product1", 100, "商品1の詳細です"),
    new Products("Product2", 200, "商品2の詳細です"),
    new Products("Product3", 300, "商品3の詳細です"),
    new Products("Product4", 400, "商品4の詳細です"),
    new Products("Product5", 500, "商品5の詳細です"),
    new Products("Product6", 600, "商品6の詳細です")
]

const rows = productsList.map(( product ) =>
    <Product name={product.name} price={product.price} detail={product.detail} />
);

function ProductsList () {
    return (
        <>
        <ul className={styles.productsList}>
            {rows}
        </ul>
        </>
    );
}

export default ProductsList;