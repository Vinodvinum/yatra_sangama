function calculateFare() {
    let baseFare = 50; // Base fare
    let distanceFare = 10; // Fare per km

    let cabTypeMultiplier = {
        "economy": 1,
        "luxury": 2,
        "suv": 1.5
    };

    let cabType = document.getElementById('cabType').value;
    let estimatedFare = baseFare + (distanceFare * 10 * cabTypeMultiplier[cabType]); // Example fare calculation

    document.getElementById('fareEstimate').innerHTML = Estimated Fare: ₹${estimatedFare};
}