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
  // --- Thinking ---
  { text: "Invert, always invert.", source: "Various speeches", category: "Thinking" },
  { text: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.", source: "Wesco Financial Annual Meeting", category: "Thinking" },
  { text: "I never allow myself to have an opinion on anything that I don't know the other side's argument better than they do.", source: "Various", category: "Thinking" },
  { text: "I believe in the discipline of mastering the best that other people have ever figured out. I don't believe in just sitting down and trying to dream it all up yourself. Nobody's that smart.", source: "Various", category: "Thinking" },
  { text: "People are trying to be smart — all I am trying to do is not to be idiotic, but it's harder than most people think.", source: "Various", category: "Thinking" },
  { text: "Rapid destruction of your ideas when the time is right is one of the most valuable qualities you can acquire. You must force yourself to consider arguments on the other side.", source: "Various", category: "Thinking" },
  { text: "I did not succeed in life by intelligence. I succeeded because I have a long attention span.", source: "Various", category: "Thinking" },

  // --- Self-Improvement ---
  { text: "Spend each day trying to be a little wiser than you were when you woke up.", source: "Poor Charlie's Almanack", category: "Self-Improvement" },
  { text: "I constantly see people rise in life who are not the smartest, sometimes not even the most diligent, but they are learning machines.", source: "USC Law Commencement, 2007", category: "Self-Improvement" },
  { text: "In my whole life, I have known no wise people who didn't read all the time — none, zero.", source: "Poor Charlie's Almanack", category: "Self-Improvement" },
  { text: "You're not going to get very far in life based on what you already know.", source: "Various", category: "Self-Improvement" },
  { text: "Just as civilization can progress only when it invents the method of invention, you can progress only when you learn the method of learning.", source: "Various", category: "Self-Improvement" },

  // --- Knowledge ---
  { text: "The best thing a human being can do is to help another human being know more.", source: "USC Law Commencement, 2007", category: "Knowledge" },
  { text: "If you go through life making friends with the eminent dead who had the right ideas, I think it will work better for you in life.", source: "Various", category: "Knowledge" },
  { text: "There is no better teacher than history in determining the future. There are answers worth billions of dollars in a $30 history book.", source: "Various", category: "Knowledge" },

  // --- Wisdom ---
  { text: "Knowing what you don't know is more useful than being brilliant.", source: "Poor Charlie's Almanack", category: "Wisdom" },
  { text: "Take a simple idea and take it seriously.", source: "Various speeches", category: "Wisdom" },
  { text: "All I want to know is where I'm going to die so I'll never go there.", source: "Various", category: "Wisdom" },
  { text: "The safest way to try to get what you want is to try to deserve what you want.", source: "USC Law Commencement, 2007", category: "Wisdom" },
  { text: "Wisdom acquisition is a moral duty.", source: "Poor Charlie's Almanack", category: "Wisdom" },
  { text: "Acknowledging what you don't know is the dawning of wisdom.", source: "Various", category: "Wisdom" },
  { text: "Three rules for a career: Don't sell anything you wouldn't buy yourself. Don't work for anyone you don't respect and admire. Work only with people you enjoy.", source: "Various", category: "Wisdom" },
  { text: "Just avoid things like racing trains to the crossing, doing cocaine, etc. Develop good mental habits.", source: "Various", category: "Wisdom" },
  { text: "Acquire worldly wisdom and adjust your behavior accordingly. If your new behavior gives you a little temporary unpopularity with your peer group, then to hell with them.", source: "Various", category: "Wisdom" },
  { text: "It never ceases to amaze me to see how much territory can be grasped if one merely masters and consistently uses all the obvious and easily learned principles.", source: "Various", category: "Wisdom" },
  { text: "Above all, live with change and adapt to it.", source: "Various", category: "Wisdom" },
  { text: "Simplicity has a way of improving performance by enabling us to better understand what we are doing.", source: "Various", category: "Wisdom" },

  // --- Investing ---
  { text: "The big money is not in the buying and selling, but in the waiting.", source: "Berkshire Hathaway Annual Meeting", category: "Investing" },
  { text: "Mimicking the herd invites regression to the mean.", source: "Various", category: "Investing" },
  { text: "You don't have to be brilliant, only a little bit wiser than the other guys, on average, for a long, long time.", source: "Poor Charlie's Almanack", category: "Investing" },
  { text: "A great business at a fair price is superior to a fair business at a great price.", source: "Various", category: "Investing" },
  { text: "The desire to get rich fast is pretty dangerous.", source: "Daily Journal Annual Meeting", category: "Investing" },
  { text: "If the value of a company doesn't just scream out at you, it's too close.", source: "Various", category: "Investing" },
  { text: "You don't have to have perfect wisdom to get very rich. Just a bit better than average over a long period of time.", source: "Various", category: "Investing" },
  { text: "When you locate a bargain, you must ask, 'Why me, God? Why am I the only one who could find this bargain?'", source: "Various", category: "Investing" },
  { text: "Our job is to find a few intelligent things to do, not to keep up with every damn thing in the world.", source: "Various", category: "Investing" },
  { text: "There are huge advantages for an individual to get into a position where you make a few great investments and just sit back.", source: "Various", category: "Investing" },
  { text: "One of the inane things taught in modern university education is that a vast diversification is absolutely mandatory in investing in common stocks. That is an insane idea.", source: "Various", category: "Investing" },
  { text: "I think life is a whole series of opportunity costs. You got to marry the best person who is convenient to find who will have you. Investment is much the same sort of a process.", source: "Various", category: "Investing" },
  { text: "It's waiting that helps you as an investor, and a lot of people just can't stand to wait.", source: "Various", category: "Investing" },
  { text: "If something is too hard, we move on to something else. What could be simpler than that?", source: "Various", category: "Investing" },
  { text: "Like Warren, I had a considerable passion to get rich, not because I wanted Ferraris — I wanted the independence. I desperately wanted it.", source: "Various", category: "Investing" },
  { text: "I think that, every time you see the word EBITDA, you should substitute the words 'bullshit earnings.'", source: "Various", category: "Investing" },
  { text: "A lot of people with high IQs are terrible investors because they've got terrible temperaments.", source: "Various", category: "Investing" },

  // --- Incentives ---
  { text: "Show me the incentive and I will show you the outcome.", source: "Various speeches", category: "Incentives" },
  { text: "The iron rule of nature is: you get what you reward for.", source: "The Psychology of Human Misjudgment", category: "Incentives" },
  { text: "If you want ants to come, you put sugar on the floor.", source: "The Psychology of Human Misjudgment", category: "Incentives" },
  { text: "The constant curse of scale is that it leads to big, dumb bureaucracy — which, of course, reaches its highest and worst form in government where the incentives are really awful.", source: "Various", category: "Incentives" },

  // --- Mental Models ---
  { text: "You must know the big ideas in the big disciplines, and use them routinely — all of them, not just a few.", source: "USC Business School, 1994", category: "Mental Models" },

  // --- Character ---
  { text: "It's a good habit to trumpet your failures and be quiet about your successes.", source: "Various", category: "Character" },
  { text: "Forgetting your mistakes is a terrible error if you are trying to improve your cognition.", source: "Various", category: "Character" },
  { text: "Is there such thing as a cheerful pessimist? That's what I am.", source: "Various", category: "Character" },
  { text: "I have a black belt in chutzpah. I was born with it.", source: "Various", category: "Character" },
  { text: "The best armor of old age is a well-spent life preceding it.", source: "Various", category: "Character" },
  { text: "If you're glued together right and honorable, you will succeed. Get in there and get rid of stupidities and avoid bad people. Try teaching that to your grandchildren. The best way is by example. Fix yourself.", source: "Various", category: "Character" },
  { text: "It's a real pleasure to earn the trust of your customers slowly over time by doing what's right.", source: "Various", category: "Character" },
  { text: "Life and its various passages can be hard, brutally hard. The three things I have found helpful in coping with its challenges are: Have low expectations. Have a sense of humor. Surround yourself with the love of friends and family.", source: "Various", category: "Character" },
  { text: "Every mischance in life was an opportunity to behave well. Every mischance in life was an opportunity to learn something, and your duty was not to be submerged in self-pity, but to utilize the terrible blow in a constructive fashion.", source: "Various", category: "Character" },
  { text: "Intense interest in any subject is indispensable if you're really going to excel in it.", source: "Various", category: "Character" },
  { text: "When you borrow a man's car, always return it with a tank of gas.", source: "Various", category: "Character" },
  { text: "I believe Costco does more for civilization than the Rockefeller Foundation.", source: "Various", category: "Character" },
  { text: "Anytime anybody offers you anything with a big commission and a 200-page prospectus, don't buy it.", source: "Various", category: "Character" },

  // --- Psychology ---
  { text: "Envy is a really stupid sin because it's the only one you could never possibly have any fun at. There's a lot of pain and no fun. Why would you want to get on that trolley?", source: "Various", category: "Psychology" },
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

export type CognitiveBias = {
  number: number;
  name: string;
  slug: string;
  description: string;
  mungerQuote: string | null;
};

export const COGNITIVE_BIASES: CognitiveBias[] = [
  {
    number: 1,
    name: "Reward and Punishment Superresponse Tendency",
    slug: "reward-and-punishment-superresponse",
    description: "We are driven by rewards and deterred by punishments far more than we realize.",
    mungerQuote: "Show me the incentive and I will show you the outcome.",
  },
  {
    number: 2,
    name: "Liking/Loving Tendency",
    slug: "liking-loving",
    description: "We ignore faults in people and things we love. Affection distorts our judgment.",
    mungerQuote: null,
  },
  {
    number: 3,
    name: "Disliking/Hating Tendency",
    slug: "disliking-hating",
    description: "We ignore virtues in people and things we dislike, and distort facts to justify our hatred.",
    mungerQuote: null,
  },
  {
    number: 4,
    name: "Doubt-Avoidance Tendency",
    slug: "doubt-avoidance",
    description: "Uncertainty is uncomfortable, so we rush to make decisions to eliminate doubt, often with insufficient information.",
    mungerQuote: null,
  },
  {
    number: 5,
    name: "Inconsistency-Avoidance Tendency",
    slug: "inconsistency-avoidance",
    description: "We resist changing our habits, beliefs, and conclusions, even when presented with new evidence. The human mind is like the human egg — once a conclusion gets in, it shuts everything else out.",
    mungerQuote: null,
  },
  {
    number: 6,
    name: "Curiosity Tendency",
    slug: "curiosity",
    description: "Our natural curiosity drives learning and discovery.",
    mungerQuote: "The curious are provided with much fun and wisdom once formal education has ended.",
  },
  {
    number: 7,
    name: "Kantian Fairness Tendency",
    slug: "kantian-fairness",
    description: "We expect fairness and are deeply disturbed when we don't get it. Tolerating a little unfairness can lead to greater fairness overall.",
    mungerQuote: null,
  },
  {
    number: 8,
    name: "Envy/Jealousy Tendency",
    slug: "envy-jealousy",
    description: "Surprisingly absent from most psychology textbooks.",
    mungerQuote: "It's not greed that drives the world, but envy.",
  },
  {
    number: 9,
    name: "Reciprocation Tendency",
    slug: "reciprocation",
    description: "We feel compelled to return favors and slights alike. This can lead to poor decisions based on minor gestures.",
    mungerQuote: null,
  },
  {
    number: 10,
    name: "Influence-from-Mere-Association Tendency",
    slug: "influence-from-mere-association",
    description: "We are manipulated by associations — products linked to celebrities, bad news linked to messengers. Known as 'Persian Messenger Syndrome.'",
    mungerQuote: null,
  },
  {
    number: 11,
    name: "Simple, Pain-Avoiding Psychological Denial",
    slug: "simple-pain-avoiding-psychological-denial",
    description: "We deny reality when it's too painful to accept.",
    mungerQuote: "The reality is too painful to bear, so one distorts the facts until they become bearable.",
  },
  {
    number: 12,
    name: "Excessive Self-Regard Tendency",
    slug: "excessive-self-regard",
    description: "We overestimate our abilities. This is where overconfidence comes from.",
    mungerQuote: null,
  },
  {
    number: 13,
    name: "Over-Optimism Tendency",
    slug: "over-optimism",
    description: "We tend to be unrealistically optimistic, underestimating risks and challenges.",
    mungerQuote: null,
  },
  {
    number: 14,
    name: "Deprival-Superreaction Tendency",
    slug: "deprival-superreaction",
    description: "Loss aversion. Losing something provokes a far stronger reaction than gaining something of equal value.",
    mungerQuote: "Losses are twice as powerful as gains.",
  },
  {
    number: 15,
    name: "Social-Proof Tendency",
    slug: "social-proof",
    description: "We look to others for cues on how to think and act, especially under uncertainty.",
    mungerQuote: "It is not only action by others that misleads but also their inaction.",
  },
  {
    number: 16,
    name: "Contrast-Misreaction Tendency",
    slug: "contrast-misreaction",
    description: "Our perceptions are skewed by comparisons rather than absolute values. A $100 price seems cheap after seeing a $1,000 option.",
    mungerQuote: null,
  },
  {
    number: 17,
    name: "Stress-Influence Tendency",
    slug: "stress-influence",
    description: "Excessive stress leads to extreme reactions and impaired decision-making. Some stress improves performance; heavy stress causes dysfunction.",
    mungerQuote: null,
  },
  {
    number: 18,
    name: "Availability-Misweighing Tendency",
    slug: "availability-misweighing",
    description: "We overweight information that is recent, vivid, or easy to recall.",
    mungerQuote: "Ask the Coca-Cola company if availability changes behavior.",
  },
  {
    number: 19,
    name: "Use-It-or-Lose-It Tendency",
    slug: "use-it-or-lose-it",
    description: "Skills atrophy without practice. A skill you don't use regularly will fade.",
    mungerQuote: null,
  },
  {
    number: 20,
    name: "Drug-Misinfluence Tendency",
    slug: "drug-misinfluence",
    description: "Chemical dependency always causes moral breakdown and involves massive denial.",
    mungerQuote: null,
  },
  {
    number: 21,
    name: "Senescence-Misinfluence Tendency",
    slug: "senescence-misinfluence",
    description: "Aging causes cognitive decline, though continuous learning can slow it significantly.",
    mungerQuote: null,
  },
  {
    number: 22,
    name: "Authority-Misinfluence Tendency",
    slug: "authority-misinfluence",
    description: "We follow authority figures too readily, even when they're wrong. Think Milgram's experiments.",
    mungerQuote: null,
  },
  {
    number: 23,
    name: "Twaddle Tendency",
    slug: "twaddle",
    description: "People often produce meaningless talk that wastes time and confuses issues.",
    mungerQuote: null,
  },
  {
    number: 24,
    name: "Reason-Respecting Tendency",
    slug: "reason-respecting",
    description: "People comply more readily when given a reason, even a nonsensical one.",
    mungerQuote: "Tell people why and they'll be far more likely to comply.",
  },
  {
    number: 25,
    name: "Lollapalooza Tendency",
    slug: "lollapalooza",
    description: "When multiple biases combine in the same direction, the result is extreme — far more powerful than any single bias. This explains cults, bubbles, and manias.",
    mungerQuote: null,
  },
];

export type TimelineEvent = {
  year: number;
  event: string;
  type: "life" | "education" | "partnership" | "career" | "investing" | "intellectual";
};

export const TIMELINE: TimelineEvent[] = [
  { year: 1924, event: "Born January 1 in Omaha, Nebraska, to Alfred Munger, a lawyer, and Florence 'Toody' Munger", type: "life" },
  { year: 1941, event: "Worked at Buffett & Son grocery store, owned by Warren Buffett's grandfather", type: "life" },
  { year: 1943, event: "Left the University of Michigan, where he studied mathematics, to serve in the U.S. Army Air Corps during World War II", type: "life" },
  { year: 1944, event: "Trained as a meteorologist at Caltech (California Institute of Technology) by the Army Air Corps", type: "education" },
  { year: 1946, event: "Admitted to Harvard Law School without an undergraduate degree, based on his exceptional aptitude", type: "education" },
  { year: 1948, event: "Graduated magna cum laude from Harvard Law School", type: "education" },
  { year: 1949, event: "Began practicing law at Wright & Garrett, a prominent law firm in Los Angeles", type: "career" },
  { year: 1953, event: "Divorced first wife. His son Teddy was diagnosed with leukemia", type: "life" },
  { year: 1955, event: "Teddy Munger died of leukemia at age nine. Charlie later lost sight in one eye due to a failed cataract surgery", type: "life" },
  { year: 1956, event: "Married Nancy Barry Borthwick, with whom he would have four more children", type: "life" },
  { year: 1959, event: "First met Warren Buffett at a dinner in Omaha, introduced by Dr. Edwin Davis. Buffett later said he knew immediately that Munger was special", type: "partnership" },
  { year: 1962, event: "Co-founded the law firm Munger, Tolles & Olson, now one of the most prestigious in the U.S.", type: "career" },
  { year: 1962, event: "At Buffett's encouragement, began managing his own investment partnerships with an initial focus on real estate and securities", type: "investing" },
  { year: 1973, event: "The 1973–74 bear market devastated the partnership — losing 31.9% in 1973 and 31.5% in 1974, testing Munger's conviction in concentrated investing", type: "investing" },
  { year: 1975, event: "Closed his investment partnership after 13 years. Annualized return to partners: 19.8% vs. 5.2% for the Dow", type: "investing" },
  { year: 1978, event: "Became Vice Chairman of Berkshire Hathaway, beginning one of the greatest partnerships in business history", type: "partnership" },
  { year: 1984, event: "Became Chairman of Wesco Financial Corporation, a Berkshire subsidiary", type: "career" },
  { year: 1994, event: "Delivered 'A Lesson on Elementary, Worldly Wisdom' at USC Business School — his definitive speech on mental models", type: "intellectual" },
  { year: 1995, event: "Delivered 'The Psychology of Human Misjudgment' at Harvard — his magnum opus on cognitive biases", type: "intellectual" },
  { year: 1996, event: "Became Chairman of Daily Journal Corporation, a position he would hold for over two decades", type: "career" },
  { year: 2005, event: "Poor Charlie's Almanack published, edited by Peter Kaufman. Became an underground classic", type: "intellectual" },
  { year: 2007, event: "Delivered USC Law School commencement address — widely considered his most accessible and complete life philosophy", type: "intellectual" },
  { year: 2010, event: "Designed the Munger Graduate Residence at the University of Michigan, reflecting his lifelong passion for architecture", type: "life" },
  { year: 2013, event: "Designed controversial dormitory for UC Santa Barbara — a 4,500-student 'Munger Hall' with mostly windowless rooms, based on his theories about communal living", type: "life" },
  { year: 2014, event: "Donated $110 million to UC Santa Barbara for Munger Hall, one of the largest single donations to the university", type: "life" },
  { year: 2020, event: "At age 96, continued chairing the Daily Journal annual meeting, fielding questions for hours", type: "career" },
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
  {
    title: "Turning $2 Million Into $2 Trillion",
    slug: "turning-2-million-into-2-trillion",
    year: 1996,
    venue: "Herb Kay Undergraduate Lecture, UC Santa Barbara",
    description: "A brilliant thought experiment where Munger builds Coca-Cola from scratch using only elementary mental models — combining psychology, economics, and business strategy to show how first-principles thinking can create a $2 trillion enterprise.",
    youtube: null,
    transcript: null,
  },
  {
    title: "The Berkshire System",
    slug: "the-berkshire-system",
    year: 2014,
    venue: "Berkshire Hathaway 50th Anniversary",
    description: "Munger's 50th anniversary essay on how Berkshire Hathaway works — the management philosophy, capital allocation principles, and cultural characteristics that made Berkshire one of the most successful companies in history.",
    youtube: null,
    transcript: null,
  },
  {
    title: "Caltech DuBridge Distinguished Visitor Lecture",
    slug: "caltech-dubridge-lecture",
    year: 2008,
    venue: "California Institute of Technology",
    description: "One of Munger's most incisive, cutting talks. Covered economics, psychology, and decision-making with the intellectual rigor of a scientist and the practical wisdom of a veteran investor.",
    youtube: null,
    transcript: null,
  },
  {
    title: "Daily Journal Annual Meeting 2021",
    slug: "daily-journal-2021",
    year: 2021,
    venue: "Daily Journal Corporation",
    description: "Munger at 97, holding court for hours. Covered China, SPACs, Robinhood, Bitcoin, and the state of investing. A masterclass in late-career wisdom from one of the sharpest minds in finance.",
    youtube: "https://www.youtube.com/watch?v=K5Ss_P-gMwk",
    transcript: null,
  },
  {
    title: "Daily Journal Annual Meeting 2020",
    slug: "daily-journal-2020",
    year: 2020,
    venue: "Daily Journal Corporation",
    description: "Recorded just before the pandemic transformed the world. Munger shared views on Costco, Berkshire's future, the folly of modern finance, and his enduring optimism about American business.",
    youtube: "https://www.youtube.com/watch?v=1n-zfOsIRSI",
    transcript: null,
  },
  {
    title: "Daily Journal Annual Meeting 2019",
    slug: "daily-journal-2019",
    year: 2019,
    venue: "Daily Journal Corporation",
    description: "A wide-ranging Q&A session covering Wells Fargo, Chinese investments, cryptocurrency criticism, and the importance of reading. Vintage Munger — blunt, funny, and deeply insightful.",
    youtube: "https://www.youtube.com/watch?v=rByxMBqiJfE",
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
    title: "Charlie Munger: The Complete Investor",
    subtitle: null,
    author: "Tren Griffin",
    year: "2015",
    description: "A systematic presentation of Munger's investment approach organized around his mental models. Griffin distills decades of Munger's thinking into a clear, accessible framework for investors at any level.",
    amazon: "https://www.amazon.com/dp/023117098X",
    category: "biography",
    slug: "charlie-munger-complete-investor",
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
  {
    title: "Guns, Germs, and Steel",
    subtitle: "The Fates of Human Societies",
    author: "Jared Diamond",
    year: "1997",
    description: "How geography and environment shaped the fates of human civilizations. Munger loved Diamond's multidisciplinary approach to explaining why history unfolded as it did — a perfect embodiment of latticework thinking.",
    amazon: "https://www.amazon.com/dp/0393354326",
    category: "recommended",
    slug: "guns-germs-and-steel",
  },
  {
    title: "The Selfish Gene",
    subtitle: null,
    author: "Richard Dawkins",
    year: "1976",
    description: "Evolutionary biology as a mental model. Dawkins's gene-centered view of evolution gave Munger a powerful framework for understanding competition, cooperation, and the hidden logic driving human behavior.",
    amazon: "https://www.amazon.com/dp/0198788606",
    category: "recommended",
    slug: "the-selfish-gene",
  },
  {
    title: "Titan",
    subtitle: "The Life of John D. Rockefeller, Sr.",
    author: "Ron Chernow",
    year: "1998",
    description: "The definitive biography of John D. Rockefeller. Munger admired industrial geniuses who built enduring enterprises, and Chernow's meticulous research brings one of the greatest to life.",
    amazon: "https://www.amazon.com/dp/1400077303",
    category: "recommended",
    slug: "titan",
  },
  {
    title: "Benjamin Franklin: An American Life",
    subtitle: null,
    author: "Walter Isaacson",
    year: "2003",
    description: "Franklin was one of Munger's personal heroes — the ultimate polymath, self-improver, and practical thinker. Isaacson's biography captures the full sweep of Franklin's extraordinary life.",
    amazon: "https://www.amazon.com/dp/074325807X",
    category: "recommended",
    slug: "benjamin-franklin",
  },
  {
    title: "Einstein: His Life and Universe",
    subtitle: null,
    author: "Walter Isaacson",
    year: "2007",
    description: "Munger read every Einstein biography and considered this one the best. Isaacson shows how Einstein's imagination and rebellious thinking produced the greatest scientific breakthroughs of the 20th century.",
    amazon: "https://www.amazon.com/dp/0743264746",
    category: "recommended",
    slug: "einstein",
  },
  {
    title: "The Autobiography of Benjamin Franklin",
    subtitle: null,
    author: "Benjamin Franklin",
    year: "1791",
    description: "One of Munger's all-time favorite books. Franklin's own account of his self-education, moral development, and rise from obscurity — a masterclass in self-improvement that influenced Munger's entire worldview.",
    amazon: "https://www.amazon.com/dp/0486290735",
    category: "recommended",
    slug: "autobiography-of-benjamin-franklin",
  },
  {
    title: "Faraday, Maxwell, and the Electromagnetic Field",
    subtitle: null,
    author: "Nancy Forbes & Basil Mahon",
    year: "2014",
    description: "Munger called this 'just the best book of its kind I have ever read. Couldn't put it down.' The story of how two brilliant scientists, working in very different ways, unlocked the secrets of electromagnetism.",
    amazon: "https://www.amazon.com/dp/1616149426",
    category: "recommended",
    slug: "faraday-maxwell",
  },
  {
    title: "Living Within Limits",
    subtitle: "Ecology, Economics, and Population Taboos",
    author: "Garrett Hardin",
    year: "1993",
    description: "Recommended in Poor Charlie's Almanack. Hardin's rigorous examination of population, resources, and the limits of growth — the kind of clear, unflinching thinking Munger valued above all else.",
    amazon: "https://www.amazon.com/dp/0195093852",
    category: "recommended",
    slug: "living-within-limits",
  },
  {
    title: "Ice Age",
    subtitle: null,
    author: "John & Mary Gribbin",
    year: "2001",
    description: "Munger recommended this multiple times. A fascinating look at climate cycles and Earth's ice ages, combining geology, astronomy, and atmospheric science — multidisciplinary thinking about the planet itself.",
    amazon: "https://www.amazon.com/dp/0760725640",
    category: "recommended",
    slug: "ice-age",
  },
  {
    title: "The Third Chimpanzee",
    subtitle: "The Evolution and Future of the Human Animal",
    author: "Jared Diamond",
    year: "1991",
    description: "Another Diamond book Munger admired. Explores what makes humans unique among primates and how our evolutionary heritage shapes everything from art to warfare to self-destruction.",
    amazon: "https://www.amazon.com/dp/0060845503",
    category: "recommended",
    slug: "the-third-chimpanzee",
  },
  {
    title: "Getting It Done",
    subtitle: "How to Lead When You're Not in Charge",
    author: "Roger Fisher & Alan Sharp",
    year: "1998",
    description: "A practical guide to lateral leadership. Munger appreciated its clear-eyed approach to getting results through influence rather than authority — a skill essential in any organization.",
    amazon: "https://www.amazon.com/dp/0887309585",
    category: "recommended",
    slug: "getting-it-done",
  },
  {
    title: "Les Schwab: Pride in Performance",
    subtitle: null,
    author: "Les Schwab",
    year: "1986",
    description: "The story of how Les Schwab built a tire empire through brilliant incentive structures. Munger loved this as a real-world case study in how proper incentives create extraordinary business outcomes.",
    amazon: "https://www.amazon.com/dp/0960356207",
    category: "recommended",
    slug: "les-schwab",
  },
];

export const BOOK_CATEGORIES: Record<string, string> = {
  essential: "The Essential Volume",
  biography: "Biography & Analysis",
  quotes: "Quote Collections",
  related: "About Munger's Ideas",
  recommended: "Books Munger Loved",
};
