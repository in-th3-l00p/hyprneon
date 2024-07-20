import type {RecommendedProductsQuery} from '../../storefrontapi.generated';
import {Suspense} from 'react';
import {Await, Link} from '@remix-run/react';
import {Image, Money} from '@shopify/hydrogen';
import {clsx} from 'clsx';

export default function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <section className={'container mx-auto'}>
      <h2 className={'text-4xl mb-8'}>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div
              className={clsx(
                'grid justify-center items-center gap-16',
                'md:grid-cols-2',
              )}
            >
              {response
                ? response.products.nodes.map((product) => (
                    <Link
                      key={product.id}
                      className="text-center"
                      to={`/products/${product.handle}`}
                    >
                      <Image
                        data={product.images.nodes[0]}
                        aspectRatio="1/1"
                        sizes="(min-width: 45em) 20vw, 50vw"
                        className={'max-w-[400px] mx-auto mb-4 rounded-md'}
                      />
                      <h3 className={'text-lg'}>{product.title}</h3>
                      <small>
                        <Money data={product.priceRange.minVariantPrice} />
                      </small>
                    </Link>
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
