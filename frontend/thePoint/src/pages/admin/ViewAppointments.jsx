import { useOutletContext } from "react-router-dom";
import Table from "../../../components/table";
import ViewConfirmedAppointments from "../../../components/ViewConfirmedAppointments";
import ViewRejectedAppointments from "../../../components/ViewRejectedAppointments";

export default function ViewAppointments() {
  // Get the 'open' state from the AdminLayout component
  const { open } = useOutletContext();

  return (
    <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
      <div>
      <h1 className="text-xl"> Pending appointments</h1>
      {/* Table  */}
            <Table />

      </div>

      <div className="mt-5" >
      <h1 className="text-xl"> Confirmed appointments</h1>
      {/* Table  */}
        <ViewConfirmedAppointments />
      </div>
      
      <div className="mt-5" >
      <h1 className="text-xl"> Rejected appointments</h1>
      {/* Table  */}
        <ViewRejectedAppointments />
      </div>



    </div>
  );
}
