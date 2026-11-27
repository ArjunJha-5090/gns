import {
  CodeXml, Smartphone, Palette, Cloud, Brain, Megaphone, ShoppingCart, Wrench,
  ShieldCheck, ChartLine, BedDouble, Utensils, BookOpen, Wifi, Users,
  HeartHandshake, Zap, Target, Lightbulb, Layers, type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const map = {
  code: CodeXml, phone: Smartphone, palette: Palette, cloud: Cloud, brain: Brain,
  megaphone: Megaphone, cart: ShoppingCart, wrench: Wrench, shield: ShieldCheck,
  chart: ChartLine, bed: BedDouble, utensils: Utensils, book: BookOpen, wifi: Wifi,
  users: Users, heart: HeartHandshake, zap: Zap, target: Target, lightbulb: Lightbulb,
  layers: Layers,
} satisfies Record<IconName, unknown>;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C aria-hidden {...props} />;
}
