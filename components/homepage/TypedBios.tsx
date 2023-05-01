import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I work mostly with Azure/AWS, Kubernetes and Cloud Native tools.</li>
        <li>
          I have a Bachelor's Degree in Computer Science. I studied at University Paderborn, Germany
          and Unversity of California, Riverside !
        </li>
        <li>I'm a learner!</li>
        <li>
          I am born & raised <b className="font-medium">Bielefeld, Germany</b>. I still live here!
        </li>
        <li>Python enthusiast!</li>
        <li>I am happily married.</li>
        <li>I love animals! Me and wife have cats, horses and rabbits.</li>
        <li>I love watching MMA.</li>
        <li>
          I love playing video games <Twemoji emoji="video-game" /> !
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
