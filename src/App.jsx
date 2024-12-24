import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const UserData = ({ data }) => {
  return (
    <div className="user-card">
      <h3>{data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <button onClick={()=> alert(`the person is from country code of ${data.address.zipcode}`)}>View</button>
    </div>
  );
};

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;

  const lastIndexOfRecord = currentPage * recordsPerPage;
  const firstIndexOfRecord = lastIndexOfRecord - recordsPerPage;
  const records = userInfo.slice(firstIndexOfRecord, lastIndexOfRecord);

  const totalPages = Math.ceil(userInfo.length / recordsPerPage);
  console.log(totalPages);
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);
  console.log(pageNumbers);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserInfo(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="app">
        {records.length ? (
          records.map((user) => (
            <div key={user.id}>
              <UserData data={user} />
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {pageNumbers.map((num) => (
          <button
            key={num}
            onClick={() => changePage(num)}
            className={currentPage === num ? "active" : ""}
          >
            {num}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;