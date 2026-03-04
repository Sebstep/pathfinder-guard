import type { LabConfig } from '@/lib/types';

export const rubricDesignLab: LabConfig = {
  meta: {
    id: 'rubric-design',
    title: 'Design a Rubric',
    description:
      'Build a detailed grading rubric for an assignment, with criteria, performance levels, and descriptors generated through AI collaboration.',
    estimatedTime: '25-40 min',
    learningOutcome:
      "You'll learn to prompt for specificity, recognize vague AI language, and adapt outputs for practical classroom use.",
    coreSkill:
      'Specificity in prompting, recognizing vague AI language, adapting outputs for practical use',
    icon: 'rubric',
  },
  iterations: [
    // ========================================
    // ITERATION 1 — Structure & Criteria
    // ========================================
    {
      iterationNumber: 1,
      title: 'Structure & Criteria',
      focus: 'Define what the rubric should evaluate and how it should be structured.',
      isOptional: false,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'What assignment or task will this rubric evaluate? Describe it as you would to a student.',
          placeholder:
            'e.g., A 5-page research paper analyzing a social issue using at least 3 academic sources...',
          templateSlot: 'ASSIGNMENT_DESCRIPTION',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'What are the most important qualities that distinguish excellent work from poor work on this assignment?',
          placeholder:
            'e.g., Quality of argument, use of evidence, clarity of writing, proper citations...',
          templateSlot: 'CRITERIA_LIST',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'How many performance levels do you want (e.g., Excellent / Proficient / Developing / Beginning), and what do those levels mean in your context?',
          placeholder:
            'e.g., 4 levels: Exemplary (A), Proficient (B), Developing (C), Beginning (D/F)...',
          templateSlot: 'LEVEL_NAMES',
          inputType: 'textarea',
        },
        {
          id: 'q4',
          question:
            'Should the rubric be analytic (separate scores per criterion) or holistic (one overall score)? What serves your feedback goals better?',
          placeholder:
            'e.g., Analytic — I want students to see exactly where they excel and where they need improvement...',
          templateSlot: 'RUBRIC_TYPE',
          inputType: 'textarea',
        },
        {
          id: 'q5',
          question:
            'What does the most common "good but not great" submission look like? Describing this helps define the middle of your scale.',
          placeholder:
            'e.g., Has a clear thesis but evidence is surface-level, writing is clear but not polished, citations present but inconsistent...',
          templateSlot: 'MIDDLE_DESCRIPTION',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'I need a [RUBRIC_TYPE] rubric for the following assignment: [ASSIGNMENT_DESCRIPTION].\n\nThe rubric should evaluate these key qualities: [CRITERIA_LIST].\n\nI want [NUMBER] performance levels: [LEVEL_NAMES].\n\nA typical "good but not great" submission looks like: [MIDDLE_DESCRIPTION].\n\nFor each criterion and level, provide specific, observable descriptors that a student could use to understand exactly what is expected.',
        slots: [
          {
            id: 'RUBRIC_TYPE',
            label: 'Rubric Type',
            defaultText: 'analytic or holistic',
          },
          {
            id: 'ASSIGNMENT_DESCRIPTION',
            label: 'Assignment Description',
            defaultText: 'the assignment description',
          },
          {
            id: 'CRITERIA_LIST',
            label: 'Evaluation Criteria',
            defaultText: 'key evaluation criteria',
          },
          {
            id: 'NUMBER',
            label: 'Number of Levels',
            defaultText: 'number of',
          },
          {
            id: 'LEVEL_NAMES',
            label: 'Performance Levels',
            defaultText: 'performance level names',
          },
          {
            id: 'MIDDLE_DESCRIPTION',
            label: 'Middle Performance',
            defaultText: 'what "good but not great" looks like',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'If a student read only this rubric (without other instructions), would they understand what excellent work looks like?',
          },
          {
            id: 'er2',
            question:
              'Are the distinctions between adjacent performance levels clear and meaningful, or do they blur together?',
          },
        ],
        checklist: [
          {
            id: 'c1',
            text: 'Criteria cover all important dimensions of the assignment',
          },
          {
            id: 'c2',
            text: 'Descriptors are specific and observable (not vague)',
          },
          {
            id: 'c3',
            text: 'Performance levels are meaningfully distinct',
          },
          {
            id: 'c4',
            text: 'Language is student-facing and clear',
          },
          {
            id: 'c5',
            text: 'Rubric is practical to use during grading',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'Vague Qualifiers',
            description:
              'AI-generated rubrics frequently use vague qualifiers ("demonstrates understanding," "shows proficiency") that don\'t help students or graders. Look for descriptors that describe observable behavior, not internal states.',
          },
        ],
      },
    },

    // ========================================
    // ITERATION 2 — Precision & Usability
    // ========================================
    {
      iterationNumber: 2,
      title: 'Precision & Usability',
      focus: 'Sharpen descriptors for consistency and practical use.',
      isOptional: false,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'Read each descriptor: could two different graders independently assign the same score using this rubric, or is there too much room for interpretation?',
          placeholder:
            'e.g., The "Proficient" level for argument quality is too vague — "adequate" doesn\'t tell graders what to look for...',
          templateSlot: 'GRADER_CONSISTENCY',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'Are there criteria where the AI used circular language (e.g., "excellent work demonstrates excellence")? What specific behavior should replace it?',
          placeholder:
            'e.g., "Demonstrates strong analysis" should be "Identifies at least 3 perspectives and evaluates each with evidence"...',
          templateSlot: 'CIRCULAR_LANGUAGE',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'Would a student in your class understand every descriptor, or does the rubric use language that assumes expertise they don\'t have?',
          placeholder:
            'e.g., "Synthesizes sources" — my first-year students may not know what synthesis means in this context...',
          templateSlot: 'STUDENT_CLARITY',
          inputType: 'textarea',
        },
        {
          id: 'q4',
          question:
            'Try mentally grading a past student\'s work with this rubric — does it capture what you actually value?',
          placeholder:
            'e.g., When I think of my best student\'s paper, the rubric doesn\'t capture the originality of their argument...',
          templateSlot: 'REAL_WORLD_TEST',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'Please revise the rubric based on these issues:\n\n1. Grader consistency: [GRADER_CONSISTENCY]. Make descriptors specific enough that two graders would agree.\n2. Circular language: [CIRCULAR_LANGUAGE]. Replace vague qualifiers with observable, countable, or measurable behaviors.\n3. Student clarity: [STUDENT_CLARITY]. Use language my students will understand.\n4. Real-world alignment: [REAL_WORLD_TEST]. Adjust criteria to capture what I actually value in student work.\n\nFor each revised descriptor, highlight what changed and why.',
        slots: [
          {
            id: 'GRADER_CONSISTENCY',
            label: 'Grader Consistency',
            defaultText: 'where graders would disagree',
          },
          {
            id: 'CIRCULAR_LANGUAGE',
            label: 'Circular Language',
            defaultText: 'vague language to replace',
          },
          {
            id: 'STUDENT_CLARITY',
            label: 'Student Clarity',
            defaultText: 'language students won\'t understand',
          },
          {
            id: 'REAL_WORLD_TEST',
            label: 'Real-World Test',
            defaultText: 'what the rubric misses about your values',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Are the revised descriptors genuinely more specific, or did the AI just add more words without more precision?',
          },
          {
            id: 'er2',
            question:
              'Could you use this rubric to give a student concrete feedback on how to improve?',
          },
        ],
        checklist: [
          {
            id: 'c1',
            text: 'Criteria cover all important dimensions of the assignment',
          },
          {
            id: 'c2',
            text: 'Descriptors are specific and observable (not vague)',
          },
          {
            id: 'c3',
            text: 'Performance levels are meaningfully distinct',
          },
          {
            id: 'c4',
            text: 'Language is student-facing and clear',
          },
          {
            id: 'c5',
            text: 'Rubric is practical to use during grading',
          },
          {
            id: 'c6',
            text: 'Two graders would assign consistent scores',
          },
          {
            id: 'c7',
            text: 'No circular language or empty qualifiers remain',
          },
          {
            id: 'c8',
            text: 'Each level describes qualitatively different work, not just adjective substitution',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'Symmetrical Descriptors',
            description:
              'AI rubrics tend to create symmetrical descriptors (just substituting adjectives across levels) rather than describing qualitatively different performances. Check whether each level describes a genuinely different kind of work.',
          },
        ],
      },
    },

    // ========================================
    // ITERATION 3 (Optional) — Calibration
    // ========================================
    {
      iterationNumber: 3,
      title: 'Calibration',
      focus: 'Fine-tune for consistent, fair grading in practice.',
      isOptional: true,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'Which criterion would be hardest to grade consistently? What would make it easier?',
          placeholder:
            'e.g., "Critical thinking" is hardest — adding example phrases or indicators would help...',
          templateSlot: 'HARDEST_CRITERION',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'Does this rubric reward what matters most to you, or has the AI subtly shifted the emphasis?',
          placeholder:
            'e.g., The rubric weights technical formatting too heavily compared to the quality of analysis...',
          templateSlot: 'EMPHASIS_CHECK',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'What instructions or context would you add when sharing this rubric with students?',
          placeholder:
            'e.g., I would explain that "original analysis" means going beyond what we discussed in class...',
          templateSlot: 'STUDENT_INSTRUCTIONS',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'Final adjustments to the rubric:\n\n1. The hardest criterion to grade consistently is: [HARDEST_CRITERION]. Add specific indicators or examples to make it clearer.\n2. Emphasis adjustment: [EMPHASIS_CHECK]. Rebalance the rubric to reflect my priorities.\n3. Include these notes for students: [STUDENT_INSTRUCTIONS].\n\nProvide the final rubric in a clean, table format ready for classroom use.',
        slots: [
          {
            id: 'HARDEST_CRITERION',
            label: 'Hardest Criterion',
            defaultText: 'which criterion is hardest to grade',
          },
          {
            id: 'EMPHASIS_CHECK',
            label: 'Emphasis Check',
            defaultText: 'where emphasis needs adjustment',
          },
          {
            id: 'STUDENT_INSTRUCTIONS',
            label: 'Student Instructions',
            defaultText: 'context to add for students',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Could you hand this rubric to students and feel confident it communicates your expectations clearly?',
          },
          {
            id: 'er2',
            question:
              'What have you learned about how AI handles rubric creation — and where does your expertise remain essential?',
          },
        ],
        checklist: [
          {
            id: 'c1',
            text: 'Rubric is ready for classroom use',
          },
          {
            id: 'c2',
            text: 'Grading would be consistent across different graders',
          },
          {
            id: 'c3',
            text: 'Emphasis reflects your pedagogical priorities',
          },
          {
            id: 'c4',
            text: 'Students would understand expectations from the rubric alone',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'Polish Without Substance',
            description:
              'A rubric can look professional and complete while still being impractical to use. The ultimate test is: does it help you grade faster and more fairly, and does it help students understand how to improve?',
          },
        ],
      },
    },
  ],
};
