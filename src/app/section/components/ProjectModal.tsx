'use client'

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function ProjectModal({ display, title, url, description }: { display: ReactNode, title: string, url: string, description: string }) {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <>
            <button onClick={open}>
                {display}
            </button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)} __demoMode>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/60 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="font-medium text-black text-base/7">
                                {title}
                            </DialogTitle>
                            <p className="mt-2 text-black text-sm/6">
                                {description}
                            </p>
                            <div className="mt-4">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={close}
                                >
                                    Go to {title}
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
