// For pre-filling package/driver from URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name) || "";
}

// Fill package in booking form
const packageInput = document.getElementById('packageInput');
if(packageInput){
    packageInput.value = getQueryParam('package');
    const displayPackage = document.getElementById('selectedPackage');
    if(displayPackage) displayPackage.textContent = packageInput.value;
}

// Fill driver in hire form
const driverInput = document.getElementById('driverInput');
if(driverInput){
    driverInput.value = getQueryParam('driver');
    const displayDriver = document.getElementById('selectedDriver');
    if(displayDriver) displayDriver.textContent = driverInput.value;
}