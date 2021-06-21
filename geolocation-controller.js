
class GeolocationController {

    constructor() {

        this.options = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        }

    }

    init() {

        this.latitude = document.getElementById('latitude');
        this.longitude = document.getElementById('longitude');
        this.accuracy = document.getElementById('accuracy');

        this._initListeners();

    }


    _initListeners() {

        const getLocationButton = document.getElementById('get-location-button');

        getLocationButton.addEventListener('click', (event) => {
          this._getLocation()
        }, false);

    }

    _getLocation() {

        navigator.geolocation.getCurrentPosition(result => this._showLocation(result),error => this._showError(error) , this.options);

    }

    _showLocation(result) {

        console.log(result);
        const coordinates = result.coords;
        
        this.latitude.innerText = coordinates.latitude;
        this.longitude.innerText = coordinates.longitude;
        this.accuracy.innerText = coordinates.accuracy;

    }

    _showError(error) {
        alert(`ERROR (${error.code}): ${error.message}`)
    }
}
