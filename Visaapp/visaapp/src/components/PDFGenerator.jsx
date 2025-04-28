import jsPDF from 'jspdf';

export default function PDFGenerator({ messages }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 10;
    messages.forEach((msg, index) => {
      doc.text(`${msg.sender === 'user' ? 'You' : 'Bot'}: ${msg.text}`, 10, y);
      y += 10;
    });
    doc.save('chat_history.pdf');
  };

  return (
    <div className="p-4 bg-teal-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Download Chat History</h2>
      <button
        onClick={generatePDF}
        className="w-full p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
      >
        Generate PDF
      </button>
    </div>
  );
}