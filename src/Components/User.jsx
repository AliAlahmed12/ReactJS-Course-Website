const User = (props) =>{

    const userList = props.users;




    return (
        <div>
            {userList.map((user) => (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                </div>
            ))}
        </div>
    )
}


export default User;