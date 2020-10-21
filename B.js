const amountInput = document.getElementById("budget-input");
const addForm = document.getElementById("budgetForm");

const budgetAmount = document.getElementById("budget-amount");
const balanceAmount = document.getElementById("balance-amount");
const expensesAmount = document.getElementById("expense-amount");
const expenseInput = document.getElementById("expense-input")
const expensefeedback = document.getElementsByClassName("expensefeedback")

function getBudgetAmount(amount) {
  if (!amount) {
    amountInput.style.border = "1px solid #b80c09";
    amountInput.placeholder = "input can not be empty";
    amountInput.style.color = "#b80c09";
    setTimeout(() => {
      amountInput.style.color = "#495057";
      amountInput.style.border = "1px solid gray";
    }, 3000);
  } else {
    budgetAmount.innerText = amount;
    balanceAmount.innerText = amount;
   // expensefeedback.style.display = "block";
  //  budgetfeedback .style.display = "none";
    
  }
}

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getBudgetAmount(amountInput.value);
  amountInput.value=''
});
///ne pas toucher si non indi c'est ta mort comme ça

const expForm = document.getElementById("expense-form");
const expName = document.getElementById("expense-input");
const expNumber = document.getElementById("amount-input");

let id = 0;
let details = [];

function addExpenses(name, number) {
  if (!name.length || !number.length) {
    expName.style.border = "1px solid #b80c09";
    expName.placeholder = "input can not be empty";
    expName.style.color = "#b80c09";

    expNumber.style.border = "1px solid #b80c09";
    expNumber.placeholder = "input can not be empty";
    expNumber.style.color = "#b80c09";

    setTimeout(() => {
      expName.style.color = "#495057";
      expName.style.border = "1px solid gray";
      expName.placeholder = "input can not be empty";

      expNumber.placeholder = "input can not be empty";
      expNumber.style.border = "1px solid gray";
      expNumber.style.color = "#495057";
    }, 3000);
  } else {
    const userExp = {
      id: id,
      name: name,
      number: parseInt(number),
    };
    details.push(userExp);
    displayExp(details);
    id++;
    expName.value = "";
    expNumber.value = ""
  }
}

expForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpenses(expName.value, expNumber.value);
});



function displayExp(details) {
    listitem.innerHTML = null;
    for (i = 0; i < details.length; i++) {
        listitem.innerHTML += `
        <div class="row expenselist d-flex justify-content-between" id="${details[i].id}">
        <div id="Title" class="col list-item ">
          <p>${details[i].name}</p>
        </div>
        <div id="value" class="col list-item  align-items-center"> 
          <p> <span>$ </span> ${details[i].number}</p>
        </div>
        <div class="col" id="edite_delete">
          <p>
            <button id="${details[i].id}" onclick="editExpDetails(${details[i].id})"> <i class="fas fa-edit"></i></button> 
            <button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})"><i class="fas fa-trash-alt"></i></button>
          </p>
        </div>
      </div>
    `;
    }
    calcExpenses();
   // displayExpenses.style.display = "block";
  }
  displayExp(details)

  function calcExpenses() {
    let totalExp = 0;
    for (i = 0; i < details.length; i++) {
      totalExp = details[i].number + totalExp;
    }
    expensesAmount.innerText = totalExp;
    updateBalance();
  }
  function updateBalance() {
    balanceAmount.innerText =
      parseInt(budgetAmount.innerText) - parseInt(expensesAmount.innerText);
  }
  


  ///edite

  function editExpDetails(id) {
  
    details.findIndex((item) => {
      if (item.id === id) {
        console.log(expensesAmount);
        expenseInput.value = item.name;
        expensesAmount.value = item.number;
        expNumber.value = item.number
        expForm.children[2].id = item.id;
        delExpenseDetails(id)
      }
    });
  }
  
function getExpValue(expenseInput, expensesAmount, id) {
  edited = details.findIndex((obj) => obj.id == id);
  details[edited].name = expenseInput;
  details[edited].number = parseInt(expensesAmount);
  displayExp(details);
}

expForm.addEventListener("{details[i].id}", (e)  => {
  e.preventDefault();
  getexpenselist(expenseInput.value, expensesAmount.value, expForm.children[2].id);
alert(id)

});


/// suprimer
function delExpenseDetails(id) {
  let index = details.findIndex((item) => item.id === id);
  details.splice(index, 1);
  displayExp(details);
}
