const SHEET_ID = '1kgrVN8IqCTKIxyPWaEo8qOtH01PupYJbQFKZhWQ8Now';
const HEADERS = ['Дата', "Ім'я", 'Телефон', 'Стек і рівень', 'Ситуація'];

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.stack || '',
    data.situation || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
