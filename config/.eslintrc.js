// .eslintrc.js
'use strict'

module.exports = {
  // The extends directive allows composition of configuration files
  extends: [
    // Each file adds rule definitions over the previous file, potentially
    // overwriting some configuration options. Here, we are including the
    // base configuration for Node.js development and we opt-in to the
    // best-practices ruleset.
    'javascript/environments/nodejs/latest',
    'javascript/environments/nodejs/best-practices',
    // If you are brave enough, you can also extend the "optional" ruleset
    'javascript/environments/nodejs/optional'
  ],

  // If you need to override some rules specifically for this project,
  // you can do so as usual via the rules property.
  // Per-project rules take precedence over rules defined via included
  // configurations.
  rules: {
    'valid-jsdoc': 2,
    'no-process-env': 0
  }
}
