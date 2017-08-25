import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import cardPlayer from 'components/card-player';

test('CardPlayer', assert => {
  const msg = 'CardPlayer should render something.';

  // Inject React into the factory to enable loading React from a CDN,
  // which may be cached, to boost performance and support multiple versions.
  const CardPlayer = cardPlayer(React);

  const courseTitle = 'My Course';
  const props = {
    courseTitle
  };

  const $ = shallow(<CardPlayer { ...props } />);
  const output = $.find('.course-title').text();

  const actual = output;
  const expected = courseTitle;

  assert.equal(actual, expected, msg);
  assert.end();
});
