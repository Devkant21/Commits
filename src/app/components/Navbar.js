import React from 'react'

const Navbar = () => {
  return (
    <div >
        <ul className='flex justify-start text-4xl'>
            <li>
                Commits
            </li>
            
        </ul>
        <div>
            <ul className='flex justify-end space-x-5 text-4xl'>
                {/* <li>
                    Home
                </li>
                <li>
                    Home
                </li> */}
                <li>
                    Login
                </li>
            </ul>
        </div>
        

    </div>
  )
}

export default Navbar