interface Milestone {
  date: string;
  weight: number;
  topics: string;
}

interface MilestoneGroup {
  name: string;
  fullname: string;
  description: string;
  completed: string;
  milestones: Array<Milestone>;
}

type TrainingMatrix = Array<MilestoneGroup>;
declare module "@/scripts/training.js" {}

const fullStackCert = [
  {
    date: "1/11/22",
    weight: 471,
    topics: "Continuous Integration & Continuous Deployment",
  },
  {
    date: "2/11/22",
    weight: 60,
    topics: "Capstone Project: Full Stack Restaurant App",
  },
  { date: "2/18/22", weight: 40, topics: "Capstone Project Video Walkthrough" },
];

const cs50 = [
  { date: "1/11/22", weight: 75, topics: "Weeks 0, 1, 2, 3" },
  {
    date: "2/8/22",
    weight: 3,
    topics:
      "Pixels, Hexadecimal, Addresses, Pointers, Strings, Pointer Arithmetic",
  },
  {
    date: "2/9/22",
    weight: 3,
    topics:
      "Memory Allocation, valgrind, Garbage values, Memory layout, scanf, Files",
  },
  { date: "2/11/22", weight: 6, topics: "Lab 4" },
  { date: "2/12/22", weight: 12, topics: "Problem Set 4" },
  {
    date: "2/15/22",
    weight: 6,
    topics:
      "Linked lists, growing arrays, growing linked lists, trees, other data structures",
  },
  { date: "2/16/22", weight: 18, topics: "Lab 5, Problem Set 5" },
  {
    date: "2/17/22",
    weight: 6,
    topics:
      "Python syntax, libraries, input, conditions, documentation, lists, strings, command-line arguments, algorithms, files, more libraries",
  },
  { date: "2/18/22", weight: 18, topics: "Lab 6, Problem Set 6" },
  {
    date: "2/22/22",
    weight: 24,
    topics:
      "Data processing, relational databases, SQL with python, IMDb, Problems, Lab 7, Problem Set 7",
  },
  {
    date: "2/23/22",
    weight: 24,
    topics:
      "The internet, the web, HTML, CSS, JavaScript, Lab 8, Problem Set 8",
  },
  {
    date: "2/24/22",
    weight: 12,
    topics: "Web programming, Flask, Forms, Layouts, POST, MVC, Frosh IMs",
  },
  {
    date: "2/25/22",
    weight: 12,
    topics: "Storing Data, Emails, Sessions, Store, Shows, Searching",
  },
  {
    date: "3/7/22",
    weight: 6,
    topics:
      "Decision-making, Search, Heuristics, Reinforcement Learning, Genetic Algorithms, Neural Networks",
  },
  { date: "3/8/22", weight: 6, topics: "Lab 10" },
  { date: "3/9/22", weight: 12, topics: "Problem Set 10" },
  { date: "3/28/22", weight: 1, topics: "Final Project - GitHub Issues App" },
  { date: "4/11/22", weight: 23, topics: "Final Project - GitHub Issues App" },
  { date: "5/4/22", weight: 12, topics: "Final Project - GitHub Issues App" },
  { date: "5/5/22", weight: 12, topics: "Final Project - GitHub Issues App" },
  { date: "5/21/22", weight: 12, topics: "Final Project - GitHub Issues App" },
  { date: "5/22/22", weight: 12, topics: "Final Project - GitHub Issues App" },
];

