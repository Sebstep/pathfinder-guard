import type { LabConfig } from '@/lib/types';

export const assessmentCreationLab: LabConfig = {
  meta: {
    id: 'assessment-creation',
    title: 'Create a Learning Assessment',
    description:
      'Develop quiz questions, exam prompts, or formative assessment items with AI assistance while maintaining academic rigor.',
    estimatedTime: '25-35 min',
    learningOutcome:
      "You'll learn to evaluate assessment alignment, detect AI tendencies toward surface-level questions, and refine iteratively.",
    coreSkill:
      'Evaluating assessment alignment, detecting shallow questions, iterative refinement',
    icon: 'assessment',
  },
  iterations: [
    // ========================================
    // ITERATION 1 — Intent & Alignment
    // ========================================
    {
      iterationNumber: 1,
      title: 'Intent & Alignment',
      focus: 'Define what the assessment should measure and how.',
      isOptional: false,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'What specific knowledge or skill should this assessment measure? Try to be precise: what would a successful student demonstrate?',
          placeholder:
            'e.g., Students should be able to apply Newton\'s second law to novel scenarios...',
          templateSlot: 'SPECIFIC_SKILL',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'What level of cognitive demand are you targeting — recall of facts, application to new scenarios, analysis, or evaluation?',
          placeholder:
            'e.g., Application — students should use concepts in new situations, not just recall definitions...',
          templateSlot: 'COGNITIVE_LEVEL',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'What format fits this assessment purpose: multiple choice, short answer, open-ended response, performance task, or a mix?',
          placeholder:
            'e.g., Mix of multiple choice for foundational concepts and short answer for application...',
          templateSlot: 'FORMAT',
          inputType: 'textarea',
        },
        {
          id: 'q4',
          question:
            'What would a common misconception or error look like on this assessment? Knowing this helps ensure the assessment actually catches misunderstanding.',
          placeholder:
            'e.g., Students often confuse velocity with acceleration, or think heavier objects fall faster...',
          templateSlot: 'MISCONCEPTION',
          inputType: 'textarea',
        },
        {
          id: 'q5',
          question:
            'Is this formative (to guide learning) or summative (to measure achievement)? How does that affect what you need?',
          placeholder:
            'e.g., Formative — I want to identify gaps before the final exam, so questions should reveal specific misunderstandings...',
          templateSlot: 'ASSESSMENT_PURPOSE',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'I need to create a [ASSESSMENT_PURPOSE] assessment for [STUDENT_LEVEL] students on the topic of [TOPIC].\n\nThe assessment should measure students\' ability to [SPECIFIC_SKILL].\n\nI want the questions to require [COGNITIVE_LEVEL] thinking.\n\nA common student misconception in this area is [MISCONCEPTION].\n\nPlease create [NUMBER] [FORMAT] questions. For each question, include the correct answer and a brief explanation of what the question tests.',
        slots: [
          {
            id: 'ASSESSMENT_PURPOSE',
            label: 'Purpose (Formative/Summative)',
            defaultText: 'formative or summative',
          },
          {
            id: 'STUDENT_LEVEL',
            label: 'Student Level',
            defaultText: 'student level',
          },
          { id: 'TOPIC', label: 'Topic', defaultText: 'the topic' },
          {
            id: 'SPECIFIC_SKILL',
            label: 'Specific Skill/Knowledge',
            defaultText: 'what students should demonstrate',
          },
          {
            id: 'COGNITIVE_LEVEL',
            label: 'Cognitive Level',
            defaultText: 'the cognitive level',
          },
          {
            id: 'MISCONCEPTION',
            label: 'Common Misconception',
            defaultText: 'a common misconception',
          },
          {
            id: 'NUMBER',
            label: 'Number of Questions',
            defaultText: 'number of',
          },
          {
            id: 'FORMAT',
            label: 'Question Format',
            defaultText: 'question format',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Could a student answer these questions correctly by memorizing, even if they don\'t truly understand the concept?',
          },
          {
            id: 'er2',
            question:
              'Do the distractors (wrong answers) reflect real student thinking, or are they obviously wrong?',
          },
        ],
        checklist: [
          {
            id: 'c1',
            text: 'Questions align with stated skill/knowledge target',
          },
          { id: 'c2', text: 'Cognitive level matches intent' },
          { id: 'c3', text: 'Distractors are plausible' },
          { id: 'c4', text: 'Questions are free of ambiguity' },
          {
            id: 'c5',
            text: 'Assessment distinguishes understanding from recall',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'Recall-Level Default',
            description:
              'AI-generated assessments often default to recall-level questions even when asked for higher-order thinking. Check each question: does it truly require the cognitive level you specified?',
          },
        ],
      },
    },

    // ========================================
    // ITERATION 2 — Rigor & Authenticity
    // ========================================
    {
      iterationNumber: 2,
      title: 'Rigor & Authenticity',
      focus: 'Ensure questions test genuine understanding, not surface knowledge.',
      isOptional: false,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'For each question, ask: could a student find the answer by searching online in 10 seconds? If so, is that the kind of understanding you\'re assessing?',
          placeholder:
            'e.g., Questions 1 and 3 could be Googled instantly — they test recall, not understanding...',
          templateSlot: 'SEARCHABILITY',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'Do the questions test what you actually taught, or what the AI assumes is important about this topic?',
          placeholder:
            'e.g., The AI focused on dates and names, but my course emphasizes analytical frameworks...',
          templateSlot: 'ALIGNMENT_GAP',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'Would these questions reveal the difference between a student who deeply understands and one who superficially knows the material?',
          placeholder:
            'e.g., A student who memorized the textbook could score well — need questions that require synthesis...',
          templateSlot: 'DEPTH_CHECK',
          inputType: 'textarea',
        },
        {
          id: 'q4',
          question:
            'Are there questions that unintentionally test reading comprehension or vocabulary rather than subject knowledge?',
          placeholder:
            'e.g., Question 4 uses complex wording that might confuse ESL students regardless of their subject knowledge...',
          templateSlot: 'LANGUAGE_BIAS',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'Please revise the assessment based on these issues I identified:\n\n1. Searchability concern: [SEARCHABILITY]. Replace easily-Googled questions with ones requiring genuine understanding.\n2. Alignment gap: [ALIGNMENT_GAP]. Ensure questions reflect what I actually teach.\n3. Depth issue: [DEPTH_CHECK]. Add questions that distinguish deep from surface understanding.\n4. Language concern: [LANGUAGE_BIAS]. Simplify language where it obscures the subject being tested.\n\nFor each revised question, explain what changed and why.',
        slots: [
          {
            id: 'SEARCHABILITY',
            label: 'Searchability Concern',
            defaultText: 'which questions are too easily searchable',
          },
          {
            id: 'ALIGNMENT_GAP',
            label: 'Alignment Gap',
            defaultText: 'where questions don\'t match your teaching',
          },
          {
            id: 'DEPTH_CHECK',
            label: 'Depth Check',
            defaultText: 'where questions lack depth',
          },
          {
            id: 'LANGUAGE_BIAS',
            label: 'Language Concern',
            defaultText: 'language issues in questions',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Are the revised questions measurably better at testing genuine understanding, or did the AI just rephrase the same questions?',
          },
          {
            id: 'er2',
            question:
              'Could you defend each question\'s inclusion to a colleague? Does every question earn its place?',
          },
        ],
        checklist: [
          {
            id: 'c1',
            text: 'Questions align with stated skill/knowledge target',
          },
          { id: 'c2', text: 'Cognitive level matches intent' },
          { id: 'c3', text: 'Distractors are plausible' },
          { id: 'c4', text: 'Questions are free of ambiguity' },
          {
            id: 'c5',
            text: 'Assessment distinguishes understanding from recall',
          },
          {
            id: 'c6',
            text: 'Questions require thinking, not just searching',
          },
          {
            id: 'c7',
            text: 'Language is accessible and doesn\'t create barriers',
          },
          {
            id: 'c8',
            text: 'Factual accuracy verified for every question',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'Shallow Revision',
            description:
              'AI often generates questions that are technically correct but pedagogically shallow. It may also hallucinate plausible-sounding but inaccurate content, especially in specialized fields. Verify factual accuracy for every question.',
          },
        ],
      },
    },

    // ========================================
    // ITERATION 3 (Optional) — Contextualization
    // ========================================
    {
      iterationNumber: 3,
      title: 'Contextualization',
      focus: 'Adapt the assessment for your specific classroom context.',
      isOptional: true,
      scaffoldingQuestions: [
        {
          id: 'q1',
          question:
            'Which questions would you keep as-is, which need editing, and which would you replace entirely?',
          placeholder:
            'e.g., Keep Q1 and Q5, edit Q3 to add more context, replace Q2 and Q4 entirely...',
          templateSlot: 'KEEP_EDIT_REPLACE',
          inputType: 'textarea',
        },
        {
          id: 'q2',
          question:
            'How would you sequence these questions in an actual assessment? Does the AI\'s ordering make pedagogical sense?',
          placeholder:
            'e.g., Start with easier recall questions to build confidence, then move to application...',
          templateSlot: 'SEQUENCING',
          inputType: 'textarea',
        },
        {
          id: 'q3',
          question:
            'What would you add that only someone who knows your students could contribute?',
          placeholder:
            'e.g., Include a question about the case study we discussed in week 3, reference the lab experiment...',
          templateSlot: 'PERSONAL_ADDITIONS',
          inputType: 'textarea',
        },
      ],
      promptTemplate: {
        templateText:
          'Please make these final adjustments:\n\n1. Question selection: [KEEP_EDIT_REPLACE]\n2. Reorder the questions: [SEQUENCING]\n3. Add these context-specific elements: [PERSONAL_ADDITIONS]\n\nProvide the final assessment in a format I can use directly, with clear numbering and answer key.',
        slots: [
          {
            id: 'KEEP_EDIT_REPLACE',
            label: 'Keep/Edit/Replace',
            defaultText: 'which to keep, edit, or replace',
          },
          {
            id: 'SEQUENCING',
            label: 'Sequencing',
            defaultText: 'preferred question order',
          },
          {
            id: 'PERSONAL_ADDITIONS',
            label: 'Personal Additions',
            defaultText: 'context-specific elements to add',
          },
        ],
      },
      evaluationTools: {
        reflectionQuestions: [
          {
            id: 'er1',
            question:
              'Is this assessment ready to give to your students, or does it still need your personal review and adjustment?',
          },
          {
            id: 'er2',
            question:
              'What did this process teach you about how AI approaches assessment creation — and where does it fall short?',
          },
        ],
        checklist: [
          {
            id: 'c1',
            text: 'Assessment is ready for classroom use',
          },
          {
            id: 'c2',
            text: 'Question sequence makes pedagogical sense',
          },
          {
            id: 'c3',
            text: 'Includes context your students will recognize',
          },
          {
            id: 'c4',
            text: 'Answer key is accurate and complete',
          },
        ],
        failureModes: [
          {
            id: 'fm1',
            title: 'False Confidence',
            description:
              'AI-generated assessments can look polished and professional while containing subtle errors or misalignments. The professional appearance can create false confidence. Always verify every answer and every claim.',
          },
        ],
      },
    },
  ],
};
