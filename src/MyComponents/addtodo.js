// import React from 'react';
import React, { useState } from 'react';

const Addtodo = ({ Add }) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    return (
        <>
            <div className='addtodo'>

                <h3 id='text'>Add To Do</h3>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">Title</label>
                </div>


                <div className="form-floating">
                    <textarea
                        className="form-control"
                        id="floatingTextarea2"
                        style={{ height: 50 }}
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }}

                    />
                    <label htmlFor="floatingTextarea2">Description</label>
                </div>
                <div id='btn'>

                <button type="button" className="btn btn-outline-success" style={{ margin: "5px" }} onClick={() => { Add(title, desc); setTitle(""); setDesc("") }}>Add</button>
                </div>


            </div>



        </>
    )
}

export default Addtodo
