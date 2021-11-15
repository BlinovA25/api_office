
function makeRequest(table) {
    var employee_id = document.getElementById('inputField').value;

    $("#"+table).empty();

    $.ajax('http://localhost:3000/'+table, {
        success: function (data){
            data.forEach(employee => {
                if (employee_id == "") {
                    if(table == "offices")
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+employee.id+"; Name - "+employee.name+"; city - "+employee.city+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "departments")
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+employee.id+"; Name - "+employee.name+"; office ID - "+employee.office_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "employees")
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+employee.id+"; Name - "+employee.name+"; office ID - "+employee.department_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                } else {
                    if(table == "offices" && employee.id == employee_id)
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+employee.id+"; Name - "+employee.name+"; city - "+employee.city+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "departments" && employee.id == employee_id)
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+employee.id+"; Name - "+employee.name+"; office ID - "+employee.office_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "employees" && employee.id == employee_id)
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+employee.id+"; Name - "+employee.name+"; office ID - "+employee.department_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                }
            } )
        }
    });
}

function deleteFromTable(table)
{
    let employee_id = document.getElementById('inputField').value;
    $.ajax({
        url: 'http://localhost:3000/'+table+'/'+employee_id,
        method: 'delete',
        dataType: 'json' }
    )
}

function addEmployee()
{
    let employee_name = document.getElementById('inputEmployeeName').value;
    let employee_department = document.getElementById('inputEmployeeDepartment').value;

    $.ajax({
        url: 'http://localhost:3000/employees',
        method: 'POST',
        dataType: 'json',
        data: {
            name: employee_name,
            department_id: employee_department
        }})
}

function updateEmployee()
{
    let employee_id = document.getElementById('inputEmployeeID').value;

    let employee_name = document.getElementById('inputEmployeeName').value;
    let employee_department = document.getElementById('inputEmployeeDepartment').value;

    $.ajax({
        url: 'http://localhost:3000/employees/'+employee_id,
        method: 'put',
        dataType: 'json',
        data: {
            "name": employee_name,
            "department_id": employee_department
        }}
    )
}


