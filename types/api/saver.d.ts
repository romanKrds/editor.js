import {OutputData} from '../data-formats/output-data';

/**
 * Describes Editor`s saver API
 */
export interface Saver {
  /**
   * Saves Editors data and returns promise with it
   *
   * @returns {Promise<OutputData>}
   */
  save(): Promise<OutputData>;

  /**
   * disables ModificationsObserver to stop listen for changes
   *
   * @returns {void}
   */
  disableModificationsObserver(): void;

  /**
   * enables ModificationsObserver to start listen for changes
   *
   * @returns {void}
   */
  enableModificationsObserver(): void;
}
