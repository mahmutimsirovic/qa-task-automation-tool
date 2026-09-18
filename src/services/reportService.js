const fs = require('fs');

function generateReport(data, filename = 'report.html') {
  const html = `
    <html>
      <head><title>QA Report</title></head>
      <body>
        <h1>QA Report</h1>
        <p>Total Lines: ${data.totalLines}</p>
        <p>Errors: ${data.errors.length}</p>
        <p>Warnings: ${data.warnings.length}</p>
      </body>
    </html>
  `;
  fs.writeFileSync(filename, html);
  return filename;
}

module.exports = { generateReport };
