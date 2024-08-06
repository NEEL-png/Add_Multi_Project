document.addEventListener('DOMContentLoaded', () => {
    // Select input fields and output fields
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const input4 = document.getElementById('input4');
    
    const output1 = document.getElementById('output1');
    const output2 = document.getElementById('output2');
    const output3 = document.getElementById('output3');
    const output4 = document.getElementById('output4');
    const output5 = document.getElementById('output5');
    const output6 = document.getElementById('output6');
    const output7 = document.getElementById('output7');
    const output8 = document.getElementById('output8');
    const output9 = document.getElementById('output9');

    // Function to update output fields
    function updateOutputs() {
        const value1 = parseInt(input1.value) || 0;
        const value2 = parseInt(input2.value) || 0;
        const value3 = parseInt(input3.value) || 0;
        const value4 = parseInt(input4.value) || 0;
    
        if(value1<0 || value2<0 || value3<0 || value4<0){
            alert("Not consider Negative values");
            return;
        }
        
        // Addition formula
        output1.value = Math.max(0, value1);
        output2.value = Math.max(0, value2 + value1);
        output3.value = Math.max(0, value3 + value2 + value1);
        output4.value = Math.max(0, value4 + value3 + value2 + value1);
    
        // Multiplication formula
        output5.value = Math.max(0, value1 * value1);
        output6.value = Math.max(0, value2 * (value1 + value2));
        output7.value = Math.max(0, value3 * (value1 + value2 + value3));
        output8.value = Math.max(0, value4 * (value1 + value2 + value3 + value4));
    
        // Updating the output fields with the sum of the multiplication outputs
        output5.value = Math.max(0, parseInt(output5.value) || 0);
        output6.value = Math.max(0, parseInt(output6.value) || 0);
        output7.value = Math.max(0, parseInt(output7.value) || 0);
        output8.value = Math.max(0, parseInt(output8.value) || 0);
        
        // Sum of the multiplication outputs
        const sumOfMultiplications = Math.max(0, 
            parseInt(output5.value) + 
            parseInt(output6.value) + 
            parseInt(output7.value) + 
            parseInt(output8.value)
        );
    
        // Updating the sum output field
        output9.value = `Total = ${sumOfMultiplications}`;
    }

    // Add event listeners to inputs
    input1.addEventListener('input', updateOutputs);
    input2.addEventListener('input', updateOutputs);
    input3.addEventListener('input', updateOutputs);
    input4.addEventListener('input', updateOutputs);
});