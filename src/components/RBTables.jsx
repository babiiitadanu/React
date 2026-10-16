import Table from "react-bootstrap/Table";

function RBTables() {
  const employees = [
    {
      name: "Joseph Oden",
      department: "🛒 Sales",
      salary: "$64,000",
      date: "Aug 3, 2024",
      payment: "PENDING",
      employment: "Full-Time",
    },
    {
      name: "Carol Brown",
      department: "☎ Support",
      salary: "$82,000",
      date: "Aug 6, 2024",
      payment: "NEGOTIATING",
      employment: "Part-Time",
    },
    {
      name: "Peggy Castello",
      department: "♢ Design",
      salary: "$120,000",
      date: "Aug 13, 2024",
      payment: "FAILED",
      employment: "Full-Time",
    },
    {
      name: "Katherine Grey",
      department: "🛒 Sales",
      salary: "$75,000",
      date: "Aug 19, 2024",
      payment: "PAID",
      employment: "Full-Time",
    },
    {
      name: "Sandra Palace",
      department: "♢ Design",
      salary: "$54,000",
      date: "Aug 22, 2024",
      payment: "PENDING",
      employment: "Contractor",
    },
    {
      name: "Nelson Metz",
      department: "🛒 Sales",
      salary: "$28,000",
      date: "Aug 27, 2024",
      payment: "OVERDUE",
      employment: "Part-Time",
    },
    {
      name: "Roger Ryder",
      department: "🛒 Sales",
      salary: "$93,000",
      date: "Aug 31, 2024",
      payment: "PAID",
      employment: "Contractor",
    },
    {
      name: "Evan Walter",
      department: "☎ Support",
      salary: "$55,000",
      date: "Sep 5, 2024",
      payment: "NEGOTIATING",
      employment: "Full-Time",
    },
    {
      name: "Julien Saint",
      department: "♢ Design",
      salary: "$87,000",
      date: "Sep 11, 2024",
      payment: "OVERDUE",
      employment: "Full-Time",
    },
  ];

  const getPaymentVariant = (status) => {
    if (status === "PAID") return "success";
    if (status === "PENDING") return "primary";
    if (status === "FAILED") return "danger";
    if (status === "NEGOTIATING") return "warning";
    if (status === "OVERDUE") return "info";

    return "secondary";
  };

  return (
    <div className="container-fluid p-4">
         <h2>Table</h2>

      {/* Responsive Table */}
      <div className="table-responsive mt-4">

        <Table hover className="align-middle">

          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>Employment Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>

                <td className="fw-semibold">
                  {employee.name}
                </td>

                <td>
                  {employee.department}
                </td>

                <td>
                  {employee.salary}
                </td>

                <td>
                  {employee.date}
                </td>

                <td>
                  <span
                    className={`badge rounded-pill text-${getPaymentVariant(
                      employee.payment
                    )} bg-${getPaymentVariant(
                      employee.payment
                    )}-subtle`}
                  >
                    {employee.payment}
                  </span>
                </td>

                <td>
                  {employee.employment}
                </td>

              </tr>
            ))}
          </tbody>

        </Table>

      </div>

    </div>
  );
}

export default RBTables; 