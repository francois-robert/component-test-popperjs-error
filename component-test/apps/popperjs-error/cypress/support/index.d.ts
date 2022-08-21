import { MountOptions, MountReturn } from 'cypress/react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { RootState } from '../../src/app/store';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React Component
       * @param component the React node to mount
       * @param options Additional options to pass into mount
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { reduxStore?: EnhancedStore<RootState> }
      ): Cypress.Chainable<MountReturn>;

      /**
       * Custom command to get element by data-cy value
       * @example cy.getByDataCy('selector')
       */
      getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
