import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Quanto cada camada anda: quanto mais perto, mais rápido (parallax).
// 1 = a camada percorre toda a sua largura extra durante a rolagem da página.
const CAMADAS = [
  { seletor: '.cena__ceu', fator: 0.15, noCelular: true },
  { seletor: '.cena__casas-fundo', fator: 0.4, noCelular: false },
  { seletor: '.cena__casas-frente', fator: 0.8, noCelular: true },
  { seletor: '.cena__rua', fator: 1, noCelular: true },
]

// RF-07: o motoboy anda pela rua conforme a pessoa rola a página.
// RNF-05: com prefers-reduced-motion, nada é animado e a cena fica parada (ver cena.css).
export function iniciarCena() {
  const motoboy = document.querySelector('.cena__motoboy')
  if (!motoboy) return

  const mm = gsap.matchMedia()

  mm.add(
    {
      movimento: '(prefers-reduced-motion: no-preference)',
      celular: '(max-width: 767px)',
    },
    (contexto) => {
      const { movimento, celular } = contexto.conditions
      if (!movimento) return

      const linhaDoTempo = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

      CAMADAS.filter((camada) => !celular || camada.noCelular).forEach(({ seletor, fator }) => {
        const elemento = document.querySelector(seletor)
        if (!elemento) return
        linhaDoTempo.to(elemento, { x: () => -(elemento.offsetWidth - window.innerWidth) * fator }, 0)
      })

      linhaDoTempo.to(motoboy, { x: () => window.innerWidth * (celular ? 0.4 : 0.6) }, 0)

      // A moto inclina um pouco conforme a velocidade da rolagem e volta ao parar.
      gsap.set(motoboy, { transformOrigin: '50% 95%' })
      const inclinar = gsap.quickTo(motoboy, 'rotation', { duration: 0.4, ease: 'power2.out' })
      ScrollTrigger.create({
        onUpdate: (self) => inclinar(gsap.utils.clamp(-5, 5, self.getVelocity() / -500)),
      })
      const endireitar = () => inclinar(0)
      ScrollTrigger.addEventListener('scrollEnd', endireitar)

      return () => ScrollTrigger.removeEventListener('scrollEnd', endireitar)
    },
  )
}