const dataScienceCert = [
  { date: "1/11/22", weight: 350, topics: "Probability" },
  {
    date: "2/8/22",
    weight: 36,
    topics:
      "Inference & Modeling. Parameters & Estimates, Central Limit Theorem, Confidence Intervals and P-Values",
  },
  {
    date: "2/9/22",
    weight: 24,
    topics: "Inference & Modeling. Statistical Models, Bayesian Statistics",
  },
  {
    date: "2/10/22",
    weight: 12,
    topics: "Inference & Modeling: Election Forecasting",
  },
  {
    date: "2/11/22",
    weight: 12,
    topics: "Inference & Modeling: Association Tests",
  },
  {
    date: "2/12/22",
    weight: 12,
    topics: "Inference & Modeling: Final Module Assessment",
  },
  {
    date: "2/15/22",
    weight: 108,
    topics:
      "Productivity Tools: Unix/Linux, git, GitHub, RStudio, Final Course Assessment",
  },
  {
    date: "2/22/22",
    weight: 12,
    topics: "Linear Regression: Introduction to Regression",
  },
  { date: "3/6/22", weight: 12, topics: "Linear Regression: Linear Models" },
  { date: "3/7/22", weight: 12, topics: "Linear Regression: Confounding" },
  {
    date: "3/8/22",
    weight: 12,
    topics: "Linear Regression - Final Course Assessment",
  },
  { date: "3/13/22", weight: 12, topics: "Machine Learning - Basics" },
  {
    date: "3/14/22",
    weight: 12,
    topics: "Machine Learning - Cross-Validation",
  },
  {
    date: "3/15/22",
    weight: 12,
    topics: "Machine Learning - Popular Algorithms",
  },
  { date: "3/16/22", weight: 12, topics: "Machine Learning - Regularization" },
  {
    date: "3/16/22",
    weight: 12,
    topics: "Machine Learning - Final Course Assessment",
  },
  {
    date: "3/30/22",
    weight: 72,
    topics: "Wrangling - Importing data into R, web scraping, tidyverse",
  },
  {
    date: "3/31/22",
    weight: 48,
    topics: "Wrangling - String Processing, dplyr",
  },
  {
    date: "4/1/22",
    weight: 48,
    topics: "Wrangling - Dates & Times, text mining",
  },
  {
    date: "4/2/22",
    weight: 12,
    topics: "Wrangling - Final Course Assessment",
  },

  { date: "4/3/22", weight: 24, topics: "Capstone Day 1" },
  { date: "4/4/22", weight: 24, topics: "Capstone Day 2" },
  { date: "4/5/22", weight: 24, topics: "Capstone Day 3" },
  { date: "4/5/22", weight: 24, topics: "Capstone Day 4" },
];

