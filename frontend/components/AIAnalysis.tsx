export default function AIAnalysis({
  analysis,
}: {
  analysis: string;
}) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid gray",
        borderRadius: "8px",
      }}
    >
      <h3>AI Analysis</h3>

      <p>{analysis}</p>
    </div>
  );
}