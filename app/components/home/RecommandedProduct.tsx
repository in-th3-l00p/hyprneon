import type {RecommendedProductsQuery} from '../../../storefrontapi.generated';
import {Suspense} from 'react';
import {Await, Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {clsx} from 'clsx';
import {Button} from '~/components/ui/button';
import {ChevronRight, ShoppingCart} from 'lucide-react';
import ProductDisplay from '~/components/ProductDisplay';
import Parallax from "~/components/home/Parallax";

export default function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <section className={'container mb-32 mx-auto'}>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div
              className={clsx(
                'grid justify-center items-center gap-32 lg:gap-x-64',
                'md:grid-cols-2',
              )}
            >
              {response
                ? response.products.nodes.map((product, index) => (
                    <ProductDisplay key={index} product={product} />
                  ))
                : null}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </section>
  );
}

export const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    description
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
