import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {type MetaFunction, useLoaderData} from '@remix-run/react';
import FeaturedCollection, {FEATURED_COLLECTION_QUERY} from '~/components/home/FeaturedCollection';
import RecommendedProducts, {RECOMMENDED_PRODUCTS_QUERY} from '~/components/RecommandedProduct';
import {HeroSection} from '~/components/home/HeroSection';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'HyprNeon | Home',
      description: 'Homepage of the HyprNeon neon lights online store',
    },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return defer({...deferredData, ...criticalData});
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context}: LoaderFunctionArgs) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {
    featuredCollection: collections.nodes[0],
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: LoaderFunctionArgs) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="home">
      <HeroSection />
      <RecommendedProducts products={data.recommendedProducts} />

      {/*<FeaturedCollection collection={data.featuredCollection} />*/}
    </div>
  );
}
