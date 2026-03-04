import type { LabConfig } from '@/lib/types';

export const activityPlanningLab: LabConfig = {
  meta: {
    id: 'activity-planning',
    title: 'Plan a Class Activity',
    description:
      'Design a learning activity or lesson segment for a specific topic, audience, and learning objective using AI as a collaborative tool.',
    estimatedTime: '20-30 min',
    learningOutcome:
      "You'll learn to formulate effective prompts, evaluate AI outputs, and recognize generic vs. context-specific suggestions.",
    coreSkill:
      'Prompt formulation, output evaluation, recognizing generic vs. context-specific outputs',
    icon: 'activity',
  },
  iterations: [
    // ========================================
    // ITERATION 1 — Intent & Context
    // ========================================
    {
      iterationNumber: 1,
      title: 'Intent & Context',
      focus: 'Articulate your pedagogical goal, context, and constraints.',
      isOptional: false,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'What specific topic or concept should this activity help students understand?',
          placeholder:
            'e.g., Photosynthesis, The French Revolution, Linear Algebra...',
          templateSlot: 'TOPIC',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'What should students be able to do after completing this activity that they couldn\'t do before?',
          placeholder:
            'e.g., Explain the process of cellular respiration, Compare two historical perspectives...',
          templateSlot: 'LEARNING_OBJECTIVE',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'Who are your students? Consider their level, prior knowledge, and what typically challenges them with this material.',
          placeholder:
            'e.g., Second-year undergraduates with basic chemistry knowledge who struggle with...',
          templateSlot: 'STUDENT_CONTEXT',
          inputType: 'textarea',
        },
        {
          id: 'q4',
          question:
            'How much time do you have for this activity, and what constraints should the design respect (class size, available resources, physical space)?',
          placeholder:
            'e.g., 50-minute lecture, 30 students, standard classroom with projector...',
          templateSlot: 'TIME_CONSTRAINT',
          inputType: 'textarea',
        },
        {
          id: 'q5',
          question:
            'What kind of engagement are you hoping for — individual thinking, collaborative work, hands-on practice, discussion, or something else?',
          placeholder:
            'e.g., Small group discussion followed by whole-class debrief...',
          templateSlot: 'ENGAGEMENT_TYPE',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'I am a [ROLE_SUBJECT] educator teaching [STUDENT_LEVEL] students. I need a class activity about [TOPIC] that helps students achieve this learning objective: [LEARNING_OBJECTIVE].\n\nMy students typically [STUDENT_CONTEXT].\n\nThe activity should fit within [TIME_CONSTRAINT] and work for [CLASS_SIZE] students. I\'m looking for an activity that emphasizes [ENGAGEMENT_TYPE].\n\nPlease include clear instructions, materials needed, and a brief explanation of how this activity supports the learning objective.',
        slots: [
          {
            id: 'ROLE_SUBJECT',
            label: 'Role/Subject',
            defaultText: 'your role and subject area',
          },
          {
            id: 'STUDENT_LEVEL',
            label: 'Student Level',
            defaultText: 'student level',
          },
          { id: 'TOPIC', label: 'Topic', defaultText: 'the topic' },
          {
            id: 'LEARNING_OBJECTIVE',
            label: 'Learning Objective',
            defaultText: 'the learning objective',
          },
          {
            id: 'STUDENT_CONTEXT',
            label: 'Student Context',
            defaultText: 'student context and challenges',
          },
          {
            id: 'TIME_CONSTRAINT',
            label: 'Time Constraint',
            defaultText: 'time and constraints',
          },
          {
            id: 'CLASS_SIZE',
            label: 'Class Size',
            defaultText: 'class size',
          },
          {
            id: 'ENGAGEMENT_TYPE',
            label: 'Engagement Type',
            defaultText: 'type of engagement',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Does this activity actually require students to demonstrate the learning objective you specified, or could they complete it without achieving it?',
          },
          {
            id: 'er2',
            question:
              'Would this activity work differently than what you currently do — and is that difference an improvement?',
          },
        ],
        checklist: [
          { id: 'c1', text: 'Aligns with stated learning objective' },
          { id: 'c2', text: 'Appropriate for specified student level' },
          { id: 'c3', text: 'Respects time and resource constraints' },
          { id: 'c4', text: 'Instructions are specific enough to implement' },
          {
            id: 'c5',
            text: 'Includes some form of assessment or check for understanding',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'Generic Activities',
            description:
              'Watch for generic activities. AI often suggests activities that sound engaging but could apply to any topic. Ask yourself: Is this activity specific to your topic, or is it a template with your topic name dropped in?',
          },
        ],
      },
    },

    // ========================================
    // ITERATION 2 — Critical Refinement
    // ========================================
    {
      iterationNumber: 2,
      title: 'Critical Refinement',
      focus: 'Probe the AI output for problems, assumptions, and gaps.',
      isOptional: false,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'What did the AI assume about your students or context that wasn\'t accurate?',
          placeholder:
            'e.g., It assumed students already know X, but they actually struggle with...',
          templateSlot: 'INACCURATE_ASSUMPTIONS',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'If a student who struggles with this topic attempted this activity, where would they get stuck? Does the activity account for that?',
          placeholder:
            'e.g., The transition between steps 2 and 3 requires a conceptual leap that...',
          templateSlot: 'STRUGGLE_POINTS',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'Is the activity genuinely engaging, or does it just sound engaging? What would students actually experience moment-to-moment?',
          placeholder:
            'e.g., The group discussion might fall flat because students don\'t have enough context to...',
          templateSlot: 'ENGAGEMENT_REALITY',
          inputType: 'textarea',
        },
        {
          id: 'q4',
          question:
            'What\'s missing from this output that only you would know about your specific teaching context?',
          placeholder:
            'e.g., My students respond better to visual examples, and the classroom has limited...',
          templateSlot: 'MISSING_CONTEXT',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'I want to refine the activity you suggested. Here are the issues I identified:\n\n1. You assumed [INACCURATE_ASSUMPTIONS]. Please adjust for this.\n2. Students who struggle would likely get stuck at [STRUGGLE_POINTS]. Add scaffolding or support for these moments.\n3. Regarding engagement: [ENGAGEMENT_REALITY]. Make the activity more genuinely interactive.\n4. Additional context you should know: [MISSING_CONTEXT].\n\nPlease revise the activity addressing all of these points. Keep what works and improve what doesn\'t.',
        slots: [
          {
            id: 'INACCURATE_ASSUMPTIONS',
            label: 'Inaccurate Assumptions',
            defaultText: 'what the AI assumed incorrectly',
          },
          {
            id: 'STRUGGLE_POINTS',
            label: 'Struggle Points',
            defaultText: 'where students would get stuck',
          },
          {
            id: 'ENGAGEMENT_REALITY',
            label: 'Engagement Reality',
            defaultText: 'honest assessment of engagement',
          },
          {
            id: 'MISSING_CONTEXT',
            label: 'Missing Context',
            defaultText: 'what was missing from the output',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Did the substance of the activity actually change, or just the framing? Compare carefully with the first version.',
          },
          {
            id: 'er2',
            question:
              'Are the new scaffolding elements genuinely helpful, or are they generic additions that don\'t address the specific struggle points you identified?',
          },
        ],
        checklist: [
          { id: 'c1', text: 'Aligns with stated learning objective' },
          { id: 'c2', text: 'Appropriate for specified student level' },
          { id: 'c3', text: 'Respects time and resource constraints' },
          { id: 'c4', text: 'Instructions are specific enough to implement' },
          {
            id: 'c5',
            text: 'Includes some form of assessment or check for understanding',
          },
          {
            id: 'c6',
            text: 'Addresses differentiation for struggling students',
          },
          {
            id: 'c7',
            text: 'Accounts for common student misconceptions',
          },
          {
            id: 'c8',
            text: 'Transition logistics between activity stages are clear',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'Sycophantic Agreement',
            description:
              'AI tends toward sycophancy — it may agree with your refinements without meaningfully changing the output. Compare carefully: did the substance actually change, or just the framing?',
          },
        ],
      },
    },

    // ========================================
    // ITERATION 3 (Optional) — Ownership
    // ========================================
    {
      iterationNumber: 3,
      title: 'Ownership',
      focus: 'Transition from AI output to usable classroom material.',
      isOptional: true,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'What would you change about this activity before actually using it in your classroom tomorrow?',
          placeholder:
            'e.g., I would simplify the instructions, add a warm-up question, change the group size...',
          templateSlot: 'CHANGES_NEEDED',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'What elements of this activity reflect your teaching style and values, and what feels like generic AI output?',
          placeholder:
            'e.g., The discussion prompts feel authentic, but the assessment rubric feels generic...',
          templateSlot: 'STYLE_ASSESSMENT',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'How would you explain this activity\'s purpose to a colleague — and does the AI\'s version support that explanation?',
          placeholder:
            'e.g., I would say this activity teaches students to think critically about X by...',
          templateSlot: 'PURPOSE_EXPLANATION',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'Please make these final adjustments to the activity:\n\n1. Changes needed: [CHANGES_NEEDED]\n2. These elements feel generic and need to better reflect my teaching approach: [STYLE_ASSESSMENT]\n3. The activity\'s core purpose is: [PURPOSE_EXPLANATION]. Make sure every element supports this.\n\nGive me a final, polished version that I could hand to a colleague or use tomorrow.',
        slots: [
          {
            id: 'CHANGES_NEEDED',
            label: 'Changes Needed',
            defaultText: 'specific changes for classroom use',
          },
          {
            id: 'STYLE_ASSESSMENT',
            label: 'Style Assessment',
            defaultText: 'what feels generic vs. authentic',
          },
          {
            id: 'PURPOSE_EXPLANATION',
            label: 'Purpose Explanation',
            defaultText: 'how you would explain this activity',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Could you use this activity as-is tomorrow, or does it still need your personal touch?',
          },
          {
            id: 'er2',
            question:
              'What did you learn about working with AI through this process that you\'ll apply next time?',
          },
        ],
        checklist: [
          {
            id: 'c1',
            text: 'Activity is ready to use in your specific classroom',
          },
          {
            id: 'c2',
            text: 'Reflects your teaching style and values',
          },
          {
            id: 'c3',
            text: 'All instructions are clear enough for another instructor to follow',
          },
          {
            id: 'c4',
            text: 'You could explain the pedagogical rationale to a colleague',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'AI as Finished Product',
            description:
              'Remember: AI output is a starting point, not a finished product. The most effective educators treat AI-generated content as raw material that requires their professional judgment to shape into something that truly serves their students.',
          },
        ],
      },
    },
  ],
};
