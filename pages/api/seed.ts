import { db, initialData } from '@/database'
import { UserModel, CurriculumModel } from '@/models'
import mongoose, { Schema } from 'mongoose'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production') {
        res.status(401).json({ message: 'You have not access to this service' })
    }

    await db.connectDB()

    //Insertamos los productos
    // await UserModel.deleteMany()
    // const small = new UserModel(initialData.users[0]);
    // await small.save();
    // const data = await UserModel.find({ name: 'Armando' });
    // console.log(data);

    //Insertamos los usuarios
    await UserModel.deleteMany()
    await CurriculumModel.deleteMany()
    await UserModel.insertMany(initialData.users)
    await CurriculumModel.insertMany(initialData.curriculum)
    const data = await CurriculumModel.find({});
    console.log(data);
    console.log('Curriculum inserted')


    // En este espacio podemos hacer las operaciones que queramos
    // await ProductModel.deleteMany()
    // await ProductModel.insertMany(initialData.products)

    await db.disconnectDB()

    res.status(200).json({ message: 'The proccess was made correctly' })
}