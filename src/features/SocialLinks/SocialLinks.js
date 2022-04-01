import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './SocialLinks.scss'

function SocialLinks() {
  return (
    <div className='SocialLinks'>
      <a
        href='https://github.com/srjheam'
        target='_blank'
        rel='noreferrer noopener'
      >
        <FontAwesomeIcon icon={brands('github')} size='2xl' />
      </a>
    </div>
  );
}

export default SocialLinks;