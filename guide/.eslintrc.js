const cfg = module.exports = require('relm/react-dom/eslint');

cfg.rules['react/jsx-no-literals'] = 0;
cfg.rules['react/jsx-key'] = 0;
cfg.rules['react/jsx-max-props-per-line'] = [1, { maximum: 2 }];
cfg.rules['react/jsx-closing-bracket-location'] = [1, { nonEmpty: 'after-props', selfClosing: 'tag-aligned' }];

cfg.rules['react/no-multi-comp'] = 0;
cfg.rules['react/prop-types'] = 0;
