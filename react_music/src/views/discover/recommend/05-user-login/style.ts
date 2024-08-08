import styled from 'styled-components'

export const UserLoginWrapper = styled.div`
  height: 93px;
  padding-top: 0;
  background-position: 0 0;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 22px;
    color: #333;
  }

  a {
    margin-top: 16px;
    display: inline-block;
    width: 100px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;
    &:hover {
      background-position: -110px -195px;
    }
  }
`
