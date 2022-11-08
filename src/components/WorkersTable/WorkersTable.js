import React from "react";
import workers_db from "../../model/workers_db.json";

// function createWorkerRow(element) {
//   return (
//   <>    <tr>
//   <td>{element.name}</td>
//   <td>{element.surname}</td>
//   <td>{element.worked_days}</td>
//   <td>{element.day_salary}</td>
// <tr/></>)
// }

class WorkersTable extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <table className="dodo">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Days worked</th>
            <th>Day salary</th>
          </tr>
          {workers_db.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.name}</td>
                <td>{element.surname}</td>
                <td>{element.worked_days}</td>
                <td>{element.day_salary}</td>
              </tr>
            );
          })}
          <tr>
            {/* <td>{workers_db[1].name}</td>
            <td>{workers_db[1].surname}</td>
            <td>{workers_db[1].worked_days}</td>
            <td>{workers_db[1].day_salary}</td> */}
          </tr>
        </tbody>
      </table>
    );
  }
}

export default WorkersTable;
