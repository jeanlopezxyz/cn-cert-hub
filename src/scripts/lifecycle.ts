/**
 * Astro Lifecycle Helpers
 *
 * Centralized utilities for managing Astro View Transitions lifecycle events.
 * Simplifies event listener setup and cleanup for client-side interactions.
 *
 * @module scripts/lifecycle
 * @see https://docs.astro.build/en/guides/view-transitions/
 */

/**
 * Executes callback immediately and after each Astro navigation (View Transitions)
 *
 * Use this for initialization logic that needs to run on both:
 * - Initial page load
 * - Every subsequent navigation via View Transitions
 *
 * @param callback - Function to execute on page ready
 *
 * @example
 * ```typescript
 * onPageReady(() => {
 *   initSidebar();
 *   console.log('Sidebar initialized');
 * });
 * ```
 */
export const onPageReady = (callback: () => void): void => {
  // Execute immediately on initial load
  callback();

  // Execute after each navigation swap
  document.addEventListener('astro:after-swap', callback);
};

/**
 * Executes callback only after Astro navigation (not on initial load)
 *
 * Use this for logic that should only run during navigation transitions,
 * not on the first page load.
 *
 * @param callback - Function to execute after page swap
 *
 * @example
 * ```typescript
 * onPageSwap(() => {
 *   console.log('User navigated to a new page');
 *   resetScrollPosition();
 * });
 * ```
 */
export const onPageSwap = (callback: () => void): void => {
  document.addEventListener('astro:after-swap', callback);
};

/**
 * Executes callback before the page is replaced during navigation
 *
 * Use this for cleanup or preparation logic before the DOM is swapped.
 * Useful for saving state, stopping animations, or cleaning up resources.
 *
 * @param callback - Function to execute before page swap
 *
 * @example
 * ```typescript
 * onBeforeSwap(() => {
 *   saveFormState();
 *   stopVideoPlayback();
 * });
 * ```
 */
export const onBeforeSwap = (callback: () => void): void => {
  document.addEventListener('astro:before-swap', callback);
};

/**
 * Cleans up listener when element is removed from DOM
 *
 * Uses MutationObserver to detect when an element is removed and
 * automatically executes cleanup logic. Prevents memory leaks from
 * orphaned event listeners.
 *
 * @param element - Element to observe for removal
 * @param cleanup - Function to execute when element is removed
 *
 * @example
 * ```typescript
 * const button = document.getElementById('my-button');
 * if (button) {
 *   onCleanup(button, () => {
 *     console.log('Button was removed from DOM');
 *     clearInterval(timer);
 *   });
 * }
 * ```
 */
export const onCleanup = (element: Element, cleanup: () => void): void => {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.removedNodes.length > 0) {
        for (const node of Array.from(mutation.removedNodes)) {
          if (node === element || (node instanceof Element && node.contains(element))) {
            cleanup();
            observer.disconnect();
            return;
          }
        }
      }
    }
  });

  if (element.parentNode) {
    observer.observe(element.parentNode, { childList: true });
  }
};
