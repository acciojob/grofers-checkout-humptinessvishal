const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const td = document.querySelectorAll('.price')

const getSum = () => {
//Add your code here
	let totalPrice = 0;
	td.forEach(priceElement => {
    const price = parseInt(priceElement.textContent);
		totalPrice += price;
	});
	const totalElement = document.createElement('div');
    totalElement.innerHTML = `Total Price: ${totalPrice} Rs`;
    document.body.appendChild(totalElement);
};

getSumBtn.addEventListener("click", getSum);

