import React, { useState } from 'react';
function App() {
  const [userName, setUserName] = useState('');
  const [data, setData] = useState({});
  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
   
    
    fetch(`https://content.newtonschool.co/v1/pr/main/users/${id}`)
      .then((response) => {   (console.log(response));
        return response.json();
      })
      .then((originalData) => {
        if (originalData) {
          setData(originalData);
        }
      });
  };