const machineLearningCert = [
  { date: "1/11/22", weight: 30, topics: "Calculus Review" },
  {
    date: "2/2/22",
    weight: 10,
    topics: "Multivariable Calculus Review Part 1",
  },
  {
    date: "2/3/22",
    weight: 10,
    topics: "Multivariable Calculus Review Part 2",
  },
  { date: "2/4/22", weight: 10, topics: "Linear Algebra Review Part 1" },
  { date: "2/5/22", weight: 10, topics: "Linear Algebra Review Part 2" },
  { date: "2/6/22", weight: 10, topics: "Review Probability & Statistics" },
  {
    date: "2/8/22",
    weight: 80,
    topics:
      "Modeling & Simulation: Ordinary Differential Equations, Forward Euler Method, Higher-Order Methods, Implicit Methods",
  },
  {
    date: "2/9/22",
    weight: 20,
    topics: "Modeling & Simulation: Module Problem Set",
  },
  {
    date: "2/10/22",
    weight: 30,
    topics:
      "Spatial Modeling: Partial Differential Equations, Spatial Discretization, Explicit and Implicit PDE Solutions",
  },
  {
    date: "2/11/22",
    weight: 20,
    topics: "Spatial Modeling: Boundary Conditions, Linear Systems",
  },
  {
    date: "2/12/22",
    weight: 10,
    topics: "Spatial Modeling: Nonlinear Systems and Root Finding",
  },
  {
    date: "2/13/22",
    weight: 20,
    topics: "Spatial Modeling: Module Problem Set",
  },
  {
    date: "2/15/22",
    weight: 30,
    topics:
      "Optimization: Least Squares Problem, Gradient Descent, Newton's Method",
  },
  {
    date: "2/16/22",
    weight: 20,
    topics:
      "Optimization: Parameter Estimation & Nonlinear Least Squares, Module Problem Set",
  },
  {
    date: "2/17/22",
    weight: 30,
    topics:
      "From Optimization to Machine Learning: Regression Problems, Regressing Methods, Regularization",
  },
  {
    date: "2/18/22",
    weight: 20,
    topics:
      "From Optimization to Machine Learning: Classification Problems, Logistic Regression",
  },
  {
    date: "2/19/22",
    weight: 20,
    topics:
      "From Optimization to Machine Learning: Stochastic Gradient Descent, Assessing Model Fit",
  },
  {
    date: "2/20/22",
    weight: 20,
    topics: "From Optimization to Machine Learning: Module Problem Set",
  },
  {
    date: "2/22/22",
    weight: 20,
    topics:
      "Probabilistic Methods: Monte Carlo Simulation, Probabilistic Forecasting",
  },
  {
    date: "2/23/22",
    weight: 20,
    topics:
      "Probabilistic Methods: Sensitivity Forecasting, Simulating Rare Events",
  },
  {
    date: "2/24/22",
    weight: 20,
    topics: "Probabilistic Methods: Module Problem Set",
  },
  { date: "2/25/22", weight: 20, topics: "Case Study: Aurora Flight Sciences" },
  { date: "2/26/22", weight: 20, topics: "Case Study: Schlumberger" },
  { date: "2/27/22", weight: 20, topics: "Case Study: BASF" },
  {
    date: "3/8/22",
    weight: 20,
    topics:
      "Feature Engineering - Predicting Battery Lifetime, Identifying Features",
  },
  {
    date: "3/9/22",
    weight: 20,
    topics:
      "Feature Engineering - Three Types of Regularization, Applying Feature Engineering",
  },
  {
    date: "3/10/22",
    weight: 10,
    topics:
      "Feature Engineering - Why Feature Engineering and Elastic Net Matters",
  },
  {
    date: "3/11/22",
    weight: 20,
    topics: "Feature Engineering - Module Problem Set",
  },
  {
    date: "3/12/22",
    weight: 10,
    topics: "Machine Learning for Computational Imaging - Inverse Problems",
  },
  {
    date: "3/13/22",
    weight: 20,
    topics:
      "Machine Learning for Computational Imaging - Phase Retrieval, Phase Extracting Neural Networks",
  },
  {
    date: "3/15/22",
    weight: 30,
    topics:
      "Machine Learning for Computational Imaging - Perceptual Loss, Learning to Synthesize, Tomography",
  },
  {
    date: "3/16/22",
    weight: 20,
    topics: "Machine Learning for Computational Imaging - Module Problem Set",
  },
  {
    date: "3/17/22",
    weight: 20,
    topics: "Seismic Deepfakes - Wave Equations, Inversion",
  },
  {
    date: "3/18/22",
    weight: 20,
    topics: "Seismic Deepfakes - From High to Low Frequencies, Neural Networks",
  },
  {
    date: "3/19/22",
    weight: 10,
    topics: "Seismic Deepfakes - Training & Testing",
  },
  {
    date: "3/20/22",
    weight: 20,
    topics: "Seismic Deepfakes - Module Problem Set",
  },
  {
    date: "3/22/22",
    weight: 20,
    topics:
      "Predicting Oil & Gas Production - Minimizing Decision Making Risk, Predicting Future Production",
  },
  {
    date: "3/23/22",
    weight: 30,
    topics:
      "Predicting Oil & Gas Production - Linear regression and predicting producion, Module Problem Set",
  },
  {
    date: "3/24/22",
    weight: 10,
    topics:
      "Machine Learning in Geometric Representations - Two Modalities of 3D Geometric Data",
  },
  {
    date: "3/25/22",
    weight: 20,
    topics:
      "Machine Learning in Geometric Representations - Deep Learning from Point Clouds, Application of Point Cloud Learnings",
  },
  {
    date: "3/26/22",
    weight: 20,
    topics:
      "Machine Learning in Geometric Representations - Deep Learning from Vector Data, Frontiers in 3D Learning",
  },
  {
    date: "3/27/22",
    weight: 20,
    topics:
      "Machine Learning in Geometric Representations - Module Problem Set",
  },
  {
    date: "3/29/22",
    weight: 30,
    topics:
      "Quantifying Risk - Risk of Extreme Events, Probabilistic Description, Challenges",
  },
  {
    date: "3/30/22",
    weight: 30,
    topics:
      "Quantifying Risk - Active Learning & Optimal Experimental Design, Using a New Output-Weighted Criterion, Q Criterion Results",
  },
  {
    date: "3/31/22",
    weight: 20,
    topics: "Quantifying Risk - Module Problem Set",
  },
  {
    date: "4/1/22",
    weight: 30,
    topics:
      "Machine Learning & Computational Materials Discovery - The Machine Learning Tradeoff, Representations of Transition Metals, Training Set Performance and Details",
  },
  {
    date: "4/2/22",
    weight: 30,
    topics:
      "Machine Learning & Computational Materials Discovery - Feature Selection, Uncertainty Quantification, Accelerating Discovery",
  },
  {
    date: "4/3/22",
    weight: 20,
    topics:
      "Machine Learning & Computational Materials Discovery - Module Problem Set",
  },
  {
    date: "4/5/22",
    weight: 20,
    topics:
      "Practical Machine Learning in Composite Design - Using Machine Learning for Image Classification, Complementing Conventional Methods",
  },
  {
    date: "4/6/22",
    weight: 30,
    topics:
      "Practical Machine Learning in Composite Design - Predicting Fracture Propagation, Module Problem Set",
  },
  {
    date: "4/7/22",
    weight: 0,
    topics:
      "Machine Learning in Aerospace - Inverse problems, Uncertainty Quantification",
  },
  {
    date: "4/8/22",
    weight: 0,
    topics:
      "Machine Learning in Aerospace - Dimensionality Reduction, Surrogate Modeling",
  },
  {
    date: "4/9/22",
    weight: 0,
    topics:
      "Machine Learning in Aerospace - Data Assimilation, Ensemble Methods",
  },
  {
    date: "4/10/22",
    weight: 0,
    topics:
      "Machine Learning in Aerospace - Supervised learning and approximate Bayesian computation, Module Problem Set",
  },
];

