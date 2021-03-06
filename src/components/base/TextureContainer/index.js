import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: inset 0 0 100px rgba(0, 0, 20, 0.7), 0 5px 15px rgba(0, 0, 0, 0.5);
  background: -webkit-linear-gradient(
      top,
      rgba(255, 145, 0, 0.2) 0%,
      rgba(255, 230, 48, 0.2) 80%
    ),
    -webkit-linear-gradient(20deg, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0)
          70%);
  width: 100%;
  height: 100%;
  -webkit-filter: sepia(0.1) brightness(1.1) contrast(1);
  transition: -webkit-filter 0.3s ease-in-out;
  z-index: -1;
  background-position: center;
  background-repeat: no-repeat;
`

export default function TextureContainer({ children }) {
  return <Container>{children}</Container>
}
