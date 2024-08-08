import styled from 'styled-components'

// size={"130px"} width={"153px"} bgp={"-845px"} play_bgp = "-43px -54px"
export const NewAlbumWrapper = styled.div`
  width: 153px;
  line-height: 1.4;

  .album-image {
    position: relative;
    width: 153px;
    height: 130px;
    overflow: hidden;
    margin-top: 15px;

    .play {
      position: absolute;
      display: none;
      bottom: 5px;
      left: 94px;
      width: 28px;
      height: 28px;
      background-position: 0 -140px;
    }
    &:hover .play {
      display: block !important;
    }
    img {
      width: 130px;
      height: 130px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -845px;
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 13px;
    width: 130px;
    .name {
      cursor: pointer;
      margin: 5px 0;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      cursor: pointer;
      color: #666;
    }
  }
`
