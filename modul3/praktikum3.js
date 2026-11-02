let nama = "Echi";

function sapa() {
    return alert("Hallo " + nama); 
}

function nama() {
    const nama = prompt("Masukkan nickname anda:");
    if (nama) {
        alert("Nickname kamu adalah: " + nama);
    } else {
        alert("Kamu adalah anonim.");
    }   
}