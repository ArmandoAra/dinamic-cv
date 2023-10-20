import type { NextApiRequest, NextApiResponse } from 'next'

//Connection to database
import { db } from '@/database';
import CurriculumModel, { InterfaceCurriculum } from '@/models/Curriculum';



type Data =
    | { message: string }
    | InterfaceCurriculum[]
    | InterfaceCurriculum


export default function handleEnties(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getCurriculum(req, res);
        case 'POST':
            return postCurriculum(req, res);
        // case 'DELETE':
        // return deleteCurriculum(req, res)
        default:
            return res.status(400).json({ message: 'EndPoint not exist' })
    }
}

const getCurriculum = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    //Conexion, pedir los datos y desconectarse
    await db.connectDB();
    const curriculum = await CurriculumModel.find().sort({ created_at: 'ascending' });
    await db.disconnectDB();


    return res.status(200).json(curriculum)
}

// const deleteEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
//     const { _id } = req.body
//     //Conexion, pedir los datos y desconectarse
//     await db.connectDB();
//     const entry = await EntryModel.findById(_id)
//     entry?.deleteOne()
//     await db.disconnectDB();


//     return res.status(200).json(_id)
// }

const postCurriculum = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { name, surname, age, telephone, email,
        country, acts, images, formation,
        description, skills, workExperience, actualWorkPlace } = req.body;

    // Aqui manejamos los datos que queremos escribir en el servidor
    const newCurriculum = new CurriculumModel({
        name, surname, age, telephone, email,
        country, acts, images, formation,
        description, skills, workExperience, actualWorkPlace,
        created_at: Date.now(),
    })

    // Hacemos la conexion a la base de datos,salvamos los datos y nos desconectamos
    try {
        await db.connectDB();
        await newCurriculum.save();
        await db.disconnectDB();

        return res.status(201).json(newCurriculum)
    } catch (error) {
        await db.disconnectDB();
        console.log(error);
        return res.status(400).json({ message: 'Error to save data' })
    }

    return res.status(200).json({ message: 'createCurriculum' })
}