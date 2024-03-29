import { Injectable, QueryList } from '@angular/core';
import { UxgWizardPageComponent } from '../wizard-page/wizard-page.component';

@Injectable()
export class PageCollectionService {
  public pages?: QueryList<UxgWizardPageComponent>;

  public get pagesAsArray(): UxgWizardPageComponent[] {
    return this.pages ? this.pages.toArray() : [];
  }

  public get pagesCount(): number {
    return this.pages ? this.pages.length : 0;
  }

  public get lastPage(): UxgWizardPageComponent | null {
    const pageCount = this.pagesCount;

    if (pageCount < 1) {
      return null;
    }

    return this.pagesAsArray[pageCount - 1];
  }

  public get firstPage(): UxgWizardPageComponent | null {
    if (!this.pagesCount) {
      return null;
    }

    return this.pagesAsArray[0];
  }

  public getPageById(id: string): UxgWizardPageComponent {
    const foundPages: UxgWizardPageComponent[] = this.pages ? this.pages.filter((page: UxgWizardPageComponent) => id === page.id) : [];
    return this.checkResults(foundPages, id);
  }

  public getPageByIndex(index: number): UxgWizardPageComponent {
    const pageCount = this.pagesCount;
    const pagesLastIndex: number = pageCount > 1 ? pageCount - 1 : 0;

    if (index < 0) {
      throw new Error('Cannot retrieve page with index of ' + index);
    }

    if (index > pagesLastIndex) {
      throw new Error('Page index is greater than length of pages array.');
    }

    return this.pagesAsArray[index];
  }

  public getPageIndex(page: UxgWizardPageComponent | null): number {
    if (!page) {
      throw new Error('Requested page cannot be found in collection of pages.');
    }
    const index = this.pagesAsArray.indexOf(page);

    if (index < 0) {
      throw new Error('Requested page cannot be found in collection of pages.');
    }

    return index;
  }

  private checkResults(results: UxgWizardPageComponent[], requestedPageId: string) {
    const foundPagesCount: number = results.length || 0;

    if (foundPagesCount > 1) {
      throw new Error('More than one page has the requested id ' + requestedPageId + '.');
    } else if (foundPagesCount < 1) {
      throw new Error('No page can be found with the id ' + requestedPageId + '.');
    } else {
      return results[0];
    }
  }

  public pageRange(start: number, end: number): UxgWizardPageComponent[] {
    let pages: UxgWizardPageComponent[] = [];

    if (start < 0 || end < 0) {
      return [];
    }

    if (start === null || typeof start === 'undefined' || isNaN(start)) {
      return [];
    }

    if (end === null || typeof end === 'undefined' || isNaN(end)) {
      return [];
    }

    if (end > this.pagesCount) {
      end = this.pagesCount;
    }

    pages = this.pagesAsArray;

    if (end - start === 0) {
      return [this.getPageByIndex(start)];
    }

    end = end + 1;

    return pages.slice(start, end);
  }

  public getPageRangeFromPages(page: UxgWizardPageComponent, otherPage: UxgWizardPageComponent): UxgWizardPageComponent[] {
    const pageIndex = this.getPageIndex(page);
    const otherPageIndex = this.getPageIndex(otherPage);
    let startIndex: number;
    let endIndex: number;

    if (pageIndex <= otherPageIndex) {
      startIndex = pageIndex;
      endIndex = otherPageIndex;
    } else {
      startIndex = otherPageIndex;
      endIndex = pageIndex;
    }
    return this.pageRange(startIndex, endIndex);
  }

  public getPreviousPage(page: UxgWizardPageComponent): UxgWizardPageComponent | null {
    const myPageIndex = this.getPageIndex(page);
    let previousPageIndex = myPageIndex - 1;
    let previousPage: UxgWizardPageComponent | null = null;

    let valid = false;
    while (previousPageIndex >= 0) {
      previousPage = this.getPageByIndex(previousPageIndex);
      if (previousPage.disabled) {
        previousPageIndex--;
      } else {
        valid = true;
        break;
      }
    }

    if (!valid) {
      return null;
    }

    return previousPage;
  }

  public getNextPage(page: UxgWizardPageComponent | null): UxgWizardPageComponent | null {
    if (!page) return null;
    const myPageIndex = this.getPageIndex(page);
    let nextPageIndex = myPageIndex + 1;
    let nextPage: UxgWizardPageComponent | null = null;

    let valid = false;
    while (nextPageIndex < this.pagesAsArray.length) {
      nextPage = this.getPageByIndex(nextPageIndex);
      if (nextPage.disabled) {
        nextPageIndex++;
      } else {
        valid = true;
        break;
      }
    }

    if (!valid) {
      return null;
    }

    return nextPage;
  }

  constructor() {}
}
