import styled from 'styled-components'

export const HeaderSong = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: center;
    z-index: 9999; //放到这里成功至于顶部了

    .title {
      font-size: 24px;
      font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
      font-weight: normal;
    }

    .select {
      background: url(${require('@/assets/img/button2.png')}) no-repeat 0 9999px;
      background-position: right -100px;
      padding: 0 5px 0 0;
      height: 31px;
      line-height: 31px;

      span {
        background: url(${require('@/assets/img/button2.png')}) no-repeat 0 9999px;
        background-position: 0 -59px;
        color: #0c73c2 !important;
        padding: 0 10px 0 15px;
        margin: 0 0 0 12px;
        font-size: 14px;
        display: inline-block;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;

        .icon {
          display: inline-block;
          margin-left: 5px;
          width: 8px;
          height: 5px;
          background: url(${require('@/assets/img/icon.png')}) no-repeat 0 9999px;
          background-position: -70px -543px;
          vertical-align: middle;
        }
      }
    }
    &:hover {
      filter: brightness(1.05);
    }
  }

  .right {
    display: flex;
    align-items: center;
    padding-top: 3px;
    color: #333;
    text-decoration: none;
    font-size: 14px;

    .hot {
      width: 46px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      background-color: #c20c0c;
      color: #fff;
      border-radius: 3px;
      border: 1px solid #aaa;
      &:hover {
        text-decoration: underline;
        color: #333;
      }
    }
  }
`
