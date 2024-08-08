import styled from 'styled-components'

export const RankingListItemWrapper = styled.div`
  width: 243px;

  .top {
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;
    .image {
      width: 80px;
      height: 80px;
      position: relative;
      img {
        width: 80px;
        height: 80px;
      }
    }
    .desc {
      margin: 5px 0 0 10px;
      a {
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }
      .btn {
        display: inline-block;
        text-indent: -9999px;
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
      }
      .play {
        background-position: -267px -205px;
        &:hover {
          background-position: -267px -235px;
        }
      }
      .favor {
        background-position: -300px -205px;
        &:hover {
          background-position: -300px -235px;
        }
      }
    }
  }
  .list {
    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      &:nth-child(-n + 3) .index {
        color: #c10d0c;
      }
      .index {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }
      .info {
        color: #000;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;

        .name {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
        }
        &:hover {
          cursor: pointer;
          text-decoration: underline;
          .operate {
            display: block;
          }
        }

        .operate {
          display: flex;
          width: 82px;
          display: none;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            text-indent: -9999px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
            &:hover {
              background-position: -267px -288px;
            }
          }
          .add {
            position: relative;
            top: 2px;
            background-position: 0 -700px;
            &:hover {
              background-position: -22px -700px;
            }
          }
          .favor {
            background-position: -297px -268px;
            &:hover {
              background-position: -297px -288px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 32px;
    margin-right: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    a {
      color: #000;
    }
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`
