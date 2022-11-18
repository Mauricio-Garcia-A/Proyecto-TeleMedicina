import Img1 from '../images/img-dr-01.png'
import Img2 from '../images/img-dr-02.png'

export default function useSimuladorAPI(props) {
    const perfilesUser =[
        {
            name:'Nombre del Profesional 01',
            specialty:'Especialidad médica 01',
            img: Img1,
            amount:'1.200',
            medicalCoverage:['OSDE','Swiss Medical','Particular'],
        },
        {
            name:'Nombre del Profesional 02',
            specialty:'Especialidad médica 02',
            img: Img2,
            amount:'1.200',
            medicalCoverage:['OSDE','Swiss Medical','Particular'],
        },
        {
            name:'Nombre del Profesional 03 ',
            specialty:'Especialidad médica 03',
            img: Img1,
            amount:'1.200',
            medicalCoverage:['OSDE','Swiss Medical','Particular'],
        },
        {
            name:'Nombre del Profesional 04 ',
            specialty:'Especialidad médica 04',
            img: Img1,
            amount:'1.200',
            medicalCoverage:['OSDE','Swiss Medical','Particular'],
        },
        
        
    ]


    return {perfilesUser}
}

