import { useNavigate } from 'react-router-dom'
import Btn from 'UI/button/Btn'
import { ReactComponent as Back } from 'uploads/arrow.svg'
import { ReactComponent as Share } from 'uploads/share.svg'
import { ReactComponent as Like } from 'uploads/like.svg'
import './nav-attrarction.scss'

const NavAttraction = () => {
  const navigate = useNavigate()

  return (
    <div className="nav-attraction container">
      <Btn modifiers={['ellipse']} onClick={() => navigate(-1)}>
        <Back />
      </Btn>
      <div className="nav-attraction__interaction-btns">
        <Btn modifiers={['ellipse']}>
          <Share />
        </Btn>
        <Btn modifiers={['ellipse']}>
          <Like />
        </Btn>
      </div>
    </div>
  )
}

export default NavAttraction
