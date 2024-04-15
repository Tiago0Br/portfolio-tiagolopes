import { CopyButton } from '@/components/commons/CopyButton'
import { Contact, Home } from '@/types/Home'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import 'dotenv/config'
import { Toaster } from 'sonner'

interface ContactsProps {
    contacts: Contact[]
}

export default function Contacts({ contacts }: ContactsProps) {
    return (
        <>
            <Head>
                <title>Sobre mim | Tiago</title>
            </Head>
            <div className='mt-12 md:mt-24 space-y-16 px-6 md:px-32'>
                <Toaster richColors position='top-center' />
                <h1 className='text-5xl md:text-7xl font-bold text-center'>
                    Contatos
                </h1>
                <ul className='table mx-auto space-y-6 md:space-y-8'>
                    {contacts.map(({ name, link, isEmail }, index) => (
                        <li className='md:text-xl' key={name + index}>
                            <span className='font-bold'>
                                {name}
                            </span>
                            <div className='flex gap-1 md:gap-3 items-center'>
                                <Link
                                    href={isEmail ? `mailto:${link}` : link}
                                    className='text-sm md:text-lg text-slate-300 
                                    underline truncate'
                                    target='_blank'
                                >
                                    {link}
                                </Link>
                                <CopyButton textToCopy={link} />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

async function loadContacts() {
    const res = await fetch(process.env.DATA_URL!)
    const data = await res.json() as Home

    return data.contacts
}

export const getStaticProps: GetStaticProps<ContactsProps> = async () => {
    const contacts = await loadContacts()

    return {
        props: {
            contacts
        }
    }
}