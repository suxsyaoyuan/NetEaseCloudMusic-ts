import styled from 'styled-components'

export const HotDjWrapper = styled.div`
  padding: 20px;

  .list {
    .item {
      display: flex;
      margin-top: 20px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }
      .info {
        margin: 8px 0 0 10px;
        display: flex;
        flex-direction: column; /* 设置垂直布局 */
        .name {
          color: #333;
          font-size: 14px;
          font-weight: 700;
          &:hover {
            text-decoration: underline;
          }
        }

        .alias {
          margin-top: 5px;
          color: rgb(102, 102, 102);
        }
      }
    }
  }
`
