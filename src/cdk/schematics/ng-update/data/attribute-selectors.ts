/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {TargetVersion} from '../../update-tool/target-version';
import {VersionChanges} from '../../update-tool/version-changes';

export interface AttributeSelectorUpgradeData {
  /** The attribute name to replace. */
  replace: string;
  /** The new name for the attribute. */
  replaceWith: string;
}

export const attributeSelectors: VersionChanges<AttributeSelectorUpgradeData> = {
  [TargetVersion.V6]: [
    {
      pr: 'https://github.com/angular/components/pull/10257',
      changes: [
        {replace: 'cdkPortalHost', replaceWith: 'cdkPortalOutlet'},
        {replace: 'portalHost', replaceWith: 'cdkPortalOutlet'},
      ],
    },
  ],
};
