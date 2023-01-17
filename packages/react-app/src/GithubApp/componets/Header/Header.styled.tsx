import styled from 'styled-components'

export const SHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10px;

  border-bottom: 1px solid #eee;

  .headerItem {
    flex: 1;
    flex-direction: column;
  }

  .headerItem.left {
    padding-right: 5px;
  }

  .headerItem.right {
    padding-left: 5px;
  }

  .headerField {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    .header {
      flex-direction: column;
    }
  }
`
