import Container from '../layout/container';
import { EXAMPLE_PATH } from '../../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center justify-center">
          <p className="text-center">
            &copy; 2020 | <a href="https://twitter.com/bimaindraa" target="_blank" className="text-">Bima Indra</a> <br />
            <small>Statically Generated with NextJS.</small>
          </p>
        </div>
      </Container>
    </footer>
  )
}
