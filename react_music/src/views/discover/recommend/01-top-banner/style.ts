import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  .banner {
    height: 270px;
    display: flex;
    position: relative;

    .banner-left {
      position: relative;
      width: 730px;

      .item {
        overflow: hidden;
        height: 270px;
        .image {
          width: 100%;
        }
      }

      .dots {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: -8px;
        /* 将小点变成横的 不加是竖的 */
        display: flex;
        text-align: center;

        .dots-item {
          display: inline-block;
          width: 6px;
          height: 6px;
          background-color: #ccc;
          margin: 8px;
          border-radius: 50%;
          &.active {
            width: 8px;
            height: 8px;
            background-color: #c20c0c;
          }
          &:hover {
            cursor: pointer;
            background-color: #c20c0c;
          }
        }
      }
    }
  }

  .banner-right {
    width: 250px;
    height: 270px;

    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(${require('@/assets/img/download.png')}) center center;
      text-decoration: none; /* 去除链接默认下划线样式 */

      &:hover {
        cursor: pointer;
      }
    }
  }

  .banner-button {
    position: relative;

    .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      background: url(${require('@/assets/img/banner_sprite.png')});

      &:hover {
        cursor: pointer;
        background-color: rgba(128, 128, 128, 0.5);
      }
    }
    .btn-left {
      position: absolute;
      top: 100px;
      left: -1025px;
      background-position: 0 -360px;
    }
    .btn-right {
      position: absolute;
      top: 100px;
      right: -45px;
      background-position: 0 -508px;
    }
  }
`

/* 还可以不写JS直接写
export const TopBannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
` */
