import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thenk for your order!</h2>
        <p className="email-msg">Please check your mail box for the receipt.</p>
        <p className="description">
          If you have any questions, please email us
          <a className="email" href="mailto:mitchellgernaie2019@gmail.com">
            mitchellgernaie2019@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue Ordering
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
