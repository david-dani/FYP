import bcrypt from "bcryptjs"

const users =[
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'David Dani',
        email: 'daviddani@example.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Sudikshya Koju',
        email: 'sudikoju@example.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users
