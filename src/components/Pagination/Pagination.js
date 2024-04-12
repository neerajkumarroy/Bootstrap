import { Link } from "react-router-dom";
import "../Button/Button.css";

const Pagination = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-center py-2">Bootstrap Table Classes</h2>
        <div className="col-md-6 py-5 mx-auto">
          {/* //////////-----------This Breadcrum in Bootstrap-----------//////////// */}
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/about">About</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
          <table className="table table-striped table-hover table-bordered table-sm table-responsive">
            <thead className="table-dark">
              <tr>
                <th>Row</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-primary">
                <td>1</td>
                <td>Neeraj</td>
                <td>Kumar</td>
                <td>neeraj@test.com</td>
              </tr>
              <tr className="table-warning">
                <td>2</td>
                <td>Akshay</td>
                <td>Bisht</td>
                <td>akshay@test.com</td>
              </tr>
              <tr className="table-danger">
                <td>3</td>
                <td>Ranjeet</td>
                <td>Kumar</td>
                <td>ranjeet@test.com</td>
              </tr>
              <tr className="table-secondary">
                <td>4</td>
                <td>Ajeet</td>
                <td>Rawat</td>
                <td>ajeet@test.com</td>
              </tr>
            </tbody>
          </table>
          <nav>
            {/* //////justify-content-center--justify-content-end */}
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <Link className="page-link disabled">Previous</Link>
              </li>
              <li className="page-item active">
                <Link className="page-link">1</Link>
              </li>
              <li className="page-item">
                <Link className="page-link">2</Link>
              </li>
              <li className="page-item">
                <Link className="page-link">3</Link>
              </li>
              <li className="page-item">
                <Link className="page-link">Next</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
