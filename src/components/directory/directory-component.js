import React, {Component} from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directoty.style.scss';
import MENU_DATA from "./menu.data";
class Directory  extends Component{
    constructor(props){
        super(props);

       this.state = {
          sections: MENU_DATA
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ) )}
            </div>
        )
    }
}

export default Directory;