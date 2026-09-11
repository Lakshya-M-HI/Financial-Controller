# SIH26091 — Complete Project Understanding

---

## 1. Problem Statement

### Official problem in simple English

Many rural and semi-urban entrepreneurs want to start small businesses but face two major problems:

### Problem 1 — They don't know which business is actually viable locally

A person may think:

> "My neighbour is earning well from dairy, so I'll also start dairy."

But the situation may be completely different in their village.

There may already be:
- 10 dairy businesses
- low local demand
- expensive cattle feed
- poor transportation
- seasonal demand
- only one major buyer
- inadequate cold storage
- weak distribution

So simply knowing that a business is profitable somewhere doesn't mean it will work in this particular village.

SIH calls this need for hyper-local business feasibility.

### Problem 2 — They don't understand financing

Suppose an entrepreneur has:
- ₹1,00,000 available capital.

They may not know:
- How much project they can actually afford
- How much loan they can seek
- Which financing scheme applies
- How much interest they will pay
- What the repayment schedule looks like
- Whether the business can generate enough cash to repay the loan

SIH26091 therefore asks for a Smart Financial Calculator & Scheme Router in addition to the business advisory module.

---

## 2. Our Solution

Our solution should be presented as:

> **An AI-powered, multilingual, hyper-local business advisory and financial structuring platform for rural and semi-urban micro-entrepreneurs.**

The system takes:
- Location
- `+`
- Available Margin Capital
- `+`
- Proposed Business

and produces:
- Hyper-Local Feasibility Report
- `+`
- Financial Structure
- `+`
- Scheme Recommendation
- `+`
- Repayment Plan
- `+`
- Business Recommendations

---

## 3. The Most Important Point for the Team

Don't think of this as:

> "We are building a chatbot."

That would be a weak interpretation.

Think of it as:

We are building a decision-support system for someone who is about to invest their own money and potentially take a loan to start a business.

The AI is only one component.

The actual system is:

```text
Data
 ↓
Analysis
 ↓
Financial calculations
 ↓
AI reasoning
 ↓
Recommendations
 ↓
Explainable report
```

---

## 4. Complete System Architecture

I recommend this architecture:

```text
                    USER
                      │
                      ▼
             ┌─────────────────┐
             │ Web / Mobile UI │
             │  Multilingual   │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ API / Backend   │
             │ Node + Express  │
             └────────┬────────┘
                      │
          ┌───────────┼────────────┐
          │           │            │
          ▼           ▼            ▼
     PostgreSQL    AI Layer    Data Layer
          │           │            │
          │           ▼            │
          │     AI Orchestrator    │
          │           │            │
          │     ┌─────┼─────┐      │
          │     ▼     ▼     ▼      │
          │  Market  SWOT  Advice  │
          │  Agent   Agent Agent   │
          │                        │
          ▼                        ▼
    Financial Engine       Local Data Sources
          │                        │
          ▼                        ▼
    Scheme Router             GIS / Census /
          │                   Economic Data
          ▼
   Repayment Calculator
          │
          └──────────────┐
                         ▼
                FINAL ADVISORY REPORT
```

---

## 5. Frontend

The user should see a very simple interface.

Because the target user may not be technically sophisticated, don't design it like a banking dashboard.

### Screen 1 — Basic information
- Name
- Mobile Number
- Village
- Block
- District
- State

Potentially:
- 📍 Use my current location

### Screen 2 — Business
What business do you want to start?

- `[ Dairy ]`
- `[ Retail ]`
- `[ Tailoring ]`
- `[ Food Processing ]`
- `[ Handicraft ]`
- `[ Agriculture ]`
- `[ Other ]`

Also:
- Available Margin Capital
- ₹ __________

### Screen 3 — AI analysis

Show:
- Analyzing your location...
- ✓ Local population
- ✓ Market demand
- ✓ Existing businesses
- ✓ Business category
- ✓ Pricing
- ✓ Financial feasibility
- ✓ Available schemes

---

## 6. Input

