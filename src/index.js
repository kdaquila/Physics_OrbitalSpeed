function computeOrbitalSpeed(G, mp, rp, h) {
    return Math.sqrt(G*mp/(rp+h))
}

function handle_clickCompute() {
    //read the variables
    let mp = parseFloat(document.getElementById("planetMass").value);
    let dp = parseFloat(document.getElementById("planetDiameter").value);
    let rp = dp/2.0;
    let h = parseFloat(document.getElementById("altitude").value);
    let G = 6.67e-11;

    //compute the orbital speed
    let v = computeOrbitalSpeed(G, mp, rp, h);

    //update the page
    document.getElementById("orbitalSpeed").value = v.toFixed(3);
}