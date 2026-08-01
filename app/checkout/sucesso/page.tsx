import { Suspense } from "react";
import CheckoutResult from "@/components/CheckoutResult";

export default function CheckoutSucessoPage() {
  return (
    <Suspense>
      <CheckoutResult variant="sucesso" />
    </Suspense>
  );
}
