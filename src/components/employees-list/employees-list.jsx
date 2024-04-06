import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

function EmployeesList({data}) {
    return (
        <ul className="app-list list-group">
            {data.map(item => <EmployeesListItem {...item}/>
            )}
        </ul>
    )
}

export default EmployeesList;