// Skrip untuk mengelola tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Skrip untuk mengelola formulir dan pesan
const scriptURL = 'https://script.google.com/macros/s/AKfycby6BK8NtD5IGR1kI0J9YtyZNMUWq5hzL1-XM-UsRx7WmlClKI6vj9pyQNXpSS7Zw069zQ/exec';
const form = document.querySelector('.submit-to-google-sheet');
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});
