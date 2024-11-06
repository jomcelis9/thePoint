import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // Import axios
import Table from "../../../components/table";
import TableBody from "../../../components/ui/TableBody";


export default function ClientManagement() {
    const { open } = useOutletContext();
    
    return (
        <div className={`p-4 transition-all duration-300 ${open ? "ml-0" : "ml-20"} mt-20 mb-10 border`}>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">List of Clients</h2>
            <div className="overflow-auto max-h-[500px] mb-4"> 
                <Table>
                    <TableBody
                        statusOne={"statusConfirmed"}
                        statusTwo={"statusRejected"}
                        statusThree={"statusPending"}
                        btnName1={"Confirm"}
                        btnName2={"Reject"}
                        fetchDataQuery={"users"}
                        column1={"user_id"}
                        column2={"name"}
                        column3={"email"}
                        column4={null}
                        headerOne={"Client ID"}
                        headerTwo={"Name"}
                        headerThree={"Contact Number"}
                    />
                </Table>

              </div>
        </div>
    );
}
