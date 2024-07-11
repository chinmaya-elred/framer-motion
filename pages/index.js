import Link from 'next/link';

export default function Home() {
  return (
    <div className='d-flex'>
      <p className='font-bold text-[30px]'>Framer-motion Component Showcase</p>
      <ul className='flex flex-wrap p-0 mt-5'>
        <li className='mr-2 mb-2'>
          <Link href="/BasicsOfMotion">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Basics Of Motion
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/Gestures">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Gestures
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/AnimationControls">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Animation Controls
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/ViewBaseAnimaions">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              View Based Animations
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/ScrollAnimation">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Scroll Animations
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/ParallalxMain">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Parallax Main
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/NotionKanbanDragDrop">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Notion Kanban DragDrop
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/ComplexAnimation">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Complex Animations
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/AuroraEffect">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Aurora Effect
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/TextImageParallalx">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Text Image Parallax
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/CardHover">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Hover Tilt Card
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/ScrollCarousel">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Scroll Carousel
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/TextAnimation">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Text Animation
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/NavigationMenu">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Shifting DropDown
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/FlyoutContent">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Flyout Content Comp
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/GridAnimation">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Grid Animation
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/AnimatedNavbar">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Slide Tabs Example
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/HoverImageLink">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Hover Image Links
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/ClipPathAnimation">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Clip Path Animation
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/HoverButtonAnimation">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Button Wrapper
            </button>
          </Link>
        </li>
        <li className='mr-2 mb-2'>
          <Link href="/HumbergerButton">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Humberger Menu
            </button>
          </Link>
        </li>

        <li className='mr-2 mb-2'>
          <Link href="/DragToCloseModal">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Drag to Close mOdal
            </button>
          </Link>
        </li>

        <li className='mr-2 mb-2'>
          <Link href="/ScrollEffect">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Scroll Effect
            </button>
          </Link>
        </li>

        <li className='mr-2 mb-2'>
          <Link href="/BubbleText">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Bubble Text
            </button>
          </Link>
        </li>

        <li className='mr-2 mb-2'>
          <Link href="/Demo">
            <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'>
              Demo
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
