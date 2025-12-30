// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { vi } from 'vitest';

// Mock three.js WebGL dependencies
vi.mock('three', () => ({
  WebGLRenderer: vi.fn(),
  Scene: vi.fn(),
  PerspectiveCamera: vi.fn(),
  Color: vi.fn(),
  Vector3: vi.fn(),
  Mesh: vi.fn(),
  MeshBasicMaterial: vi.fn(),
  SphereGeometry: vi.fn(),
}));

// Mock react-force-graph-3d
vi.mock('react-force-graph-3d', () => ({
  default: vi.fn(() => null),
}));

// Mock three-spritetext
vi.mock('three-spritetext', () => ({
  default: vi.fn(),
}));