Minimum SIH-required inputs:

### A. Geographic location
- Village
- Block
- District

### B. Available margin capital

Example:
- ₹1,00,000

### C. Proposed business category

Example:
- Dairy

These are explicitly part of the SIH specification.

### But we can collect additional information

To improve accuracy:
- Age
- Experience
- Education
- Existing business?
- Family labour available?
- Land available?
- Shop available?
- Existing equipment?
- Expected working hours?
- Target customers?

Don't make all of these mandatory.

The UX should be:

> **Minimum input → maximum useful output.**

---

## 7. Module 1 — Hyper-Local Business Feasibility

This is actually the more technically interesting part of the problem.

SIH asks for six areas.

### 7.1 Market Reach

#### Question:
How many potential customers are realistically reachable?

For example:
- Village population = 8,500
- Estimated households = 1,700
- Potential dairy consumers = 1,100 households
- Practical service radius = 5–10 km

Primary channels:
- • Direct household sales
- • Local shops
- • Milk collection centre

SIH specifically mentions estimating the immediate consumer base within a 5–10 km radius and identifying distribution channels.

### 7.2 Opportunity Analysis

The system asks:
- What is missing in this local market?

Example:

Existing:
- 7 general grocery shops
- 4 dairy sellers
- 2 garment shops

Potential gap:
- No dedicated packaged dairy product seller

AI could recommend:
> "Instead of competing directly with existing milk sellers, consider value-added products such as paneer/curd."

The important point:
- Don't let the LLM invent this.
- It should be based on available evidence.

### 7.3 SWOT Analysis

Generate:

#### Strengths
- Low initial investment
- Local raw material available
- Family labour available

#### Weaknesses
- Limited working capital
- Low digital reach
- No previous business experience

#### Opportunities
- Growing local demand
- Nearby town market
- Online/local delivery opportunity

#### Threats
- Seasonal demand
- Existing competitors
- Raw material price fluctuations

### 7.4 Threat Identification

This is more useful than generic SWOT.

Example:

- **Risk:** Milk supply disruption
- **Probability:** Medium
- **Impact:** High
- **Mitigation:** Maintain 2–3 suppliers

Another:

- **Risk:** Seasonal demand decline
- **Mitigation:** Diversify into paneer/curd

### 7.5 Competitor Mapping

This is where maps/GIS become useful.

Example:

```text
                Village

     🏪 Shop
                   🥛 Dairy

           👤 User

      🥛 Dairy

                   🥛 Dairy
```

We can show:
- Existing businesses within 5 km: 6
- Business density: Medium
- Competition: Moderate

#### Important research challenge

This is one of the hardest parts of SIH26091.

There isn't necessarily a clean, reliable public dataset saying:

> "Village X has exactly 7 dairy businesses."

So we must research data availability rather than pretending the data exists.

This is one of the areas that can distinguish your team.

A third-party analysis of SIH26091 also highlights the difficulty of reliable village-level competitor data and recommends grounding local claims in traceable data rather than generating confident guesses.

### 7.6 Product Market Value / Pricing

Example:
- Product: Milk
- Estimated local price range: ₹52–₹60/L
- Suggested initial price: ₹56/L

But again:
The source matters.

Possible sources:
- government market data
- agriculture/commodity datasets
- local market data
- user-provided information
- verified APIs
- manually curated initial dataset

We should display:
- Data confidence: Medium

rather than pretending every number is exact.

---

## 8. Module 2 — Financial Structuring

This is the deterministic part.

Suppose:
- Available Margin = ₹1,00,000

The SIH model uses:
- Margin = 10%

Therefore:
- Project Cost = ₹1,00,000 / 0.10 = ₹10,00,000

Maximum loan:
- ₹10,00,000 × 90% = ₹9,00,000

This 10%/90% relationship is explicitly specified in the problem.

---

## 9. Scheme Router

The backend then determines which scheme rules apply.

The SIH problem provides two financial branches:

