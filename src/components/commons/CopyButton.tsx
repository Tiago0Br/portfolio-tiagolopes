import { CopyIcon } from '../icons/CopyIcon'
import { toast } from 'sonner'

interface CopyButtonProps {
    textToCopy: string
}

export function CopyButton({ textToCopy }: CopyButtonProps) {
    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
    }

    return (
        <>
            <button
                className='inline-flex justify-center items-center'
                onClick={() => {
                    handleCopy()
                    toast.success('Contato copiado!')
                }}
            >
                <CopyIcon title='Clique aqui para copiar' className='fill-white' />
            </button>
        </>
    )
}