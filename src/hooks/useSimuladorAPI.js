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
            shifts:[
                {
                    day:11,
                    month:10,
                    year:2022,
                    hours:['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30']
                },
                {
                    day:10,
                    month:10,
                    year:2022,
                    hours:['8:00', '8:30', '10:00','16:30', '17:00', '17:30', '19:00', '19:30']
                },
                {
                    day:25,
                    month:10,
                    year:2022,
                    hours:[ '9:00', '9:30', '18:30']
                },
                {
                    day:2,
                    month:11,
                    year:2022,
                    hours:['9:00', '9:30']
                },
                {
                    day:3,
                    month:0,
                    year:2023,
                    hours:[ '17:00', '17:30', '18:00', '18:30']
                },
                {
                    day:8,
                    month:0,
                    year:2023,
                    hours:[ '8:30', '10:00','17:00', '17:30', '18:00', '18:30']
                },
                {
                    day:14,
                    month:0,
                    year:2023,
                    hours:['8:30']
                },

            ]
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

