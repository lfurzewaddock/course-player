import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import cardPlayer from 'components/card-player';

test('CardPlayer', nest => {
  nest.test('...card-player', assert => {
    const msg = 'CardPlayer should render the card-player div.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.card-player').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...nav-bar', assert => {
    const msg = 'CardPlayer should render the nav-bar.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.nav-bar').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...course title', assert => {
    const msg = 'CardPlayer should render the course title.';

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
  nest.test('...nav', assert => {
    const msg = 'CardPlayer should render the nav.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.nav').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...card-content', assert => {
    const msg = 'CardPlayer should render the card-content.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const cardContent = 'My content';
    const props = {
      courseTitle,
      cardContent
    };

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.card-content').text();

    const actual = output;
    const expected = cardContent;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...next-card', assert => {
    const msg = 'CardPlayer should render the next-card button.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle
    };

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.next-card').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...next-card', assert => {
    const msg = 'nex-card should render a disabled button by default.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle,
      isCompleted: false
    };

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.button').html().includes('disabled');

    const actual = output;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...next-card with card completed', assert => {
    const msg = 'nex-card should render a working continue button.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const courseTitle = 'My Course';
    const props = {
      courseTitle,
      isCompleted: true
    };

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.button').html().includes('disabled');

    const actual = output;
    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
