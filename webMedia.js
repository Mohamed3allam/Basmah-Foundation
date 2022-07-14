import HeaderImg from './assets/imgs/header/Header1.png'
import HeaderWithoutLogoImg from './assets/imgs/header/HeaderWithoutLogoImg.jpg'
import TextboxImg from './assets/imgs/header/TextboxImg.svg' 
import brushStroke from './assets/imgs/Copy_of_Brush_Stroke.svg'
import bareeq_s from './assets/imgs/slideshow/bareeq_s.jpg'
import elaf_s from './assets/imgs/slideshow/elaf_s.jpg'
import janan_s from './assets/imgs/slideshow/janan_s.jpg'
import kawen_s from './assets/imgs/slideshow/kawen_s.jpg'
import marsa_s from './assets/imgs/slideshow/marsa_s.jpg'
import bareeq_p from './assets/imgs/projects/Bareeq_p.png'
import elaf_p from './assets/imgs/projects/Elaf_p.png'
import janan_p from './assets/imgs/projects/Janan_p.png'
import kawen_p from './assets/imgs/projects/Kawen_p.png'
import marsah_p from './assets/imgs/projects/Marsah_p.png'
import footer_logo from './assets/imgs/footer/footer_logo.png'

const imgs = {
  HeaderImg,
  HeaderWithoutLogoImg,
  TextboxImg,
  brushStroke,
  bareeq_s,
  elaf_s,
  janan_s,
  kawen_s,
  marsa_s,
  bareeq_p,
  elaf_p,
  janan_p,
  kawen_p,
  marsah_p,
  footer_logo,
}
const sliderImgs = [
  {key:1, img: '/assets/imgs/slideshow/bareeq_s.jpg'},
  {key:2, img: '/assets/imgs/slideshow/elaf_s.jpg'},
  {key:3, img: '/assets/imgs/slideshow/janan_s.jpg'},
  {key:4, img: '/assets/imgs/slideshow/kawen_s.jpg'},
  {key:5, img: '/assets/imgs/slideshow/marsa_s.jpg'}
]

const projectsImgs = [
  {img: {bareeq_p}},    
  {img: {elaf_p}},
  {img: {janan_p}},
  {img: {kawen_p}},
  {img: {marsah_p}}
]

export default imgs;
export { imgs, sliderImgs, projectsImgs };