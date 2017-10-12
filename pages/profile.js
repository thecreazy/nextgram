import React from 'react'
import styled from 'styled-components'

const MainDiv =  styled.div`
  padding: 100px;
`
const Heading =  styled.h1`
  font: 15px Monaco;
`
const Username =  styled.b`
  color: blue;
`

export default ({ url: { query: { id } } }) => (
  <MainDiv>
    <Heading>
      User profile:
      {' '}
      <Username>{id}</Username>
    </Heading>
  </MainDiv>
)
