import { Suspense } from "react";
import CheckoutResult from "@/components/CheckoutResult";

export default function CheckoutPendentePage() {
  return (
    <Suspense>
      <CheckoutResult variant="pendente" />
    </Suspense>
  );
}
