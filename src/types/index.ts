export type UserRole = 'parent' | 'kid';

export interface User {
  id: string;
  email?: string;
  role: UserRole;
  displayName: string;
  avatarUrl?: string;
}

export interface Child {
  id: string;
  parentId: string;
  displayName: string;
  pin: string;
  avatarUrl?: string;
  totalPoints: number;
}

export interface Task {
  id: string;
  familyId: string;
  assignedToChildId: string;
  title: string;
  description?: string;
  points: number;
  dueDate?: string;
  status: TaskStatus;
  proofImageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export type TaskStatus = 'pending' | 'in_review' | 'approved' | 'rejected';

export interface Reward {
  id: string;
  familyId: string;
  title: string;
  description?: string;
  pointsCost: number;
  imageUrl?: string;
}
