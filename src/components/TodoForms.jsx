import { useState,useEffect,useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function TodoForm(props) {
  const [input, setInput] = useState(props.edit?props.edit.value:'')
  const inputRef =useRef(null)

  useEffect(()=>{
    inputRef.current.focus()
  },[])
  const handleChange = e => {
    setInput(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
     { props.edit? (
        <div>
        <div className="relative mt-2 rounded-md shadow-sm flex flex-nowrap max-w-md mx-auto">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {/* <span className="text-gray-500 sm:text-sm">    <FontAwesomeIcon icon={faSearch} /></span> */}
          </div>
          <input
            type="text"
            name="text"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Add Fields"
            value={input}
            onChange={handleChange}
            ref={inputRef}
          />
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>

        </div>
        </div>
      ):
  (   
     <div>
      <div className="relative mt-2 rounded-md shadow-sm flex flex-nowrap max-w-md mx-auto">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {/* <span className="text-gray-500 sm:text-sm">    <FontAwesomeIcon icon={faSearch} /></span> */}
      </div>
      <input
        type="text"
        name="text"
        id="price"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Add Fields"
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-8 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add</button>
      </div>
  
    </div>
    )

    }
     
      </form>
    </div>
  )
}

export default TodoForm
