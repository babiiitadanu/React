import React from "react";

import { Badge, Table } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function RBBadges() {
  const employees = [
    [
      "Joseph Oden",
      <>
        <i className="bi bi-cart-fill me-2"></i>
        Sales
      </>,
      "$64,000",
      "Aug 3, 2024",
      "PENDING",
      "Full-Time",
    ],

    [
      "Carol Brown",
      <>
        <i className="bi bi-telephone-fill me-2"></i>
        Support
      </>,
      "$82,000",
      "Aug 6, 2024",
      "NEGOTIATING",
      "Part-Time",
    ],

    [
      "Peggy Castello",
      <>
        <i className="bi bi-palette-fill me-2"></i>
        Design
      </>,
      "$120,000",
      "Aug 13, 2024",
      "FAILED",
      "Full-Time",
    ],

    [
      "Katherine Grey",
      <>
        <i className="bi bi-cart-fill me-2"></i>
        Sales
      </>,
      "$75,000",
      "Aug 19, 2024",
      "PAID",
      "Full-Time",
    ],

    [
      "Sandra Palace",
      <>
        <i className="bi bi-palette-fill me-2"></i>
        Design
      </>,
      "$54,000",
      "Aug 22, 2024",
      "PENDING",
      "Contractor",
    ],

    [
      "Nelson Metz",
      <>
        <i className="bi bi-cart-fill me-2"></i>
        Sales
      </>,
      "$28,000",
      "Aug 27, 2024",
      "OVERDUE",
      "Part-Time",
    ],

    [
      "Roger Ryder",
      <>
        <i className="bi bi-cart-fill me-2"></i>
        Sales
      </>,
      "$93,000",
      "Aug 31, 2024",
      "PAID",
      "Contractor",
    ],

    [
      "Evan Walter",
      <>
        <i className="bi bi-telephone-fill me-2"></i>
        Support
      </>,
      "$55,000",
      "Sep 5, 2024",
      "NEGOTIATING",
      "Full-Time",
    ],

    [
      "Julien Saint",
      <>
        <i className="bi bi-palette-fill me-2"></i>
        Design
      </>,
      "$87,000",
      "Sep 11, 2024",
      "OVERDUE",
      "Full-Time",
    ],
  ];

 
  // Payment status ke according Bootstrap colors
  const getStatusStyle = (status) => {
    if (status === "PAID") {
      return {
        bg: "success-subtle",
        text: "success",
      };
    }

    if (status === "FAILED") {
      return {
        bg: "danger-subtle",
        text: "danger",
      };
    }

    if (status === "OVERDUE") {
      return {
        bg: "primary-subtle",
        text: "primary",
      };
    }

    if (status === "NEGOTIATING") {
      return {
        bg: "warning-subtle",
        text: "warning",
      };
    }

    // PENDING
    return {
      bg: "info-subtle",
      text: "info",
    };
  };

  return (
    <div className="p-4">
      {/* Main Heading */}
      <h1 className="text-center mb-4">React Bootstrap Components</h1>

      {/* Sub Heading */}
      <h2 className="mt-4 mb-3">Badges</h2>

      {/* Table */}
      <Table hover responsive bordered className="mt-4 align-middle">
        <thead className="table-light">
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
              {/* Employee */}
              <td className="fw-semibold">{employee[0]}</td>

              {/* Department */}
              <td>{employee[1]}</td>

              {/* Salary */}
              <td>{employee[2]}</td>

              {/* Payment Date */}
              <td>
                <i className="bi bi-calendar3 me-2"></i>
                {employee[3]}
              </td>

              {/* Payment Status */}
              <td>
                <Badge
                  pill
                  className={`px-3 py-2 border-0 bg-${
                    getStatusStyle(employee[4]).bg
                  } text-${getStatusStyle(employee[4]).text}`}
                >
                  {employee[4]}
                </Badge>
              </td>

              {/* Employment Status */}
              <td>{employee[5]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default RBBadges;
