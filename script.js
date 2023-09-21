const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const td = document.querySelectorAll('.price')

const getSum = () => {
//Add your code here
	var totalPrice = 0;
    td.forEach(function(td) {
		totalPrice += parseFloat(td.textContent);
	});
	const table = document.getElementsByTagName("table")[0];
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = totalPrice.toFixed(2);
    tr.append(th);
    table.appendChild(tr);
	return totalPrice.toFixed(2);
};

getSumBtn.addEventListener("click", getSum);


