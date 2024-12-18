// Ждем загрузки содержимого страницы
document.addEventListener("DOMContentLoaded", function() {
    // Получаем все кнопки с классом "card-btn"
    const buttons = document.querySelectorAll(".card-btn");

    buttons.forEach(button => {
        button.addEventListener("click", handleOrder);
    });
});

// 1. Function
function handleOrder() {
    // 2. Data Types and Type convertion
    let quantity = prompt("Сколько закажете Qiyqiriq сет?");
    quantity = Number(quantity);  // Преобразование типа

    // Проверяем, является ли введенное значение числом и больше ли оно 0
    if (isNaN(quantity) || quantity <= 0) {
        alert("Пожалуйста, введите корректное количество.");
        return;
    }

    // Если количество больше 10, сообщаем об этом
    if (quantity > 4) {
        alert("Больше 4ти нельзя заказывать.");
        return;
    }

    // 3. Arifmetik operatorlar & Math methodlari  if else
    const pricePerItem = 45000;
    const totalCost = quantity * pricePerItem;

    // 4. String методы
    const productName = "Qiyqiriq сет";

    // 10. Dom createElement
    const summaryElement = document.createElement('div');
    summaryElement.classList.add('order-summary');
    summaryElement.innerHTML = `
        ${productName}
         ${quantity}
       ${totalCost} 
    `;
    document.body.appendChild(summaryElement);

    // 2. Switch case
    const confirmation = confirm(`Сумма вашего заказа: ${totalCost} сум. Сделаете заказ?`);
    switch (confirmation) {
        case true:
            alert("Заказ принят");
            break;
        case false:
            alert("Заказ отменен");
            break;
        default:
            alert("Произошла ошибка. Попробуйте еще раз.");
            break;
    }
}
