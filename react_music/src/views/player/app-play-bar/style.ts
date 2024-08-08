import styled from 'styled-components'

interface IBarOperator {
  playMode: number
}

export const AppPlayerWrapper = styled.div<IBarOperator>`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .btn {
    cursor: pointer;
  }

  .content {
    display: flex;

    .control {
      display: flex;

      .pre,
      .next {
        width: 28px;
        height: 28px;
        margin-right: 8px;
        margin-top: 4px;
      }

      .pre {
        background-position: 0 -130px;
        &:hover {
          background-position: -30px -130px;
        }
      }

      .next {
        background-position: -80px -130px;
        &:hover {
          background-position: -110px -130px;
        }
      }

      .pause {
        display: block;
        width: 36px;
        height: 36px;
        margin-right: 8px;
        background-position: 0 -165px;

        &:hover {
          background-position: -40px -165px;
        }
      }

      .play {
        display: block;
        width: 36px;
        height: 36px;
        margin-right: 8px;
        background-position: 0 -204px;

        &:hover {
          background-position: -40px -204px;
        }
      }
    }

    .head {
      width: 34px;
      height: 34px;
      display: flex;
      justify-content: space-between;
      margin-left: 15px;
      margin-right: 10px;
      cursor: pointer;

      .image {
        border-radius: 5px;
      }
    }

    .playcontent {
      width: 585px;
      display: flex;
      flex-direction: column; /* 将主轴方向更改为垂直列布局 */
      justify-content: center;

      .info {
        display: flex;
        font-size: 12px;
        cursor: pointer;
        text-shadow: 0 1px 0 #171717;
        margin-bottom: auto;
        .name {
          color: #e8e8e8;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:hover {
            text-decoration: underline;
          }
        }

        .ar {
          display: flex;
          margin-left: 15px;
          color: #9b9b9b;
          .line {
            padding: 0 1px;
          }
          .a:hover {
            text-decoration: underline;
          }
        }

        .src {
          width: 14px;
          height: 15px;
          margin-left: 15px;
          background-position: -110px -103px;
          &:hover {
            background-position: -130px -103px;
          }
        }
      }

      .progress {
        position: relative;
        color: #fff;
        height: 14px;
        line-height: 20px;
        margin-top: auto;

        .ant-slider {
          width: 466px;
          height: 9px;
          margin: 0;
          padding: 0;
          .ant-slider-rail {
            height: 9px;
            background: url(${require('@/assets/img/progress_bar.png')}) right 0;
          }
          .ant-slider-track {
            height: 9px;
            background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
          }
          .ant-slider-handle {
            position: absolute;
            top: -8px;
            width: 22px;
            height: 24px;
            background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
            &::after {
              display: none;
            }
          }
        }
        .time {
          position: absolute;
          top: -7px;
          right: 30px;
          display: flex;
          font-size: 12px;
          color: #797979;

          .current {
            color: #a1a1a1;
          }

          .divider {
            padding: 0 4px;
          }
        }
      }
    }

    .operator {
      display: flex;
      align-items: center;

      .btn {
        width: 25px;
        height: 25px;
      }
      .left {
        display: flex;
        padding: 0 15px;

        .pip {
          background: url(${require('@/assets/img/icon-pip.png')}) no-repeat 0 0;
          &:hover {
            background-position: 0 -25px;
          }
        }

        .favor {
          background-position: -88px -163px;
          &:hover {
            background-position: -88px -189px;
          }
        }

        .share {
          background-position: -114px -163px;
          &:hover {
            background-position: -114px -189px;
          }
        }
      }
      .right {
        display: flex;
        padding-left: 15px;
        background-position: -147px -248px;
        .volume {
          background-position: -2px -248px;
          &:hover {
            background-position: -31px -248px;
          }
        }

        .loop {
          background-position: ${(props) => {
            switch (props.playMode) {
              case 0:
                return '-66px -248px'
              case 1:
                return '-66px -344px'
              case 2:
                return '-3px -344px'
            }
          }};
          &:hover {
            background-position: ${(props) => {
              switch (props.playMode) {
                case 0:
                  return '-93px -248px'
                case 1:
                  return '-93px -344px'
                case 2:
                  return '-33px -344px'
              }
            }};
          }
        }

        .playlist {
          padding-left: 18px;
          text-align: center;
          color: #ccc;
          width: 59px;
          background-position: -42px -68px;
          &:hover {
            background-position: -42px -98px;
          }
        }
      }
    }
  }
`
