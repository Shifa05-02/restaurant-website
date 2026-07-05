const form = document.getElementById("reservationForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;

    if(name.trim() === ""){
        alert("Please enter your name.");
        return;
    }

    alert("🎉 Thank you, " + name + "! Your table has been reserved successfully.");

    form.reset();

});