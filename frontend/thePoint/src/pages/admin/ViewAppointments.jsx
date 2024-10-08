import { useOutletContext } from "react-router-dom";
import Table from "../../../components/table";

export default function ViewAppointments() {
  // Get the 'open' state from the AdminLayout component
  const { open } = useOutletContext();

  return (
    <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 border`}>
      <h1 className="text-xl"> Pending appointments</h1>
      {/* Table  */}
            <Table/>

    </div>
  );
}
