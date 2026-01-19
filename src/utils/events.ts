/**
 * Event handling utilities
 * Reusable functions for common event listener patterns
 */

/**
 * Remove all existing event listeners from an element by replacing it with a clone
 * Useful to prevent duplicate listeners when re-initializing components
 *
 * @param element - The element to clean
 * @returns The new cloned element (already inserted in DOM)
 */
export function removeAllListeners<T extends Element>(element: T): T {
  const newElement = element.cloneNode(true) as T;
  element.parentNode?.replaceChild(newElement, element);
  return newElement;
}

/**
 * Add event listener with automatic cleanup on navigation
 * Useful for Astro view transitions
 *
 * @param element - Target element
 * @param event - Event name
 * @param handler - Event handler function
 * @param options - Event listener options
 */
export function addCleanableListener<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  event: K,
  handler: (this: HTMLElement, ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
): () => void {
  element.addEventListener(event, handler, options);

  // Return cleanup function
  return () => {
    element.removeEventListener(event, handler, options);
  };
}

/**
 * Smooth scroll to element with offset
 *
 * @param targetId - ID of target element
 * @param offset - Offset in pixels (typically header height)
 * @param behavior - Scroll behavior ('smooth' or 'auto')
 */
export function smoothScrollToElement(
  targetId: string,
  offset = 0,
  behavior: ScrollBehavior = 'smooth'
): void {
  const element = document.getElementById(targetId);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior });
}

/**
 * Initialize scroll-to buttons with data-scroll-to attribute
 *
 * @param offset - Scroll offset in pixels (typically header height)
 */
export function initScrollToButtons(offset = 0): void {
  document.querySelectorAll<HTMLElement>('[data-scroll-to]').forEach((button) => {
    // Remove existing listeners to prevent duplicates
    const cleanButton = removeAllListeners(button);

    cleanButton.addEventListener('click', () => {
      const targetId = cleanButton.getAttribute('data-scroll-to');
      if (targetId) {
        smoothScrollToElement(targetId, offset);
      }
    });
  });
}
