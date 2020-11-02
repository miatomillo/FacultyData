console.log("employees", employees)
var getPhoto=function(employee)
{
    return employee.photo
}
d3.select("body")
.append("img")
.selectAll("img")
.data(employees)
.enter()
.append("img")
.text(function(employee))