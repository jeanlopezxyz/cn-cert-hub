/**
 * Dropdown management utility
 * Provides reusable functionality for dropdown menus with keyboard navigation
 */

export interface DropdownElements {
  container: HTMLElement;
  toggle: HTMLElement;
  dropdown: HTMLElement;
  chevron?: HTMLElement | null;
}

export interface DropdownOptions {
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export class DropdownManager {
  private isOpen = false;
  private elements: DropdownElements;
  private options: DropdownOptions;

  constructor(elements: DropdownElements, options: DropdownOptions = {}) {
    this.elements = elements;
    this.options = {
      closeOnOutsideClick: true,
      closeOnEscape: true,
      ...options,
    };

    this.init();
  }

  private init(): void {
    this.elements.toggle.addEventListener('click', this.handleToggleClick);

    if (this.options.closeOnEscape) {
      document.addEventListener('keydown', this.handleKeyDown);
    }

    if (this.options.closeOnOutsideClick) {
      document.addEventListener('click', this.handleOutsideClick);
    }
  }

  private handleToggleClick = (e: Event): void => {
    e.stopPropagation();
    this.toggle();
  };

  private handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this.isOpen) {
      this.close();
    }
  };

  private handleOutsideClick = (e: Event): void => {
    if (this.isOpen && !this.elements.container.contains(e.target as Node)) {
      this.close();
    }
  };

  public toggle(): void {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public open(): void {
    this.isOpen = true;
    this.elements.dropdown.classList.remove('hidden');
    this.elements.dropdown.classList.add('flex');
    this.elements.toggle.setAttribute('aria-expanded', 'true');

    if (this.elements.chevron) {
      this.elements.chevron.classList.add('rotate-180');
    }

    this.options.onOpen?.();
  }

  public close(): void {
    this.isOpen = false;
    this.elements.dropdown.classList.add('hidden');
    this.elements.dropdown.classList.remove('flex');
    this.elements.toggle.setAttribute('aria-expanded', 'false');

    if (this.elements.chevron) {
      this.elements.chevron.classList.remove('rotate-180');
    }

    this.options.onClose?.();
  }

  public destroy(): void {
    this.elements.toggle.removeEventListener('click', this.handleToggleClick);
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('click', this.handleOutsideClick);
  }

  public getState(): boolean {
    return this.isOpen;
  }
}

/**
 * Simple dropdown helper for basic use cases
 */
export function setupSimpleDropdown(
  containerId: string,
  toggleId: string,
  dropdownId: string,
  chevronId?: string
): DropdownManager | null {
  const container = document.getElementById(containerId);
  const toggle = document.getElementById(toggleId);
  const dropdown = document.getElementById(dropdownId);
  const chevron = chevronId ? document.getElementById(chevronId) : null;

  if (!container || !toggle || !dropdown) return null;

  return new DropdownManager({
    container,
    toggle,
    dropdown,
    chevron,
  });
}
