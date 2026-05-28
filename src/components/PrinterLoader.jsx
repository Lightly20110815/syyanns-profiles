export default function PrinterLoader({ title, detail }) {
  return (
    <div className="printer-loader" aria-hidden="true">
      <div className="printer-box">
        <div className="printer-paper" />
        <div className="printer-scanline" />
      </div>
      <div className="printer-text">
        <div className="printer-title">{title}</div>
        <div className="printer-detail">{detail}</div>
      </div>
    </div>
  );
}
