'use client';
import React, { useState } from 'react';
import styles from './FormDelivery.module.scss';
import { getDeliveries } from '@/js/getDeliveries.js';

const FormDelivery = ({ onResult }) => {
  const [deliveriesInput, setDeliveriesInput] = useState('[[1,3],[2,5]]');
  const [pathInput, setPathInput] = useState('[1,2,3,4,5]');

  const handleSubmit = (e) => {
    e.preventDefault();
    let output;
    try {
      output = getDeliveries(deliveriesInput, pathInput);
    } catch (error) {
      console.error('Form submission error:', error);
      output = error;
    }
    if (onResult) onResult(output);
  };

  return (
    <form className={styles.FormDelivery} onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4 justify-center align-center">
        <div className="">
          <label className="FormDelivery-label" htmlFor="deliveryList">
            Delivery List
          </label>
          <input
            name="deliveryList"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder=""
            value={deliveriesInput}
            onChange={(e) => setDeliveriesInput(e.target.value)}
          />
        </div>
        <div>
          <label className="FormDelivery-label" htmlFor="truckPath">
            Truck Path
          </label>
          <input
            name="truckPath"
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            placeholder="jane@example.com"
            value={pathInput}
            onChange={(e) => setPathInput(e.target.value)}
          />
        </div>
      </div>
      <button
        className="FormDelivery-button inline-block text-center rounded-md py-3 px-4 font-medium bg-blue-500 text-white"
        type="submit"
      >
        Let's go!
      </button>
    </form>
  );
};

export default FormDelivery;
