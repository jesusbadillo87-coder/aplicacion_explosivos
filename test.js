const fs = require('fs');

try {
  const code = fs.readFileSync('quiz.js', 'utf8');
  // Simple check for syntax error by trying to parse with new Function
  new Function(code);
  console.log('No syntax errors found in quiz.js');
} catch (e) {
  console.error('Syntax error:', e);
}
