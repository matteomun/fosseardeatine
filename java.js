function showInfo() {
    var menuDropdown = document.getElementById("ciociari");
    var headerCentrale = document.querySelector(".header_centrale");
    var headerCiociaria = document.querySelector(".header_ciociaria")

    // Ottieni il valore selezionato
    var selectedValue = menuDropdown.value;

    // Controlla se è stata selezionata un'opzione
    if (selectedValue == "Patrica") {
        headerCentrale.style.display = "none";
        headerCiociaria.style.display = "grid";

    } else if(selectedValue == "**"){
        headerCentrale.style.display = "grid";
        headerCiociaria.style.display = "none";
    }
}
    