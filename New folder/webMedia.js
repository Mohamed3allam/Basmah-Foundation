import HeaderImg from './assets/imgs/header/Header1.svg'
import HeaderWithoutLogoImg from './assets/imgs/header/HeaderWithoutLogoImg.jpg'
import TextboxImg from './assets/imgs/header/TextboxImg.svg' 
import brushStroke from './assets/imgs/Copy_of_Brush_Stroke.svg'
import bareeq_m from './assets/imgs/mission/bareeq_m.jpg'
import elaf_m from './assets/imgs/mission/elaf_m.jpg'
import janan_m from './assets/imgs/mission/janan_m.jpg'
import kawen_m from './assets/imgs/mission/kawen_m.jpg'
import marsa_m from './assets/imgs/mission/marsa_m.jpg'
import bareeq_p from './assets/imgs/projects/Bareeq_p.png'
import elaf_p from './assets/imgs/projects/Elaf_p.png'
import janan_p from './assets/imgs/projects/Janan_p.png'
import kawen_p from './assets/imgs/projects/Kawen_p.png'
import marsah_p from './assets/imgs/projects/Marsah_p.png'

const imgs = {
  HeaderImg,
  HeaderWithoutLogoImg,
  TextboxImg,
  brushStroke,
  bareeq_m,
  elaf_m,
  janan_m,
  kawen_m,
  marsa_m,
  bareeq_p,
  elaf_p,
  janan_p,
  kawen_p,
  marsah_p,

}
const missionImgs = [
  {key:1, img: '/assets/imgs/mission/bareeq_m.jpg'},
  {key:2, img: '/assets/imgs/mission/elaf_m.jpg'},
  {key:3, img: '/assets/imgs/mission/janan_m.jpg'},
  {key:4, img: '/assets/imgs/mission/kawen_m.jpg'},
  {key:5, img: '/assets/imgs/mission/marsa_m.jpg'}
]

const projectsImgs = [
  {img: {bareeq_p}},    
  {img: {elaf_p}},
  {img: {janan_p}},
  {img: {kawen_p}},
  {img: {marsah_p}}
]

export default imgs;
export { imgs, missionImgs, projectsImgs };