planetMasses = {
    "Mercury": "0.330e24",
    "Venus":   "4.87e24",
    "Earth":   "5.98e24",
    "Mars":    "0.642e24",
    "Jupiter": "1898e24",
    "Saturn":  "568e24",
    "Uranus":  "86.8e24",
    "Neptune": "102e24"
};

planetDiameters = {
    "Mercury": "4.879e6",
    "Venus":   "12.104e6",
    "Earth":   "12.756e6",
    "Mars":    "6.792e6",
    "Jupiter": "142.984e6",
    "Saturn":  "120.536e6",
    "Uranus":  "51.118e6",
    "Neptune": "49.528e6"
};

window.addEventListener('load', function() {
    document.getElementById("planetName").onchange = handle_changePlanetName;
    document.getElementById("compute").onclick = handle_clickCompute;
});

function computeOrbitalSpeed(G, mp, rp, h) {
    return Math.sqrt(G*mp/(rp+h))
}

function handle_clickCompute() {
    //read the variables
    let mp = parseFloat(document.getElementById("planetMass").value);
    let dp = parseFloat(document.getElementById("planetDiameter").value);
    let rp = dp/2.0;
    let h = parseFloat(document.getElementById("altitude").value);
    let G = 6.673e-11;

    //compute the orbital speed
    let v = computeOrbitalSpeed(G, mp, rp, h);

    //update the page
    document.getElementById("orbitalSpeed").value = v.toFixed(0);
}

function handle_changePlanetName(event) {
    // read the name
    let planetName = event.target.value;

    // set the planet mass
    document.querySelector("#planetMass").value = planetMasses[planetName];

    // set the planet diameter
    document.querySelector("#planetDiameter").value = planetDiameters[planetName];
}