export type ResearchArticle = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO date string
  summary: string;
  featured?: boolean;
  content?: string;
  imageId?: string; // optional explicit image base name
};

export const researchArticles: ResearchArticle[] = [
  {
    slug: 'adaptive-practice-and-spaced-retrieval',
    title: 'Adaptive Practice and Spaced Retrieval Improve Long-Term Retention',
    category: 'Learning Science',
    date: '2025-10-01',
    summary:
      'Evidence and implementation notes on spacing effects, calibration, and adaptive scheduling in K-12 contexts.',
    featured: true,
    content:
      'Across decades of cognitive science, one finding remains consistent: memory thrives on timing. Students retain information far longer when practice is distributed rather than crammed into single sessions. This “spacing effect” allows the brain to strengthen neural connections through multiple recall events over time. Modern adaptive learning platforms can now individualize this process. By analyzing student performance and predicting forgetting curves, adaptive systems schedule review sessions precisely when the material is on the edge of being forgotten, maximizing reinforcement while minimizing fatigue.\n\nIn classrooms, the combination of spaced retrieval and adaptive practice transforms short-term mastery into durable knowledge. When learners regularly revisit earlier concepts, they begin to recognize deep connections between topics and apply old ideas to new problems. Teachers who integrate adaptive review cycles report significant gains in retention and student confidence, as learners experience tangible evidence of progress.\n\nTo apply this research in practice, educators can embed small retrieval prompts in daily lessons, schedule low-stakes quizzes a few days apart, and reintroduce older material during new units. This ensures that learning never becomes a one-time event but a continuous reinforcement process that builds cognitive endurance.\n\nSchools adopting spaced, adaptive review typically start with a lightweight pilot: one subject, one grade band, four- to six-week cycles. This limits change management while producing clear outcome data that can be scaled across departments.'
  },
  {
    slug: 'interpretable-ai-feedback-in-literacy',
    title: 'Interpretable AI Feedback in Literacy Interventions',
    category: 'Product Research',
    date: '2025-09-15',
    summary:
      'Design principles for feedback that supports metacognition without overwhelming the learner or teacher.',
    content:
      'Artificial intelligence has begun to play a transformative role in literacy instruction, but its value depends heavily on the clarity of its feedback. Effective AI feedback must strike a delicate balance: it should provide meaningful guidance without overwhelming students or teachers. When AI responses explicitly reference the learner’s action and explain the reasoning behind corrections, students become active participants in their own growth rather than passive recipients of grades.\n\nResearch in metacognition shows that interpretable feedback, where learners can trace cause and effect in their own performance, dramatically enhances self-regulation and long-term comprehension. For example, an AI system that highlights a misused word, explains why the usage is incorrect, and offers a model sentence for comparison helps students internalize linguistic structure more deeply than one that simply flags an error.\n\nTeachers benefit as well. Transparent AI systems allow them to audit feedback, identify misconceptions, and integrate machine insights into broader instructional goals. The best tools provide clear, human-readable rationales for every recommendation. Building AI systems with explainability at the core preserves teacher agency while amplifying their reach, ensuring technology becomes a trusted partner rather than an opaque authority.\n\nImplementation tip: begin with a narrow rubric (one or two traits), then expand. Cumulative transparency, not maximal detail on day one, drives trust and adoption.'
  },
  {
    slug: 'equitable-benchmarking-in-math',
    title: 'Equitable Benchmarking in Math Progress Monitoring',
    category: 'Assessment',
    date: '2025-08-20',
    summary:
      'Approaches to norming and growth targets that avoid selection bias and improve decision reliability.',
    content:
      'Benchmarking has long been used to measure academic progress, yet traditional models often fail to capture the diverse realities of student learning. National norms tend to favor averages that overlook disparities in access, time, and opportunity. As education systems move toward equity, a new wave of research is emphasizing the importance of contextual benchmarking, which considers the environment in which learning occurs.\n\nAdaptive benchmarking systems adjust growth targets based on variables such as instructional minutes, available resources, and prior learning opportunities. Instead of comparing every student to a national mean, schools can use local data to establish fairer, more meaningful reference points. This ensures that growth is measured relative to genuine opportunity rather than systemic advantage.\n\nWhen teachers and administrators use contextual norms, they can make better-informed decisions about interventions and resource allocation. The result is a more accurate, compassionate understanding of student progress, one that aligns with both rigor and fairness.\n\nA practical starting point is to report both absolute gains and opportunity-adjusted gains side by side; this keeps expectations high while clarifying context.'
  },
  {
    slug: 'family-engagement-and-outcomes',
    title: 'Family Engagement Correlates With Persistence and Outcomes',
    category: 'Social-Emotional',
    date: '2025-07-30',
    summary:
      'A review of interventions that encourage family participation and their observed effects on attendance and mastery.',
    content:
      'Family engagement is one of the most powerful yet underused levers for improving student outcomes. Studies spanning several decades show a clear relationship between parent participation and academic persistence. When families are actively informed and involved in the learning process, students develop stronger motivation, better attendance, and higher mastery across subjects.\n\nSchools that have implemented structured engagement systems—such as family dashboards, weekly progress texts, or parent-teacher partnerships report measurable improvements in literacy and math scores. Parents who understand classroom goals and can observe progress at home are more likely to reinforce learning through everyday interactions.\n\nTrue engagement does not require complex programs. Short, consistent check-ins often prove more effective than occasional long meetings. By turning family contact into a rhythm rather than an event, schools build trust and shared accountability. This continuous feedback loop strengthens both student confidence and community cohesion, laying the foundation for long-term success.\n\nA weekly ritual (five-minute progress snapshot + one actionable tip) is often the highest-ROI pattern for busy families.'
  },
  {
    slug: 'teacher-ai-collaboration-models',
    title: 'Teacher–AI Collaboration Models That Work in Classrooms',
    category: 'Product Research',
    date: '2025-07-10',
    summary:
      'Division-of-labor patterns between educators and AI that reduce prep time while preserving teacher agency.',
    content:
      'As artificial intelligence becomes increasingly common in education, one truth stands out: the most successful classrooms are those where teachers and technology work side by side. The most effective AI systems are designed not to replace teachers, but to complement their strengths by handling repetitive, data-heavy tasks that consume valuable time.\n\nCollaborative models, where AI assists with formative assessments or lesson planning drafts, allow teachers to refocus on creativity, empathy, and higher-order thinking. In these environments, the teacher retains full agency deciding when to accept, reject, or adapt AI suggestions. Such models foster efficiency without eroding professional judgment.\n\nEducators who have adopted these workflows report less burnout and greater capacity for individualized support. As AI evolves, the goal should remain constant: build technology that amplifies human wisdom rather than mechanizes it. When teachers and AI co-create lessons, learning becomes both scalable and deeply personal.\n\nPilot pattern: timebox AI-assisted planning to 15 minutes, then revise freely. Guardrails prevent scope creep and keep ownership clear.'
  },
  {
    slug: 'retrieval-practice-in-mathematics',
    title: 'Retrieval Practice in Mathematics: Beyond Flashcards',
    category: 'Learning Science',
    date: '2025-06-18',
    summary:
      'Structuring problem sets to trigger recall pathways and conceptual transfer in middle school math.',
    content:
      'Retrieval practice is often associated with vocabulary or fact recall, but it has equally profound implications for mathematics. Encouraging students to recall procedures and principles from memory before consulting notes or examples enhances conceptual understanding and problem-solving flexibility.\n\nResearch shows that when learners are prompted to generate answers, even imperfectly, they engage neural pathways responsible for long-term retention and schema transfer. Structured problem sets that spiral older material with new concepts activate these pathways repeatedly, ensuring mathematical fluency grows more durable over time.\n\nTeachers can apply this by integrating short “warm recall” moments at the start of each lesson. Rather than diving straight into instruction, brief review questions or discussions prompt students to reawaken prior knowledge, solidifying it before new material is layered on top. This simple shift transforms practice from mechanical repetition into active cognitive engagement.\n\nFor accelerated gains, pair recall with quick error analyses (two minutes): students compare an incorrect solution to a correct one and explain the difference.'
  },
  {
    slug: 'multi-tiered-supports-data-loops',
    title: 'Closing the Loop in MTSS With Real-Time Data',
    category: 'Assessment',
    date: '2025-05-29',
    summary:
      'Designing data flows that make Tier 2/3 interventions responsive within weekly cycles.',
    content:
      'Multi-Tiered Systems of Support (MTSS) are most effective when feedback cycles are fast and actionable. Too often, educators receive progress data weeks after interventions begin, by which point valuable learning time has been lost. Real-time or weekly monitoring systems close this loop, allowing instructional teams to make immediate adjustments to Tier 2 and Tier 3 supports.\n\nWhen assessment tools feed automatically into shared dashboards, teachers can detect early signs of regression and intervene before patterns solidify. Data visualizations that highlight rate-of-improvement rather than static scores give educators a dynamic view of growth.\n\nSchools that implement real-time MTSS tracking report more precise resource allocation and greater student responsiveness to intervention. The faster the feedback loop, the more agile the support system becomes transforming MTSS from a bureaucratic process into a living, adaptive framework.\n\nA weekly 20-minute data huddle keeps teams aligned: review two trend charts, decide one adjustment, assign ownership.'
  },
  {
    slug: 'udl-and-accessibility-heuristics',
    title: 'UDL Heuristics for Everyday Lesson Design',
    category: 'Accessibility',
    date: '2025-05-08',
    summary:
      'Practical, low-friction Universal Design for Learning checks that improve access without heavy lifts.',
    content:
      'Universal Design for Learning (UDL) offers a vision of inclusivity that benefits every learner, not just those with identified needs. Yet teachers often perceive UDL as complex or time-consuming. In reality, small shifts in daily lesson planning can create significant gains in accessibility.\n\nProviding multiple means of representation such as text, visuals, and audio helps reach diverse processing styles. Offering different ways to demonstrate knowledge allows students to play to their strengths while still meeting academic standards. Even adjusting reading levels or giving learners control over pacing can increase engagement without lowering rigor.\n\nThe most sustainable approach embeds these heuristics directly into planning routines. Simple checklists or design templates can remind teachers to include accessibility considerations in every lesson. Over time, these habits become second nature, creating classrooms where every student can access and contribute meaningfully to learning.\n\nStart with one UDL heuristic per unit (e.g., alternative output option) to avoid overload and build momentum.'
  },
  {
    slug: 'motivational-design-for-young-learners',
    title: 'Motivational Design for Young Learners',
    category: 'Motivation',
    date: '2025-04-16',
    summary:
      'Balancing autonomy, competence, and relatedness to drive persistence without over-reliance on points.',
    content:
      'Young children are naturally curious, but sustaining that curiosity requires thoughtful design. Motivation flourishes when learners experience autonomy, competence, and relatedness the three psychological needs identified by self-determination theory. Environments that overemphasize points, prizes, or constant external rewards risk undermining this intrinsic drive.\n\nInstead, successful learning experiences for young students emphasize choice, meaningful challenges, and social connection. Allowing students to select the order of activities, collaborate on creative tasks, or reflect on their progress builds ownership and confidence. When children see learning as something they control rather than something done to them, persistence follows naturally.\n\nEducators can replace excessive gamification with genuine empowerment. Goal journals, peer recognition, and reflective discussions help students connect effort to growth. Over time, this approach nurtures learners who are not only engaged but self-driven ready to learn for the sake of mastery itself.\n\nDesign cue: offer two to three authentic choices per session (task order, partner, reflection format) to elevate autonomy without chaos.'
  },
  {
    slug: 'privacy-by-design-in-edtech',
    title: 'Privacy by Design in EdTech: Minimal Data, Max Value',
    category: 'Trust & Safety',
    date: '2025-03-21',
    summary:
      'Patterns for collecting the least data necessary while still enabling insights and personalization.',
    content:
      'As digital learning expands, the question of student privacy becomes increasingly urgent. The principle of “privacy by design” holds that protection must be built into educational technology from the start, not added later through policy. The most ethical systems collect only the data essential to personalize instruction and evaluate outcomes, nothing more.\n\nDevelopers who follow this principle adopt strict data-minimization frameworks, anonymize user information, and maintain transparent consent protocols. This approach not only safeguards students but also builds trust with educators and families who are increasingly wary of opaque data practices.\n\nBy reducing unnecessary tracking and simplifying retention policies, companies streamline compliance and focus their analytics on what truly matters, learning outcomes. The future of trustworthy EdTech depends on a simple truth: the less data collected, the greater the respect for the learner.\n\nOperational step: publish a simple data inventory and retention schedule—clear artifacts lower risk and build stakeholder trust.'
  },
  {
    slug: 'multilingual-learners-support',
    title: 'Supporting Multilingual Learners With AI Scaffolds',
    category: 'Equity',
    date: '2025-02-27',
    summary:
      'Inline translation, glossaries, and sentence frames that improve comprehension without collapsing rigor.',
    imageId: 'Supporting Multilingual Learners With AI Scaffolds',
    content:
      'Inline translation, glossaries, and sentence frames can dramatically improve comprehension for multilingual learners without reducing academic rigor. The key is to offer scaffolds that are tightly aligned to the task and that fade over time, helping students internalize structures and vocabulary rather than becoming dependent on supports.\n\nWhen AI tools provide contextual definitions, example sentences, and language choices in real time, students can participate fully in classroom discourse while developing the linguistic resources they need for independent success. Teachers gain visibility into where language barriers arise and can tailor instruction accordingly.\n\nWith careful design, AI scaffolds create equitable access pathways while preserving high expectations, enabling multilingual learners to thrive in mixed-language settings.\n\nA phased-fade model (guided → prompted → independent) ensures supports build capacity rather than dependence.'
  }
];

export function getArticleBySlug(slug: string): ResearchArticle | undefined {
  return researchArticles.find((a) => a.slug === slug);
}



