import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { remove } from '../Store/CardSlice'


const Container=styled.div`
background-color: whitesmoke ;
 /* background-color: red; */
 /* padding: 20px; */
`


const Cards = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;
 background-color: white;
 /* flex-direction: row; */
 /* width: 99%; */
 /* border: 1px solid gray; */
 padding: 8px 10px;
 margin: 10px 15px;
 border-radius: 5px;
 box-shadow: 1px 1px 4px white;

 /* margin: 10px; */


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

const Card = () => {

    const products = useSelector((state) => state.cart)

    const dispatch=useDispatch();

    const handleClick=(ID)=>{
        dispatch(remove(ID));
    }
    return (
        <Container>
            <h1 style={{marginTop:"15px"}}>Cart</h1>
            
                {
                    products.map((item) => {
                        return (
                            <Cards className="card" key={item.id}>
                                <img src={item.image} style={{ height:"160px", width:"160px" }} />

                                <h4 style={{width:"300px"}}>{item.title}</h4>

                                <h3>Price :- <span style={{ color: "green" }}>{item.price}</span></h3>
                                <h4>Rating :- <span style={{ color: "blueviolet" }}>{item.rating.rate}</span></h4>
                                <Button onClick={()=>handleClick(item.id)}>Remove </Button>
                            </Cards>
                        )
                    })
                }
            
        </Container>
    )
}

export default Card
