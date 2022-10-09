const calc_temp = ()=>{
    const temp = document.getElementById("mytemp").value;
    // console.log(temp);
    
    const Unit = document.getElementById("temp_type");
    const Unit_value =  temp_type.options[Unit.selectedIndex].value;
    const celsiusToFah = (celsius) =>{
        let fahrenheit = Math.round((celsius * 9/5) +32);
        return fahrenheit;
    }
    const fahToCelsius = (fahrenheit) =>{
        let celsius = Math.round((fahrenheit - 32) + 5/9);
        return celsius;
    }

    console.log(Unit_value);
    let result;
    if(Unit_value == 'celsius'){
        result = celsiusToFah(temp);
        document.getElementById('ans').innerHTML = `${result}  °fahrenheit`;
    }
    else{
        result = fahToCelsius(temp);
        document.getElementById('ans').innerHTML = `${result}  °Celsius`;
    }
}
