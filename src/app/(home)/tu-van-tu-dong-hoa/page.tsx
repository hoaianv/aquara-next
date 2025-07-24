"use client";

import ItemAdvertise from "@/components/ui/itemAdvertise";
import { bannerKeys } from "@/constants/values.constant";
import { useStateStore } from "@/stores/stateStore";

export default function AutomatedConsulting() {
  const { banner } = useStateStore();
  const currentBanner = banner[bannerKeys.bannerConsulting];
  if (
    !currentBanner?.advertises ||
    !Array.isArray(currentBanner.advertises) ||
    !currentBanner.advertises.length
  )
    return null;

  return (
    <div>
      {currentBanner.advertises.map((item) => (
        <ItemAdvertise key={item.id} item={item} />
      ))}
    </div>
  );
}