### Branch A
- Project Cost ≤ ₹1.40 lakh
- → Micro Finance Scheme
- Interest = 6.5%
- Tenure = 3 years
- Moratorium = 3 months

### Branch B
- ₹1.40 lakh < Project Cost ≤ ₹50 lakh
- → Term Loan Scheme
- Interest = 8%
- Tenure = 7 years
- Moratorium = 6 months

The exact scheme parameters should be treated as configuration/rules, not hard-coded throughout the application, because government scheme rules can change. The SIH statement provides these rules for the challenge.

---

## 10. EMI / Repayment Engine

This should be pure mathematics/code, not AI.

For example:
- Loan: ₹9,00,000
- Interest: 8%
- Tenure: 7 years

The system calculates:
- Principal
- Interest
- EMI/installment
- Total repayment
- Remaining balance

And produces something like:

Quarter 1
- Principal: ₹XX
- Interest: ₹XX
- Payment: ₹XX

Quarter 2
- Principal: ₹XX
- Interest: ₹XX
- Payment: ₹XX

The system must account for the specified moratorium.

---

## 11. AI's Actual Job

This distinction is extremely important when judges ask:

> "Why do you need AI?"

We shouldn't answer:

> "Because we use ChatGPT."

Instead:

### Deterministic components
- Loan calculation
- EMI
- Scheme threshold
- Repayment
- Financial formulas

Use normal code.

### AI components
- Natural language understanding
- Multilingual conversation
- Local business reasoning
- SWOT generation
- Opportunity interpretation
- Risk explanation
- Personalized recommendations
- Report generation
- Question answering

This is a much stronger architecture.

---

## 12. AI Agent Architecture

We can eventually divide the intelligence into agents.

### Agent 1 — Location Intelligence Agent

Input:
- Village
- Block
- District

Output:
- Population
- Economic indicators
- Market radius
- Relevant local information

### Agent 2 — Market Analysis Agent

Input:
- Business + Location

Output:
- Demand
- Market size
- Competitors
- Distribution
- Opportunity

### Agent 3 — Business Feasibility Agent

Combines:
- Market data
- Business category
- Budget
- Location

Produces:
- SWOT
- Risks
- Opportunity score
- Feasibility score

### Agent 4 — Financial Agent

Uses the deterministic financial engine:
- Margin
- Project cost
- Loan
- Interest
- Tenure
- EMI

### Agent 5 — Scheme Agent

Searches the verified scheme knowledge base and identifies relevant schemes.

### Agent 6 — Report Agent

Combines everything:
- Market
- `+`
- Feasibility
- `+`
- Financials
- `+`
- Schemes
- `+`
- Risks

and generates the final report.

---

## 13. Very Important: AI Should Know When NOT to Answer

This can be one of your strongest judge points.

Suppose the system doesn't have reliable competitor data.

It should say:

> "Reliable village-level competitor data is unavailable. The following estimate is based on block-level data and user-provided information."

Instead of:

> "There are 8 dairy shops within 5 km."

when it has no evidence.

This is especially important because this system influences someone potentially taking debt.

A strong project should have:

```text
Evidence
↓
Confidence
↓
Recommendation
```

not:

```text
LLM
↓
Guess
↓
Recommendation
```

---

## 14. Data Sources — Research Area

This is probably the #1 research area I would assign to your team.

You need to investigate:

### Government data

Research:
- Census
- Ministry of Statistics
- MSME datasets
- Udyam
- Agriculture datasets
- NABARD
- RBI
- government district statistics
- state government economic data
- market/mandi data
- India data portals
- government scheme portals

India's official government schemes portal provides scheme discovery and eligibility information, while the MSME ministry maintains scheme information including PMEGP and CGTMSE.

---

## 15. Government Scheme Research

Don't restrict yourselves to the two rules given in SIH.

Research:

### PMEGP
PMEGP supports new micro-enterprises in rural and urban areas and publishes detailed eligibility and assistance conditions.

### CGTMSE
Research:
- eligibility
- credit guarantee
- lending institutions
- collateral requirements

