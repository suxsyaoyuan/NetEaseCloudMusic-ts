import styled from 'styled-components'

export const CategoryWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: -25px;
  width: 700px;
  border: 1px solid #ccc;
  background-color: #fefefe;
  box-shadow: 0 0 10px 2px #d3d3d3;
  border-radius: 5px;
  padding-top: 10px;

  .arrow {
    position: absolute;
    top: -11px;
    left: 110px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }

  .top {
    height: 37px;
    padding-left: 26px;
    border-bottom: 1px solid #e6e6e6;
    font-weight: normal;
    .link {
      border-bottom: 1px solid #e2e2e2;
      background: url(${require('@/assets/img/button.png')}) no-repeat;
      background-position: 0 -64px;
      width: 75px;
      height: 26px;
      line-height: 26px;
      display: inline-block;
      text-align: center;
      span {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .category {
    padding-left: 26px;
    dl {
      display: flex;
      align-items: flex-start;
    }

    dt {
      display: inline-flex;
      align-items: center;
      padding: 15px 0 10px;
      width: 70px;
      text-align: center;

      i {
        display: inline-block;
        width: 24px;
        height: 24px;
        background-position: -20px -735px;
        margin-right: 8px;
      }
    }

    dl.item1 {
      i {
        background-position: 0 -60px;
      }
    }

    dl.item2 {
      i {
        background-position: 0 -88px;
      }
    }

    dl.item3 {
      i {
        background-position: 0 -117px;
      }
    }

    dl.item4 {
      i {
        background-position: 0 -141px;
      }

      dd {
        padding-bottom: 25px;
      }
    }

    dd {
      padding-top: 18px;
      padding-left: 15px;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      border-left: 1px solid #e2e2e2;

      .item {
        margin-bottom: 8px;
      }

      a {
        color: #333;
      }

      .divider {
        margin: 0 12px;
        color: #e2e2e2;
      }
    }
  }
`
