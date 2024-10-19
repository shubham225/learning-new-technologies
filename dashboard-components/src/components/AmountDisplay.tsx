"use client";

import React from "react";
import CountUp from "react-countup";

export default function AmountDisplay({ amount }: { amount: number }) {
  return (
    <section className="total-balance mt-3">
      <div className="flex flex-col gap-2">
        <p className="total-balance-label">Total Amount</p>

        <p className="total-balance-amount flex-center gap-2">
          <CountUp decimals={2} prefix="₹" decimal="." end={amount} />
        </p>
      </div>
    </section>
  );
}
