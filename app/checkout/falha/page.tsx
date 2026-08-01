import { Suspense } from "react";
import CheckoutResult from "@/components/CheckoutResult";

export default function CheckoutFalhaPage() {
  return (
    <Suspense>
      <CheckoutResult variant="falha" />
    </Suspense>
  );
}