const openSource = [
  { date: "1/15/22", weight: 400, topics: "Algorithms" },
  {
    date: "4/1/22",
    weight: 60,
    topics: "Algorithms - Fundamentals, Sorting, Searching",
  },
  {
    date: "4/2/22",
    weight: 60,
    topics: "Algorithms - Graphs, Strings, Context",
  },
  {
    date: "4/3/22",
    weight: 40,
    topics:
      "Computer Programs - Functions, Names, Control, Higher-Order Functions, Environments, Iteration, Design, Function Examples",
  },
  {
    date: "4/4/22",
    weight: 40,
    topics:
      "Computer Programs - Recursion, Tree Recursion, Containers, Data Abstraction, Trees, Mutable Values, Mutable Functions, Iterators",
  },
  {
    date: "4/5/22",
    weight: 55,
    topics:
      "Computer Programs - Objects, Inheritance, Representation, Composition, Efficiency, Decomposition, Data Examples, Users, Scheme, Exceptions, Calculator",
  },
  {
    date: "4/6/22",
    weight: 45,
    topics:
      "Computer Programs - Interpreters, Declarative Programming, Tables, Aggregation, Databases, Distributed Data, Natural Language, Tail Calls, Macros",
  },
  {
    date: "4/7/22",
    weight: 40,
    topics:
      "Data Structures - Classes, Testing, References, Recursion, Lists, SLLists, Nested Classes, Sentinel Nodes",
  },
  {
    date: "4/8/22",
    weight: 40,
    topics:
      "Data Structures - DLLists, Arrays, ALists, Inheritance, Extends, Casting, Subtype Polymorphism vs HoFs",
  },
  {
    date: "4/9/22",
    weight: 40,
    topics:
      "Data Structures - Exceptions, Iterators, Object Methods, Command LIne Programming",
  },
  {
    date: "4/10/22",
    weight: 40,
    topics:
      "Data Structures - Asymptotics, Disjoint Sets, ADTs, Sets, Maps, BSTs",
  },
  {
    date: "4/11/22",
    weight: 40,
    topics:
      "Data Structures - B-Trees, Red Black Trees, Hashing, Heaps & PQs, Tree and Graph Traversals",
  },
  {
    date: "4/12/22",
    weight: 40,
    topics:
      "Data Str/uctures - Shortest Paths, Minimum Spanning Trees, Range Searching and Multidimensional Data",
  },
  {
    date: "4/13/22",
    weight: 40,
    topics:
      "Data Structures - Prefix Operations & Tries, Reductions  Decomposition, Basic Sorts, Quick Sort",
  },
  {
    date: "4/14/22",
    weight: 40,
    topics: "Data Structures - Sorting & Algorithmic Bounds, Radix Sorts",
  },
  {
    date: "4/15/22",
    weight: 40,
    topics: "Data Structures - Compression, Complexity, P = NP?",
  },
  {
    date: "4/16/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - Number representation, C Intro, Memory Management, Floating Point, RISC-V intro",
  },
  {
    date: "4/17/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - RISC-V lw, sw, Decisions, Procedure, Instruction Formats",
  },
  {
    date: "4/18/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - Syncronous Digital Systems, State machines, Combinational Logic",
  },
  {
    date: "4/19/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - Single-cycle CPU Datapath, Conrol, Pipelining, Caches",
  },
  {
    date: "4/20/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - Virtual Memory, Flynn Taxonomy, SIMD ",
  },
  {
    date: "4/21/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - Thread-Level & Data-Level Parallelism",
  },
  {
    date: "4/22/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - MapReduce, Spark, Data Centers",
  },
  {
    date: "4/23/22",
    weight: 40,
    topics:
      "Great Ideas in Computer Architecture - Cloud Computing, I/O, Parity, ECC",
  },
  {
    date: "4/34/22",
    weight: 40,
    topics: "Great Ideas in Computer Architecture - GPUs",
  },
];

