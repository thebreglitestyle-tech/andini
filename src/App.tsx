export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f8f3ee",
        color: "#222",
        minHeight: "100vh",
        margin: 0
      }}
    >
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 50px",
          borderBottom: "1px solid #e5ddd3",
          background: "#fffaf6"
        }}
      >
        <h2 style={{ margin: 0, letterSpacing: "2px" }}>andini.studio</h2>
        <nav style={{ display: "flex", gap: "25px", fontSize: "15px" }}>
          <span>Home</span>
          <span>Collection</span>
          <span>About</span>
          <span>Contact</span>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          textAlign: "center",
          padding: "110px 20px 90px"
        }}
      >
        <h1
          style={{
            fontSize: "58px",
            marginBottom: "20px",
            lineHeight: "1.2"
          }}
        >
          Elegant Handmade <br /> Boho Beach Bags
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto",
            opacity: 0.75
          }}
        >
          Crafted for women who love timeless style, beach freedom,
          and premium handmade details.
        </p>

        <button
          style={{
            marginTop: "35px",
            padding: "16px 34px",
            background: "#c89b6d",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Shop Collection
        </button>
      </section>

      {/* Products */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "25px",
          padding: "40px 50px 80px"
        }}
      >
        {[
          {
            name: "Summer Muse",
            price: "$49"
          },
          {
            name: "Golden Coast",
            price: "$55"
          },
          {
            name: "Ocean Soul",
            price: "$52"
          }
        ].map((item) => (
          <div
            key={item.name}
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "28px",
              boxShadow: "0 8px 18px rgba(0,0,0,0.06)"
            }}
          >
            <div
              style={{
                height: "220px",
                background: "#eee3d7",
                borderRadius: "12px",
                marginBottom: "18px"
              }}
            ></div>

            <h3 style={{ marginBottom: "8px" }}>{item.name}</h3>
            <p style={{ opacity: 0.7 }}>Premium woven handmade bag</p>
            <strong>{item.price}</strong>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "35px",
          borderTop: "1px solid #e5ddd3",
          background: "#fffaf6",
          opacity: 0.7
        }}
      >
        © 2026 andini.studio — Crafted with Style
      </footer>
    </div>
  );
}
