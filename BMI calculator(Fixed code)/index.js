document.getElementById("submit").addEventListener('click', () => {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("output");
    
    let height_status = false, weight_status = false;

    // Height validation
    if (isNaN(height) || height <= 0) {
        document.getElementById('height_error').textContent = "Please provide a valid height";
    } else {
        document.getElementById('height_error').textContent = '';
        height_status = true;
    }

    // Weight validation
    if (isNaN(weight) || weight <= 0) {
        document.getElementById('weight_error').textContent = "Please provide a valid weight";
    } else {
        document.getElementById('weight_error').textContent = '';
        weight_status = true;
    }

    // BMI calculation
    if (height_status && weight_status) {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            result.textContent = `Your BMI is ${bmi}. You are underweight.`;
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            result.textContent = `Your BMI is ${bmi}. You are healthy.`;
        } else {
            result.textContent = `Your BMI is ${bmi}. You are overweight.`;
        }
    } else {
        result.textContent = ''; // Clear result if there are errors
    }
});