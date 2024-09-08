import './banner.scss'
import './blink.scss';
import TypingEffect from './TypingEffect'
import Button from '@mui/material/Button';
import TelegramIcon from '@mui/icons-material/Telegram';

const Banner = () => {
    return (
      <div className='banner'>
        <div className="content">
            <div className="left">
                <TypingEffect text="  Taksi haydovchilari uchun ajoyib yangilik !" speed={80}/>
                <div className="line" data-aos="fade-left" data-aos-duration="1000"/>
                <p data-aos="fade-up" data-aos-duration="3000">Endi siz yo'lovchilarni emas, balki yo'lovchilar sizni izlab kelishadi. Qanday deysizmi ? Ushbu havola orqali bizning <span>🤖 telegram botimizda</span> ro'yhatdan o'ting va biz sizga marshrutingizga mos yo'lovchilarni yetkazamiz...</p>
                <Button className='bbtn fa-beat-fade' href='https://t.me/architect_developer' data-aos="fade-up" data-aos-duration="3000" variant="contained" style={{backgroundColor: '#FFCC00', marginTop: '20px', color: 'black'}}><TelegramIcon/> Ro'yhatdan o'tish</Button>
            </div>
            <div className="right">
                <img src="bot.png" alt="" className='car' data-aos='zoom-in'/>
            </div>
        </div>
      </div>
    )
  
}

export default Banner;
