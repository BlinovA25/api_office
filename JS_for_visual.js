
function makeRequest(table) {
    var el_id = document.getElementById('inputField').value;

    $("#"+table).empty();

    $.ajax('http://localhost:3000/'+table, {
        success: function (data){
            data.forEach(el => {
                if (el_id == "") {
                    if(table == "offices")
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+el.id+"; Name - "+el.name+"; city - "+el.city+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "departments")
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+el.id+"; Name - "+el.name+"; office ID - "+el.office_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "employees")
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+el.id+"; Name - "+el.name+"; office ID - "+el.department_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                } else {
                    if(table == "offices" && el.id == el_id)
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+el.id+"; Name - "+el.name+"; city - "+el.city+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "departments" && el.id == el_id)
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+el.id+"; Name - "+el.name+"; office ID - "+el.office_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                    else if(table == "employees" && el.id == el_id)
                    {
                        const li = document.createElement('li');
                        li.textContent = "ID - "+el.id+"; Name - "+el.name+"; office ID - "+el.department_id+".";
                        document.querySelector('#'+table).append(li);
                    }
                }
            } )
        }
    });
}

function deleteFromTable(table)
{
    var el_id = document.getElementById('inputField').value;
    $.ajax({
        url: 'http://localhost:3000/'+table+'/'+el_id,
        method: 'delete',
        dataType: 'json' }
    )
}

function addEmployee()
{
    let emp_name = document.getElementById('empName').value;
    let emp_dep = document.getElementById('empDep').value;

    $.ajax({
        url: 'http://localhost:3000/employees',
        method: 'POST',
        dataType: 'json',
        data: {
            name: emp_name,
            department_id: emp_dep
        }})
}

function updateEmployee()
{
    var emp_id = document.getElementById('empID').value;

    var emp_name = document.getElementById('empName').value;
    var emp_dep = document.getElementById('empDep').value;

    $.ajax({
        url: 'http://localhost:3000/employees/'+emp_id,
        method: 'put',
        dataType: 'json',
        data: {
            "name": emp_name,
            "department_id": emp_dep
        }}
    )
}


