import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faCheck,faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const CircleButtons = () => {
  return (
    <div className='card-body'>
      <p>
        Use Font Awesome Icons (included with this theme package) along with the
        circle buttons as shown in the examples below!
      </p>
      <div className='mb-2'>
        <code>.btn-circle</code>
      </div>
      <a href='#' className='btn btn-primary btn-circle  m-1'>
        <FontAwesomeIcon
          icon={faFacebookF}
          size='lg'
          style={{ color: '#ffffff' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle  m-1'>
        <FontAwesomeIcon
          icon={faCheck}
          size='lg'
          style={{ color: '#ffffff' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle  m-1'>
        <FontAwesomeIcon
          icon={faCircleInfo}
          size='lg'
          style={{ color: '#ffffff' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle  m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#ffffff' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle  m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#ffffff' }}
        />
      </a>
      <div className='mt-4 mb-2'>
        <code>.btn-circle .btn-sm</code>
      </div>
      <a href='#' className='btn btn-danger btn-circle btn-sm m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle btn-sm m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle btn-sm m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle btn-sm m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle btn-sm m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>

      <div className='mt-4 mb-2'>
        <code>.btn-circle .btn-lg</code>
      </div>
      <a href='#' className='btn btn-danger btn-circle btn-lg m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle btn-lg m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle btn-lg m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <a href='#' className='btn btn-danger btn-circle btn-lg m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </a>
      <button href='#' className='btn btn-danger btn-circle btn-lg m-1'>
        <FontAwesomeIcon
          icon={faFacebook}
          size='lg'
          style={{ color: '#376cc8' }}
        />
      </button>
    </div>
  );
};

export default CircleButtons;
