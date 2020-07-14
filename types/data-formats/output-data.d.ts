import {BlockToolData} from '../tools';
import { MetaDataBlock } from '../../src/types-internal/block-data';

/**
 * Output of one Tool
 */
export interface OutputBlockData {
  /**
   * Too type
   */
  type: string;
  /**
   * Saved Block data
   */
  data: BlockToolData;
  /**
   * Meta
   */
  metadata?: MetaDataBlock;
}

export interface OutputData {
  /**
   * Editor's version
   */
  version?: string;

  /**
   * Timestamp of saving in milliseconds
   */
  time?: number;

  /**
   * Saved Blocks
   */
  blocks: OutputBlockData[];
}
