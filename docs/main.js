function Download() {
    // create a jonso file and place the jonson data in "Users" : [{
    // "id": {ID},
    // "name": "{Name}",
    // "username": "{Username}",
    // "email": "{Email}",
    // "status": "{Status}",
    // "relationship": "{Relationship}",
    // "phone": "{Phone}",
    // "country": "{Country}",
    // "age": "{Age}",
    // }]
    var table = document.getElementById("table");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var tableRow = tableBody.getElementsByTagName("tr");
    // in all the rows, get the data without the first one (the header). Then create a new array with the data
    // rememeber to put the data like this "name" : "{Name}" , "username" : "{Username}" , etc.
    var data = [];
    for (var i = 1; i < tableRow.length; i++) {
        var tableData = tableRow[i].getElementsByTagName("td");
        try {
            var user = {
                "name": tableData[1].innerHTML,
                "username": tableData[2].innerHTML,
                "email": tableData[3].innerHTML,
                "phone": tableData[4].innerHTML,
                "status": tableData[5].innerHTML,
                "relationship": tableData[6].innerHTML,
                "age": tableData[7].innerHTML,
                "country": tableData[8].innerHTML
            };
        } catch (err) {
            //  if the user is deleted prevent from adding it to the array
            console.log(err);
            if (tableRow[i].classList.contains("Removed")) {
                continue;
            }
        }
        data.push(user);
    }

    var json = JSON.stringify(data);
    var newJson = "{" + '"Users"' + ":" + json + "}";
    var blob = new Blob([newJson], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "Users.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function save() {
    var inputField = document.getElementsByClassName("inputField");
    var inputFieldValue = [];
    // get the tr without the class tableBreak
    var table = document.getElementById("table");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var tableRow = tableBody.getElementsByTagName("tr");


    for (var i = 0; i < tableRow.length; i++) {
        if (tableRow[i].classList.contains("tableBreak") == false) {

            var tableData = tableRow[i].getElementsByTagName("td");
            tableData[1].innerHTML = inputField[0].value;
            tableData[2].innerHTML = inputField[1].value;
            tableData[3].innerHTML = inputField[2].value;
            tableData[4].innerHTML = inputField[3].value;
            tableData[5].innerHTML = inputField[4].value;
            tableData[6].innerHTML = inputField[5].value;
            tableData[7].innerHTML = inputField[6].value;
            tableData[8].innerHTML = inputField[7].value;
        }
    }
    cancel();
}

function cancel() {

    var inputField = document.getElementsByClassName("inputField");

    // get all tr inside of the table and set display to block
    var table = document.getElementById("table");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var tableRow = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < tableRow.length; i++) {
        tableRow[i].classList.remove("tableBreak");
    }

    // get a button with class "tableBreak" and set it as a variable
    var button = document.getElementsByClassName("tableBreak");
    // if "modify" is in the buttons innerHTML remove the class "tableBreak"
    for (var i = 0; i < button.length; i++) {
        if (button[i].innerHTML == "Modify") {
            button[i].classList.remove("tableBreak");
        }
    }

    try {
        formDiv = document.getElementById("formDiv");
        formDiv.classList.remove("formDiv");
        formDiv.id = "";
        formDiv.innerHTML = "";
    } catch (err) {
        console.log(err);
    }


}

