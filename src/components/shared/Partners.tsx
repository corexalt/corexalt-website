import Image from "next/image"

const Partners = () => {
    return (
        
        
        <main className="relative min-h-[300px] flex flex-col justify-start bg-gradient-to-r from-yellow-300 to-white overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-center align-top text-blue-950 text-4xl font-semibold font-['Poppins'] py-12">Our Partners</h2>
          <div className="text-center">
            {/* Logo Carousel animation */}
            <div x-data="{}" x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })" className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul x-ref="logos" className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                      <Image src="/partner/amazon.svg" width={40}
                        height={40} alt="Amazon" />
                    </li>
                    <li>
                      <Image src="/partner/apple.svg" width={40}
                        height={40} alt="Apple" />
                    </li>
                    <li>
                      <Image src="/partner/asus.svg" width={40}
                        height={40} alt="Asus" />
                    </li>
                    <li>
                      <Image src="/partner/dribble.svg" width={40}
                        height={40} alt="Dribble" />
                    </li>
                    <li>
                      <Image src="/partner/github.svg" width={40}
                        height={40} alt="Github" />
                    </li>
                    <li>
                      <Image src="/partner/ig.svg" width={40}
                        height={40} alt="Instagram" />
                    </li>
                    <li>
                      <Image src="/partner/react.svg" width={40}
                        height={40} alt="React" />
                    </li>
                    <li>
                      <Image src="/partner/vscode.svg" width={40}
                        height={40} alt="VS Code" />
                    </li>
                  </ul>
                </div>
                {/* End: Logo Carousel animation */}              
            </div>
            </div>
        </main>
       
    )
}

export default Partners