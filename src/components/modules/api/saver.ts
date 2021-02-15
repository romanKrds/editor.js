import Module from '../../__module';
import { Saver } from '../../../../types/api';
import { OutputData } from '../../../../types';

/**
 * @class SaverAPI
 * provides with methods to save data
 */
export default class SaverAPI extends Module {
  /**
   * Available methods
   *
   * @returns {Saver}
   */
  public get methods(): Saver {
    return {
      save: (): Promise<OutputData> => this.save(),
      disableModificationsObserver: (): void => this.disableModificationsObserver(),
      enableModificationsObserver: (): void => this.enableModificationsObserver(),
    };
  }

  /**
   * Return Editor's data
   */
  public save(): Promise<OutputData> {
    return this.Editor.Saver.save();
  }

  /**
   * disables ModificationsObserver to stop listen for changes
   */
  public disableModificationsObserver(): void {
    this.Editor.Saver.disableModificationsObserver();
  }

  /**
   * enables ModificationsObserver to start listen for changes
   */
  public enableModificationsObserver(): void {
    this.Editor.Saver.enableModificationsObserver();
  }
}
