import data from "../../assets/db.json";
import TableColumb from "./TableColumn";

const Table = () => {
  function getTableColumns(data) {
    return data
      .map((student) => {
        return TableColumb(student);
      })
      .join(" ");
  }

  return `
  <div class="mdc-data-table">
    <div class="mdc-data-table__table-container">
      <table class="mdc-data-table__table" aria-label="Dessert calories">
        <thead>
          <tr class="mdc-data-table__header-row">
            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Name</th>
            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Birthday</th>
            <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Hobby</th>
            <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Rating</th>
          </tr>
        </thead>
        <tbody class="mdc-data-table__content">
          ${getTableColumns(data)}
        </tbody>
      </table>
    </div>
  </div>
  `;
};

export default Table;
