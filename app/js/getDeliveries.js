export const getDeliveries = (delivery, path) => {
  // CONSTANTS
  const PICKUP = 'pickup';
  const DROPOFF = 'dropoff';
  const ERROR = 'error';
  const SUCCESS = 'success';

  const ERROR_DROPOFF_BEFORE_PICKUP = 'delivery_dropoff_before_pickup';
  const ERROR_NOT_IN_PATH = 'delivery_address_not_in_path';

  // PARAMS
  const deliveryList = JSON.parse(delivery);
  const truckPath = JSON.parse(path);

  // Separating delivery list into two lists: pickup and dropoff
  const pickupAddresses = deliveryList.map((pair) => pair[0]);
  const dropoffAddresses = deliveryList.map((pair) => pair[1]);

  const steps = [];
  const pickupsDone = [];

  // Browsing all addresses from the truck's path
  truckPath.forEach((address) => {
    // the address is found in the pickup list
    if (pickupAddresses.includes(address)) {
      pickupsDone.push(address);
      steps.push({ address, action: PICKUP }); // pushing it into the array with the pickup action
    }
    // the address is found in the dropoff list
    else if (dropoffAddresses.includes(address)) {
      const delivery = deliveryList.find((deliveryItem) => deliveryItem[1] === address);
      const expectedPickup = delivery[0];

      if (!pickupsDone.includes(expectedPickup)) {
        // In case dropoff happens before pickup
        return {
          status: ERROR,
          error_code: ERROR_DROPOFF_BEFORE_PICKUP,
          error_message: `Tried to drop off at ${address} before picking up at ${expectedPickup}`,
        };
      }
      steps.push({ address, action: DROPOFF }); // pushing it into the array with the dropoff action
    } else {
      steps.push({ address, action: null }); // default case
    }
  });

  const allAddresses = pickupAddresses.concat(dropoffAddresses); // gathering all addresses

  // Checking if there's an address in the truckpath that's not in the addresses array
  const missingAddresses = allAddresses.filter((address) => !truckPath.includes(address));
  if (missingAddresses.length > 0) {
    return {
      status: ERROR,
      error_code: ERROR_NOT_IN_PATH,
      error_message: `Missing address(es) in path: ${missingAddresses}`,
    };
  }

  return {
    status: SUCCESS,
    steps: steps,
  };
};
