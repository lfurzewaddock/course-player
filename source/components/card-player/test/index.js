import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import cardPlayer from 'components/card-player';

// Factory function to return props
const makeProps = (settings) => Object.assign({}, {
  courseTitle: 'My Course',
  cardContent: 'Contents...',
  isCompleted: false,
  cardsList: [
    {
      id: '1',
      name: 'Card 1'
    },
    {
      id: '2',
      name: 'Card 2'
    },
    {
      id: '3',
      name: 'Card 3'
    }
  ],
  currentCardId: '1'
}, settings);

test('CardPlayer', nest => {
  nest.test('...card-player', assert => {
    const msg = 'CardPlayer should render the card-player div.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps();

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

    const props = makeProps();

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

    const courseTitle = 'My Amazing Course';
    const props = makeProps( {
      courseTitle
    });

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.course-title').text();

    const actual = output;
    const expected = courseTitle;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...card-content', assert => {
    const msg = 'CardPlayer should render the card-content.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const cardContent = 'My content';
    const props = makeProps({
      cardContent
    });

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

    const props = makeProps();

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.next-card').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...next-card btn class', assert => {
    const msg = 'next-card should render the button class';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.button').hasClass('btn');

    const actual = output;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...next-card', assert => {
    const msg = 'next-card should render a disabled button by default.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps({ isCompleted: false });

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.button').html().includes('disabled');

    const actual = output;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...next-card with card completed', assert => {
    const msg = 'next-card should render a working continue button.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps({ isCompleted: true });

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.button').html().includes('disabled');

    const actual = output;
    const expected = false;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...next-card with card completed', assert => {
    const msg = 'next-card should render the button success class.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps({ isCompleted: true });

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.button').hasClass('btn-success');

    const actual = output;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...card-container', assert => {
    const msg = 'CardPlayer should render the card-container.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.card-container').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...card-list', assert => {
    const msg = 'CardPlayer should render the card-list.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps();

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.card-list').children().length;

    const actual = output > 0;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...card-list contents', assert => {
    const msg = 'CardPlayer should render the correct card-list.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps({ cardsList: [
        {
          id: '1',
          name: 'Card #1'
        },
        {
          id: '2',
          name: 'Card #2'
        },
        {
          id: '3',
          name: 'Card #3'
        }
      ]
    });

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.card-list li').length;

    const actual = output;
    const expected = 3;

    assert.equal(actual, expected, msg);
    assert.end();
  });
  nest.test('...card-list current card', assert => {
    const msg = 'CardPlayer should render the current card.';

    // Inject React into the factory to enable loading React from a CDN,
    // which may be cached, to boost performance and support multiple versions.
    const CardPlayer = cardPlayer(React);

    const props = makeProps({ currentCardId: '3' });

    const $ = shallow(<CardPlayer { ...props } />);
    const output = $.find('.card-list').children().last().hasClass('current-card');

    const actual = output;
    const expected = true;

    assert.equal(actual, expected, msg);
    assert.end();
  });
});
