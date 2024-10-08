import styled from 'styled-components'

export const TopDjradioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -40px;

  .arrow {
    width: 20px;
    height: 30px;
    background-image: url(${require('@/assets/img/radio_slide.png')});
    cursor: pointer;
  }

  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }

  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }

  .content {
    flex: 1;
    width: 900px;

    .category-page {
      display: flex !important;
      flex-wrap: wrap;
      padding-bottom: 20px;

      .category-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        width: 70px;
        height: 70px;
        font-size: 12px;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        border: 2px solid transparent;

        :hover {
          background-color: #eee;
        }

        &.active {
          color: #c20c0c;
          border: 2px solid #d35757;

          .image {
            background-position: -48px 0;
          }
        }

        .img {
          background-position: -48px 0 !important;
        }
        .name {
          width: 100%;
          height: 20px;
          line-height: 20px;
          text-align: center;
          color: #888888;
          font-size: 12px;
        }
      }
    }

    .dots {
      bottom: 5px;
      li {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;

        button {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #aaa;
        }
      }

      li.slick-active {
        width: 20px;
        button {
          background-color: #c20c0c;
        }
      }
    }
  }
`
