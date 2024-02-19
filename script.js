function Euro() {

    const EuroInsert = document.getElementById("EuroInput").value

    const Euro = document.getElementById("EuroOutput").innerHTML = EuroInsert / 26 + ("€");

}

function Dollar() {

    const DollarInsert = document.getElementById("DollarInput").value

    const Euro = document.getElementById("DollarOutput").innerHTML = DollarInsert / 24 + ("$");

}

function Libra() {

    const LibraInsert = document.getElementById("LibraInput").value

    document.getElementById("LibraOutput").innerHTML = LibraInsert / 30 + ("Ł");

    

}

