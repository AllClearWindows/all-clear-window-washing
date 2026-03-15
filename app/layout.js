export const metadata = {
  title: "All Clear Window Washing",
  description: "Professional residential and commercial window cleaning."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f8fafc" }}>
        {children}
      </body>
    </html>
  );
}