The MSME portal describes CGTMSE as a mechanism supporting collateral-free credit through guarantees to lenders.

### Other schemes
Research:
- MUDRA
- Stand-Up India
- PMEGP
- CGTMSE
- state-specific schemes
- SC/ST entrepreneur schemes
- agriculture/livestock schemes
- artisan schemes

But don't blindly include them in the MVP.

---

## 16. How to Make the Project More Accurate

Think in terms of:

### Evidence hierarchy
```text
Government official source
        ↓
Official API
        ↓
Verified dataset
        ↓
Reliable secondary source
        ↓
User-provided information
        ↓
AI inference
```

The lower we go, the more clearly we should communicate uncertainty.

---

## 17. Suggested Final Output

When the user enters:
- Village: XYZ
- Block: ABC
- District: Jaipur
- Business: Dairy
- Margin: ₹1,00,000

The final report could look like:

### Business Feasibility
- Business: Dairy Farming
- Location: XYZ, ABC, Jaipur
- Estimated market reach: 5–10 km
- Competition: Medium
- Opportunity: Medium–High

Suggested customer segments:
- Households
- Tea shops
- Local restaurants

### Risks
| Risk | Probability | Impact |
| :--- | :--- | :--- |
| Feed price increase | Medium | High |
| Seasonal demand | Medium | Medium |
| Single buyer dependency | High | High |

### Financial Structure
```text
Available Margin     ₹1,00,000
Project Cost         ₹10,00,000
Maximum Loan         ₹9,00,000
```

### Recommendation
> "The business appears feasible under the current assumptions, but the primary risk is feed-cost volatility. Consider maintaining multiple suppliers and diversifying into value-added dairy products."

### Confidence
```text
Market data       Medium
Financial data    High
Competitor data   Low/Medium
Overall            Medium
```

This is much more professional than simply displaying:

> "AI says your business is good."

---

## 18. Backend Architecture

Your current stack can become:

```text
Frontend
Next.js + TypeScript
       │
       ▼
API Layer
Node.js + Express
       │
       ├───────────────┐
       ▼               ▼
PostgreSQL          AI Layer
Prisma              LLM
       │               │
       │          Agent Orchestrator
       │               │
       │      ┌────────┼────────┐
       │      ▼        ▼        ▼
       │    Market   Risk   Report
       │
       ▼
Financial Engine
       │
       ├── Project Cost
       ├── Loan
       ├── Scheme
       ├── EMI
       └── Repayment
```

Python/FastAPI can be introduced later if you genuinely need statistical models or forecasting. You don't need it just to impress judges.

---

## 19. PostgreSQL — What We Have Already Built

We have already created:
- User
- EntrepreneurProfile
- BusinessProposal
- FeasibilityReport
- FinancialPlan
- RepaymentSchedule

That's a good starting point.

Eventually we should probably add entities for:
- LocationData
- MarketData
- Competitor
- BusinessCategory
- Scheme
- SchemeRule
- DataSource
- AIAnalysis
- RiskAssessment
- Recommendation

But don't add all of them immediately.

We'll evolve the database based on actual requirements.

---

## 20. API Design

Eventually:

- `POST /api/entrepreneurs`
  Create entrepreneur.

- `POST /api/business-proposals`
  Create business proposal.

- `POST /api/financial/structure`
  Calculate financing.

- `POST /api/feasibility/analyze`
  Generate feasibility analysis.

- `GET /api/schemes`
  Get schemes.

- `POST /api/advisory/analyze`
  Run complete analysis.

Eventually:

- `POST /api/advisory/chat`
  for conversational AI.

---

## 21. Team Structure — 6 Members

Since we have members with different skill levels.

I'd divide the team like this.

### 👤 Member 1 — Team Leader: Team Lead + Frontend + Backend + System Architect

Lakshya MittaL:

#### Technical
- overall architecture
- PostgreSQL
- Prisma
- Node/Express
- API design
- financial engine
- AI integration
- Git/GitHub
- integration

