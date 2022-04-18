import styled from 'styled-components'

export const STable = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;

  border: 1px solid #ccc;

  .thead {
    display: flex;
    width: 100%;

    font-weight: bold;
  }

  .tr {
    display: flex;
    flex: 1;
    padding: 5px;

    border: 1px solid #ddd;
  }

  .thead .tr {
    background-color: rgba(192, 221, 220, 0.53) !important;
  }

  .tr:nth-child(2n + 1) {
    background-color: #f8f8f8;
  }

  .th,
  .td {
    flex: 1;
    padding: 5px;

    text-align: center;
  }

  .th {
    text-transform: uppercase;
  }

  .tbody {
    width: 100%;
    height: 400px;
    overflow-y: scroll;
  }

  @media screen and (max-width: 600px) {
    .table {
      border: 0;
    }

    .thead {
      position: absolute;

      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;

      border: none;

      clip: rect(0 0 0 0);
    }

    .tr {
      display: block;
      margin-bottom: 5px;

      border-bottom: 3px solid #ddd;
    }

    .td {
      display: block;

      text-align: right;

      border-bottom: 1px solid #ddd;
    }

    .td::before {
      float: left;

      font-weight: bold;
      text-transform: uppercase;

      content: attr(data-label);
    }

    .td:last-child {
      border-bottom: 0;
    }
  }

  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    color: green;
  }
`
