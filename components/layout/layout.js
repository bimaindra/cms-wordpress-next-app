import Alert from '../general/alert';
import Footer from '../foot/footer';
import Meta from '../head/meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
