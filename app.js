const bill_amount = document.querySelector('#amount-input')
const percentage = document.querySelector('.form-select')
const num_of_people = document.querySelector('#num-of-people')
const submit_button = document.querySelector('.btn')

let tip_per_person = 0
let total_tip = 0
let total_per_person = 0

submit_button.addEventListener('click', function(e) {
    e.preventDefault()
    if(parseFloat(bill_amount.value) && parseInt(num_of_people.value)) {
        if(parseFloat(bill_amount.value) > 0 && parseInt(num_of_people.value)) {
            const dec_amount = parseFloat(bill_amount.value)
            const int_people = parseInt(num_of_people.value)
            let percentage_value = 0
            switch(percentage.value) {
                case 'one-percent':
                    percentage_value = ( 1 / 100 )
                    break
                case 'ten-percent':
                    percentage_value = ( 10 / 100 )
                    break
                case 'fifteen-percent':
                    percentage_value = ( 15 / 100 )
                    break
                case 'twenty-percent':
                    percentage_value = ( 20 / 100 )
                    break
                case 'thirty-percent':
                    percentage_value = ( 30 / 100 )
                    break
                default:
                    alert('how did the server do? Choose an option')
            }
            if(percentage_value > 0) {
                total_tip = (parseFloat(parseInt(dec_amount * 100) * percentage_value) / 100).toFixed(2)
                tip_per_person = (parseFloat(parseInt(total_tip * 100) / int_people) / 100).toFixed(2)
                total_per_person = (parseFloat(parseInt(tip_per_person * 100) + parseInt(dec_amount * 100) / int_people) / 100).toFixed(2)
                const tip_per_person_lbl = document.createElement('SPAN')
                const total_tip_lbl = document.createElement('SPAN')
                const total_lbl = document.createElement('SPAN')
                tip_per_person_lbl.textContent = `$ ${tip_per_person}`
                total_tip_lbl.textContent = `$ ${total_tip}`
                total_lbl.textContent = `$ ${total_per_person}`
                if(document.querySelector('#tip-per-person').firstElementChild) {
                    document.querySelector('#tip-per-person').removeChild(document.querySelector('#tip-per-person').lastChild)
                    document.querySelector('#total-tip').removeChild(document.querySelector('#total-tip').lastChild)
                    document.querySelector('#total-per-person').removeChild(document.querySelector('#total-per-person').lastChild)
                }
                document.querySelector('#tip-per-person').appendChild(tip_per_person_lbl)
                document.querySelector('#total-tip').appendChild(total_tip_lbl)
                document.querySelector('#total-per-person').appendChild(total_lbl)
            }
        }
    }
})

