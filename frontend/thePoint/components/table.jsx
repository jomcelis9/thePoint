import { useEffect, useState } from "react";
import axios from 'axios';
import HeaderRow from '../components/ui/HeaderRow';
import TableBody from "./ui/TableBody";

export default function Table({children}) {


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {children}
                </table>

            </div>

        </div>
    );
}
