'use strict';
exports.__esModule = true;
var React = require('react');
var Card = function (_a) {
  var name = _a.name,
    email = _a.email,
    id = _a.id;
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='monsters' src={'https://robohash.org/' + id + '?200x200'} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
exports['default'] = Card;
