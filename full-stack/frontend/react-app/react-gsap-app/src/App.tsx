import React from 'react';
import './App.scss';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger)

interface AppPropsInterface {}

const App: React.FC<AppPropsInterface> = () => {
  React.useEffect(() => {
    const t1 = gsap.timeline()
    t1.from('.acting-content-1', { xPercent: -100 })
    t1.from('.acting-content-2', { xPercent: 100 })
    t1.from('.acting-content-3', { yPercent: -100 })
    t1.from('.acting-content-4', { yPercent: 100 })

    ScrollTrigger.create({
      animation: t1,
      trigger: '.col',
      pin: true,
      scrub: true,
      start: `top top`,
      end: "+4000",
      anticipatePin: 1,
    })
  }, [])

  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="actual-content"></div>
            <div className="acting-content-1">
              <div>
                1
              </div>
            </div>
            <div className="acting-content-2">
              <div>
                2
              </div>
            </div>
            <div className="acting-content-3">
              <div>
                3
              </div>
            </div>
            <div className="acting-content-4">
              <div>
                4
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
