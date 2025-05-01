"use client";

import { useBalance } from "@repo/store/balance";

export default function() {
  const balance = useBalance();
  return <div>
<<<<<<< HEAD
    Hello there your balance iss :  {balance}
=======
    hi there {balance}
>>>>>>> bf8fcd4de2763af1ac0fcb2c0364b4c163259cf6
  </div>
}