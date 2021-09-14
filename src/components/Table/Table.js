const Table = () => {
  const customers = [
    {
      id: "henry-gerard",
      firstName: "Henry",
      lastName: "Gerard",
      age: 21,
    },
    {
      id: "michael-platini",
      firstName: "Michael",
      lastName: "Platini",
      age: 40,
    },
    {
      id: "louis-figo",
      firstName: "Louis",
      lastName: "Figo",
      age: 37,
    },
    {
      id: "cristiana-ronaldinho",
      firstName: "Cristiana",
      lastName: "Ronaldinho",
      age: 15,
    },
    {
      id: "leonardo-messiah",
      firstName: "Leonardo",
      lastName: "Messiah",
      age: 25,
    },
  ];
  const customerDetailsRecords = [
    {
      id: "henry-gerard",
      city: "Los Angeles",
      gender: "Male",
      pin: 3123,
      country: "USA",
      state: "CA",
    },
    {
      id: "michael-platini",
      city: "Miami",
      gender: "Male",
      pin: 3176,
      country: "USA",
      state: "FL",
    },
    {
      id: "louis-figo",
      city: "Seattle",
      gender: "Male",
      pin: 3176,
      country: "USA",
      state: "WA",
    },
    {
      id: "cristiana-ronaldinho",
      city: "Denver",
      gender: "Female",
      pin: 3178,
      country: "USA",
      state: "CO",
    },
    {
      id: "leonardo-messiah",
      city: "Portland",
      gender: "Female",
      pin: 3165,
      country: "USA",
      state: "OR",
    },
  ];
  const displayDetails = (e, item) => {
    alert(item.firstName + " " + item.lastName);
  };

  const customoreRows = customers.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>
          <button onClick={(e) => displayDetails(e, item)}>View Details</button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
      </thead>
      <tbody>{customoreRows}</tbody>
    </table>
  );
};

export default Table;

const subTable = (props) => {
  let id = props.item.id;

  return (
    <table>
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
      </thead>
      <tbody></tbody>
    </table>
  );
};
