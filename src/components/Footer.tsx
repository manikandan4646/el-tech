import mainLogo from '../assets/el-group-logo.svg'
import facebookIcon from '../assets/facebook.svg'
import twitterIcon from '../assets/twitter.svg'
import linkedinIcon from '../assets/linkedin.svg'

interface NavItem {
    id: string;
    label: string;
}

const navItems: NavItem[] = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "services",
        label: "Services"
    },
    {
        id: "about_us",
        label: "About Us"
    },
    {
        id: "projects",
        label: "Projects"
    }
]

const Footer = () => {

    const handleScrollTo = (id: string) => {
        console.log(id)
        const target = document.getElementById(id);
        if (target) {
            const headerOffset = window.innerWidth >= 768 ? 91 : 73; // Adjust based on screen size
            const targetPosition = target.offsetTop; // Element's position relative to the page
            const scrollToPosition = targetPosition - headerOffset;

            // Only scroll if the target position is not already at the desired position
            if (Math.abs(window.scrollY - scrollToPosition) > 1) {
                window.scrollTo({
                    top: scrollToPosition,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <footer className=' flex justify-center flex-col items-center mt-8 sm:mt-16 mb-5'>
            <div
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <img
                    src={mainLogo}
                    alt="EL-Tech Constructions Logo"
                    className="w-[150px] h-[32px] object-contain sm:w-[174px] sm:h-[38px]"
                />
                <div className="text-[11px] font-sans text-center font-semibold mt-[5px] sm:text-[13px] leading-[16px]">
                    EL-TECH CONSTRUCTIONS
                </div>
            </div>

            <div
                className='hidden sm:flex gap-10 mt-8'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
            >
                {
                    navItems.map((nav) => (
                        <button
                            key={nav.id}
                            onClick={() => handleScrollTo(nav.id)}
                            className={`cursor-pointer font-sans hover:text-primary`}
                        >
                            {nav.label}
                        </button>
                    ))
                }
            </div>

            <div
                className='flex gap-4 mt-6'
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
            >
                <span className="text-sm sm:text-base">Follow Us:</span>
                <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="cursor-pointer hover:opacity-50"
                />
                <img
                    src={twitterIcon}
                    alt="Twitter"
                    className="cursor-pointer hover:opacity-50"
                />
                <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="cursor-pointer hover:opacity-50"
                />
            </div>

            <div className='my-6 w-[92%] border border-transparent border-b-custom-gray'></div>

            <div className='font-sans text-[14px] sm:text-[16px]'>Copyright@2023 by El-Tech Constructions</div>
        </footer>
    )
}

export default Footer