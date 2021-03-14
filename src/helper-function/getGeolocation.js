const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  let crd = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  return { longitude: crd.longitude, latitude: crd.latitude };
}

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const getGeolocation = async () => {
  if (navigator.geolocation) {
    try {
      const permission = await navigator.permissions.query({
        name: "geolocation",
      });
      console.log("permission", permission.state);
      if (permission.state === "granted" || permission.state === "prompt") {
        return new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(res, rej);
        });
      }
    } catch (error) {
      console.log("error in getGeolocation");
    }
  }
};

export default getGeolocation;
