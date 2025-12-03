import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="sm:mt-20! py-5! sm:px-10! px-5!">
      <div className="screen-max-width">
        <div className="bg-neutral-700 my-5! h-px w-full" />

        <div className="flex gap-2 sm:gap-0 md:flex-row flex-col md:items-center justify-between">
          <p className="text-gray text-xs">Copyright @ 2025 Apple Inc. All rights reserved.</p>

          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-gray text-xs cursor-pointer">
                {link}
                {i !== footerLinks.length - 1 && <span className="mx-2!"> | </span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
