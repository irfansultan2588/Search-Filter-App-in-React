import React, { useState } from 'react'

const SearchFilter = () => {

    const [inpValue, inpSetValue] = useState("")
    const myarr = ["Irfan", "Tabish", "Mohsin", "Shariq", "Ibrar", "Shayan", "Ahsan", "Hashir", "Sunny"]
    const tolowerCase = inpValue.toLowerCase()

    return (
        <>

            <div className='container'>
                <div className='container_child'>
                    <h1>Enter The Name</h1>
                    <input type="text" placeholder='Search...' onChange={(e) => { inpSetValue(e.target.value) }} value={inpValue} />
                    {myarr.filter(myarr => myarr.toLowerCase().includes(tolowerCase)).map(updatedArry => (
                        <h2>
                            {updatedArry}
                        </h2>
                    ))}
                </div>

            </div>
        </>
    )
}

export default SearchFilter