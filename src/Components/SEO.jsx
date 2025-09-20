import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO component
 * Props: title, description, canonical, image, type, schema (object), noIndex
 */
export function SEO({
  title = 'Weather.app – Real-time Weather & Air Quality',
  description = 'Accurate real-time weather forecasts, 7-day outlooks, and detailed air quality insights for any location worldwide.',
  canonical = 'https://weather.app/',
  image = 'https://weather-eve3.onrender.com/weather-logo.svg',
  type = 'website',
  schema,
  noIndex = false,
  keywords = 'weather, forecast, air quality, AQI, temperature, humidity, wind, UV index'
}) {
  const jsonLd = schema ? JSON.stringify(schema) : null;
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {!noIndex && <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && (
        <script type="application/ld+json">{jsonLd}</script>
      )}
    </Helmet>
  );
}

export default SEO;
