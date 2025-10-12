import { useAppSelector } from '../redux/hooks';

import { Hero } from './hero';
import { About } from './about';
import { Features } from './features';
import { Footer } from './footer';
import { Background } from './background';

export function App() {
  const locale = useAppSelector((state) => state.localizer.locale);

  return (
    <main className="relative">
      <Background />
      <div className="absolute z-20 h-full">
        <Hero locale={locale} />
        <div className="bg-white w-[100vw]">
          <About locale={locale} />
          <Features locale={locale} />
          <Footer locale={locale} />
        </div>
      </div>
    </main>
  );
}

export default App;
