import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  .discover-header {
    background-color: #c20c0c;
    .content {
      .discover-nav {
        display: flex;
        padding: 0 180px;
        position: relative;
        /* 上面有条分界线 要居中 得向上移一些 */
        top: -3px;

        .item {
          height: 30px;
          width: 90px;
          background-color: #c20c0c;
          display: flex;
          align-items: center;
          justify-content: center;
          a {
            display: inline-block;
            padding: 4px 13px;
            color: #fff;
            &:hover,
            &.active {
              text-decoration: none;
              background-color: #9b0909;
              border-radius: 20px;
            }
          }
        }
      }
    }
  }
  .discover-main {
    .backtop {
      display: block;
      position: fixed;
      text-indent: -9999px;
      left: 50%;
      margin-left: 500px;
      bottom: 160px;
      width: 49px;
      height: 44px;
      background: url(${require('@/assets/img/sprite.png')}) no-repeat 0 9999px;
      background-position: -265px -47px;
      &:hover {
        cursor: pointer;
        background-position: -325px -47px;
      }
    }
  }
`