#### Leadership
You should understand every module at least conceptually.
You don't have to write every line.

Your role:
```text
Requirement
 ↓
Architecture
 ↓
Team tasks
 ↓
Integration
 ↓
Testing
 ↓
Pitch
```

#### 2. Frontend Development

Give them:
- Next.js
- TypeScript
- UI
- Forms
- Dashboard
- Report visualization

#### Phase 1
Build:
```text
Landing page
↓
User form
↓
Business selection
↓
Financial input
```

Then later:
- Feasibility Dashboard

This is suitable for someone with beginner/intermediate frontend knowledge.

### 👤 Member 2, 3 — Data Research + Government Schemes (Ranu Soni & Meghanshi Rathore)

Your job is not coding-heavy.

You have to create a spreadsheet/database containing:
- Scheme
- Eligibility
- Loan amount
- Interest
- Tenure
- Moratorium
- Subsidy
- Target users
- Business categories
- Official source
- Last updated

Research:
- PMEGP
- MUDRA
- CGTMSE
- Stand-Up India
- relevant SC/ST schemes
- state schemes

Most importantly:
- Every scheme record must have an official source.

PMEGP's official portal, for example, provides scheme guidelines and eligibility information.

This member can become your Domain Researcher.

### 👤 Member 4, 5 — Hyper-Local Data Researcher (Pranjal Khinchi & Aditya Singhal)

Give them:
- Census
- District data
- Block data
- Population
- Economic indicators
- Agricultural data
- Market data
- Business density
- Maps

They should answer:
> "Where can we actually obtain reliable data for our six feasibility dimensions?"

Deliverable:
```text
Data Source
↓
What data?
↓
Geographic granularity
↓
API/download?
↓
Update frequency
↓
Reliability
↓
How can our system use it?
```

This is extremely valuable research.

### 👤 Member 5 — AI/ML Researcher (Hitarsh Sharma)

Start with:

#### Week 1
Learn:
- What is LLM?
- What is RAG?
- What is embeddings?
- What is vector database?
- What is prompt engineering?
- What is hallucination?

#### Week 2
Research:
- RAG for government schemes
- Structured output
- Tool calling
- AI agents
- AI evaluation

#### Later
Research:
- Business feasibility scoring
- Demand prediction
- Risk scoring
- Price prediction

Their job:
- Determine where AI is genuinely useful and where normal programming is better.

### 👤 All Member — Testing + Documentation + Research

They handle:

#### Test cases
- Margin = ₹10,000
- Margin = ₹1,00,000
- Margin = ₹1,50,000
- Margin = ₹5,00,000
- Margin = ₹50,00,000

Check:
- Project cost
- Loan
- Scheme
- EMI

Also test:
- Invalid location
- Negative capital
- Missing business
- Unknown business
- No local data

They maintain:
- Bug tracker
- Test cases
- Documentation
- User manual
- Demo script

They can also help with PPT/research.

---

## 22. Give Beginners Research Instead of Fake Coding

This is important.

I'm not forcing you to write:
- LangGraph agent

Instead give all the real engineering responsibilities.

For example:

### Research assignment
> "Find 5 official datasets that can provide rural population/economic information."

Deliverable:
- Dataset name
- URL
- Data fields
- Geographical level
- Update frequency
- License
- How our application can use it

That's real contribution.

---

## 23. Team Git Strategy

Use GitHub.

Create:
- main
- develop

Each member gets:
- feature/frontend
- feature/financial-engine
- feature/scheme-data
- feature/ai
- feature/research

Nobody directly pushes to main.

Flow:
```text
Create branch
 ↓
Code
 ↓
Commit
 ↓
Pull Request
 ↓
Review
 ↓
Merge
```

---

## 24. Research Plan for Team

I would divide research into 8 tracks.

### Research Track 1 — Understand the beneficiary

Research:
- Who exactly is the user?

Understand:
- rural entrepreneurs
- marginalized communities
- financial literacy
- digital literacy
- language barriers
- access to banking
- loan difficulties
- business failures

