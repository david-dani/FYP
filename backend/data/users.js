import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'David Dani',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sudiksha Koju',
    email: 'sudi@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
