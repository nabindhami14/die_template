import { cbs } from "../../../common/mcs-protos/bundle";

export default async function Home() {
  const response = await fetch(
    `${process.env.CUSTOMERS_BACKEND_URL}/merchants`
  );

  if (!response.ok) {
    throw new Error("An error occurred while fetching the merchants");
  }
  const merchants = await response.json();
  const decoded = cbs.merchant_service.GetMerchantResponse

  // const decoded = atob(response)
  // console.log(decoded, "DECODED");
  console.log(response);

  return <main></main>;
}
