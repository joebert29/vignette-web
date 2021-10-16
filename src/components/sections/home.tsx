import { Layout, Button, BottomBar, PrimaryText } from '@/components'
import { Icon } from '@iconify/react'
import Link from 'next/link'

// eslint-disable-next-line react/display-name
const Home = () => {
  return (
    <Layout
      id="home"
      className="flex flex-col hero z-30 shadow-lg min-h-screen"
      data-sidebar
    >
      <div className="text-center m-auto pt-10">
        <PrimaryText className="animate-gradient logo p-3">
          Vignette
        </PrimaryText>

        <p className="md:text-3xl text-xl font-semibold pt-4 dark:text-gray-200">
          Make your streams more virtual.
        </p>
        <div className="mt-12">
          <p className="text-subtle dark:text-subtle-dark font-medium tracking-tight">
            Free and Open Source
          </p>
          <a href="#download">
            <Button className="hover:scale-105">Download</Button>
          </a>
        </div>
      </div>

      <Link href="#about" passHref>
        <a className="bottom-0 mx-auto flex flex-col align-center items-center p-4 pb-6">
          <p className="text-subtle dark:text-subtle-dark text-lg tracking-tight">
            Learn more
          </p>
          <Icon
            icon="akar-icons:chevron-down"
            className="text-subtle dark:text-subtle-dark h-4 w-4"
          />
        </a>
      </Link>

      <BottomBar />
    </Layout>
  )
}

export default Home
