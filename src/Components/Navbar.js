import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: whitesmoke;
  padding: 5px 20px;
`
const Links = styled.div`
display: flex;
align-items: center;

`

const Item=styled.div`
 margin-right: 30px;
 font-size: 17px;
`

const Navbar = () => {

    const items=useSelector((state)=>state.cart)
    console.log(items)
    return (
        <Container>

            <Links>
                <span style={{ fontSize: "22px", fontWeight: "bold" }}>REDUX STORE</span>

                <div style={{marginLeft:'30px'}}>
                    <Link style={{ textDecoration: "none",fontSize:'18px',color:"gray", marginRight:"10px" }} to='/'> Home</Link>
                    <Link style={{ textDecoration: "none" ,color:"gray", fontSize:'18px'}} to='/cart'>Cart</Link>
                </div>


            </Links>

            <Item>
                <span className='cartCount' style={{color:"#234", fontSize:"18px", fontWeight:"500"}}> Cart items : <span style={{color:"green",fontWeight:"bold"}}> {items.length}</span> </span>

            </Item>


        </Container>
    )
}

export default Navbar
