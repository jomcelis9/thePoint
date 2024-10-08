export default function Table(){
return(
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    FIRST NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    LAST NAME 
                </th>
                <th scope="col" class="px-6 py-3">
                    CONTACT #
                </th>
                <th scope="col" class="px-6 py-3">
                    APPOINTMENT #
                </th>
                <th scope="col" class="px-6 py-3">
                    Preferred Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Preferred Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>

        </thead>

    </table>

    <h1> TABLe</h1>


    </div>
)

}
