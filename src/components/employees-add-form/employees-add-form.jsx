import './employees-add-form.css';
import { useState } from 'react';

function EmployeesAddForm() {
    const [name, setName] = useState('')
    const [salary, setSalary] = useState('')

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                }}
                className="add-form d-flex">
                <input type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                <input type="number"
                    value={salary}
                    onChange={(e) => {
                        setSalary(e.target.value)
                    }}
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;