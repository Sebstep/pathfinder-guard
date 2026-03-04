import type { LabConfig, LabId, LabMeta } from '@/lib/types';
import { activityPlanningLab } from './activity-planning';
import { assessmentCreationLab } from './assessment-creation';
import { rubricDesignLab } from './rubric-design';

export const labConfigs: Record<LabId, LabConfig> = {
  'activity-planning': activityPlanningLab,
  'assessment-creation': assessmentCreationLab,
  'rubric-design': rubricDesignLab,
};

export function getLabConfig(labId: string): LabConfig | undefined {
  return labConfigs[labId as LabId];
}

export const labMetas: LabMeta[] = [
  {
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
  {
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
  {
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
];

export function getLabMeta(labId: string): LabMeta | undefined {
  return labMetas.find((lab) => lab.id === labId);
}
