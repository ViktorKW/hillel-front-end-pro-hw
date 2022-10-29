const TableColumb = ({ name, dob, hobby, rating }) => {
  return `
  <tr class="mdc-data-table__row">
    <th class="mdc-data-table__cell" scope="row">${name}</th>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${dob}</td>
    <td class="mdc-data-table__cell mdc-data-table__cell--numeric">${hobby}</td>
    <td class="mdc-data-table__cell">${rating}</td>
  </tr>`;
};

export default TableColumb;