const leetCode = [
  { date: "1/11/22", weight: 1962, topics: "CodeWars JavaScript Training" },
  { date: "2/6/22", weight: 300, topics: "CodeWars JavaScript Training" },
  { date: "3/27/22", weight: 300, topics: "CodeWars JavaScript Training" },
  { date: "4/3/22", weight: 100, topics: "CodeWars Java Training" },
  { date: "4/6/22", weight: 300, topics: "CodeWars Java Training" },
  { date: "4/10/22", weight: 100, topics: "CodeWars C Training" },
  { date: "4/13/22", weight: 200, topics: "CodeWars C Training" },
  { date: "4/16/22", weight: 300, topics: "CodeWars C Training" },
  { date: "4/18/22", weight: 300, topics: "LeetCode Training - Easy" },
  { date: "4/19/22", weight: 400, topics: "LeetCode Training - Easy" },
  { date: "4/20/22", weight: 600, topics: "LeetCode Training - Easy" },
  { date: "4/22/22", weight: 700, topics: "LeetCode Training - Easy & Medium" },
  { date: "4/26/22", weight: 1200, topics: "LeetCode Training - Medium" },
  { date: "4/28/22", weight: 1200, topics: "LeetCode Training - Medium" },
  { date: "5/1/22", weight: 1300, topics: "LeetCode Training - Hard & Medium" },
  { date: "5/8/22", weight: 1300, topics: "LeetCode Training - Hard" },
];

