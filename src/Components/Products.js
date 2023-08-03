import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { add } from '../Store/CardSlice'
import { useDispatch, useSelector } from 'react-redux'
import { STATUES } from '../Store/ProductSlice'

import { fetchProducts } from '../Store/ProductSlice'

const Container = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: center;
/* align-items: center; */
/* margin: 0 auto; */
`

const Card = styled.div`
width: 300px;
border: 1px solid lightgray;
margin: 10px;
padding: 15px;
border-radius: 5px;
box-shadow: 1px 1px 4px lightgray;

`

const Button = styled.button`
padding: 6px 8px;
width: 90px;
background-color:purple;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 17px;

`

const Products = () => {

    // const [products, SetProducts] = useState([]);
    const { data: products, status } = useSelector((state) => state.product)

    const dispatch = useDispatch();
 
    useEffect(() => {

        dispatch(fetchProducts())
        // const FetchApiProducts = async () => {
        //     const response = await fetch("https://fakestoreapi.com/products");

        //     const data = await response.json();

        //     SetProducts(data);
        // };

        // FetchApiProducts();
    }, [])

    console.log(products);

    const handleClick = (product) => {
        dispatch(add(product));
    }



    if(status===STATUES.LOADING)
    {
        return <h2 style={{color:'blue', fontSize:"34px", marginTop:"30px"}}>LOADING...</h2>
    }

    return (
        <Container>
            {
                products.map((item) => {
                    return (
                        <Card className="card" key={item.id}>
                            <img src={item.image} style={{ height: "140px" }} />

                            <h4>{item.title}</h4>

                            <h3>Price :- <span style={{ color: "green" }}>{item.price}</span></h3>
                            <h4>Rating :- <span style={{ color: "blueviolet" }}>{item.rating.rate}</span></h4>
                            <Button onClick={() => handleClick(item)}>click </Button>
                        </Card>
                    )
                })
            }
        </Container>
    )
}

export default Products
