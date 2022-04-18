import styled from 'styled-components'

export const SHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 10px;

  border-bottom: 1px solid #eee;

  .headerItem {
    flex: 1;
    flex-direction: column;
    padding: 5px;
  }

  .headerField {
    width: 100%;
    margin-top: 5px;
  }

  @media screen and (max-width: 640px) {
    .header {
      flex-direction: column;
    }
  }
`
