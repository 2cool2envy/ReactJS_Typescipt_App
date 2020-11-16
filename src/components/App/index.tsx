import React, { useState, useEffect } from "react";

import Confirmation from "../Confirmation";
import Dashboard from "../Dashboard";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";

const postURL = 'https://my-json-server.typicode.com/tri-ad-fed/task-api/tasks';

const App = () => {

  const [listData, setList] = useState([]);

  const [theText, setText] = useState('');
  const [theList, setListInput] = useState('');
  const [msg, setMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const url = 'https://my-json-server.typicode.com/tri-ad-fed/task-api/devs'
  useEffect(() => {
    setLoading(true);
    const subscriber = fetch(url)
      .then(response => response.json())
      .then(commits => { setList(commits); setLoading(false); })
      .catch((err) => { alert('Error'); setLoading(false); })

  }, []);
  const handleLanguage = (val: string) => {
    // console.log('language handler', val);
    setText(val);
    setMsg('');
  }
  const handleList = (val: string) => {
    // console.log('handleList handler', val);
    setListInput(val);
    setMsg('');
  }
  return (
    <div className="app">
      <Dashboard>
        {isLoading && <h3 style={{ padding: '10px', color: "#004085", backgroundColor: "#cce5ff" }}> Loading ...</h3>}
        <Form
          handleSubmit={() => {
            //console.log('k', theText, theList);
            if (theText.length < 1) {
              alert('Please enter input');
            }
            else {
              const postData = {
                task: theText,
                user: theList
              }
              setLoading(true);
              fetch(postURL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
              })
                .then(response => response.json())
                .then(data => {
                  //  console.log('Success:', data);
                  setMsg(`Task # ${data.id} "${data.task}" has been assigned to ${data.user} `);
                  setLoading(false);
                })
                .catch((error) => {
                  console.error('Error:', error);
                  setLoading(false);
                });
            }

            /*TODO*/
          }}
        >
          <Input id="description" label="Task description:" list={listData}
            onSelectLanguage={handleLanguage} onSelectList={handleList}
          />
          <Button kind={"primary"}>Submit</Button>

        </Form>
        {
          msg.length > 0 && <Confirmation message={msg} />
        }
      </Dashboard>
    </div>
  );

};

export default App;
