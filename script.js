function bookTicket() {
    let moviePrice = parseInt(document.getElementById("movie").value);
    let tickets = parseInt(document.getElementById("tickets").value);

    if (!moviePrice || !tickets) {
        alert("Please select movie and enter number of tickets");
        return;
    }

    let subtotal = moviePrice * tickets;
    let gst = subtotal * 0.05; // 5% GST
    let total = subtotal + gst;

    let movieName = document.getElementById("movie").options[
        document.getElementById("movie").selectedIndex
    ].text;

    document.getElementById("summary").innerHTML = `
        <h3>Booking Summary</h3>
        <p><strong>Movie:</strong> ${movieName}</p>
        <p><strong>Tickets:</strong> ${tickets}</p>
        <p><strong>Subtotal:</strong> ₹${subtotal.toFixed(2)}</p>
        <p><strong>GST (5%):</strong> ₹${gst.toFixed(2)}</p>
        <hr>
        <h3><strong>Total Amount: ₹${total.toFixed(2)}</strong></h3>
    `;
}
