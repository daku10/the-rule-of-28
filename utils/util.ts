export function assertNotNull<T>(value: T | null): value is T {
  return value !== null;
}
