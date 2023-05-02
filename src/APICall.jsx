import React, { useState, useEffect } from "react";
import globalConsts from '../src/globalConsts.json'

export default function APICall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = `https://api.airtable.com/v0/${globalConsts.airtable.BASE_ID}/${globalConsts.airtable.TABLE_ID}`;

    fetch(URL, {
      headers: {
        Authorization: `Bearer ${globalConsts.airtable.ACCESS_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
