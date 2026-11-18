import { WeatherRecommender } from "@/components/weather/weather-recommender";
import { PageHeader } from "@/components/page-header";

export default function WeatherPage() {
  return <div className="animate-fade-in"><PageHeader eyebrow="Weather-aware selling" title="Clothing recommendations" description="Suggest suitable catalog items from a customer’s city, current conditions, and product weather tags." /><WeatherRecommender /></div>;
}
