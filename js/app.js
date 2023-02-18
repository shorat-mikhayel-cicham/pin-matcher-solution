
function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const generatePinField = document.getElementById('pin-field');
    generatePinField.style.textAlign = 'center';
    generatePinField.value = getPin();
});

document.getElementById('calculator').addEventListener('click', function(){
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypeNumber = previousNumber + number;
        typedNumberField.style.textAlign = 'center';
        typedNumberField.value = newTypeNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function(){
    const generatePinField  = document.getElementById('pin-field');
    const currentPin = generatePinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;
     

    const pinDangerMessage = document.getElementById('pin-danger');
    const pinSuccessMessage = document.getElementById('pin-success');

    if(currentPin === typedNumber){
        
        pinSuccessMessage.style.display = 'block';
        pinSuccessMessage.style.color = 'skyBlue';
        pinDangerMessage.style.display = 'none';
        
    }
    else{
        
        pinDangerMessage.style.display = 'block';
        pinDangerMessage.style.color = 'red';
        pinSuccessMessage.style.display = 'none';
    }
})