export const trainingMatrix: TrainingMatrix = [
  {
    name: "fullStackCert",
    fullname: "MIT Full Stack Development Certificate",
    description:
      "I completed the Professional Certificate in Full Stack Development with MERN with MIT xPro. This 32-week program covers web development, JavaScript, front-end development with React, and back-end development with Express, MongoDB and Node.js.",
    completed:
      "I completed the Professional Certificate in Full Stack Development with MERN with MIT xPro. This 32-week program covered web development, JavaScript, front-end development with React, and back-end development with Express, MongoDB and Node.js.",
    milestones: fullStackCert,
  },
  {
    name: "cs50",
    fullname: "Harvard CS50",
    description:
      "I'm completing Harvard's <a href='https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0' target='_blank'>CS50</a>. This 10-week course with paid certificate option covers more theoretical and foundational computer science concepts than those addressed by the MIT certificate. The primary languages are C and Python.",
    completed:
      "I completed Harvard's <a href='https://online-learning.harvard.edu/course/cs50-introduction-computer-science?delta=0' target='_blank'>CS50</a>. This 10-week course with paid certificate option covered more theoretical and foundational computer science concepts than those addressed by the MIT certificate. The primary languages were C and Python.",
    milestones: cs50,
  },
  {
    name: "dataScienceCert",
    fullname: "Harvard Data Science Certificate",
    description:
      "I'm completing a nine-course, probability & statistics-focused <a href='https://www.edx.org/professional-certificate/harvardx-data-science' target='_blank'>Data Science Certificate</a> through Harvard's eduX program. The primary language used in this course is R.",
    completed:
      "I completed a nine-course, probability & statistics-focused <a href='https://www.edx.org/professional-certificate/harvardx-data-science' target='_blank'>Data Science Certificate</a> through Harvard's eduX program. The primary language used in this course was R.",
    milestones: dataScienceCert,
  },
  {
    name: "machineLearningCert",
    fullname: "MIT Machine Learning Certificate",
    description:
      "I'm completing a math-intensive machine learning certificate with MIT xPro. This 10-week program will help me brush up on linear algebra, multivariable calculus, and discrete mathematics while applying those skills to modern computational engineering problems.",
    completed:
      "I completed a math-intensive machine learning certificate with MIT xPro. This 10-week program helped me brush up on linear algebra, multivariable calculus, and discrete mathematics while applying those skills to modern computational engineering problems.",
    milestones: machineLearningCert,
  },
  {
    name: "openSource",
    fullname: "Open Source Courses",
    description:
      "To supplement my paid coursework, and cover education content similar to that involved in completing an undergraduate degree in CS, I'm taking Berkeley's <a href='https://inst.eecs.berkeley.edu/~cs61a/sp20/' target='_blank'>CS61A</a>, <a href='https://sp21.datastructur.es/' target='_blank'>CS61B</a>, and <a href='https://inst.eecs.berkeley.edu/~cs61c/fa19/' target='_blank'>CS61C</a>, and Princeton's <a href='https://algs4.cs.princeton.edu/home/' target='_blank'>Algorithms</a>.",
    completed:
      "To supplement my paid coursework, and cover education content similar to that involved in completing an undergraduate degree in CS, I completed the coursework for Berkeley's <a href='https://inst.eecs.berkeley.edu/~cs61a/sp20/' target='_blank'>CS61A</a>, <a href='https://sp21.datastructur.es/' target='_blank'>CS61B</a>, and <a href='https://inst.eecs.berkeley.edu/~cs61c/fa19/' target='_blank'>CS61C</a>, and Princeton's <a href='https://algs4.cs.princeton.edu/home/' target='_blank'>Algorithms</a>.",
    milestones: openSource,
  },
  {
    name: "leetCode",
    fullname: "Competitive Programming",
    description:
      "I train regularly on Codewars, focusing on speed, simplicity, and readability. As I move into the active job search phase, I'll be shifting my focus to LeetCode and participating in LeetCode competitions.",
    completed:
      "I trained regularly on Codewars, focusing on speed, simplicity, and readability. As I moved into the active job search phase, I shifted my focus to LeetCode and participating in LeetCode competitions.",
    milestones: leetCode,
  },
];
