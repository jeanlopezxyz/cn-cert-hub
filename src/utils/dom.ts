/**
 * DOM Manipulation Utilities
 * Reusable functions for common DOM operations
 */

const ROTATION_CLASS = 'rotate-180';

/**
 * Toggle chevron rotation (180deg)
 * Used for accordion arrows, dropdown indicators, etc.
 *
 * @param chevron - The chevron/arrow element to rotate
 * @param isOpen - Whether the associated content is open
 */
export function toggleChevronRotation(chevron: HTMLElement | null, isOpen: boolean): void {
  chevron?.classList.toggle(ROTATION_CLASS, isOpen);
}

/**
 * Add multiple CSS classes from a space-separated string
 * Filters out empty strings to avoid adding empty classes
 *
 * @param element - The HTML element to modify
 * @param classString - Space-separated class names
 */
export function addClasses(element: HTMLElement, classString: string): void {
  classString.split(' ').forEach((className) => {
    if (className) {
      element.classList.add(className);
    }
  });
}

/**
 * Remove multiple CSS classes from a space-separated string
 * Filters out empty strings to avoid removing empty classes
 *
 * @param element - The HTML element to modify
 * @param classString - Space-separated class names
 */
export function removeClasses(element: HTMLElement, classString: string): void {
  classString.split(' ').forEach((className) => {
    if (className) {
      element.classList.remove(className);
    }
  });
}

/**
 * Replace classes on an element (remove old, add new)
 * Useful for updating state-based styling (active/inactive, themes, etc.)
 *
 * @param element - The HTML element to modify
 * @param oldClasses - Space-separated class names to remove
 * @param newClasses - Space-separated class names to add
 */
export function replaceClasses(element: HTMLElement, oldClasses: string, newClasses: string): void {
  removeClasses(element, oldClasses);
  addClasses(element, newClasses);
}

const GRID_OPEN_CLASSES = ['grid-rows-[1fr]', 'opacity-100', 'pointer-events-auto'] as const;
const GRID_CLOSED_CLASSES = ['grid-rows-[0fr]', 'opacity-0', 'pointer-events-none'] as const;

/**
 * Toggle grid content visibility with animation classes
 * Uses CSS grid rows animation for smooth height transitions
 *
 * @param element - The grid container element
 * @param isOpen - Whether to show or hide the content
 */
export function toggleGridContent(element: HTMLElement | null, isOpen: boolean): void {
  if (!element) return;

  if (isOpen) {
    GRID_CLOSED_CLASSES.forEach((cls) => element.classList.remove(cls));
    GRID_OPEN_CLASSES.forEach((cls) => element.classList.add(cls));
  } else {
    GRID_OPEN_CLASSES.forEach((cls) => element.classList.remove(cls));
    GRID_CLOSED_CLASSES.forEach((cls) => element.classList.add(cls));
  }
}
