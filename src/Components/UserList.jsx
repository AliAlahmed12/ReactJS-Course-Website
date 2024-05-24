import User from './User'
import Layout from '../Layouts/MainLayout'

const UserList = () =>{


    const users = [
        { name: "John", age:30},
        { name: "Alice", age:25},
        { name: "Bob", age:35},
    ]



    return (
        <>

            <User users={users} />

        </>
    )
}


export default UserList;