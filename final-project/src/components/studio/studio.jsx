import React from 'react'
import './studio.scss'
export class Studio extends React.Component {


    render() {

        return (
            <div className="studio">
                <img className="studio__img" src="https://static.wixstatic.com/media/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.jpg/v1/fill/w_1253,h_783,al_c,q_85/ff6bf6_c2d84b9ac6114ab7a852ba02cb5f7910.webp" alt="" />
                <div className="studio__content">
                    <div className="studio-header">
                        <h1 className="studio-header__title">THE STUDIO</h1>
                        <div className="studio-header__subt">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</div>
                    </div>
                    <div className="studio-info">
                        <div className="studio-info__title">ADDRESS</div>
                        <div className="studio-info__subt">
                            500 TERRY FRANCOIS ST.
                            SF, CA 94158
                        </div>
                    </div>
                    <div className="studio-info">
                        <div className="studio-info__title">HOURS</div>
                        <div className="studio-info__subt">
                            MONDAY - FRIDAY
                            6:30AM - 7:00PM
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}