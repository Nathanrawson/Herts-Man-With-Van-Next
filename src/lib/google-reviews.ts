const PLACE_ID = "ChIJRScybdw6dkgR8f-hhQ2Hg7o";

/** URL that opens all reviews for this place on Google Maps */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/?q=place_id:" + PLACE_ID;

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  publish_time: string;
  profile_photo_url?: string;
}

export interface GooglePlaceData {
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

// Fallback data used when the API key is missing or the request fails
const fallbackData: GooglePlaceData = {
  rating: 5.0,
  user_ratings_total: 6,
  reviews: [
    {
      author_name: "Jamila T Jeffers",
      rating: 5,
      text: "Thank you so much Phil - Herts Man with a van. You and your team (Dan and Dean) made this move so easy to manage. I would definitely use your services again and will be recommending you to others.",
      relative_time_description: "2 months ago",
      publish_time: "2024-12-01T00:00:00Z",
    },
  ],
};

/**
 * Fetches Google Place details (rating + reviews) using the Places API (v1).
 * Called from a Server Component so data is baked into the static HTML.
 */
export async function fetchGoogleReviews(): Promise<GooglePlaceData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.warn(
      "GOOGLE_PLACES_API_KEY not set – using fallback review data."
    );
    return fallbackData;
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;

    const res = await fetch(url, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      // Revalidate once per day so each build gets fresh data
      // and stale/error responses are never cached indefinitely.
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Places API (v1) returned ${res.status}: ${body}`);
    }

    const json = await res.json();

    return {
      rating: json.rating,
      user_ratings_total: json.userRatingCount,
      reviews: (json.reviews || []).map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (r: any) => ({
          author_name: r.authorAttribution?.displayName ?? "Anonymous",
          rating: r.rating,
          text: r.text?.text ?? "",
          relative_time_description: r.relativePublishTimeDescription ?? "",
          publish_time: r.publishTime ?? "",
          profile_photo_url: r.authorAttribution?.photoUri,
        })
      ),
    };
  } catch (error) {
    console.error("Failed to fetch Google reviews:", error);
    return fallbackData;
  }
}
