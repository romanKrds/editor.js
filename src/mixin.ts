'use strict';

/**
 * Allows you to setup the editor to create the required
 * metadata element.
 *
 * Should return the block in the format specified in MetaDataBlock which
 * can be set in src/types-internal/block-data
 *
 * This configuration has an id element and data element - both are strings
 *
 */

import { MetaDataBlock } from './types-internal/block-data';
import { v4 as uuidv4 } from 'uuid';

export default {
  createMeta(): MetaDataBlock {
    let uuid = uuidv4();

    const existId = (): boolean => Boolean(document.getElementById(uuid));

    do {
      uuid = uuidv4();
    } while (existId());

    return {
      uuid,
      data: '',
    };
  },
};
