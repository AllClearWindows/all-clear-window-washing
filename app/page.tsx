export default function Home() {
  return (
    <main>

      <header style={{background:"#0f172a",color:"white",padding:"20px"}}>
        <h1>All Clear Window Washing</h1>
      </header>

      <section style={{padding:"60px 20px",textAlign:"center"}}>
        <h2>Crystal Clear Windows for Homes & Businesses</h2>
        <p>Professional window cleaning with streak-free results.</p>
      </section>

      <section style={{padding:"40px 20px"}}>
        <h2 style={{textAlign:"center"}}>Services</h2>
        <ul style={{maxWidth:"600px",margin:"auto",lineHeight:"2"}}>
          <li>Residential Window Cleaning</li>
          <li>Commercial Window Cleaning</li>
          <li>Deep Cleaning (tracks, screens, stains)</li>
        </ul>
      </section>

      <section style={{padding:"40px 20px",background:"#ffffff"}}>
        <h2 style={{textAlign:"center"}}>Pricing</h2>
        <p style={{textAlign:"center"}}>
          Basic: $99+ | Standard: $179+ | Premium: $249+
        </p>
      </section>

      <section style={{padding:"40px 20px"}}>
        <h2 style={{textAlign:"center"}}>Request a Free Quote</h2>

        <form style={{maxWidth:"500px",margin:"auto",display:"grid",gap:"10px"}}>
          <input placeholder="Name" style={{padding:"10px"}} />
          <input placeholder="Phone" style={{padding:"10px"}} />
          <input placeholder="Email" style={{padding:"10px"}} />
          <textarea placeholder="Tell us about your windows" style={{padding:"10px"}} />

          <button
            style={{
              padding:"12px",
              background:"#2563eb",
              color:"white",
              border:"none"
            }}
          >
            Submit
          </button>
        </form>
      </section>

      <footer style={{background:"#0f172a",color:"#cbd5f5",textAlign:"center",padding:"20px"}}>
        © {new Date().getFullYear()} All Clear Window Washing
      </footer>

    </main>
  );
}
