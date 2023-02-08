// Placing JSON data:
const response = {
   "pokedata": [
      {
        "name": "Bulbasaur",
        "type": "Grass",
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "spAttack": 65,
        "spDefense": 65,
        "speed": 45,
        "total": 318
      },
      {
        "name": "Tyranosaur",
        "type": "Meat",
        "hp": 20,
        "attack": 100,
        "defense": 100,
        "spAttack": 80,
        "spDefense": 80,
        "speed": 20,
        "total": 360
      },
      {
        "name": "Me",
        "type": "Anything",
        "hp": 2,
        "attack": 3,
        "defense": 50,
        "spAttack": 4,
        "spDefense": 50,
        "speed": 4,
        "total": 100
      },
   ]
}


// Placing the data within our <tbody id="table-content">
const tableContent = document.getElementById("table-content")


// Create a new row based on the object data
const createRow = obj => {
  const row = document.createElement("tr");  // <tr></tr>
  const objKeys = Object.keys(obj);  //  ['0', '1', '2']
  objKeys.map(key => {
    const cell = document.createElement("td");  // <td></td>
    cell.setAttribute("data-attr", key);  // <td data-attr="0"></td>
    cell.innerHTML = obj[key];  // <td data-attr="0">[object Object]</td>
    row.appendChild(cell);
    // console.log(cell)
  });
  // console.log(row)
  // <tr>
  //   <td data-attr="0">[object Object]</td>
  //   <td data-attr="1">[object Object]</td>
  //   <td data-attr="2">[object Object]</td>
  // </tr>
  return row;
};
// console.log(createRow(response.pokedata))


// Loop through response.pokedata array and append each new row to tableContent
const getTableContent = data => {
  data.map((obj) => {
    const row = createRow(obj);
    tableContent.appendChild(row);
    // console.log(row)
  });
};


// Execute getTableContent function when loading page
window.addEventListener("load", () => {
  getTableContent(response.pokedata);
});