Don't build a product for an imaginary user.

### Research Track 2 — Government schemes

Research:
- PMEGP
- MUDRA
- CGTMSE
- Stand-Up India
- NBCFDC-related schemes
- NSKFDC-related schemes
- State schemes

Use official sources wherever possible. India's government scheme portal and MSME portal are useful starting points.

### Research Track 3 — Hyper-local data

Investigate:
- Population
- Households
- Income
- Agriculture
- Business density
- Markets
- Road connectivity
- Transport
- Consumer demand
- Commodity prices

Your key question:
- Can we obtain this data at village/block level?

If not:
- What is the closest reliable geographic level?

This will be an important part of your architecture.

### Research Track 4 — Existing solutions

Search for:
- AI business advisor
- rural entrepreneurship platforms
- government scheme recommendation systems
- loan eligibility systems
- business feasibility software
- DPR generators
- financial advisory AI
- rural digital finance

For every competitor record:
- Product
- Target user
- Features
- Data sources
- AI usage
- Strength
- Weakness
- Our differentiation

Don't just search for competitors called "SIH26091."
Search for products solving pieces of the same problem.

### Research Track 5 — AI

Study:
- LLM
- RAG
- Agents
- Tool calling
- Structured outputs
- Embeddings
- Vector DB
- AI evaluation
- Hallucination mitigation

Most importantly:
- When should we NOT use AI?

### Research Track 6 — Financial modelling

Learn:
- Principal
- Interest
- EMI
- Amortization
- Moratorium
- Working capital
- Revenue
- COGS
- Gross profit
- Operating expenses
- Net profit
- Break-even
- Cash flow
- DSCR
- ROI

This will make our team much stronger in front of judges.

### Research Track 7 — Rural UX

Research:
- Low-literacy UX
- Voice interfaces
- Hindi/regional languages
- Icon-based navigation
- Offline-first design
- Poor connectivity
- Mobile-first design
- Accessibility

SIH explicitly calls for a multilingual NLP-powered assistant, so this should not be treated as an optional cosmetic feature.

### Research Track 8 — Security

You're dealing with:
- Personal data
- Financial information
- Location
- Potential loan information

Research:
- Authentication
- Authorization
- Encryption
- Data minimization
- API security
- Rate limiting
- Input validation
- Secrets management
- Audit logs

---

## 25. How You Should Research

Don't go like this:
> "Research AI."

That's too broad.

Every research task should produce:
1. Problem
2. Existing solutions
3. Available data
4. Technology
5. Advantages
6. Limitations
7. Our implementation
8. Source links
9. Recommendation

For example:

- **Bad research:**
  "Google Maps can show locations."

- **Good research:**
  "Google Maps/Places can potentially provide POI information. However, village-level business coverage may be incomplete. Therefore, we should use it as one evidence source rather than treating it as the authoritative count of competitors."

That's the kind of thinking judges appreciate.

---

## 26. What Judges Will Probably Ask

Our team should prepare answers for these.

### Q1. Why AI?

Answer:
> "AI is used for natural-language interaction, multilingual advisory, interpretation of heterogeneous local data, risk explanation and personalized recommendations. Deterministic financial calculations remain rule-based for reliability."

### Q2. Where does your local data come from?

You should have a specific answer.

Not:
> "AI finds it."

Instead:
> "We combine government/open datasets, geographic information, verified market sources and user-provided information. Every localized recommendation carries its data source and confidence level."

### Q3. What if local data doesn't exist?

Excellent answer:
> "The system does not hallucinate missing data. It falls back to the nearest reliable geographic level, clearly marks the limitation, reduces confidence, and asks the user for additional information when necessary."

### Q4. Why not just use ChatGPT?

Answer:
> "ChatGPT alone cannot reliably perform our financial rule engine, access our structured local datasets, enforce scheme rules, maintain provenance, or guarantee deterministic repayment calculations. Our system combines LLM reasoning with verified data, tools and deterministic financial services."

That's a strong answer.

