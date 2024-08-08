import styled from 'styled-components'

export const SignedArtistWrapper = styled.div`
  margin: 20px;

  .list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 20px;
      background-color: #fafafa;
      text-decoration: none;
      border: 1px solid #ccc;

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        margin: 8px 0 0 10px;
        .name {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .alias {
          margin-top: 5px;
        }
      }
    }
  }

  .apply {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 30px;
      line-height: 31px;
      border-radius: 4px;
      background-color: #fafafa;
      border: 1px solid #c3c3c3;
      text-decoration: none;
      &:hover {
        background-color: #fff;
      }
    }
  }
`
