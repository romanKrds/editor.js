import {OutputData} from '../data-formats/output-data';
import {BlockToolData, ToolConfig} from '../tools';
import {BlockAPI} from './block';
import {MetaDataBlock} from "../../src/types-internal/block-data";

/**
 * Describes methods to manipulate with Editor`s blocks
 */
export interface Blocks {
  /**
   * Remove all blocks from Editor zone
   */
  clear(): void;

  /**
   * Render passed data
   * @param {OutputData} data
   * @return {Promise<void>}
   */
  render(data: OutputData): Promise<void>;

  /**
   * Render passed HTML string
   * @param {string} data
   * @return {Promise<void>}
   */
  renderFromHTML(data: string): Promise<void>;

  /**
   * Removes current Block
   * @param {number} index - index of a block to delete
   */
  delete(index?: number): void;

  /**
   * Swaps two Blocks
   * @param {number} fromIndex - block to swap
   * @param {number} toIndex - block to swap with
   * @deprecated — use 'move' instead
   */
  swap(fromIndex: number, toIndex: number): void;

  /**
   * Moves a block to a new index
   * @param {number} toIndex - index where the block is moved to
   * @param {number} fromIndex - block to move
   */
  move(toIndex: number, fromIndex?: number): void;

  /**
   * Returns Block holder by Block index
   * @param {number} index
   * @returns {HTMLElement}
   */
  getBlockByIndex(index: number): BlockAPI;

  /**
   * Returns current Block index
   * @returns {number}
   */
  getCurrentBlockIndex(): number;

  /**
   * Mark Block as stretched
   * @param {number} index - Block to mark
   * @param {boolean} status - stretch status
   *
   * @deprecated Use BlockAPI interface to stretch Blocks
   */
  stretchBlock(index: number, status?: boolean): void;

  /**
   * Returns Blocks count
   * @return {number}
   */
  getBlocksCount(): number;

  /**
   * Insert new Initial Block after current Block
   *
   * @deprecated
   */
  insertNewBlock(): void;

  /**
   * Insert new Block
   *
   * @param {object} options - insert options
   * @param {string} options.type — Tool name
   * @param {BlockToolData} options.data — Tool data to insert
   * @param {ToolConfig} options.config — Tool config
   * @param {number?} options.index — index where to insert new Block
   * @param {boolean?} options.needToFocus - flag to focus inserted Block
   * @param {boolean?} options.replace - flag to replace a Block
   * @param {object} options.metadata - Meta Data Object
   * @param {boolean} options.replaceByUUID - flag shows if block should be replaced by UUID
   */
  insert({
    type,
    data,
    config,
    index,
    needToFocus,
    replace,
    metadata,
    replaceByUUID,
  }: {
    type?: string;
    data?: BlockToolData;
    config?: ToolConfig;
    index?: number;
    needToFocus?: boolean;
    replace?: boolean;
    metadata?: MetaDataBlock;
    replaceByUUID?: boolean;
  }): void;
}
