import styled from 'styled-components'

export const AlbumItemBox = styled.div`
  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;
    &:hover .play {
      display: block;
    }

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }

    .play {
      display: none;
      position: absolute;
      right: 10px;
      bottom: 5px;
      left: 72px;
      width: 22px;
      height: 22px;
      background-position: 0 -85px;
    }
  }
  .info {
    font-size: 12px;
    width: 100px;
    text-align: left;

    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist-name {
      color: #666;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`
