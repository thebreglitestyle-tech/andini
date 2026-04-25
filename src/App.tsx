export default function App() {
  return (
    <div style={{fontFamily:"Arial,sans-serif",background:"#f8f3ee",color:"#222"}}>
      <header style={{padding:"20px 40px",display:"flex",justifyContent:"space-between"}}>
        <h2>andini.studio</h2>
        <span>Luxury Boho Bags</span>
      </header>

      <section style={{textAlign:"center",padding:"100px 20px"}}>
        <h1 style={{fontSize:"54px"}}>Handcrafted Elegant Bags</h1>
        <p>Premium handmade collection for modern women.</p>
        <button style={{
          padding:"14px 28px",
          background:"#c89b6d",
          color:"#fff",
          border:"none",
          borderRadius:"8px",
          marginTop:"20px"
        }}>
          Shop Now
        </button>
      </section>

      <footer style={{textAlign:"center",padding:"40px",opacity:.6}}>
        © 2026 andini.studio
      </footer>
    </div>
  );
}
