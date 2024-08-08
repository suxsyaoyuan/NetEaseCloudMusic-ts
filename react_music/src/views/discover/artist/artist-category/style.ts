import styled from 'styled-components'

export const ArtistCategoryWrapper = styled.div`
  width: 180px;
  padding: 50px 10px 40px;
  border: 1px solid #d3d3d3;
  position: relative;
  float: left;
  background-color: #fafafa;
  .content {
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;

    &:last-of-type {
      border-bottom: none;
    }
    .header {
      height: 25px;
      padding-left: 14px;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Microsoft Yahei';
    }
    .link {
      text-decoration: none;
    }
    .tag {
      display: block;
      text-decoration: none;
      color: #333;
      /* width: 160px; */
      background-position: 0 -30px;
      margin-left: 10px;
      height: 29x;
      line-height: 29px;
      padding-left: 27px;
      cursor: pointer;
    }
    .bgc {
      background-position: 0 0 !important;
      text-decoration: none;
      color: #c20c0c !important;
    }
  }
`
