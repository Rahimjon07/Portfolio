function calculateLoan() {
    loanAmountValue = document.getElementById("Сумма-кредита").value

    interestRateValue = document.getElementById("Проценая-ставка").value

    MonthsToPayValue = document.getElementById("Месяц-до-оплаты").value


    interest =(loanAmountValue * (interestRateValue * 0.01)) / MonthsToPayValue

    monthlyPayment = (loanAmountValue / MonthsToPayValue + interest).toFixed((2))
    
   document.getElementById("payment").innerHTML = `Ежемесячная Оплата: ${monthlyPayment}`  
    
}