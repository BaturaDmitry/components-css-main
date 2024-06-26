export default function animScroll(): void {
  const animItems = document.querySelectorAll('.animItems')
  const animOnScroll = (): void => {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index] as HTMLElement
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if (
        window.scrollY > animItemOffset - animItemPoint &&
        window.scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add('Animation')
      }
    }
  }
  const offset = (el: Element): { top: number; left: number } => {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    setTimeout(() => {
      animOnScroll()
    }, 300)
  }
}
