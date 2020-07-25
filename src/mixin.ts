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
    return {
      serviceKey: uuidv4(),
      data: '',
    };
  },
};
