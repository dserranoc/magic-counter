export default function Footer () {
  return (
    <footer className='flex flex-col mb-4 mt-8 place-content-center items-center text-center'>
      <div>
        <span className='font-bold'>Desarrollado por Daniel Serrano Cobos desde Madrid con mucho <svg viewBox='0 0 24 24' class='inline' width='20' height='20' astro-icon='mdi:heart'><path fill='currentColor' d='m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z' /></svg></span>
      </div>
      <div>
        <a href='https://github.com/dserranoc/magic-counter' target='blank' rel='noreferrer'>
          <img src='/assets/github-mark.svg' alt='GitHub Logo' width='50' className='transition-all duration-500 invert-0 hover:brightness-200' />
        </a>
      </div>

    </footer>
  )
}