### Q5. How do you calculate loan eligibility?

Explain:
```text
Margin
 ↓
10% relationship
 ↓
Project Cost
 ↓
90% loan
 ↓
Scheme Rule
 ↓
Interest
 ↓
Tenure
 ↓
Repayment
```

### Q6. What happens if the AI recommendation is wrong?

Answer:
> "We use evidence-backed retrieval, deterministic calculations, confidence scoring, source attribution and explicit uncertainty. The system is a decision-support assistant, not an autonomous lender."

### Q7. Can this scale across India?

Answer:
```text
Core engine
      ↓
State-specific configuration
      ↓
District/block data
      ↓
Scheme knowledge base
      ↓
Language layer
```

The architecture is scalable because geography, schemes and business categories are data/configuration rather than hard-coded logic.

---

## 27. Your Differentiation

Don't say:
> "Our project uses AI."

Everyone will say that.

Your differentiation should be:

### 1. Hyper-local
Not generic:
> "Dairy is profitable."
But:
> "Is dairy viable here?"

### 2. Evidence-grounded
Every important claim should have:
- Source
- Date
- Geographic level
- Confidence

### 3. Financially deterministic
The financial engine doesn't hallucinate.

### 4. Multilingual
User can interact in:
- Hindi
- English
- Regional language
- Voice

### 5. Explainable
Instead of:
> "Feasibility score = 72."
show:
- Demand +20
- Competition -8
- Capital +15
- Risk -10
- Market reach +15
- ...

---

## 28. A Very Strong Future Feature

One feature I would seriously consider:

### "What-if simulator"

User can ask:
- What if I increase my capital to ₹1.5 lakh?

System:
```text
Old:
Margin ₹1L
Project ₹10L

New:
Margin ₹1.5L
Project ₹15L
```

Then:
> "What if I choose tailoring instead of dairy?"

System compares:

**Dairy**
- Demand: High
- Competition: Medium
- Investment: High

**Tailoring**
- Demand: Medium
- Competition: Low
- Investment: Low

This makes the system genuinely useful rather than just a report generator.

---

## 29. Another Strong Feature — Business Comparison

Let the entrepreneur compare:
- Business A: Dairy
- Business B: Tailoring
- Business C: Grocery

Output:

| Factor | Dairy | Tailoring | Grocery |
| :--- | :--- | :--- | :--- |
| Initial investment | High | Low | Medium |
| Competition | Medium | Low | High |
| Demand | High | Medium | High |
| Risk | Medium | Low | Medium |
| Margin requirement | ₹X | ₹Y | ₹Z |
| Overall feasibility | 78 | 84 | 65 |

This is extremely aligned with the underlying problem:
> Don't just tell the entrepreneur whether their chosen business is good. Help them choose better.

---

## 30. Development Roadmap

Don't try to build everything simultaneously.

### Phase 1 — Foundation
You are here.
```text
PostgreSQL               ✅
Prisma                   ✅
Database schema          ✅
Contract verification    ✅
```

### Phase 2 — Financial Engine
Build:
- Margin calculator
- Project cost
- Loan
- Scheme router
- Interest
- EMI
- Moratorium
- Repayment

### Phase 3 — Backend APIs
- Entrepreneur API
- Business Proposal API
- Financial API
- Scheme API

### Phase 4 — Frontend
- Landing
- Input form
- Business selection
- Financial input
- Results

### Phase 5 — Data Layer
Add:
- Location data
- Market data
- Business categories
- Scheme database
- Data sources

### Phase 6 — AI
Then:
- LLM
- RAG
- Agents
- Multilingual
- Report generation

### Phase 7 — Hyper-local intelligence
- Maps
- Geospatial radius
- Competitor analysis
- Market analysis
- Pricing
- Risk

### Phase 8 — Advanced
If time permits:
- Voice
- What-if simulator
- Business comparison
- Forecasting
- DSCR
- DPR generation

---

## 31. Your Team's Responsibilities at a Glance

