import styled from 'styled-components'

export const Headerv1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -154px;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .tab {
      display: flex;
      align-items: center;
      padding-top: 3px;
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
      &:hover {
        text-decoration: underline;
        color: #333;
      }
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