function modifyUser(id) {

    var modify = document.getElementById("modify" + id);
    modify.classList.add("tableBreak");

    var table = document.getElementById("table");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var tableRow = tableBody.getElementsByTagName("tr")[id];
    var tableData = tableRow.getElementsByTagName("td");
    var tableDataLength = tableData.length;
    var tableDataArray = [];
    for (var i = 0; i < tableDataLength; i++) {
        tableDataArray.push(tableData[i].innerHTML);
    }
    // Table has the following columns: id, name , username, email, phone, status, relationship, age, country.
    var id = tableDataArray[0];
    var name = tableDataArray[1];
    var username = tableDataArray[2];
    var email = tableDataArray[3];
    var phone = tableDataArray[4];
    var status = tableDataArray[5];
    var relationship = tableDataArray[6];
    var age = tableDataArray[7];
    var country = tableDataArray[8];

    // create a div to hold the form
    var formDiv = document.createElement("div");
    formDiv.id = "formDiv";
    formDiv.classList.add("formDiv");
    tableRow.appendChild(formDiv);

    // create input fields for each column of the table and set the value to the current value of the column of the user allow for modification
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", name);
    inputFields.setAttribute("id", "name");
    inputFields.setAttribute("placeholder", "Name");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", username);
    inputFields.setAttribute("id", "username");
    inputFields.setAttribute("placeholder", "Username");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", email);
    inputFields.setAttribute("id", "email");
    inputFields.setAttribute("placeholder", "Email");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", phone);
    inputFields.setAttribute("id", "phone");
    inputFields.setAttribute("placeholder", "Phone");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", status);
    inputFields.setAttribute("id", "status");
    inputFields.setAttribute("placeholder", "Status");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", relationship);
    inputFields.setAttribute("id", "relationship");
    inputFields.setAttribute("placeholder", "Relationship");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", age);
    inputFields.setAttribute("id", "age");
    inputFields.setAttribute("placeholder", "Age");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "text");
    inputFields.setAttribute("value", country);
    inputFields.setAttribute("id", "country");
    inputFields.setAttribute("placeholder", "Country");
    inputFields.setAttribute("class", "inputField");
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "button");
    inputFields.setAttribute("value", "Update");
    inputFields.setAttribute("id", "update");
    inputFields.setAttribute("class", "inputField");
    inputFields.onclick = save;
    formDiv.appendChild(inputFields);
    var inputFields = document.createElement("input");
    inputFields.setAttribute("type", "button");
    inputFields.setAttribute("value", "Cancel");
    inputFields.setAttribute("id", "cancel");
    inputFields.setAttribute("class", "inputField");
    inputFields.onclick = cancel;
    formDiv.appendChild(inputFields);


    // hide all other rows
    var tableRows = tableBody.getElementsByTagName("tr");
    for (var i = 0; i < tableRows.length; i++) {
        if (i != id) {
            tableRows[i].classList.add("tableBreak");
        }
    }


}

function newUser() {

    const tableBody = document.getElementById("table").getElementsByTagName("tbody")[0];

    // get all "tr" elements in the table
    const tableRows = tableBody.getElementsByTagName("tr");
    // get the last "tr" element in the table
    var lastTableRow = tableRows[tableRows.length - 1];
    // get the "td" elements in the last "tr" element
    var lastTableData = lastTableRow.getElementsByTagName("td")[0];
    // get the id of the last "td" element
    var lastTableDataId = lastTableData.innerHTML;
    // get the next id and make a int
    var nextId = parseInt(lastTableDataId) + 1;

    tableRow = document.createElement("tr");
    tableBody.appendChild(tableRow);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = nextId;
    tableHeader.classList.add("tableBreak");
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Name";
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Username";
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Email";
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Phone";
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Status";
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Relationship";
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Age";
    tableRow.appendChild(tableHeader);
    tableHeader = document.createElement("td");
    tableHeader.innerHTML = "New User : Country";
    tableRow.appendChild(tableHeader);

    var button = document.createElement("button");
    button.setAttribute("id", "delete");
    button.setAttribute("onclick", "deleteUser(" + nextId + ")");
    button.innerHTML = "Delete";
    tableRow.appendChild(button);
    button = document.createElement("button");
    button.setAttribute("id", "modify" + nextId);
    button.setAttribute("class", "modify");
    button.setAttribute("onclick", "modifyUser(" + nextId + ")");
    button.innerHTML = "Modify";
    tableRow.appendChild(button);


}

function deleteUser(id) {

    // warning message to confirm the deletion of the user
    var r = confirm("Are you sure you want to delete this user?" + " This is a permanent action and cannot be undone!");
    if (r == true) {

        cancel();

        var table = document.getElementById("table");
        var tableBody = table.getElementsByTagName("tbody")[0];
        var tableRow = tableBody.getElementsByTagName("tr")[id];
        tableRow.classList.add("Removed");
        tableRow.innerHTML = "<td>" + tableRow.innerHTML.split("</td>")[0] + "deleted</td>";
        tableRow.style.backgroundColor = "transparent";
        tableRow.style.color = "white";
        tableRow.style.fontWeight = "bold";
    } else { return }
}

