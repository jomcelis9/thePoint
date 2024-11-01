import { useState } from "react";
import Table from "../../../components/table";
import HeaderRow from '../../../components/ui/HeaderRow';
import TableBody from "../../../components/ui/TableBody";

export default function ReportsAndData() {

  return (
    <div className="p-4 transition-all duration-300 mt-20 border bg-gray-50 rounded-xl shadow-md">
      <div>
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Clinic Staff</h2>
        <Table>

          <TableBody
          
          fetchDataQuery={"therapist"}
          column1={"therapist_id"}
          column2={"therapist_name"}
          column3={"therapist_number"}
          column4={"therapist_age"}
          headerOne={"ID"}
          headerTwo={"Name"}
          headerThree={"Contact"}
          headerFour={"Hire Date"}
          actionable={false}
          id = {'therapist_id'}
          />

        </Table>
      </div>
      {/* About Section sample again*/}
    </div>
  );
}
