import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.625rem 1.25rem;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content:flex-end;
  align-items:center;

`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.5625rem;
  padding: 0.5rem;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuItem = styled.div`
  fotsize: 14px;
  cursor: pointer;
  margin-left: 	1.5625rem
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon  style={{color:"grey", fontsize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopify</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
