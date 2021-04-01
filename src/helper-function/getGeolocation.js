const getGeolocation = async () => {
  if (navigator.geolocation) {
    try {
      const permission = await navigator.permissions.query({
        name: "geolocation",
      });
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
