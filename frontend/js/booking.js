// Function to validate booking form input
function validateBookingForm() {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!pickup || !dropoff || !date || !time) {
        alert('Please fill in all required fields.');
        return false;
    }
    return true;
}

// Function to calculate fare (placeholder logic)
function calculateFare() {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const cabType = document.getElementById('cabType').value;

    // Placeholder fare calculation logic
    let fare = 0;
    if (cabType === 'economy') {
        fare = 50;
    } else if (cabType === 'luxury') {
        fare = 100;
    } else if (cabType === 'suv') {
        fare = 80;
    }

    document.getElementById('fareEstimate').textContent = `Estimated Fare: $${fare};`
}

// Function to handle booking form submission
function submitBooking() {
    if (!validateBookingForm()) return;

    const form = document.getElementById('bookingForm');
    const bookingData = {
        pickup: form.pickup.value,
        dropoff: form.dropoff.value,
        date: form.date.value,
        time: form.time.value,
        cabType: form.cabType.value
    };

    // Replace with actual API call to handle booking
    console.log('Booking submitted:', bookingData);

    // Clear the form
    form.reset();

    document.getElementById('confirmationMessage').textContent = 'Your booking has been submitted!';
}

// Add event listener for booking form
document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            submitBooking();
        });

        // Calculate fare when cab type changes
        const cabTypeSelect = document.getElementById('cabType');
        if (cabTypeSelect) {
            cabTypeSelect.addEventListener('change', calculateFare);
        }
    }
});