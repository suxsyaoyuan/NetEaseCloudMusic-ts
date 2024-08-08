import styled from 'styled-components'

export const Headerv3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 23px;
  border-bottom: 1px solid #ccc;
  text-decoration: none;

  .title {
    color: #333;
    font-size: 12px;
  }

  .more {
    font-weight: normal;
    font-size: 12px;
    color: #666;
    &:hover {
      text-decoration: underline;
    }
  }
`
