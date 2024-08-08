import styled from 'styled-components'

export const Headerv4 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid #c20c0c;
  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 24px;
      font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
      font-weight: normal;
    }

    .tab {
      display: flex;
      align-items: center;
      margin: 12px 0 0 20px;
      color: #666;

      .item {
        .text {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
        .line {
          margin: 0 15px;
          color: #ccc;
        }
        &:last-child {
          .line {
            display: none;
          }
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    padding-top: 3px;
    color: #333;
    text-decoration: none;
    .more {
      font-weight: normal;
      font-size: 12px;
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
