import React,{useState} from 'react'
export const UsersContext = React.createContext()

function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
          name:"Aparana",
          email:"aparana@gmail.com",
          mobile:"9874563210",
          dob:"2000-12-05"
        },
        {
          name:"bob",
          email:"bob@gmail.com",
          mobile:"897456345",
          dob:"1998-07-07"
        },
        {
          name:"Charlie",
          email:"charlie123@gmail.com",
          mobile:"7854126480",
          dob:"2002-01-23"
        },
        {
          name:"Della",
          email:"della456@gmail.com",
          mobile:"6321459870",
          dob:"2002-09-06"
        }
      ])
  return <>
    <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
  </>
}

export default UserContextComponent