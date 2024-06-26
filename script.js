document.body.style.background = '#9cb0b8';

document.querySelector("#add").onclick = AddPerson;
document.querySelector("#colorOut").onclick = GetColor;
document.querySelector("#delete").onclick = RemovePerson;
document.querySelector("#change").onclick = ChangePerson;

function GetColor() //вывод цвета на консоль
{
    let crCoe = document.getElementById('crime').value;

    crCoe = Number.parseFloat(crCoe);

    if (isNaN(crCoe))
    {
        console.log('такого коэффициента не бывает');
    }
    else
    {
        if (crCoe < 0)
        {
            console.log('отрицательного коэффициента не бывает');
        }

        else if (crCoe==0)
        {
            console.log('белее белого');
        }
    
        else if (crCoe > 0 && crCoe < 100)
        {
            console.log('светлый');
        }
    
        else if (crCoe >=100 && crCoe < 300)
        {
            console.log('содержит оттенки темного');
        }
    
        else if (crCoe >=300 && crCoe < 500)
        {
            console.log('темный');
        }
    
        else if (crCoe > 500)
        {
            console.log('темнее черного');
        }
    }
     
}

let people = [
    {surname: "Гладкова", name: "Алёна", patrimony: "Александровна", coefficient: "220" },
    {surname: "Адамс", name: "Дэнзил", patrimony: "", coefficient: "420" },
    {surname: "Наумова", name: "София", patrimony: "Андреевна", coefficient: "45" },
    {surname: "Супов", name: "Игорь", patrimony: "Богданович", coefficient: "170" }
  ];


function displayCollection(collection, containerId) 
{
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    collection.forEach(person => {
        const itemElement = document.createElement("table");
        itemElement.classList.add("item");

        const info = `
        <tr>
            <td></td>
            <td>${person.surname}</td>
            <td>${person.name}</td>
            <td>${person.patrimony}</td>
            <td>${person.coefficient}</td>
        </tr>
        `;
        itemElement.innerHTML = info;
        container.appendChild(itemElement);
    });
}
  

function AddPerson() //добавление
{
    const surname = document.getElementById('surname').value;
    const name = document.getElementById('name').value;
    const patrimony = document.getElementById('patrimony').value;
    const coefficient = parseFloat(document.getElementById('crime').value);
    if (coefficient > 0) 
    {
        people.push({ surname, name, patrimony, coefficient });
    }
    else
    {
        alert("такого коэффициента не бывает!");
    }
    
    displayCollection(people, "peoplelist");
}

function RemovePerson() //удаление
{
    let index = prompt("Введите id человека (первый начинается с 1)");
    if (index <= people.length && index > 0)
    {
        people.splice(index - 1, 1); 
        displayCollection(people, "peoplelist");
    }
}

function ChangePerson() //изменение
{
    let index = prompt("Введите id человека (первый начинается с 1)");
    if (index <= people.length && index > 0)
    {
        const surnameNew = document.getElementById('surname').value;
        const nameNew = document.getElementById('name').value;
        const patrimonyNew = document.getElementById('patrimony').value;
        const coefficientNew = parseFloat(document.getElementById('crime').value);
        
        if (surnameNew != "")
        {
            people[index-1].surname = surnameNew;
        }
        if (nameNew != "")
        {
            people[index-1].name = nameNew;
        }
        if (patrimonyNew != "")
        {
            people[index-1].patrimony = patrimonyNew;
        }
        if (coefficientNew > 0 && coefficientNew != null) 
        {
            people[index-1].coefficient = coefficientNew;
        }
        else
        {
            alert("такого коэффициента не бывает!");
        }

        displayCollection(people, "peoplelist");
    }
}

window.onload = function() 
{
    displayCollection(people, "peoplelist");
}