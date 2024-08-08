import styled from 'styled-components'

export const LeftRankingWrapper = styled.div`
  padding: 25px 0;

  .header {
    padding: 12px 12px 10px;
    font-size: 14px;
    font-weight: 700;
    color: #000;
    font-family: simsun;
  }

  .item {
    height: 62px;
    padding-left: 20px;
    cursor: pointer;
    display: flex;

    li {
      display: flex;
      align-items: center;
    }

    &:hover,
    &.active {
      background-color: #e6e6e6;
    }

    img {
      width: 40px;
      height: 40px;
    }

    .info {
      margin-left: 20px;

      .name {
        color: #000;
      }

      .update {
        margin-top: 5px;
        color: #999;
      }
    }
  }
`
