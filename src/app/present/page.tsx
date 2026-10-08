import type { Metadata } from "next";
import { Deck } from "@/components/deck";
export const metadata: Metadata = { title: "Human README — presentation", description: "A short slideshow introducing Human README and the team behind it." };
export default function PresentPage() { return <Deck />; }
