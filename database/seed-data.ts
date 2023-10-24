import bcrypt from 'bcryptjs';

//Interfaz para los productos
interface SeedCurriculum {
    name: string;
    surname: string;
    age: number;
    telephone: number;
    email: string;
    img: string;
    country: string;
    acts: string[];
    images: string[];
    formation: string;
    description: string;
    skills: string[];
    workExperience: string[];
    actualWorkPlace: string;
}


//Interfaz de los usuarios de prueba
interface SeedUser {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'user';
}

interface SeedData {
    users: SeedUser[]; //Con esto sera mas facil construir usuarios de prueba
    curriculum: SeedCurriculum[]; //Con esto sera mas facil construir curriculum de prueba 
}




export const initialData: SeedData = {
    users: [
        {
            name: 'Armando',
            email: 'usuario@email.com',
            password: bcrypt.hashSync('123456', 10),
            role: 'admin'
        },
        {
            name: 'Eduardo',
            email: 'edu@email.com',
            password: bcrypt.hashSync('123456', 10),
            role: 'user'
        },
        {
            name: 'Carlos Garcia',
            email: 'carlos@email.com',
            password: bcrypt.hashSync('123456', 10),
            role: 'user'
        },
    ],
    curriculum: [
        {
            name: 'Armando',
            surname: 'Garcia',
            age: 25,
            telephone: 123456789,
            email: 'armando@email.com',
            img: 'https://i.imgur.com/0Z3XQdP.jpeg',
            country: 'Mexico',
            acts: ['Developer', 'Designer'],
            images: ['https://i.imgur.com/0Z3XQdP.jpeg'],
            formation: 'Ingeniero en sistemas computacionales',
            description: 'Soy un desarrollador web',
            skills: ['HTML', 'CSS', 'JS', 'React', 'Node'],
            workExperience: ['Developer', 'Designer'],
            actualWorkPlace: 'Developer',
        },
        {
            name: 'Eduardo',
            surname: 'Garcia',
            age: 25,
            telephone: 123456789,
            email: 'eduardo@gmail.com',
            img: 'https://i.imgur.com/0Z3XQdP.jpeg',
            country: 'Mexico',
            acts: ['Developer', 'Designer'],
            images: ['https://i.imgur.com/0Z3XQdP.jpeg'],
            formation: 'Ingeniero en sistemas computacionales',
            description: 'Soy un desarrollador web',
            skills: ['HTML', 'CSS', 'JS', 'React', 'Node'],
            workExperience: ['Developer', 'Designer'],
            actualWorkPlace: 'Developer',
        },
        {
            name: 'Juan',
            surname: 'Garcia',
            age: 25,
            telephone: 123456789,
            email: 'juan@mail.com',
            img: 'https://i.imgur.com/0Z3XQdP.jpeg',
            country: 'Mexico',
            acts: ['Developer', 'Designer'],
            images: ['https://i.imgur.com/0Z3XQdP.jpeg'],
            formation: 'Ingeniero en sistemas computacionales',
            description: 'Soy un desarrollador web',
            skills: ['HTML', 'CSS', 'JS', 'React', 'Node'],
            workExperience: ['Developer', 'Designer'],
            actualWorkPlace: 'Developer',
        }
    ]
}