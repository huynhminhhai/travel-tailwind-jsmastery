import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type FooterColumnPropsType = {
  title: string
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnPropsType) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex flex-col w-full gap-14'>
        <div className='flex flex-col items-start justify-center gap-[100px] md:flex-row'>
          <Link href={'/'} className='mb-10'>
            <Image src='/hilink-logo.svg' alt='hilink logo' width={74} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((item) => (
              <FooterColumn key={item.title} title={item.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {item.links.map((link) => (
                    <Link href={'/'} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                    <p className='whitespace-nowrap'>{link.label}:</p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link) => (
                    <Link href='/' key={link}>
                      <Image src={link} alt='logo' width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='border bg-gray-20'></div>
        <p className='regular-14 w-full text-center'>2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
