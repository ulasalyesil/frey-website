import React, { useState, useEffect } from "react";

export default function APICall() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    const BASE_ID = process.env.REACT_APP_BASE_ID
    const TABLE_ID = process.env.REACT_APP_TABLE_ID
    const TOKEN = process.env.REACT_APP_ACCESS_TOKEN
    const URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;
    

    fetch(URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(URL);
        setData(data.records);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
    <div>
      <h1>API Call</h1>
      {/* Waitlist Submission Email Addresses (Only Render for debugging purposes) */}
      <ul>
        {data.map((record) => (
          <li key={record.id}>{record.fields.email}</li>
        ))}
      </ul>
    </div>
  );
}
