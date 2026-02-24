import { fetchGoogleReviews } from "@/lib/google-reviews";
import GoogleReviewsGrid from "./GoogleReviewsGrid";

/**
 * Server Component – fetches Google Places reviews at build time
 * and passes them to the client component for animated rendering.
 */
export default async function GoogleReviews() {
  const data = await fetchGoogleReviews();
  return <GoogleReviewsGrid data={data} />;
}
