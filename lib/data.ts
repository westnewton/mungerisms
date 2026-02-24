export const SITE = {
  name: "Mungerisms",
  url: "https://mungerisms.com",
  description: "The collected wisdom of Charlie Munger — quotes, mental models, speeches, books, and biography. All in one place.",
  tagline: "The Collected Wisdom of Charlie Munger",
};

export type Quote = {
  text: string;
  source: string;
  category: string;
};

export const QUOTES: Quote[] = [
  { text: "Invert, always invert.", source: "Various speeches", category: "Thinking" },
  { text: "Spend each day trying to be a little wiser than you were when you woke up.", source: "Poor Charlie's Almanack", category: "Self-Improvement" },
  { text: "The best thing a human being can do is to help another human being know more.", source: "USC Law Commencement, 2007", category: "Knowledge" },
  { text: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.", source: "Wesco Financial Annual Meeting", category: "Thinking" },
  { text: "Knowing what you don't know is more useful than being brilliant.", source: "Poor Charlie's Almanack", category: "Wisdom" },
  { text: "The big money is not in the buying and selling, but in the waiting.", source: "Berkshire Hathaway Annual Meeting", category: "Investing" },
  { text: "I never allow myself to have an opinion on anything that I don't know the other side's argument better than they do.", source: "Various", category: "Thinking" },
  { text: "Take a simple idea and take it seriously.", source: "Various speeches", category: "Wisdom" },
  { text: "I constantly see people rise in life who are not the smartest, sometimes not even the most diligent, but they are learning machines.", source: "USC Law Commencement, 2007", category: "Self-Improvement" },
  { text: "All I want to know is where I'm going to die so I'll never go there.", source: "Various", category: "Thinking" },
  { text: "Show me the incentive and I will show you the outcome.", source: "Various speeches", category: "Incentives" },
  { text: "The safest way to try to get what you want is to try to deserve what you want.", source: "USC Law Commencement, 2007", category: "Wisdom" },
  { text: "You must know the big ideas in the big disciplines, and use them routinely — all of them, not just a few.", source: "USC Business School, 1994", category: "Mental Models" },
  { text: "Mimicking the herd invites regression to the mean.", source: "Various", category: "Investing" },
  { text: "You don't have to be brilliant, only a little bit wiser than the other guys, on average, for a long, long time.", source: "Poor Charlie's Almanack", category: "Investing" },
  { text: "Wisdom acquisition is a moral duty.", source: "Poor Charlie's Almanack", category: "Wisdom" },
  { text: "In my whole life, I have known no wise people who didn't read all the time — none, zero.", source: "Poor Charlie's Almanack", category: "Self-Improvement" },
  { text: "You're not going to get very far in life based on what you already know.", source: "Various", category: "Self-Improvement" },
  { text: "The iron rule of nature is: you get what you reward for.", source: "The Psychology of Human Misjudgment", category: "Incentives" },
  { text: "If you want ants to come, you put sugar on the floor.", source: "The Psychology of Human Misjudgment", category: "Incentives" },
  { text: "A great business at a fair price is superior to a fair business at a great price.", source: "Various", category: "Investing" },
  { text: "Acknowledging what you don't know is the dawning of wisdom.", source: "Various", category: "Wisdom" },
  { text: "Three rules for a career: Don't sell anything you wouldn't buy yourself. Don't work for anyone you don't respect and admire. Work only with people you enjoy.", source: "Various", category: "Wisdom" },
  { text: "The desire to get rich fast is pretty dangerous.", source: "Daily Journal Annual Meeting", category: "Investing" },
];

export const QUOTE_CATEGORIES = ["All", ...Array.from(new Set(QUOTES.map((q) => q.category)))];

export type MentalModel = {
  name: string;
  discipline: string;
  description: string;
  slug: string;
};

export const MENTAL_MODELS: MentalModel[] = [
  { name: "Inversion", slug: "inversion", discipline: "Mathematics", description: "Instead of asking how to achieve success, ask how to avoid failure. Many hard problems are best solved when addressed backward. Munger borrowed this from the mathematician Carl Jacobi, who famously said 'Invert, always invert.'" },
  { name: "Circle of Competence", slug: "circle-of-competence", discipline: "Psychology", description: "Know the boundaries of your knowledge. Operate within areas where you have genuine understanding and be honest about the edges. The size of your circle matters less than knowing where the perimeter is." },
  { name: "Second-Order Thinking", slug: "second-order-thinking", discipline: "Physics", description: "Consider not just the immediate consequences of a decision, but the consequences of the consequences. Most people stop at first-order effects; the greatest advantages come from thinking one or two steps further." },
  { name: "Margin of Safety", slug: "margin-of-safety", discipline: "Engineering", description: "Build in a buffer for error. Whether in investing or life decisions, allow room for things to go wrong. Engineers design bridges to hold far more weight than expected — investors should think the same way." },
  { name: "Lollapalooza Effect", slug: "lollapalooza-effect", discipline: "Psychology", description: "When multiple psychological tendencies combine in the same direction, the result is often far larger than any individual tendency. This explains why certain situations — like financial bubbles — produce such extreme outcomes." },
  { name: "Opportunity Cost", slug: "opportunity-cost", discipline: "Economics", description: "Every choice has a cost — the value of the best alternative you didn't choose. Wise people think in terms of trade-offs. Munger always asked: 'What's the best thing that could happen with this capital?'" },
  { name: "Incentive-Caused Bias", slug: "incentive-caused-bias", discipline: "Psychology", description: "Never underestimate the power of incentives to distort human cognition and behavior. 'Show me the incentive and I'll show you the outcome.' People will rationalize almost anything if the incentives are strong enough." },
  { name: "Man with a Hammer Syndrome", slug: "man-with-a-hammer", discipline: "Psychology", description: "To a man with only a hammer, every problem looks like a nail. This is why Munger insisted on building a latticework of mental models from multiple disciplines — relying on a single framework guarantees blind spots." },
  { name: "Availability Bias", slug: "availability-bias", discipline: "Psychology", description: "We tend to overweight information that comes easily to mind. Recent events, vivid stories, and personal experience distort our perception of probability. The antidote is systematic thinking and base rate awareness." },
  { name: "Social Proof", slug: "social-proof", discipline: "Psychology", description: "Humans look to others to determine correct behavior, especially under uncertainty. This tendency is powerful and mostly unconscious. Munger believed mimicking the herd was one of the surest paths to mediocrity." },
  { name: "Reciprocity", slug: "reciprocity", discipline: "Psychology", description: "People have a deep tendency to reciprocate both favors and slights. This powerful force can be used ethically — build trust by giving first — but also exploited, which is why it's important to recognize." },
  { name: "Compound Interest", slug: "compound-interest", discipline: "Mathematics", description: "The eighth wonder of the world, according to Einstein. Small advantages, compounded over long periods, produce extraordinary results. This applies to money, knowledge, relationships, and reputation alike." },
];

export type TimelineEvent = {
  year: number;
  event: string;
  type: "life" | "education" | "partnership" | "career" | "investing" | "intellectual";
};

export const TIMELINE: TimelineEvent[] = [
  { year: 1924, event: "Born January 1 in Omaha, Nebraska", type: "life" },
  { year: 1941, event: "Worked at Buffett & Son grocery store, owned by Warren Buffett's grandfather", type: "life" },
  { year: 1943, event: "Dropped out of the University of Michigan to serve in the U.S. Army Air Corps during World War II", type: "life" },
  { year: 1946, event: "Admitted to Harvard Law School without an undergraduate degree, based on his exceptional aptitude", type: "education" },
  { year: 1948, event: "Graduated magna cum laude from Harvard Law School", type: "education" },
  { year: 1949, event: "Began practicing law in California", type: "career" },
  { year: 1953, event: "Divorced first wife. His son Teddy was diagnosed with leukemia", type: "life" },
  { year: 1955, event: "Teddy Munger died of leukemia at age nine. Charlie later lost sight in one eye due to a failed cataract surgery", type: "life" },
  { year: 1956, event: "Married Nancy Barry Borthwick, with whom he would have four more children", type: "life" },
  { year: 1959, event: "First met Warren Buffett at a dinner in Omaha, introduced by mutual friends. They spoke for hours", type: "partnership" },
  { year: 1962, event: "Co-founded the law firm Munger, Tolles & Olson, now one of the most prestigious in the U.S.", type: "career" },
  { year: 1962, event: "At Buffett's encouragement, began managing his own investment partnerships", type: "investing" },
  { year: 1975, event: "Closed his investment partnership after 13 years. Annualized return to partners: 19.8% vs. 5.2% for the Dow", type: "investing" },
  { year: 1978, event: "Became Vice Chairman of Berkshire Hathaway, beginning one of the greatest partnerships in business history", type: "partnership" },
  { year: 1984, event: "Became Chairman of Wesco Financial Corporation, a Berkshire subsidiary", type: "career" },
  { year: 1994, event: "Delivered 'A Lesson on Elementary, Worldly Wisdom' at USC Business School — his definitive speech on mental models", type: "intellectual" },
  { year: 1995, event: "Delivered 'The Psychology of Human Misjudgment' at Harvard — his magnum opus on cognitive biases", type: "intellectual" },
  { year: 2005, event: "Poor Charlie's Almanack published, edited by Peter Kaufman. Became an underground classic", type: "intellectual" },
  { year: 2007, event: "Delivered USC Law School commencement address — widely considered his most accessible and complete life philosophy", type: "intellectual" },
  { year: 2023, event: "Passed away November 28, at age 99, just 33 days before his 100th birthday. Stripe Press published a new edition of Poor Charlie's Almanack shortly after", type: "life" },
];

export type Speech = {
  title: string;
  year: number;
  venue: string;
  description: string;
  youtube: string | null;
  transcript: string | null;
  slug: string;
};

export const SPEECHES: Speech[] = [
  {
    title: "USC Law School Commencement Address",
    slug: "usc-commencement-2007",
    year: 2007,
    venue: "University of Southern California",
    description: "Munger's most beloved and accessible speech. A complete philosophy for living well — covering the golden rule, continuous learning, mental models, inversion, and the 'seamless web of deserved trust.' Often called the wisest graduation speech ever given.",
    youtube: "https://www.youtube.com/watch?v=5U0TE4oqj24",
    transcript: "https://jamesclear.com/great-speeches/2007-usc-law-school-commencement-address-by-charlie-munger",
  },
  {
    title: "The Psychology of Human Misjudgment",
    slug: "psychology-human-misjudgment",
    year: 1995,
    venue: "Harvard University",
    description: "Munger's magnum opus — a catalog of 25 standard causes of human misjudgment. Covers incentive-caused bias, social proof, the lollapalooza effect, and more. He extensively revised it in 2005 for Poor Charlie's Almanack. The foundation of behavioral finance before the field had a name.",
    youtube: "https://www.youtube.com/watch?v=pqzcCfUglws",
    transcript: "https://fs.blog/great-talks/psychology-human-misjudgment/",
  },
  {
    title: "A Lesson on Elementary, Worldly Wisdom",
    slug: "elementary-worldly-wisdom",
    year: 1994,
    venue: "USC Marshall Business School",
    description: "The foundational speech on mental models and the latticework of theory. Munger argues that 80-90 important models from multiple disciplines will carry 90% of the freight in making you a worldly-wise person. His framework for how to think.",
    youtube: "https://www.youtube.com/watch?v=zBJRgPayfPs",
    transcript: "https://jamesclear.com/great-speeches/a-lesson-on-elementary-worldly-wisdom-by-charlie-munger",
  },
  {
    title: "Academic Economics: Strengths and Faults",
    slug: "academic-economics",
    year: 2003,
    venue: "UC Santa Barbara",
    description: "A critique of academic economics and its failure to integrate psychology. Munger argues that economics would be far more useful if it incorporated behavioral insights and multidisciplinary thinking.",
    youtube: "https://www.youtube.com/watch?v=PjTkmjykMgE",
    transcript: null,
  },
  {
    title: "How to Guarantee a Life of Misery",
    slug: "life-of-misery",
    year: 1986,
    venue: "Harvard School (now Harvard-Westlake)",
    description: "Using inversion, Munger prescribes a recipe for a miserable life: be unreliable, learn only from your own experience, go down and stay down after setbacks, and ignore the wisdom of others. A darkly funny and deeply practical speech.",
    youtube: "https://www.youtube.com/watch?v=Pqftm3o5RdQ",
    transcript: null,
  },
];

export type Book = {
  title: string;
  subtitle: string | null;
  author: string;
  year: string;
  description: string;
  amazon: string;
  category: string;
  slug: string;
};

export const BOOKS: Book[] = [
  {
    title: "Poor Charlie's Almanack",
    subtitle: "The Essential Wit and Wisdom of Charles T. Munger",
    author: "Edited by Peter D. Kaufman",
    year: "2005 / 2023 (Stripe Press edition)",
    description: "The definitive Munger volume. A compilation of 11 talks, biographical essays, and the complete revised 'Psychology of Human Misjudgment.' Originally self-published and never advertised, it sold tens of thousands of copies by word of mouth alone. The 2023 Stripe Press edition is the most accessible version.",
    amazon: "https://www.amazon.com/dp/1953953239",
    category: "essential",
    slug: "poor-charlies-almanack",
  },
  {
    title: "Damn Right!",
    subtitle: "Behind the Scenes with Berkshire Hathaway Billionaire Charlie Munger",
    author: "Janet Lowe",
    year: "2000",
    description: "The only authorized biography. Covers Munger's early life in Omaha, the tragedy of losing his son, his law career, the investment partnerships, and the building of Berkshire Hathaway alongside Buffett. Essential for understanding the man behind the ideas.",
    amazon: "https://www.amazon.com/dp/0471244732",
    category: "biography",
    slug: "damn-right",
  },
  {
    title: "Tao of Charlie Munger",
    subtitle: "A Compilation of Quotes from Berkshire Hathaway's Vice Chairman on Life, Business, and the Pursuit of Wealth",
    author: "David Clark",
    year: "2017",
    description: "A curated collection of Munger's most memorable quotes, drawn from interviews, speeches, and Berkshire and Wesco annual meetings, with commentary and context from Clark.",
    amazon: "https://www.amazon.com/dp/150115334X",
    category: "quotes",
    slug: "tao-of-charlie-munger",
  },
  {
    title: "Seeking Wisdom",
    subtitle: "From Darwin to Munger",
    author: "Peter Bevelin",
    year: "2007",
    description: "Not written by Munger, but deeply inspired by him. Bevelin synthesizes ideas from Darwin, Einstein, and Munger into a guide for better thinking. Munger himself praised the book. A natural companion to Poor Charlie's Almanack.",
    amazon: "https://www.amazon.com/dp/1578644283",
    category: "related",
    slug: "seeking-wisdom",
  },
  {
    title: "All I Want To Know Is Where I'm Going To Die So I'll Never Go There",
    subtitle: "Buffett & Munger — A Study in Simplicity and Uncommon, Common Sense",
    author: "Peter Bevelin",
    year: "2016",
    description: "A distillation of Buffett and Munger's core principles into a compact, readable guide. The title is one of Munger's favorite sayings, borrowed from the algebraist Jacobi.",
    amazon: "https://www.amazon.com/dp/0998706108",
    category: "related",
    slug: "where-im-going-to-die",
  },
  {
    title: "University of Berkshire Hathaway",
    subtitle: "30 Years of Lessons Learned from Warren Buffett & Charlie Munger at the Annual Shareholders Meeting",
    author: "Daniel Pecaut & Corey Wrenn",
    year: "2017",
    description: "Comprehensive notes from 30 years of Berkshire annual meetings. The best way to absorb Munger's thinking on specific companies, industries, and investment decisions over decades.",
    amazon: "https://www.amazon.com/dp/0998406260",
    category: "related",
    slug: "university-of-berkshire-hathaway",
  },
  {
    title: "Influence",
    subtitle: "The Psychology of Persuasion",
    author: "Robert B. Cialdini",
    year: "1984",
    description: "Munger credited this book with opening his eyes to psychology. He sent copies to Cialdini with a share of Berkshire Hathaway stock as a thank you. The foundation for many of Munger's 25 cognitive biases.",
    amazon: "https://www.amazon.com/dp/006124189X",
    category: "recommended",
    slug: "influence",
  },
  {
    title: "The Outsiders",
    subtitle: "Eight Unconventional CEOs and Their Radically Rational Blueprint for Success",
    author: "William Thorndike",
    year: "2012",
    description: "Munger called it 'an outstanding book about CEOs who excelled at capital allocation.' Profiles eight leaders who took radically different approaches to corporate management and dramatically outperformed their peers.",
    amazon: "https://www.amazon.com/dp/1422162672",
    category: "recommended",
    slug: "the-outsiders",
  },
];

export const BOOK_CATEGORIES: Record<string, string> = {
  essential: "The Essential Volume",
  biography: "Biography",
  quotes: "Quote Collections",
  related: "About Munger's Ideas",
  recommended: "Books Munger Loved",
};
