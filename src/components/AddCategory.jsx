import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")
    const HandleInput = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length<=1)return;
        // setCategory(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit} >
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={HandleInput}
            />
    </form>
  )
}
