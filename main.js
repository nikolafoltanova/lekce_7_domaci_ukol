// 1. úkol
let wage = 400
let hours = 8
let days = 21

let salary = (wage, hours, days) => {
	return Math.round(wage * hours * days)
}

let taxed = (salary, tax) => {
	return Math.round((salary * (100 - tax)) / 100)
}

let firstSalary = salary (wage, hours, days)
let taxedSalary = taxed(firstSalary, 15)

console.log ("Mzda: " + firstSalary + " Kč")
console.log ("Po zdanění: " + taxedSalary + " Kč")

// 2. úkol
let calculate = (number1, operation, number2) => {
    if (operation === '+') {
		return number1 + number2
	}
	if (operation === '-') {
		return number1 - number2
	}
	if (operation === '*') {
		return number1 * number2
	}
	if (operation === '/') {
		return number1 / number2
	}
}

// 3. úkol
let selectPlan = (planNumber) => {
    let prvni = document.querySelector('#plan1')
    let druhy = document.querySelector('#plan2')
    let treti = document.querySelector('#plan3')
    prvni.classList.remove('plan--selected')
    druhy.classList.remove('plan--selected')
    treti.classList.remove('plan--selected')

    if (planNumber <= 100) {
        prvni.classList.add('plan--selected')
    } else if (planNumber >= 101 && planNumber <= 200) {     
        druhy.classList.add('plan--selected')
    } else if (planNumber >= 201) {  
        treti.classList.add('plan--selected')
    } else {
        return ("Máš to špatně")
    }
}

// 4. úkol - bonus
let fillcut = (str, len) => {
    let oriznuti = String(str)
    let delka = Number(len)
    if (oriznuti.length > delka) {
		return oriznuti.slice(0, delka)
	} else if (oriznuti.length < delka) {
		return oriznuti.padStart(delka, '.')
	} else {
		return oriznuti
	}
}

// 5. úkol - bonus
let isLeapYear = (year) => {
    celyRok = Math.round(Number(year))
    if (celyRok % 4 === 0) {
        return true
    }
    return false
}