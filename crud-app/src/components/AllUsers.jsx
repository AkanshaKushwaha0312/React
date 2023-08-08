
import{Button, Table, TableHead, TableBody, TableRow, TableCell, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../service/api';
import {Link} from 'react-router-dom';

const StyledTable  = styled(Table)`
width: 90%;
margin: 50px auto 0 auto;
`;

const Thread = styled(TableRow)`
background: #000;
& th {
     color: #fff;
     font-size: 20px
}
`

const Tbody = styled(TableRow)`
background: #000;
& td {
     color: #fff;
     font-size: 20px
}
`


const AllUsers = () => {
  
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersDetails();
    }, [])
   const getUsersDetails = async () => {
    let response = await getUsers();
    console.log(response);
    setUsers(response.data);
   }

   const deleteUserData = async (id) => {
    await deleteUser(id);
    getUsersDetails();
   }


    return (
         <StyledTable>
            <TableHead>
                <Thread>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </Thread>

            </TableHead>
            <TableBody>
            {
                users.map(user => (
                    <Tbody>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>

                        <Button variant="contained" style={{marginRight: 10}}component={Link} to={`/edit/${user.id}`}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
                    </Tbody>

                ))
            }

            </TableBody>

         </StyledTable>
    )

}

export default AllUsers;