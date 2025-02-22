import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.png'
import instagram_icon from './instagram_icon.png'
import linkedin_icon from './linkedin_icon.png'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import light_icon from './light_icon.png'
import dark_icon from './dark_icon.png'
import logo_dark from './logo_dark.svg'
import sevicon_dark from './sevicon_dark.png'
import aiSound from './sci-fic.wav' 
import right_arrow from './right_arrow.png'
import message_send from './message_send.mp3'
import error_sound from './error_sound.mp3'


export const assets = {
  logo,
  logo_dark,
  logo_icon,
  facebook_icon,
  instagram_icon,
  linkedin_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
  light_icon,
  dark_icon,
  sevicon_dark,
  aiSound,
  right_arrow,
  message_send,
  error_sound
}

export const stepsData = [
  {
    title: 'Describe Your Vision',
    description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
    icon: step_icon_1,
  },
  {
    title: 'Watch the Magic',
    description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
    icon: step_icon_2,
  },
  {
    title: 'Download & Share',
    description: 'Instantly download your creation or share it with the world directly from our platform.',
    icon: step_icon_3,
  },
];

export const plans = [
  {
    id: 'Basic',
    price: 10,
    credits: 100,
    desc: 'Best for personal use.'
  },
  {
    id: 'Advanced',
    price: 50,
    credits: 500,
    desc: 'Best for business use.'
  },
  {
    id: 'Business',
    price: 250,
    credits: 5000,
    desc: 'Best for enterprise use.'
  },
]