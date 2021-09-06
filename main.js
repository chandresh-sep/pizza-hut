order_of_customer =[]

function order()
{
    var pizzas = document.getElementById("order_1").value;
    var drinks = document.getElementById("order_2").value;

    order_of_customer.push(pizzas);
    order_of_customer.push(drinks);
    document.getElementById("display_name").innerHTML = order_of_customer;
    document.getElementById("warning").style.display = "inline-block";
    document.getElementById("order_button").style.display = "none";
    document.getElementById("sure_button").style.display = "inline-block";
}

function sure()
{
    document.getElementById("order_button").style.display = "none";
    document.getElementById("warning").style.display = "none";
    document.getElementById("sure_button").style.display = "none";
    document.getElementById("display_name").style.display = "none";
    document.getElementById("food").style.display = "inline-block";
}