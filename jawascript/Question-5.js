let expenses = [
    {amount: 100, category:"Utilities"},
    {amount:200, category:"Groceries"},
    {amount:50, category:"Entertainment"}
];

 const totalExpenses = expenses.reduce((sum, data)=> sum + data.amount, 0);


 console.log("totalExpenses :", totalExpenses);