function main() {
    const menuDiv = document.getElementById("tableControl");
    menuDiv.classList.remove("tableBreak");

    var File = document.getElementById("jFile").files[0];
    var HidMenu = document.getElementsByClassName("getData")[0];
    HidMenu.style.display = "none";
    var reader = new FileReader();
    reader.readAsText(File);
    reader.onload = function(event) {
        var json = event.target.result;
        var data = JSON.parse(json);

        var users = data.Users;
        // get amount of users within the json file without using the length property use '{}' inside of '[]' to get the length of the array
        var amountOfUsers = Object.keys(users).length;
        // create a table with the users data and append it to the page (table) the table has slots (rows) for each user by users.length
        // Table has the following columns: id, name , username, email, phone, status, relationship, age, country.
        var table = document.createElement("table");
        table.setAttribute("id", "table");
        document.body.appendChild(table);
        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        var tableRow = document.createElement("tr");
        tableBody.appendChild(tableRow);
        var tableHeader = document.createElement("th");
        tableHeader.innerHTML = "ID";
        tableHeader.classList.add("tableBreak");
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Name";
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Username";
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Email";
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Phone";
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Status";
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Relationship";
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Age";
        tableRow.appendChild(tableHeader);
        tableHeader = document.createElement("th");
        tableHeader.innerHTML = "Country";
        tableRow.appendChild(tableHeader);

        tableHeader = document.createElement("br");
        tableBody.appendChild(tableHeader);

        // fill the table with the users data
        for (var i = 0; i < amountOfUsers; i++) {

            if (users[i].id == undefined) {
                users[i].id = i + 1;
            }

            tableRow = document.createElement("tr");
            tableBody.appendChild(tableRow);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].id;
            tableHeader.classList.add("tableBreak");
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].name;
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].username;
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].email;
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].phone;
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].status;
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].relationship;
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].age;
            tableRow.appendChild(tableHeader);
            tableHeader = document.createElement("td");
            tableHeader.innerHTML = users[i].country;
            tableRow.appendChild(tableHeader);

            // per row add a button to delete the user or modify the user data
            var button = document.createElement("button");
            button.setAttribute("id", "delete");
            button.setAttribute("onclick", "deleteUser(" + users[i].id + ")");
            button.innerHTML = "Delete";
            tableRow.appendChild(button);
            button = document.createElement("button");
            button.setAttribute("id", "modify" + users[i].id);
            button.setAttribute("class", "modify");
            button.setAttribute("onclick", "modifyUser(" + users[i].id + ")");
            button.innerHTML = "Modify";
            tableRow.appendChild(button);

            // hide the row with the id of the user


        }
        // append one last row with a break to separate the table from the input fields
        tableHeader = document.createElement("br");
        tableBody.appendChild(tableHeader);

        document.getElementById("table").appendChild(tableBody);

    }
}

window.onload = function() {

    const StartMenu = document.getElementById("StartMenu");
    StartMenu.classList.remove("tableBreak");

    const Reload = document.getElementById("Reload");
    Reload.addEventListener("click", function() {
        window.location.reload();
    });

    const NewDatabase = document.getElementById("NewDatabase");
    NewDatabase.addEventListener("click", main);

    var themeButton = document.getElementById("themeButton");
    themeButton.click();

    const FileButton = document.getElementById("jFile");
    // when the user selects a file, disabled = false
    FileButton.addEventListener('change', function() {
        document.getElementById("submitbtn").style.opacity = "1";
        document.getElementById("submitbtn").style.display = "block";
        FileButton.disabled = true;

    })

    const subbmit = document.getElementById("submitbtn");
    subbmit.addEventListener("click", main);

}

var theme = 0;

function ChangeTheme() {

    if (theme == 0) {
        theme = 1;
        document.body.style.backgroundColor = "gray";
        document.body.style.backgroundImage = "none";
        document.getElementsByClassName("getData")[0].style.backgroundColor = "Darkgray";
        document.getElementById("Label").style.backgroundColor = "gray";
        document.getElementById("Label").style.borderColor = "gray";
        document.getElementById("Label").style.color = "white";

        for (var n = 0; n < document.getElementsByClassName("label50").length; n++) {
            document.getElementsByClassName("label50")[n].style.backgroundColor = "gray";
            document.getElementsByClassName("label50")[n].style.borderColor = "gray";
            document.getElementsByClassName("label50")[n].style.color = "white";
        }

    } else if (theme == 1) {
        theme = 0;
        document.body.style.backgroundColor = "transparent";
        document.body.style.backgroundImage = "url('../images/bg.gif')";
        document.getElementsByClassName("getData")[0].style.backgroundColor = "transparent";
        document.getElementById("Label").style.backgroundColor = "gold";
        document.getElementById("Label").style.borderColor = "gold";
        document.getElementById("Label").style.color = "black";

        for (var n = 0; n < document.getElementsByClassName("label50").length; n++) {
            document.getElementsByClassName("label50")[n].style.backgroundColor = "gold";
            document.getElementsByClassName("label50")[n].style.borderColor = "gold";
            document.getElementsByClassName("label50")[n].style.color = "black";
        }
    }

}