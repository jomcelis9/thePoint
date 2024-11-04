import { CardDefault } from "../../../components/CardDefault";


const addSession = () =>{
    const [addSession,  setAddSession] = useState(false);

}

export default function PatientSessions(){
    return(
        <div className="relative">Patient Sessions
        <div>
        <div className="flex justify-center	">
        <h1>PATIENT NAME</h1>
        </div>
            <CardDefault
            patientName="PATIENT NAME"
            sessionDate="SESSION DATE"
            sessionTime="SESSION TIME"
            sessionType="SESSION TYPE"
            sessionDescription="sessionDescription"
            />

        </div>
        
        
         </div>



    )
}