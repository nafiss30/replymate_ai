"use client";

import { FormEvent, useState } from "react";
import { CloudRain, CloudSun, MapPin, Search, Sparkles, ThermometerSun, Umbrella } from "lucide-react";
import { defaultWeather, products } from "@/data/mock-data";
import type { WeatherRecommendation } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Label } from "@/components/ui/field";
import { formatCurrency } from "@/lib/utils";

const cityWeather: Record<string, Partial<WeatherRecommendation>> = {
  chattogram: { temperature: 29, feelsLike: 33, condition: "Humid with light rain", chanceOfRain: 64, tags: ["hot", "humid", "rainy", "light"], productIds: ["prod-002","prod-004","prod-005"] },
  sylhet: { temperature: 25, feelsLike: 27, condition: "Rain showers", chanceOfRain: 78, tags: ["rainy", "mild", "rain-ready"], productIds: ["prod-004","prod-002"] },
  rajshahi: { temperature: 23, feelsLike: 22, condition: "Clear and mild", chanceOfRain: 8, tags: ["mild", "dry", "medium"], productIds: ["prod-003","prod-002"] },
  rangpur: { temperature: 18, feelsLike: 16, condition: "Cool and dry", chanceOfRain: 5, tags: ["cold", "dry", "warm"], productIds: ["prod-001","prod-006"] },
};

export function WeatherRecommender() {
  const [city, setCity] = useState("Dhaka");
  const [weather, setWeather] = useState(defaultWeather);
  const [loading, setLoading] = useState(false);
  const search = (event: FormEvent) => { event.preventDefault(); if (!city.trim()) return; setLoading(true); window.setTimeout(() => { const match = cityWeather[city.toLowerCase().trim()] || {}; setWeather({ ...defaultWeather, ...match, city: city.trim() }); setLoading(false); }, 650); };
  const recommended = products.filter(product => weather.productIds.includes(product.id));
  return (
    <div className="space-y-5"><Card className="p-5 sm:p-6"><form onSubmit={search} className="flex flex-col gap-3 sm:flex-row sm:items-end"><div className="flex-1"><Label htmlFor="city">Bangladeshi city or location</Label><div className="relative"><MapPin size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#EA580C]" /><Input id="city" value={city} onChange={event => setCity(event.target.value)} placeholder="e.g. Dhaka, Sylhet, Rangpur" className="pl-10" /></div></div><Button type="submit" className="sm:w-auto" disabled={loading}><Search size={16} />{loading ? "Checking…" : "Get recommendation"}</Button></form><div className="mt-3 flex flex-wrap gap-2 text-xs text-[#78716C]"><span>Try:</span>{["Dhaka","Chattogram","Sylhet","Rajshahi","Rangpur"].map(item => <button key={item} onClick={() => setCity(item)} className="font-bold text-[#C2410C] hover:underline">{item}</button>)}</div></Card>
      <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]"><Card className="overflow-hidden bg-[#171717] text-white"><div className="p-6"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#FDBA74]">Current demo weather</p><h2 className="mt-2 text-2xl font-black">{weather.city}</h2></div><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-[#FDBA74]">{weather.chanceOfRain > 50 ? <CloudRain size={25} /> : <CloudSun size={25} />}</div></div><div className="mt-8 flex items-end gap-3"><p className="text-6xl font-black tracking-tighter">{weather.temperature}°</p><p className="pb-2 text-sm text-[#D6D3D1]">Feels like {weather.feelsLike}°C</p></div><p className="mt-4 text-sm text-[#E7E5E4]">{weather.condition}</p><div className="mt-6 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[0.07] p-3"><ThermometerSun size={17} className="text-[#FDBA74]" /><p className="mt-2 text-xs text-[#A8A29E]">Feels-like</p><p className="font-black">{weather.feelsLike}°C</p></div><div className="rounded-xl bg-white/[0.07] p-3"><Umbrella size={17} className="text-[#FDBA74]" /><p className="mt-2 text-xs text-[#A8A29E]">Rain chance</p><p className="font-black">{weather.chanceOfRain}%</p></div></div><div className="mt-5 flex flex-wrap gap-2">{weather.tags.map(tag => <Badge key={tag} className="border-white/10 bg-white/10 text-white">{tag}</Badge>)}</div></div></Card>
        <Card className="p-5 sm:p-6"><div className="flex items-center gap-2"><Sparkles size={18} className="text-[#EA580C]" /><h2 className="font-black">Why these clothes?</h2></div><p className="mt-3 text-sm leading-6 text-[#57534E]">For {weather.city}’s {weather.temperature}°C weather and {weather.chanceOfRain}% rain chance, breathable or weather-ready items are prioritised using fabric, warmth, season, and weather tags.</p><div className="mt-5 rounded-xl border border-[#FED7AA] bg-[#FFF7ED] p-4"><p className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">Recommendation logic</p><div className="mt-3 space-y-2 text-sm">{weather.temperature >= 27 ? <p>• Light cotton fabrics for warm conditions</p> : <p>• Medium or warm layers for cooler conditions</p>}{weather.chanceOfRain > 40 ? <p>• Rain-friendly outerwear for likely showers</p> : <p>• Dry-weather versatile layers</p>}<p>• Only currently catalogued products are shown</p></div></div><div className="mt-5 rounded-xl bg-[#FFEDD5] p-4 text-xs font-semibold leading-5 text-[#9A3412]">Recommendations are based on weather suitability, not medical body temperature.</div></Card></div>
      <div><div className="mb-4"><h2 className="text-xl font-black">Recommended for {weather.city}</h2><p className="mt-1 text-sm text-[#78716C]">Matched using current demo catalog tags</p></div>{loading ? <div className="grid gap-4 md:grid-cols-3">{[1,2,3].map(item => <div key={item} className="h-72 animate-pulse rounded-2xl bg-[#FFEDD5]" />)}</div> : <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{recommended.map(product => <Card key={product.id} className="overflow-hidden"><div className="grid h-36 place-items-center bg-[#FFEDD5] text-6xl">{product.emoji}</div><div className="p-5"><p className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">{product.category}</p><div className="mt-1 flex justify-between gap-3"><h3 className="font-black">{product.name}</h3><p className="font-black">{formatCurrency(product.price)}</p></div><p className="mt-2 text-xs leading-5 text-[#78716C]">{product.fabric} · {product.warmth}</p><div className="mt-3 flex flex-wrap gap-1.5">{product.weatherTags.map(tag => <Badge key={tag}>{tag}</Badge>)}</div></div></Card>)}</div>}</div>
    </div>
  );
}
