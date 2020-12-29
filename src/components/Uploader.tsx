import React,{useEffect,useRef} from "react";
import styled from 'styled-components';
import { Row, Col } from '../styles/layout/layout';
import { OptionButton } from '../styles/buttons';
import DatabaseCloud from '../images/database-cloud.png';
import FileIcon from '../images/file.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetStep } from '../redux/action';
import '../styles/scss/uploader.scss';
import '../styles/scss/shared/modal.scss';
import '../styles/scss/shared/responsive.scss';

interface Props {
  Active: boolean;
  Show: boolean;
}

interface UploadWrapperProps {
  Show: boolean
}
  
const UploadWrapper = styled.div<UploadWrapperProps>`
  ${({ Show }) => Show ? '':'display:none'}
`
export const Uploader: React.FC<Props> = (Props) => {
  const fileToUpload = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SetStep(0))
  })

  const HandleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      console.log(e.target.files[0])
    }
  }
  
  if (Props.Active) {
    return (
      <UploadWrapper Show={Props.Show} >
        <Col className="responsive-flexbox item-wrapper">
          <Row className="modal-theme">
            <div className="modal-item">
             First, click to Upload icon
            </div>
            <div className="modal-item">
              <form>
                <label htmlFor="styleupload" ><img src={FileIcon} alt="fileicon"/></label>
                <input type="file" name="filetoupload" accept="image/*,*.doc,text/plain " id="styleupload" ref={fileToUpload} onChange={HandleFileUpload}/>
              </form>
            </div>
          <div className="modal-item">
            Then select Encrypt or Decrypt operation
          </div>
          <Col className="modal-item modal-centered">
            <Link to="/encrypt"> <OptionButton type="button" customColor={"#38b13b"} hoverColor={"#38b13b"} borderColor={"#38b13b"}>Encrypt </OptionButton> </Link> 
            <Link to="/decrypt"><OptionButton type="button" customColor={"#e63a2a"} hoverColor={"#e63c3c"} borderColor={"#e63c3c"}>Decrypt </OptionButton></Link> 
          </Col>
          </Row>
          <div>
            <img src={DatabaseCloud} alt="icon" className="responsive-image" />
          </div>
        </Col>
      </UploadWrapper>
    )
  } else {
    return (
      <div>
        Module inactive
      </div>
    )
  }
}


