document.addEventListener('DOMContentLoaded', function () {
    fetch('https://https://displayinvoice.onrender.com//api/invoice/1')

        .then(resp => {
            if (!resp.ok) {
                throw new Error("Server returned " + resp.status);
            }
            return resp.json();
        })
        .then(data => {
            const container = document.getElementById('invoice-container');

            if (!data.items || data.items.length === 0) {
                container.innerHTML = '<p>No invoice found.</p>';
                return;
            }

            let html = '<ul>';
            data.items.forEach(item => {
                html += `<li>${item.name} - $${item.price}</li>`;
            });
            html += '</ul>';

            container.innerHTML = html;
        })
        .catch(err => {
            console.error("Failed to load invoice:", err);
            document.getElementById('invoice-container').innerHTML =
                '<p style="color:red;">Failed to load invoice.</p>';
        });
});

