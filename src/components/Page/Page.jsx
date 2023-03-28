import React from 'react';
import Header from "../Header";
import List from "../List";

export default function Page(category, err) {
  if (err === true) {
    return (
      <>
        <Header />
        <div className='err-msg'>
          Oops! Ann error has occured :(
        </div>
      </>

    )
  }

  return (
    <>
      <Header/>
      <List category={category}/>
    </>
  )

};

