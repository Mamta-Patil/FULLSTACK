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
    <button
      onClick={generatePDF}
      className="p-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
    >
      Download PDF
    </button>
  );
}
