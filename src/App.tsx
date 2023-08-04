import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setStatus } from "./redux/slices/files";

import { asyncLoop } from './api/fakeApi';

import UploadButton from "./styles/Blocks/UploadButton"
import Background from "./styles/Blocks/Background"
import AppWrapper from "./styles/Blocks/AppWrapper"
import Header from "./styles/Blocks/Head"
import Title from "./styles/Blocks/Title"
import Subtitle from "./styles/Blocks/Subtitle"

import Dropzone from "./components/Dropzone"
import Files from "./components/Files"


const App = () => {

  const dispatch = useDispatch();
  const files = useSelector((state: RootState) => state.files)

  const handleClick = () => {
    if (files.length > 0 && files.some(item => item.status === 'ready')) {
      asyncLoop(files, (status, index) => dispatch(setStatus({item: index, status: status})), 0)
    }
  }

  return (
    <Background>
      <AppWrapper>
        <Header>
          <Title>UPLOAD FILES</Title>
          <Subtitle>Upload documents with you share</Subtitle>
        </Header>
        <Dropzone />
        <Files />
        <UploadButton onClick={()=>handleClick()} style={{ fontWeight: '500' }}>Start Upload</UploadButton>
      </AppWrapper>
    </Background>
  )
}

export default App