|Primary responsibility | Difficulty |
|:--- | :--- |
|Architecture + Backend + Integration + Leadership | 🔴 High |
|Frontend + UX | 🟡 Medium |
|Government schemes + financial research | 🟢 Beginner |
|Local datasets + GIS research | 🟡 Medium |
|AI/RAG/Agents | 🟡→🔴 |
|Testing + documentation + research | 🟢 Beginner |

But everyone should understand the whole system, even if they own one module.

---

## 32. What Everyone Should Know Before the First Team Meeting Ends

Every member should be able to explain this:

> "A rural entrepreneur provides their location, available margin capital and proposed business. Our system analyzes the local market and business environment, identifies opportunities and risks, calculates the feasible project cost and loan amount using deterministic financial rules, routes the entrepreneur to the appropriate scheme, generates repayment obligations, and presents an evidence-backed multilingual recommendation. AI is used for natural-language interaction, analysis and personalization, while financial calculations and eligibility rules remain deterministic."

If everyone can say that confidently, our team is aligned.

---

## 33. Your Research Sprint — I Recommend This

Before adding more code, take 3–4 days for parallel research.

### You
Research:
- complete SIH26091
- architecture
- financial rules
- AI architecture
- technical feasibility

### Member 2
Research:
- rural UX
- multilingual UI
- voice UX
- existing business-advisory interfaces

### Member 3
Research:
- government schemes
- eligibility
- loan rules
- official sources

### Member 4
Research:
- Census
- local datasets
- GIS
- market data
- competitor data availability

### Member 5
Research:
- RAG
- agents
- LLM structured output
- hallucination prevention
- AI evaluation

### Member 6
Research:
- similar products
- SIH previous winners
- user personas
- test cases
- judge questions
- documentation

Then we will hold a 1-hour team review.

Each person gets 10 minutes:
```text
What I researched
↓
What I found
↓
What is actually possible
↓
What isn't possible
↓
What should we build
```

This is much more valuable than immediately assigning everyone coding tasks.

---

## 34. How to Research Like a Strong SIH Team

Use primary sources first.

### Tier 1 — Government / official:
- SIH
- Ministries
- India.gov.in
- official scheme portals
- official datasets

### Tier 2 — Research papers:
- Google Scholar
- IEEE
- ACM
- arXiv

### Tier 3 — Industry:
- reports
- APIs
- established companies

### Tier 4 — Blogs / GitHub / Reddit:
- Useful for implementation experience, not authoritative financial rules.

---

## 35. Keep a Research Repository

Create:

```text
research/
│
├── problem-understanding.md
├── government-schemes.xlsx
├── datasets.md
├── competitors.md
├── ai-research.md
├── financial-model.md
├── ux-research.md
└── sources.md
```

Every important decision should have a source.

For example:

- **Decision:** Use 5–10 km market radius
  - **Source:** SIH26091

- **Decision:** 8% term loan
  - **Source:** SIH26091

- **Decision:** PMEGP eligibility
  - **Source:** Official PMEGP portal

This becomes incredibly useful when judges ask:
> "Where did you get this number?"

---

## 36. Final Vision

Our project shouldn't feel like:

> "We made an AI chatbot that gives business advice."

It should feel like:

> "We built a digital financial and business consultant for a rural entrepreneur who otherwise cannot afford one."

The journey should be:

```text
"I have ₹1 lakh."
        ↓
"What business can I start?"
        ↓
"Will this business work in my village?"
        ↓
"Who are my customers?"
        ↓
"Who are my competitors?"
        ↓
"What risks do I have?"
        ↓
"How much project can I afford?"
        ↓
"How much loan can I take?"
        ↓
"Which scheme applies?"
        ↓
"How much will I repay?"
        ↓
"Can my expected business cash flow support it?"
        ↓
"What should I do next?"
```

That is the product.

And the strongest version of the project is not the one with the most AI agents. It's the one where every important recommendation can be explained, every financial number can be reproduced, and every local claim can be traced to evidence or clearly marked as an estimate.