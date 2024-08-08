/* 
类型声明
1 typescript内置
2 第三方 
    *库内部已经有类型声明
    *react/react-dom =>@types/react/..
    *自己写类型声明 lodash
 */
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;

  .header-content {
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
    /* 将文本移出屏幕可见范围 */
  }

  .title-list {
    display: flex;
    line-height: 70px;

    .item {
      width: 90px;
      text-align: center;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #ccc;
        position: relative;

        &.active {
          .icon {
            display: inline-block;
          }
        }
        .icon {
          /* 上三角 */
          position: absolute;
          bottom: 0;
          left: 41px;
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 7px solid #c20c0c;
          display: none;
        }
        &:hover {
          background-color: #000;
          a {
            color: #fff;
          }
        }
      }
      /* 最后一个a有个徽标 */
      &:last-of-type a {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png')});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;
  padding-left: 25px;

  .input {
    .search {
      width: 180px;
      height: 32px;
      border-radius: 16px;

      input {
        &::placeholder {
          font-size: 12px;
        }
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin: 0 12px;
    box-sizing: border-box;
    border: 1px solid #4f4f4f;
    color: #ccc;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
      color: #fff;
      border: 1px solid #fff;
    }
  }
  .login {
    color: #666;
    width: 28px;
    display: block;
    margin-top: 2px;

    &:hover {
      color: #787878;
      text-decoration: underline;
    }
  }
`
