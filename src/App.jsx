import {useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import List from './components/List.jsx'
import Input from './components/Input.jsx'
import Button from './components/Button.jsx'

import { uiActions } from "./store/ui.js";
import { dataActions } from "./store/data.js";
import { saveDoneListItem } from "./services/index.js";

function App() {

  const input = useRef();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.ui.loading);
  const data = useSelector(state => state.data.done);

  useEffect(() => {
    const f = async () => {
      await new Promise(r => setTimeout(r, 2000));
    }

    f().then(() => {
      dispatch(uiActions.setLoading(false));
    });
  }, []);

  async function handleButtonClick() {
    dispatch(uiActions.setLoading({ loading: true }));
    try {
      const res = await saveDoneListItem(input.current.value);
      console.log("success: res=", res);
      dispatch(dataActions.addDone({ title: input.current.value, key: uuidv4() }))
      input.current.value = "";
    } catch (error) {
      console.log("click button failed: ", error.message);
    }
    dispatch(uiActions.setLoading({ loading: false }));
  }

  return (
    <>
      {loading && <p> loading ... </p>}
      <Input label="What have you done today?" name="done" type="text" ref={input} />
      <Button onClick={handleButtonClick} text="Add" />
      <List data={data} />
    </>
  )
}

export default App
