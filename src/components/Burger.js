import { useState } from "react";
import styled from "styled-components";


  const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top:15px;
    right:20px
  `;
const Burger = () => {
    const [open, setOpen] = useState(false)
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
    </StyledBurger>
  )
}

export default Burger