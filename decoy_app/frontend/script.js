async function getUser() {
    const name = document.getElementById("username").value;

    const res = await fetch(`/api/user?name=${name}`);
    const data = await res.text();

    document.getElementById("output").innerText = data;
}

function goAdmin() {
    window.location.href = "/api/admin";
}
