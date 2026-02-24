import { SITE, Quote, Speech, Book, MentalModel, CognitiveBias } from "./data";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    about: {
      "@type": "Person",
      name: "Charlie Munger",
      alternateName: "Charles Thomas Munger",
      birthDate: "1924-01-01",
      deathDate: "2023-11-28",
      birthPlace: { "@type": "Place", name: "Omaha, Nebraska, USA" },
      jobTitle: "Vice Chairman of Berkshire Hathaway",
      description:
        "American investor, businessman, and philanthropist. Vice Chairman of Berkshire Hathaway and Warren Buffett's longtime partner.",
    },
  };
}

export function quotationSchema(quote: Quote) {
  return {
    "@context": "https://schema.org",
    "@type": "Quotation",
    text: quote.text,
    creator: {
      "@type": "Person",
      name: "Charlie Munger",
    },
    isPartOf: {
      "@type": "WebPage",
      url: `${SITE.url}/quotes`,
    },
  };
}

export function quotesPageSchema(quotes: Quote[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Charlie Munger Quotes & Mungerisms",
    description:
      "The complete collection of Charlie Munger's most memorable quotes, organized by theme — investing, thinking, wisdom, incentives, and more.",
    url: `${SITE.url}/quotes`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: quotes.length,
      itemListElement: quotes.slice(0, 20).map((q, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Quotation",
          text: q.text,
          creator: { "@type": "Person", name: "Charlie Munger" },
        },
      })),
    },
  };
}

export function mentalModelsPageSchema(models: MentalModel[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Charlie Munger's Mental Models",
    description:
      "The latticework of mental models from multiple disciplines that formed Charlie Munger's worldview and decision-making framework.",
    url: `${SITE.url}/mental-models`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: models.length,
      itemListElement: models.map((m, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "DefinedTerm",
          name: m.name,
          description: m.description,
        },
      })),
    },
  };
}

export function cognitiveBiasesPageSchema(biases: CognitiveBias[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Charlie Munger's 25 Cognitive Biases",
    description:
      "The 25 standard causes of human misjudgment from Charlie Munger's Psychology of Human Misjudgment — the complete list of cognitive biases that distort human decision-making.",
    url: `${SITE.url}/cognitive-biases`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: biases.length,
      itemListElement: biases.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "DefinedTerm",
          name: b.name,
          description: b.description,
        },
      })),
    },
    isPartOf: {
      "@type": "CreativeWork",
      name: "The Psychology of Human Misjudgment",
      author: { "@type": "Person", name: "Charlie Munger" },
    },
  };
}

export function speechSchema(speech: Speech) {
  return {
    "@context": "https://schema.org",
    "@type": "PublicationEvent",
    name: speech.title,
    description: speech.description,
    startDate: `${speech.year}`,
    location: { "@type": "Place", name: speech.venue },
    organizer: { "@type": "Person", name: "Charlie Munger" },
    ...(speech.youtube
      ? {
          recordedIn: {
            "@type": "VideoObject",
            name: speech.title,
            url: speech.youtube,
          },
        }
      : {}),
  };
}

export function speechesPageSchema(speeches: Speech[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Charlie Munger's Speeches & Talks",
    description:
      "Watch and read Charlie Munger's most influential speeches — including The Psychology of Human Misjudgment, the USC Commencement, and Elementary Worldly Wisdom.",
    url: `${SITE.url}/speeches`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: speeches.length,
      itemListElement: speeches.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: speechSchema(s),
      })),
    },
  };
}

export function bookSchema(book: Book) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    description: book.description,
    author: { "@type": "Person", name: book.author },
    url: book.amazon,
  };
}

export function booksPageSchema(books: Book[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Charlie Munger Books",
    description:
      "Books by Charlie Munger, about Charlie Munger, and recommended by Charlie Munger. Essential reading for investors and lifelong learners.",
    url: `${SITE.url}/books`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: books.length,
      itemListElement: books.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: bookSchema(b),
      })),
    },
  };
}

export function timelinePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Charlie Munger Biography & Timeline",
    description:
      "The life of Charlie Munger — from Depression-era Omaha to Vice Chairman of Berkshire Hathaway. A timeline of key events from 1924 to 2023.",
    url: `${SITE.url}/timeline`,
    mainEntity: {
      "@type": "Person",
      name: "Charlie Munger",
      alternateName: "Charles Thomas Munger",
      birthDate: "1924-01-01",
      deathDate: "2023-11-28",
      birthPlace: { "@type": "Place", name: "Omaha, Nebraska, USA" },
      jobTitle: "Vice Chairman of Berkshire Hathaway",
      alumniOf: { "@type": "CollegeOrUniversity", name: "Harvard Law School" },
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
