import React from "react";
import { Breadcrumb } from "react-bootstrap";
import {
  FaHome,
  FaCloud,
  FaFolder,
  FaProjectDiagram,
} from "react-icons/fa";

function RBBreadcrumbs() {
  return (
    <div className="bg-white p-4 rounded-4 shadow-sm border my-4">

      {/* Heading */}
      <div className="mb-3">
        <h4 className="fw-bold text-primary mb-1">
          Project Navigation
        </h4>

        <p className="text-muted mb-0">
          Navigate through your project folders
        </p>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb className="mb-0">

        <Breadcrumb.Item
          href="#"
          className="text-decoration-none"
        bsPrefix=" ">
          <FaHome className="me-2 text-primary" />
          Home
        </Breadcrumb.Item>

        <Breadcrumb.Item
          href="#"
          className="text-decoration-none"
        bsPrefix="me-3">
          <FaCloud className="me-2 text-info" />
          Cloud
        </Breadcrumb.Item>

        <Breadcrumb.Item
          href="#"
          className="text-decoration-none"
        bsPrefix="me-3">
          <FaFolder className="me-2 text-warning" />
          Files
        </Breadcrumb.Item>

        <Breadcrumb.Item
          href="#"
          className="text-decoration-none"
        bsPrefix="me-3">
          <FaProjectDiagram className="me-2 text-success" />
          Project
        </Breadcrumb.Item>

        <Breadcrumb.Item active>
          <span className="fw-bold text-danger">
            ProjectName
          </span>
        </Breadcrumb.Item>

      </Breadcrumb>
    </div>
  );
}

export default RBBreadcrumbs;

