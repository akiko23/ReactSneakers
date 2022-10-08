import s from '../../../../App.css'
import avatar from '../avatar.jpg'
const ProfileBlock = () => {
    return (
    <main role="main">
        <div className="jumbotron align-middle mx-0">
          <div className="mx-auto justify-content-center align-items-center">
            <h1>Ваш профиль</h1>
            <div className='mt-5'>
                <img className='d-block mb-2' src={avatar} width="100" height="100"  alt='df'/>
                <a href='my_app/src/shop_components/img/ProfileBlock/profile_block#' className="btn btn-light change_avatar">Изменить</a>
            </div>
            <div className='mb-3 mt-3'><strong>Имя: </strong>nickname</div>
            <div>
                <p>
                    <strong>Описание: </strong>This example is a quick exercise to illustrate how the navbar and its contents work. Some navbars extend the width of the viewport, others are confined within a <code>.container</code>. For positioning of navbars, checkout the
                </p>
                <a className="btn btn-primary" href="./profile_block" role="button">Редактировать профиль</a>
            </div>
        </div>
        </div>
    </main>
    )
}

export default ProfileBlock
