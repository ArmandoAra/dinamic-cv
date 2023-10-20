import { ICurriculumForm } from '@/interfaces';
import mongoose, { Schema, Model } from 'mongoose';


export interface InterfaceCurriculum extends ICurriculumForm { };

const curriculumSchema = new Schema({

    name: { type: String, required: true },
    surname: { type: String, required: true },
    age: { type: Number, required: true },
    telephone: { type: Number, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    acts: { type: Array, required: true },
    images: { type: Array, required: true },
    formation: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: Array, required: true },
    workExperience: { type: Array, required: true },
    actualWorkPlace: { type: String, required: true },

}, {
    timestamps: true //Hace que mongo cree el timestamp
});


//crear un indice, nos va a servir para buscar rapidamente entre dos columnas
curriculumSchema.index({ title: 'text', tags: 'text' });

//Haciendo da creacion del modelo
const CurriculumModel: Model<InterfaceCurriculum> = mongoose.models.Curriculum || mongoose.model('Curriculum', curriculumSchema);

export default CurriculumModel;