console.log("employees", employees)
var getlastName=function(employee)
{
    return employee.lastName
}
d3.select("body")
.append("ol")
.selectAll("ol")
.data(employees)
.enter()
.append("li")
.text(getlastName)
.append("ol")