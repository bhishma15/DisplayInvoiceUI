document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/invoice')
        .then(resp => resp.json())
        .then(data => {
            let html = '<ul>';
            data.items.forEach(item => {
                html += `<li>${item.Name} - $${item.Price}</li>`;
            });
            html += '</ul>';
            document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(err => console.error("Failed to load invoice:", err));
});

