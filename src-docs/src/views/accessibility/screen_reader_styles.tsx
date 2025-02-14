import { css } from '@emotion/react';
import React from 'react';

import { EuiText, euiScreenReaderOnlyStyles } from '../../../../src';

export default () => (
  <EuiText>
    <p>This is the first paragraph. It is visible to all.</p>
    <p css={css(euiScreenReaderOnlyStyles())}>
      This is the second paragraph. It is hidden for sighted users but visible
      to screen readers.
    </p>
    <p>This is the third paragraph. It is visible to all.</p>
  </EuiText>
);
