(function foo() {
    console.log("Hello, World!");


    setTimeout(() => {
        console.log("This is a delayed message.");
    }, 5000); // 5000 milliseconds = 5 seconds

    document.getElementById("tag1").innerHTML = "Hello World from JavaScript";
})(); // Self Invoking Function Expression



// foo();


// document.getElementById("tag1") if it exists will return the element, otherwise it will return null


// document.getElementById("tag1")? using beacuse when null comes it will stop the execution of the code and will not throw an error

// <script src="script.js" defer></script> defer is used to load the script after the HTML is loaded






// let num = 5;
// console.log(num.toFixed(2)); // Output: "5.00"
// ➡️ Even though num is a primitive, JavaScript wraps it in a temporary Number object behind the scenes so you can call .toFixed().

// This is called autoboxing.

var productList = []; // Using the variable from data.js]

function loadData() {
    let tableRows = "";
    
    productList = productListFromServer; 

    productList.map((product,index) => {
        tableRows += `
        <tr>
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.description}</td>
        </tr>
        `;
    }) // Map method always returns an array of elements !!!

    

    document.getElementById("data").innerHTML = `
    <table>
        <thead>
            <tr>
                <th> Sr. No.</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            ${tableRows}
        </tbody>
    </table>`;
};



setTimeout(loadData,2000);

const foo = () => {}; // Function Expression in javascript;



/*
    ✅ Yes, let and const are hoisted
    But unlike var, they are not initialized to undefined at the start of the scope.

    Instead, they are placed in a "Temporal Dead Zone" (TDZ) from the beginning of the block until the point where the variable is actually declared and initialized.

    ❗What is the Temporal Dead Zone (TDZ)?
    TDZ is the time between the entering of a scope and the actual variable declaration.
    During this time, accessing the variable will throw a ReferenceError.
*/



// When every time we render a array it converts it to a string and then renders it