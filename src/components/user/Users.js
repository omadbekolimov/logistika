import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Input, Button, Table, Container, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap'
import { config, url } from '../api'

const Users = () => {

  const [user, setUser] = useState([]);
  const [addUser, setAddUser] = useState(true);

  const openAddModal = () => setAddUser(!addUser);

  useEffect(() => {
    axios.get(url + 'user',config)
    .then((res) => {
      setUser(res.data.body)
    }).catch(err => {})
  })

  return (
    <Container className='mt-5'>
      <h1 className='text-center'>Users</h1>
      <div className='table-information d-flex justify-content-between mt-5'>
        <Button color='primary'>+Add User</Button>
        <Input className='w-25' id='search-user' type='search' placeholder='🔍Search...' />
      </div>
      <Table bordered hover className='mt-3 '>
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th colSpan={2} className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, idx) => (
          <tr key={idx}>
            <th>{idx + 1}</th>
            <th>{item.name}</th>
            <th>{item.phoneNumber}</th>
            <th>{item.password}</th>
            <th><Button color='warning'>Edit</Button></th>
            <th><Button color='info'>info</Button></th>
          </tr>
          ))}
        </tbody>
      </Table>

      {/* add user */}
      <Modal centered className='w-25' isOpen={addUser} toggle={openAddModal}>
        <ModalHeader toggle={openAddModal}>
          Add user
        </ModalHeader>
        <ModalBody>
            <Label for='name'>Name</Label>
            <Input className='mb-3' id='name' placeholder='Name' />
            <Label for='phoneNumber'>Phone Number</Label>
            <Input className='mb-3' type='number' id='phoneNumber' placeholder='Phone Number' />
            <Label for='password'>Password</Label>
            <Input className='mb-3' id='password' placeholder='Password' />
        </ModalBody>
        <ModalFooter className='d-flex justify-content-around'>
          <Button className='py-2 px-5'>Cancel</Button>
          <Button className='py-2 px-5' color='primary'>Save</Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export default Users