import React from 'react'
import { Helmet } from 'react-helmet-async'
import featuredbg from '../../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../../hooks/useMenu'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory'
import Cover from '../Cover/Cover'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import { FaHotjar } from 'react-icons/fa'

const Menu = () => {


  const [menu] = useMenu();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(innerWidth < 768);


      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize)
      }

    }

  }, [])

  const dessert = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const offred = menu.filter(item => item.category === 'offered')


  return (
    <div>
      <Helmet>
        <title>Menu | Creatique Commerce</title>
      </Helmet>
      <h2 className="text-red-500 text-3xl font-semibold p-5 flex items-center mt-8">
        <FaHotjar className="text-black" />
        <span className="ml-2">Trending Menu</span>
      </h2>

      <MenuCategory items={offred}
      >

      </MenuCategory>
      <div className='items-center'>


        <Link to='/order'>
          <Button marginBottom="20px" marginLeft="12px" colorScheme='telegram'>Order Now</Button>
        </Link></div>
    </div>
  )
}

export default Menu